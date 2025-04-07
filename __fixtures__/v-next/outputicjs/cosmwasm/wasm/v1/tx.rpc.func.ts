import { buildTx } from "../../../helper-func-types";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./tx";
export const storeCode = buildTx<MsgStoreCode>({
  msg: MsgStoreCode
});
export const instantiateContract = buildTx<MsgInstantiateContract>({
  msg: MsgInstantiateContract
});
export const executeContract = buildTx<MsgExecuteContract>({
  msg: MsgExecuteContract
});
export const migrateContract = buildTx<MsgMigrateContract>({
  msg: MsgMigrateContract
});
export const updateAdmin = buildTx<MsgUpdateAdmin>({
  msg: MsgUpdateAdmin
});
export const clearAdmin = buildTx<MsgClearAdmin>({
  msg: MsgClearAdmin
});