import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionSDKType, TextProposal, TextProposalSDKType } from "./gov";
import { RegisterIncentiveProposal, RegisterIncentiveProposalSDKType } from "../../../evmos/incentives/v1/incentives";
import { ClientUpdateProposal, ClientUpdateProposalSDKType, UpgradeProposal, UpgradeProposalSDKType } from "../../../ibc/core/client/v1/client";
import { ReplacePoolIncentivesProposal, ReplacePoolIncentivesProposalSDKType, UpdatePoolIncentivesProposal, UpdatePoolIncentivesProposalSDKType } from "../../../osmosis/pool-incentives/v1beta1/gov";
import { SetSuperfluidAssetsProposal, SetSuperfluidAssetsProposalSDKType, RemoveSuperfluidAssetsProposal, RemoveSuperfluidAssetsProposalSDKType, UpdateUnpoolWhiteListProposal, UpdateUnpoolWhiteListProposalSDKType } from "../../../osmosis/superfluid/v1beta1/gov";
import { UpdateFeeTokenProposal, UpdateFeeTokenProposalSDKType } from "../../../osmosis/txfees/v1beta1/gov";
import { buildTx } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { buildUseVueMutation } from "../../../vue-query";
import { MsgSubmitProposal, MsgSubmitProposalSDKType, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgVote, MsgVoteSDKType, MsgVoteResponse, MsgVoteResponseSDKType, MsgVoteWeighted, MsgVoteWeightedSDKType, MsgVoteWeightedResponse, MsgVoteWeightedResponseSDKType, MsgDeposit, MsgDepositSDKType, MsgDepositResponse, MsgDepositResponseSDKType } from "./tx";
export const submitProposal = buildTx<MsgSubmitProposal>({
  msg: MsgSubmitProposal
});
export const helperVote = buildTx<MsgVote>({
  msg: MsgVote
});
export const letsVoteWeighted = buildTx<MsgVoteWeighted>({
  msg: MsgVoteWeighted
});
export const toDeposit = buildTx<MsgDeposit>({
  msg: MsgDeposit
});