import { buildUseMutation } from "../../../../react-query";
import { MsgTransfer } from "./tx";
import { transfer } from "./tx.rpc.func";
export const useTransfer = buildUseMutation<MsgTransfer, Error>({
  builderMutationFn: transfer
});