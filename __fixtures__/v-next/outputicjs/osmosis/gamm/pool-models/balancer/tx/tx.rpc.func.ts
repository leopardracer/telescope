import { buildTx } from "../../../../../helper-func-types";
import { MsgCreateBalancerPool } from "./tx";
export const createBalancerPool = buildTx<MsgCreateBalancerPool>({
  msg: MsgCreateBalancerPool
});