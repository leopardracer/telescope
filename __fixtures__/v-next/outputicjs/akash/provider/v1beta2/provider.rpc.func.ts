import { buildTx } from "../../../helper-func-types";
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export const createProvider = buildTx<MsgCreateProvider>({
  msg: MsgCreateProvider
});
export const updateProvider = buildTx<MsgUpdateProvider>({
  msg: MsgUpdateProvider
});
export const deleteProvider = buildTx<MsgDeleteProvider>({
  msg: MsgDeleteProvider
});