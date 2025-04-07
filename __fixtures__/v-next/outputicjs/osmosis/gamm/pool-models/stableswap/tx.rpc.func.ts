import { buildTx } from "../../../../helper-func-types";
import { MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
export const createStableswapPool = buildTx<MsgCreateStableswapPool>({
  msg: MsgCreateStableswapPool
});
export const stableSwapAdjustScalingFactors = buildTx<MsgStableSwapAdjustScalingFactors>({
  msg: MsgStableSwapAdjustScalingFactors
});