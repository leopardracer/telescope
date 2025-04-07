import { buildQuery } from "../../../helper-func-types";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
export const getModuleAccountBalance = buildQuery<QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse>({
  encode: QueryModuleAccountBalanceRequest.encode,
  decode: QueryModuleAccountBalanceResponse.decode,
  service: "osmosis.claim.v1beta1.Query",
  method: "ModuleAccountBalance"
});
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.claim.v1beta1.Query",
  method: "Params"
});
export const getClaimRecord = buildQuery<QueryClaimRecordRequest, QueryClaimRecordResponse>({
  encode: QueryClaimRecordRequest.encode,
  decode: QueryClaimRecordResponse.decode,
  service: "osmosis.claim.v1beta1.Query",
  method: "ClaimRecord"
});
export const getClaimableForAction = buildQuery<QueryClaimableForActionRequest, QueryClaimableForActionResponse>({
  encode: QueryClaimableForActionRequest.encode,
  decode: QueryClaimableForActionResponse.decode,
  service: "osmosis.claim.v1beta1.Query",
  method: "ClaimableForAction"
});
export const getTotalClaimable = buildQuery<QueryTotalClaimableRequest, QueryTotalClaimableResponse>({
  encode: QueryTotalClaimableRequest.encode,
  decode: QueryTotalClaimableResponse.decode,
  service: "osmosis.claim.v1beta1.Query",
  method: "TotalClaimable"
});