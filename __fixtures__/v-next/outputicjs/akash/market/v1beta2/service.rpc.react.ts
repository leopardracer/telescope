import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
import { buildUseMutation } from "../../../react-query";
import { createBid, closeBid, withdrawLease, createLease, closeLease } from "./service.rpc.func";
export const useCreateBid = buildUseMutation<MsgCreateBid, Error>({
  builderMutationFn: createBid
});
export const useCloseBid = buildUseMutation<MsgCloseBid, Error>({
  builderMutationFn: closeBid
});
export const useWithdrawLease = buildUseMutation<MsgWithdrawLease, Error>({
  builderMutationFn: withdrawLease
});
export const useCreateLease = buildUseMutation<MsgCreateLease, Error>({
  builderMutationFn: createLease
});
export const useCloseLease = buildUseMutation<MsgCloseLease, Error>({
  builderMutationFn: closeLease
});