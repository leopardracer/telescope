import { buildUseMutation } from "../../../react-query";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./tx";
import { storeCode, instantiateContract, executeContract, migrateContract, updateAdmin, clearAdmin } from "./tx.rpc.func";
export const useStoreCode = buildUseMutation<MsgStoreCode, Error>({
  builderMutationFn: storeCode
});
export const useInstantiateContract = buildUseMutation<MsgInstantiateContract, Error>({
  builderMutationFn: instantiateContract
});
export const useExecuteContract = buildUseMutation<MsgExecuteContract, Error>({
  builderMutationFn: executeContract
});
export const useMigrateContract = buildUseMutation<MsgMigrateContract, Error>({
  builderMutationFn: migrateContract
});
export const useUpdateAdmin = buildUseMutation<MsgUpdateAdmin, Error>({
  builderMutationFn: updateAdmin
});
export const useClearAdmin = buildUseMutation<MsgClearAdmin, Error>({
  builderMutationFn: clearAdmin
});