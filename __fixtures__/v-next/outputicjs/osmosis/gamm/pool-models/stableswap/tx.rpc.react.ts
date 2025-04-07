import { buildUseMutation } from "../../../../react-query";
import { MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
import { createStableswapPool, stableSwapAdjustScalingFactors } from "./tx.rpc.func";
export const useCreateStableswapPool = buildUseMutation<MsgCreateStableswapPool, Error>({
  builderMutationFn: createStableswapPool
});
export const useStableSwapAdjustScalingFactors = buildUseMutation<MsgStableSwapAdjustScalingFactors, Error>({
  builderMutationFn: stableSwapAdjustScalingFactors
});