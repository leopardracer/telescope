import { buildUseMutation } from "../../../../react-query";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
import { createClient, updateClient, upgradeClient, submitMisbehaviour } from "./tx.rpc.func";
export const useCreateClient = buildUseMutation<MsgCreateClient, Error>({
  builderMutationFn: createClient
});
export const useUpdateClient = buildUseMutation<MsgUpdateClient, Error>({
  builderMutationFn: updateClient
});
export const useUpgradeClient = buildUseMutation<MsgUpgradeClient, Error>({
  builderMutationFn: upgradeClient
});
export const useSubmitMisbehaviour = buildUseMutation<MsgSubmitMisbehaviour, Error>({
  builderMutationFn: submitMisbehaviour
});