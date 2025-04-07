import { buildTx } from "../../../helper-func-types";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate } from "./tx";
export const createValidator = buildTx<MsgCreateValidator>({
  msg: MsgCreateValidator
});
export const editValidator = buildTx<MsgEditValidator>({
  msg: MsgEditValidator
});
export const delegate = buildTx<MsgDelegate>({
  msg: MsgDelegate
});
export const beginRedelegate = buildTx<MsgBeginRedelegate>({
  msg: MsgBeginRedelegate
});
export const undelegate = buildTx<MsgUndelegate>({
  msg: MsgUndelegate
});