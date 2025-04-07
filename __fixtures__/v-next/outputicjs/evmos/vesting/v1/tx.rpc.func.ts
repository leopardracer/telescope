import { buildTx } from "../../../helper-func-types";
import { MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
export const createClawbackVestingAccount = buildTx<MsgCreateClawbackVestingAccount>({
  msg: MsgCreateClawbackVestingAccount
});
export const clawback = buildTx<MsgClawback>({
  msg: MsgClawback
});