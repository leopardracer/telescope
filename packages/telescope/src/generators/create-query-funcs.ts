import { buildAllImports, getDepsFromQueries } from "../imports";
import { Bundler } from "../bundler";
import { createQueryHelperCreator, createQueryHooks, createVueQueryHooks } from "@cosmology/ast";
import { getNestedProto, isRefIncluded } from "@cosmology/proto-parser";
import { parse } from "../parse";
import { TelescopeBuilder } from "../builder";
import { ProtoRoot, ProtoService, QUERY_SVC_TYPES } from "@cosmology/types";
import {
  camel,
  getHelperFuncName,
  getQueryMethodNames,
  swapKeyValue,
} from "@cosmology/utils";
import { BundlerFile } from "../types";

export const plugin = (builder: TelescopeBuilder, bundler: Bundler) => {
  const clients = bundler.contexts
    .map((c) => {
      const enabled = c.proto.pluginValue("helperFunctions.enabled");
      if (!enabled) return;

      const serviceTypes = c.proto.pluginValue(
        "helperFunctions.include.serviceTypes"
      );

      if (
        serviceTypes &&
        !serviceTypes.includes("Query") &&
        !serviceTypes.includes("All")
      ) {
        return;
      }

      if (c.proto.isExcluded()) return;

      const ctx = bundler.getFreshContext(c);

      // get mutations, services
      parse(ctx);

      const proto = getNestedProto(c.ref.traversed as ProtoRoot);

      //// Anything except Msg Service OK...
      if (proto?.Msg) {
        return;
      }

      let getImportsFrom;

      if (proto.Query) {
        getImportsFrom = ctx.queries;
      } else {
        getImportsFrom = ctx.services;
      }
      const localname = bundler.getLocalFilename(c.ref, `rpc.func`);
      const localnameReact = bundler.getLocalFilename(c.ref, `rpc.react`);
      const localnameVue = bundler.getLocalFilename(c.ref, `rpc.vue`);
      const filename = bundler.getFilename(localname);
      const filenameReact = bundler.getFilename(localnameReact);
      const filenameVue = bundler.getFilename(localnameVue);

      const bundlerFile: BundlerFile = {
        proto: c.ref.filename,
        package: c.ref.proto.package,
        localname,
        filename,
      };

      const asts = [];
      const reactAsts = [];
      const vueAsts = [];
      const helperCreatorNameList = [];

      QUERY_SVC_TYPES.forEach((svcKey) => {
        if (proto[svcKey]) {
          const svc: ProtoService = proto[svcKey];
          const patterns = c.proto.pluginValue(
            "helperFunctions.include.patterns"
          );
          const nameMappers = c.proto.pluginValue(
            "helperFunctions.nameMappers"
          );

          const methodKeys = getQueryMethodNames(
            bundlerFile.package,
            Object.keys(proto[svcKey].methods ?? {}),
            patterns || ["**"],
            String
          );

          // see if the function is excluded.
          if (!methodKeys || !methodKeys.length) {
            return;
          }

          // for each method key, create creators, hooks.
          methodKeys.forEach((methodKey) => {
            // get helperCreatorName
            // get hookName
            const { creator: helperCreatorName, hook: hookName } =
              getHelperFuncName(
                bundlerFile.package,
                methodKey,
                [nameMappers?.Query, nameMappers?.All],
                "get"
              );
            helperCreatorNameList.push(helperCreatorName);
            // gen helper funcs
            asts.push(
              createQueryHelperCreator(
                ctx.generic,
                svc.methods[methodKey],
                svc.name,
                methodKey,
                helperCreatorName
              )
            );

            const genCustomHooksReact = c.proto.pluginValue(
              "helperFunctions.hooks.react"
            );

            const genCustomHooksVue = c.proto.pluginValue(
              "helperFunctions.hooks.vue"
            );

            if (genCustomHooksReact) {
              // gen custom react hooks
              reactAsts.push(
                createQueryHooks(
                  ctx.generic,
                  svc.methods[methodKey],
                  methodKey,
                  helperCreatorName,
                  hookName
                )
              );
            }

            if (genCustomHooksVue) {
              // gen custom vue hooks
              vueAsts.push(
                createVueQueryHooks(
                  ctx.generic,
                  svc.methods[methodKey],
                  methodKey,
                  helperCreatorName,
                  hookName
                )
              );
            }
          });
        }
      });

      if (!asts.length) {
        return;
      }

      const serviceImports = getDepsFromQueries(getImportsFrom, localname);
      const serviceImportsReact = getDepsFromQueries(getImportsFrom, localnameReact);
      const serviceImportsVue = getDepsFromQueries(getImportsFrom, localnameVue);

      // add imports from func file like query.rpc.func.ts without the .ts extension
      const funcFileName = "./".concat(localname.substring(localname.lastIndexOf("/") + 1).replace(/\.ts$/, ""));
      serviceImportsReact[funcFileName] = helperCreatorNameList;
      serviceImportsVue[funcFileName] = helperCreatorNameList;

      // TODO we do NOT need all imports...
      const imports = buildAllImports(ctx, serviceImports, localname);
      const importsReact = buildAllImports(ctx, serviceImportsReact, localnameReact);
      const importsVue = buildAllImports(ctx, serviceImportsVue, localnameReact);

      const prog = [].concat(imports).concat(ctx.body).concat(asts);
      const progReact = [].concat(importsReact).concat(reactAsts);
      const progVue = [].concat(importsVue).concat(vueAsts);

      bundler.writeAst(prog, filename);
      if(reactAsts.length) {
        bundler.writeAst(progReact, filenameReact);
      }
      if(vueAsts.length) {
        bundler.writeAst(progVue, filenameVue);
      }
      bundler.addToBundle(c, localname);

      return bundlerFile;
    })
    .filter(Boolean);
};
