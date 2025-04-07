import { buildTx } from "../../../helper-func-types";
import { MsgSend, MsgMultiSend } from "./tx";
export const send = buildTx<MsgSend>({
  msg: MsgSend
});
export const multiSend = buildTx<MsgMultiSend>({
  msg: MsgMultiSend
});