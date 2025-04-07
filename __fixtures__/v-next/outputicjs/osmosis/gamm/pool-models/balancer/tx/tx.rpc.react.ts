import { buildUseMutation } from "../../../../../react-query";
import { MsgCreateBalancerPool } from "./tx";
import { createBalancerPool } from "./tx.rpc.func";
export const useCreateBalancerPool = buildUseMutation<MsgCreateBalancerPool, Error>({
  builderMutationFn: createBalancerPool
});