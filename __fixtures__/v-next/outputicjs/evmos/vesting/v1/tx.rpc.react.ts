import { buildUseMutation } from "../../../react-query";
import { MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
import { createClawbackVestingAccount, clawback } from "./tx.rpc.func";
export const useCreateClawbackVestingAccount = buildUseMutation<MsgCreateClawbackVestingAccount, Error>({
  builderMutationFn: createClawbackVestingAccount
});
export const useClawback = buildUseMutation<MsgClawback, Error>({
  builderMutationFn: clawback
});