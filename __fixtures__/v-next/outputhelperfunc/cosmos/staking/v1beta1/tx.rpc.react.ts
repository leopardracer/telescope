import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType } from "./staking";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { buildTx } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgCreateValidatorResponse, MsgCreateValidatorResponseSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgEditValidatorResponse, MsgEditValidatorResponseSDKType, MsgDelegate, MsgDelegateSDKType, MsgDelegateResponse, MsgDelegateResponseSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgBeginRedelegateResponse, MsgBeginRedelegateResponseSDKType, MsgUndelegate, MsgUndelegateSDKType, MsgUndelegateResponse, MsgUndelegateResponseSDKType } from "./tx";
import { createValidator, editValidator, delegate, beginRedelegate, undelegate } from "./tx.rpc.func";
export const useCreateValidator = buildUseMutation<MsgCreateValidator, Error>({
  builderMutationFn: createValidator
});
export const useEditValidator = buildUseMutation<MsgEditValidator, Error>({
  builderMutationFn: editValidator
});
export const useDelegate = buildUseMutation<MsgDelegate, Error>({
  builderMutationFn: delegate
});
export const useBeginRedelegate = buildUseMutation<MsgBeginRedelegate, Error>({
  builderMutationFn: beginRedelegate
});
export const useUndelegate = buildUseMutation<MsgUndelegate, Error>({
  builderMutationFn: undelegate
});