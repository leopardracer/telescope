import { buildUseQuery } from "../../../react-query";
import { QueryPeriodRequest, QueryPeriodResponse, QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse, QuerySkippedEpochsRequest, QuerySkippedEpochsResponse, QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse, QueryInflationRateRequest, QueryInflationRateResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getPeriod, getEpochMintProvision, getSkippedEpochs, getCirculatingSupply, getInflationRate, getParams } from "./query.rpc.func";
export const useGetPeriod = buildUseQuery<QueryPeriodRequest, QueryPeriodResponse>({
  builderQueryFn: getPeriod,
  queryKeyPrefix: "PeriodQuery"
});
export const useGetEpochMintProvision = buildUseQuery<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse>({
  builderQueryFn: getEpochMintProvision,
  queryKeyPrefix: "EpochMintProvisionQuery"
});
export const useGetSkippedEpochs = buildUseQuery<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse>({
  builderQueryFn: getSkippedEpochs,
  queryKeyPrefix: "SkippedEpochsQuery"
});
export const useGetCirculatingSupply = buildUseQuery<QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse>({
  builderQueryFn: getCirculatingSupply,
  queryKeyPrefix: "CirculatingSupplyQuery"
});
export const useGetInflationRate = buildUseQuery<QueryInflationRateRequest, QueryInflationRateResponse>({
  builderQueryFn: getInflationRate,
  queryKeyPrefix: "InflationRateQuery"
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});