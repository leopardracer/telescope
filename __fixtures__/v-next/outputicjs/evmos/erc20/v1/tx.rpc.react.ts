import { buildUseMutation } from "../../../react-query";
import { MsgConvertCoin, MsgConvertERC20 } from "./tx";
import { convertCoin, convertERC20 } from "./tx.rpc.func";
export const useConvertCoin = buildUseMutation<MsgConvertCoin, Error>({
  builderMutationFn: convertCoin
});
export const useConvertERC20 = buildUseMutation<MsgConvertERC20, Error>({
  builderMutationFn: convertERC20
});