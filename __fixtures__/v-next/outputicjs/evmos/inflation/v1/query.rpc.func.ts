import { buildQuery } from "../../../helper-func-types";
import { QueryPeriodRequest, QueryPeriodResponse, QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse, QuerySkippedEpochsRequest, QuerySkippedEpochsResponse, QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse, QueryInflationRateRequest, QueryInflationRateResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export const getPeriod = buildQuery<QueryPeriodRequest, QueryPeriodResponse>({
  encode: QueryPeriodRequest.encode,
  decode: QueryPeriodResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "Period"
});
export const getEpochMintProvision = buildQuery<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse>({
  encode: QueryEpochMintProvisionRequest.encode,
  decode: QueryEpochMintProvisionResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "EpochMintProvision"
});
export const getSkippedEpochs = buildQuery<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse>({
  encode: QuerySkippedEpochsRequest.encode,
  decode: QuerySkippedEpochsResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "SkippedEpochs"
});
export const getCirculatingSupply = buildQuery<QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse>({
  encode: QueryCirculatingSupplyRequest.encode,
  decode: QueryCirculatingSupplyResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "CirculatingSupply"
});
export const getInflationRate = buildQuery<QueryInflationRateRequest, QueryInflationRateResponse>({
  encode: QueryInflationRateRequest.encode,
  decode: QueryInflationRateResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "InflationRate"
});
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "Params"
});