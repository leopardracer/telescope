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
export function createMsgHelperCreator(
    context: GenericParseContext,
    service: ProtoServiceMethod,
    helperCreatorName?: string
) {
    context.addUtil("buildTx");

    const callExpression = ast.callExpression(ast.identifier("buildTx"), [
        ast.objectExpression(
            [
              ast.objectProperty(
                ast.identifier("msg"),
                ast.identifier(service.requestType)
              ),
            ].filter(Boolean)
        ),
    ]);
    callExpression.typeParameters = ast.tsTypeParameterInstantiation([
        ast.tsTypeReference(ast.identifier(service.requestType)),
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
export function createMsgHooks(
    context: GenericParseContext,
    service: ProtoServiceMethod,
    helperCreatorName?: string,
    hookName?: string
) {
    context.addUtil("buildUseMutation");

    const callExpression = ast.callExpression(
        ast.identifier("buildUseMutation"),
        [
            ast.objectExpression([
                ast.objectProperty(
                    ast.identifier("builderMutationFn"),
                    ast.identifier(helperCreatorName)
                ),
            ]),
        ]
    );
    callExpression.typeParameters = ast.tsTypeParameterInstantiation([
        ast.tsTypeReference(ast.identifier(service.requestType)),
        ast.tsTypeReference(ast.identifier(`Error`)),
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
export function createVueMsgHooks(
    context: GenericParseContext,
    service: ProtoServiceMethod,
    helperCreatorName?: string,
    hookName?: string
) {
    context.addUtil("buildUseVueMutation");

    const callExpression = ast.callExpression(
        ast.identifier("buildUseVueMutation"),
        [
            ast.objectExpression([
                ast.objectProperty(
                    ast.identifier("builderMutationFn"),
                    ast.identifier(helperCreatorName)
                ),
            ]),
        ]
    );
    callExpression.typeParameters = ast.tsTypeParameterInstantiation([
        ast.tsTypeReference(ast.identifier(service.requestType)),
        ast.tsTypeReference(ast.identifier(`Error`)),
    ]);
    return ast.exportNamedDeclaration(
        ast.variableDeclaration("const", [
            ast.variableDeclarator(ast.identifier(hookName), callExpression),
        ])
    );
}