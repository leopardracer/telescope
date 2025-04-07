import { buildUseMutation } from "../../../react-query";
import { MsgUnjail } from "./tx";
import { unjail } from "./tx.rpc.func";
export const useUnjail = buildUseMutation<MsgUnjail, Error>({
  builderMutationFn: unjail
});