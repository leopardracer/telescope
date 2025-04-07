import { buildTx } from "../../../helper-func-types";
import { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapExternAmountOut, MsgExitSwapShareAmountIn } from "./tx";
export const joinPool = buildTx<MsgJoinPool>({
  msg: MsgJoinPool
});
export const exitPool = buildTx<MsgExitPool>({
  msg: MsgExitPool
});
export const swapExactAmountIn = buildTx<MsgSwapExactAmountIn>({
  msg: MsgSwapExactAmountIn
});
export const swapExactAmountOut = buildTx<MsgSwapExactAmountOut>({
  msg: MsgSwapExactAmountOut
});
export const joinSwapExternAmountIn = buildTx<MsgJoinSwapExternAmountIn>({
  msg: MsgJoinSwapExternAmountIn
});
export const joinSwapShareAmountOut = buildTx<MsgJoinSwapShareAmountOut>({
  msg: MsgJoinSwapShareAmountOut
});
export const exitSwapExternAmountOut = buildTx<MsgExitSwapExternAmountOut>({
  msg: MsgExitSwapExternAmountOut
});
export const exitSwapShareAmountIn = buildTx<MsgExitSwapShareAmountIn>({
  msg: MsgExitSwapShareAmountIn
});