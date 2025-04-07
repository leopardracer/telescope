import { buildTx } from "../../helper-func-types";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgUnPoolWhitelistedPool } from "./tx";
export const superfluidDelegate = buildTx<MsgSuperfluidDelegate>({
  msg: MsgSuperfluidDelegate
});
export const superfluidUndelegate = buildTx<MsgSuperfluidUndelegate>({
  msg: MsgSuperfluidUndelegate
});
export const superfluidUnbondLock = buildTx<MsgSuperfluidUnbondLock>({
  msg: MsgSuperfluidUnbondLock
});
export const lockAndSuperfluidDelegate = buildTx<MsgLockAndSuperfluidDelegate>({
  msg: MsgLockAndSuperfluidDelegate
});
export const unPoolWhitelistedPool = buildTx<MsgUnPoolWhitelistedPool>({
  msg: MsgUnPoolWhitelistedPool
});