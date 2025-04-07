import { buildTx } from "../../../../helper-func-types";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
export const connectionOpenInit = buildTx<MsgConnectionOpenInit>({
  msg: MsgConnectionOpenInit
});
export const connectionOpenTry = buildTx<MsgConnectionOpenTry>({
  msg: MsgConnectionOpenTry
});
export const connectionOpenAck = buildTx<MsgConnectionOpenAck>({
  msg: MsgConnectionOpenAck
});
export const connectionOpenConfirm = buildTx<MsgConnectionOpenConfirm>({
  msg: MsgConnectionOpenConfirm
});