import { buildUseMutation } from "../../../react-query";
import { MsgRegisterDevFeeInfo, MsgCancelDevFeeInfo, MsgUpdateDevFeeInfo } from "./tx";
import { registerDevFeeInfo, cancelDevFeeInfo, updateDevFeeInfo } from "./tx.rpc.func";
export const useRegisterDevFeeInfo = buildUseMutation<MsgRegisterDevFeeInfo, Error>({
  builderMutationFn: registerDevFeeInfo
});
export const useCancelDevFeeInfo = buildUseMutation<MsgCancelDevFeeInfo, Error>({
  builderMutationFn: cancelDevFeeInfo
});
export const useUpdateDevFeeInfo = buildUseMutation<MsgUpdateDevFeeInfo, Error>({
  builderMutationFn: updateDevFeeInfo
});