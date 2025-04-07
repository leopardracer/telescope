import { buildUseMutation } from "../../../react-query";
import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
import { signProviderAttributes, deleteProviderAttributes } from "./audit.rpc.func";
export const useSignProviderAttributes = buildUseMutation<MsgSignProviderAttributes, Error>({
  builderMutationFn: signProviderAttributes
});
export const useDeleteProviderAttributes = buildUseMutation<MsgDeleteProviderAttributes, Error>({
  builderMutationFn: deleteProviderAttributes
});