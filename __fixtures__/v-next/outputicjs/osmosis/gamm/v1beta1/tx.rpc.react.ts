import { buildUseMutation } from "../../../react-query";
import { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapExternAmountOut, MsgExitSwapShareAmountIn } from "./tx";
import { joinPool, exitPool, swapExactAmountIn, swapExactAmountOut, joinSwapExternAmountIn, joinSwapShareAmountOut, exitSwapExternAmountOut, exitSwapShareAmountIn } from "./tx.rpc.func";
export const useJoinPool = buildUseMutation<MsgJoinPool, Error>({
  builderMutationFn: joinPool
});
export const useExitPool = buildUseMutation<MsgExitPool, Error>({
  builderMutationFn: exitPool
});
export const useSwapExactAmountIn = buildUseMutation<MsgSwapExactAmountIn, Error>({
  builderMutationFn: swapExactAmountIn
});
export const useSwapExactAmountOut = buildUseMutation<MsgSwapExactAmountOut, Error>({
  builderMutationFn: swapExactAmountOut
});
export const useJoinSwapExternAmountIn = buildUseMutation<MsgJoinSwapExternAmountIn, Error>({
  builderMutationFn: joinSwapExternAmountIn
});
export const useJoinSwapShareAmountOut = buildUseMutation<MsgJoinSwapShareAmountOut, Error>({
  builderMutationFn: joinSwapShareAmountOut
});
export const useExitSwapExternAmountOut = buildUseMutation<MsgExitSwapExternAmountOut, Error>({
  builderMutationFn: exitSwapExternAmountOut
});
export const useExitSwapShareAmountIn = buildUseMutation<MsgExitSwapShareAmountIn, Error>({
  builderMutationFn: exitSwapShareAmountIn
});