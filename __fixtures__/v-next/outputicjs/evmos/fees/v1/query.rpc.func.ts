import { buildQuery } from "../../../helper-func-types";
import { QueryDevFeeInfosRequest, QueryDevFeeInfosResponse, QueryDevFeeInfoRequest, QueryDevFeeInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse } from "./query";
export const getDevFeeInfos = buildQuery<QueryDevFeeInfosRequest, QueryDevFeeInfosResponse>({
  encode: QueryDevFeeInfosRequest.encode,
  decode: QueryDevFeeInfosResponse.decode,
  service: "evmos.fees.v1.Query",
  method: "DevFeeInfos"
});
export const getDevFeeInfo = buildQuery<QueryDevFeeInfoRequest, QueryDevFeeInfoResponse>({
  encode: QueryDevFeeInfoRequest.encode,
  decode: QueryDevFeeInfoResponse.decode,
  service: "evmos.fees.v1.Query",
  method: "DevFeeInfo"
});
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "evmos.fees.v1.Query",
  method: "Params"
});
export const getDevFeeInfosPerDeployer = buildQuery<QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse>({
  encode: QueryDevFeeInfosPerDeployerRequest.encode,
  decode: QueryDevFeeInfosPerDeployerResponse.decode,
  service: "evmos.fees.v1.Query",
  method: "DevFeeInfosPerDeployer"
});