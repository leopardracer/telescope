import { buildUseMutation } from "../../../react-query";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deploymentmsg";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./groupmsg";
import { createDeployment, depositDeployment, updateDeployment, closeDeployment, closeGroup, pauseGroup, startGroup } from "./service.rpc.func";
export const useCreateDeployment = buildUseMutation<MsgCreateDeployment, Error>({
  builderMutationFn: createDeployment
});
export const useDepositDeployment = buildUseMutation<MsgDepositDeployment, Error>({
  builderMutationFn: depositDeployment
});
export const useUpdateDeployment = buildUseMutation<MsgUpdateDeployment, Error>({
  builderMutationFn: updateDeployment
});
export const useCloseDeployment = buildUseMutation<MsgCloseDeployment, Error>({
  builderMutationFn: closeDeployment
});
export const useCloseGroup = buildUseMutation<MsgCloseGroup, Error>({
  builderMutationFn: closeGroup
});
export const usePauseGroup = buildUseMutation<MsgPauseGroup, Error>({
  builderMutationFn: pauseGroup
});
export const useStartGroup = buildUseMutation<MsgStartGroup, Error>({
  builderMutationFn: startGroup
});