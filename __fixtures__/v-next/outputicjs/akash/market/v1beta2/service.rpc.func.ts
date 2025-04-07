import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
import { buildTx } from "../../../helper-func-types";
export const createBid = buildTx<MsgCreateBid>({
  msg: MsgCreateBid
});
export const closeBid = buildTx<MsgCloseBid>({
  msg: MsgCloseBid
});
export const withdrawLease = buildTx<MsgWithdrawLease>({
  msg: MsgWithdrawLease
});
export const createLease = buildTx<MsgCreateLease>({
  msg: MsgCreateLease
});
export const closeLease = buildTx<MsgCloseLease>({
  msg: MsgCloseLease
});