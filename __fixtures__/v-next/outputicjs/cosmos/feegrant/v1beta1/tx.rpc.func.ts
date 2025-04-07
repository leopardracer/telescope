import { buildTx } from "../../../helper-func-types";
import { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
export const grantAllowance = buildTx<MsgGrantAllowance>({
  msg: MsgGrantAllowance
});
export const revokeAllowance = buildTx<MsgRevokeAllowance>({
  msg: MsgRevokeAllowance
});