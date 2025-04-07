import { buildTx } from "../../../../helper-func-types";
import { MsgTransfer } from "./tx";
export const transfer = buildTx<MsgTransfer>({
  msg: MsgTransfer
});