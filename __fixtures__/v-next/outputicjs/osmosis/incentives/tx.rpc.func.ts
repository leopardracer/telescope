import { buildTx } from "../../helper-func-types";
import { MsgCreateGauge, MsgAddToGauge } from "./tx";
export const createGauge = buildTx<MsgCreateGauge>({
  msg: MsgCreateGauge
});
export const addToGauge = buildTx<MsgAddToGauge>({
  msg: MsgAddToGauge
});