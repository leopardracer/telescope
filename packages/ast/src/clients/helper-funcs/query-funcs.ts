import * as ast from "@babel/types";
import { ProtoServiceMethod } from "@cosmology/types";
import { GenericParseContext } from "../../encoding";

/**
 *
 * @param context
 * @param service
 * @param methodKey e.g. "balance"
 * @param helperCreatorName e.g. "createGetBalance"
 * @returns
 */
export function createQueryHelperCreator(
    context: GenericParseContext,
    service: ProtoServiceMethod,
    svcKey: string,
    methodKey?: string,
    helperCreatorName?: string
) {
    const pkgImportName = context.ref.proto.package + "." + svcKey;

    context.addUtil("EndpointOrRpc");
    context.addUtil("buildQuery");

    const useGlobalDecoderRegistry =
        context.pluginValue("interfaces.enabled") &&
        context.pluginValue("interfaces.useGlobalDecoderRegistry") &&
        context.pluginValue("helperFunctions.enabled") &&
        context.pluginValue("helperFunctions.useGlobalDecoderRegistry");

    const callExpression = ast.callExpression(ast.identifier("buildQuery"), [
        ast.objectExpression(
            [
                ast.objectProperty(
                    ast.identifier("encode"),
                    ast.memberExpression(
                        ast.identifier(service.requestType),
                        ast.identifier("encode")
                    )
                ),
                ast.objectProperty(
                    ast.identifier("decode"),
                    ast.memberExpression(
                        ast.identifier(service.responseType),
                        ast.identifier("decode")
                    )
                ),
                ast.objectProperty(
                    ast.identifier("service"),
                    ast.stringLiteral(pkgImportName)
                ),
                ast.objectProperty(
                    ast.identifier("method"),
                    ast.stringLiteral(methodKey)
                ),
                useGlobalDecoderRegistry &&
                ast.objectProperty(
                    ast.identifier("deps"),
                    ast.arrayExpression([
                        ast.identifier(service.requestType),
                        ast.identifier(service.responseType),
                    ])
                ),
            ].filter(Boolean)
        ),
    ]);
    callExpression.typeParameters = ast.tsTypeParameterInstantiation([
        ast.tsTypeReference(ast.identifier(service.requestType)),
        ast.tsTypeReference(ast.identifier(service.responseType)),
    ]);

    return ast.exportNamedDeclaration(
        ast.variableDeclaration("const", [
            ast.variableDeclarator(
                ast.identifier(helperCreatorName),
                callExpression
            ),
        ])
    );
}

/**
 *
 * @param context
 * @param service
 * @param methodKey e.g. "balance"
 * @param helperCreatorName e.g. "createGetBalance"
 * @param hookName e.g. "useGetBalance"
 * @returns
 */
export function createQueryHooks(
    context: GenericParseContext,
    service: ProtoServiceMethod,
    methodKey?: string,
    helperCreatorName?: string,
    hookName?: string
) {
    context.addUtil("buildUseQuery");
    const callExpression = ast.callExpression(ast.identifier("buildUseQuery"), [
        ast.objectExpression([
            ast.objectProperty(
                ast.identifier("builderQueryFn"),
                ast.identifier(helperCreatorName)
            ),
            ast.objectProperty(
                ast.identifier("queryKeyPrefix"),
                ast.stringLiteral(`${methodKey}Query`)
            ),
        ]),
    ]);
    callExpression.typeParameters = ast.tsTypeParameterInstantiation([
        ast.tsTypeReference(ast.identifier(service.requestType)),
        ast.tsTypeReference(ast.identifier(service.responseType)),
    ]);
    return ast.exportNamedDeclaration(
        ast.variableDeclaration("const", [
            ast.variableDeclarator(ast.identifier(hookName), callExpression),
        ])
    );
}


/**
 *
 * @param context
 * @param service
 * @param methodKey e.g. "balance"
 * @param helperCreatorName e.g. "createGetBalance"
 * @param hookName e.g. "useGetBalance"
 * @returns
 */
export function createVueQueryHooks(
    context: GenericParseContext,
    service: ProtoServiceMethod,
    methodKey?: string,
    helperCreatorName?: string,
    hookName?: string,
) {
    context.addUtil("buildUseVueQuery");
    const callExpression = ast.callExpression(ast.identifier("buildUseVueQuery"), [
        ast.objectExpression([
            ast.objectProperty(
                ast.identifier("builderQueryFn"),
                ast.identifier(helperCreatorName)
            ),
            ast.objectProperty(
                ast.identifier("queryKeyPrefix"),
                ast.stringLiteral(`${methodKey}Query`)
            ),
        ]),
    ]);
    callExpression.typeParameters = ast.tsTypeParameterInstantiation([
        ast.tsTypeReference(ast.identifier(service.requestType)),
        ast.tsTypeReference(ast.identifier(service.responseType)),
    ]);

    return ast.exportNamedDeclaration(
        ast.variableDeclaration("const", [
            ast.variableDeclarator(ast.identifier(hookName), callExpression),
        ])
    );
}