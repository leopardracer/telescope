import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorSDKType, DelegationResponse, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoSDKType, Pool, PoolSDKType, Params, ParamsSDKType } from "./staking";
import { EndpointOrRpc, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { buildUseVueQuery } from "../../../vue-query";
import { QueryValidatorsRequest, QueryValidatorsRequestSDKType, QueryValidatorsResponse, QueryValidatorsResponseSDKType, QueryValidatorRequest, QueryValidatorRequestSDKType, QueryValidatorResponse, QueryValidatorResponseSDKType, QueryValidatorDelegationsRequest, QueryValidatorDelegationsRequestSDKType, QueryValidatorDelegationsResponse, QueryValidatorDelegationsResponseSDKType, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsRequestSDKType, QueryValidatorUnbondingDelegationsResponse, QueryValidatorUnbondingDelegationsResponseSDKType, QueryDelegationRequest, QueryDelegationRequestSDKType, QueryDelegationResponse, QueryDelegationResponseSDKType, QueryUnbondingDelegationRequest, QueryUnbondingDelegationRequestSDKType, QueryUnbondingDelegationResponse, QueryUnbondingDelegationResponseSDKType, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsRequestSDKType, QueryDelegatorDelegationsResponse, QueryDelegatorDelegationsResponseSDKType, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsRequestSDKType, QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorUnbondingDelegationsResponseSDKType, QueryRedelegationsRequest, QueryRedelegationsRequestSDKType, QueryRedelegationsResponse, QueryRedelegationsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorValidatorRequest, QueryDelegatorValidatorRequestSDKType, QueryDelegatorValidatorResponse, QueryDelegatorValidatorResponseSDKType, QueryHistoricalInfoRequest, QueryHistoricalInfoRequestSDKType, QueryHistoricalInfoResponse, QueryHistoricalInfoResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
import { getValidators, getValidator, getValidatorDelegations, getValidatorUnbondingDelegations, getDelegation, getUnbondingDelegation, getDelegatorDelegations, getDelegatorUnbondingDelegations, getRedelegations, getDelegatorValidators, getDelegatorValidator, getHistoricalInfo, getPool, getParams } from "./query.rpc.func";
export const useGetValidators = buildUseVueQuery<QueryValidatorsRequest, QueryValidatorsResponse>({
  builderQueryFn: getValidators,
  queryKeyPrefix: "ValidatorsQuery"
});
export const useGetValidator = buildUseVueQuery<QueryValidatorRequest, QueryValidatorResponse>({
  builderQueryFn: getValidator,
  queryKeyPrefix: "ValidatorQuery"
});
export const useGetValidatorDelegations = buildUseVueQuery<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>({
  builderQueryFn: getValidatorDelegations,
  queryKeyPrefix: "ValidatorDelegationsQuery"
});
export const useGetValidatorUnbondingDelegations = buildUseVueQuery<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>({
  builderQueryFn: getValidatorUnbondingDelegations,
  queryKeyPrefix: "ValidatorUnbondingDelegationsQuery"
});
export const useGetDelegation = buildUseVueQuery<QueryDelegationRequest, QueryDelegationResponse>({
  builderQueryFn: getDelegation,
  queryKeyPrefix: "DelegationQuery"
});
export const useGetUnbondingDelegation = buildUseVueQuery<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>({
  builderQueryFn: getUnbondingDelegation,
  queryKeyPrefix: "UnbondingDelegationQuery"
});
export const useGetDelegatorDelegations = buildUseVueQuery<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>({
  builderQueryFn: getDelegatorDelegations,
  queryKeyPrefix: "DelegatorDelegationsQuery"
});
export const useGetDelegatorUnbondingDelegations = buildUseVueQuery<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>({
  builderQueryFn: getDelegatorUnbondingDelegations,
  queryKeyPrefix: "DelegatorUnbondingDelegationsQuery"
});
export const useGetRedelegations = buildUseVueQuery<QueryRedelegationsRequest, QueryRedelegationsResponse>({
  builderQueryFn: getRedelegations,
  queryKeyPrefix: "RedelegationsQuery"
});
export const useGetDelegatorValidators = buildUseVueQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  builderQueryFn: getDelegatorValidators,
  queryKeyPrefix: "DelegatorValidatorsQuery"
});
export const useGetDelegatorValidator = buildUseVueQuery<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>({
  builderQueryFn: getDelegatorValidator,
  queryKeyPrefix: "DelegatorValidatorQuery"
});
export const useGetHistoricalInfo = buildUseVueQuery<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>({
  builderQueryFn: getHistoricalInfo,
  queryKeyPrefix: "HistoricalInfoQuery"
});
export const useGetPool = buildUseVueQuery<QueryPoolRequest, QueryPoolResponse>({
  builderQueryFn: getPool,
  queryKeyPrefix: "PoolQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});