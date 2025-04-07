import { buildUseMutation } from "../../../react-query";
import { MsgVerifyInvariant } from "./tx";
import { verifyInvariant } from "./tx.rpc.func";
export const useVerifyInvariant = buildUseMutation<MsgVerifyInvariant, Error>({
  builderMutationFn: verifyInvariant
});