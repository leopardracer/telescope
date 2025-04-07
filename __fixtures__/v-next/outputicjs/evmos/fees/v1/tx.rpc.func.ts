import { buildTx } from "../../../helper-func-types";
import { MsgRegisterDevFeeInfo, MsgCancelDevFeeInfo, MsgUpdateDevFeeInfo } from "./tx";
export const registerDevFeeInfo = buildTx<MsgRegisterDevFeeInfo>({
  msg: MsgRegisterDevFeeInfo
});
export const cancelDevFeeInfo = buildTx<MsgCancelDevFeeInfo>({
  msg: MsgCancelDevFeeInfo
});
export const updateDevFeeInfo = buildTx<MsgUpdateDevFeeInfo>({
  msg: MsgUpdateDevFeeInfo
});