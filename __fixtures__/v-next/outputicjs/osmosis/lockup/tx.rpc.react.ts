import { buildUseMutation } from "../../react-query";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock } from "./tx";
import { lockTokens, beginUnlockingAll, beginUnlocking, extendLockup, forceUnlock } from "./tx.rpc.func";
export const useLockTokens = buildUseMutation<MsgLockTokens, Error>({
  builderMutationFn: lockTokens
});
export const useBeginUnlockingAll = buildUseMutation<MsgBeginUnlockingAll, Error>({
  builderMutationFn: beginUnlockingAll
});
export const useBeginUnlocking = buildUseMutation<MsgBeginUnlocking, Error>({
  builderMutationFn: beginUnlocking
});
export const useExtendLockup = buildUseMutation<MsgExtendLockup, Error>({
  builderMutationFn: extendLockup
});
export const useForceUnlock = buildUseMutation<MsgForceUnlock, Error>({
  builderMutationFn: forceUnlock
});