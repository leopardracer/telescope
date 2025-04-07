import { buildUseMutation } from "../../../react-query";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate } from "./tx";
import { createValidator, editValidator, delegate, beginRedelegate, undelegate } from "./tx.rpc.func";
export const useCreateValidator = buildUseMutation<MsgCreateValidator, Error>({
  builderMutationFn: createValidator
});
export const useEditValidator = buildUseMutation<MsgEditValidator, Error>({
  builderMutationFn: editValidator
});
export const useDelegate = buildUseMutation<MsgDelegate, Error>({
  builderMutationFn: delegate
});
export const useBeginRedelegate = buildUseMutation<MsgBeginRedelegate, Error>({
  builderMutationFn: beginRedelegate
});
export const useUndelegate = buildUseMutation<MsgUndelegate, Error>({
  builderMutationFn: undelegate
});