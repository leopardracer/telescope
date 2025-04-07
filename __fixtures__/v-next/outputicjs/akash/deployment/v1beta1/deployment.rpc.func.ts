import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./group";
import { buildTx } from "../../../helper-func-types";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deployment";
export const createDeployment = buildTx<MsgCreateDeployment>({
  msg: MsgCreateDeployment
});
export const depositDeployment = buildTx<MsgDepositDeployment>({
  msg: MsgDepositDeployment
});
export const updateDeployment = buildTx<MsgUpdateDeployment>({
  msg: MsgUpdateDeployment
});
export const closeDeployment = buildTx<MsgCloseDeployment>({
  msg: MsgCloseDeployment
});
export const closeGroup = buildTx<MsgCloseGroup>({
  msg: MsgCloseGroup
});
export const pauseGroup = buildTx<MsgPauseGroup>({
  msg: MsgPauseGroup
});
export const startGroup = buildTx<MsgStartGroup>({
  msg: MsgStartGroup
});