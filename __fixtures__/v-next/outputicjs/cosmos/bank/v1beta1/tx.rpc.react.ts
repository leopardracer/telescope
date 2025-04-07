import { buildUseMutation } from "../../../react-query";
import { MsgSend, MsgMultiSend } from "./tx";
import { send, multiSend } from "./tx.rpc.func";
export const useSend = buildUseMutation<MsgSend, Error>({
  builderMutationFn: send
});
export const useMultiSend = buildUseMutation<MsgMultiSend, Error>({
  builderMutationFn: multiSend
});