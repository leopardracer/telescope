import { buildTx } from "../../../helper-func-types";
import { MsgVerifyInvariant } from "./tx";
export const verifyInvariant = buildTx<MsgVerifyInvariant>({
  msg: MsgVerifyInvariant
});