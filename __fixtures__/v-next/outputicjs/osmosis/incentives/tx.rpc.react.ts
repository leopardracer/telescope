import { buildUseMutation } from "../../react-query";
import { MsgCreateGauge, MsgAddToGauge } from "./tx";
import { createGauge, addToGauge } from "./tx.rpc.func";
export const useCreateGauge = buildUseMutation<MsgCreateGauge, Error>({
  builderMutationFn: createGauge
});
export const useAddToGauge = buildUseMutation<MsgAddToGauge, Error>({
  builderMutationFn: addToGauge
});