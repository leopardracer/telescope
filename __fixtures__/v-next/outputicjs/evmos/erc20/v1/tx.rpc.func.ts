import { buildTx } from "../../../helper-func-types";
import { MsgConvertCoin, MsgConvertERC20 } from "./tx";
export const convertCoin = buildTx<MsgConvertCoin>({
  msg: MsgConvertCoin
});
export const convertERC20 = buildTx<MsgConvertERC20>({
  msg: MsgConvertERC20
});