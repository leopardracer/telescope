import { buildTx } from "../../../helper-func-types";
import { MsgUnjail } from "./tx";
export const unjail = buildTx<MsgUnjail>({
  msg: MsgUnjail
});