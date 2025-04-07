import { buildUseMutation } from "../../../react-query";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
import { submitProposal, execLegacyContent, vote, voteWeighted, deposit } from "./tx.rpc.func";
export const useSubmitProposal = buildUseMutation<MsgSubmitProposal, Error>({
  builderMutationFn: submitProposal
});
export const useExecLegacyContent = buildUseMutation<MsgExecLegacyContent, Error>({
  builderMutationFn: execLegacyContent
});
export const useVote = buildUseMutation<MsgVote, Error>({
  builderMutationFn: vote
});
export const useVoteWeighted = buildUseMutation<MsgVoteWeighted, Error>({
  builderMutationFn: voteWeighted
});
export const useDeposit = buildUseMutation<MsgDeposit, Error>({
  builderMutationFn: deposit
});