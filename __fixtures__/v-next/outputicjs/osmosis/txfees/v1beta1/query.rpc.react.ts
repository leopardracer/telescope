import { buildUseQuery } from "../../../react-query";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
import { getFeeTokens, getDenomSpotPrice, getDenomPoolId, getBaseDenom } from "./query.rpc.func";
export const useGetFeeTokens = buildUseQuery<QueryFeeTokensRequest, QueryFeeTokensResponse>({
  builderQueryFn: getFeeTokens,
  queryKeyPrefix: "FeeTokensQuery"
});
export const useGetDenomSpotPrice = buildUseQuery<QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse>({
  builderQueryFn: getDenomSpotPrice,
  queryKeyPrefix: "DenomSpotPriceQuery"
});
export const useGetDenomPoolId = buildUseQuery<QueryDenomPoolIdRequest, QueryDenomPoolIdResponse>({
  builderQueryFn: getDenomPoolId,
  queryKeyPrefix: "DenomPoolIdQuery"
});
export const useGetBaseDenom = buildUseQuery<QueryBaseDenomRequest, QueryBaseDenomResponse>({
  builderQueryFn: getBaseDenom,
  queryKeyPrefix: "BaseDenomQuery"
});