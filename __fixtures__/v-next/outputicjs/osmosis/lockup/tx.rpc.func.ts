import { buildTx } from "../../helper-func-types";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock } from "./tx";
export const lockTokens = buildTx<MsgLockTokens>({
  msg: MsgLockTokens
});
export const beginUnlockingAll = buildTx<MsgBeginUnlockingAll>({
  msg: MsgBeginUnlockingAll
});
export const beginUnlocking = buildTx<MsgBeginUnlocking>({
  msg: MsgBeginUnlocking
});
export const extendLockup = buildTx<MsgExtendLockup>({
  msg: MsgExtendLockup
});
export const forceUnlock = buildTx<MsgForceUnlock>({
  msg: MsgForceUnlock
});