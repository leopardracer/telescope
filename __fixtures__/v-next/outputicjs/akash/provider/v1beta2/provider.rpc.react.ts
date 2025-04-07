import { buildUseMutation } from "../../../react-query";
import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
import { createProvider, updateProvider, deleteProvider } from "./provider.rpc.func";
export const useCreateProvider = buildUseMutation<MsgCreateProvider, Error>({
  builderMutationFn: createProvider
});
export const useUpdateProvider = buildUseMutation<MsgUpdateProvider, Error>({
  builderMutationFn: updateProvider
});
export const useDeleteProvider = buildUseMutation<MsgDeleteProvider, Error>({
  builderMutationFn: deleteProvider
});