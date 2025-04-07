import { buildUseQuery } from "../../../react-query";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimsRecordsRequest, QueryClaimsRecordsResponse, QueryClaimsRecordRequest, QueryClaimsRecordResponse } from "./query";
import { getTotalUnclaimed, getParams, getClaimsRecords, getClaimsRecord } from "./query.rpc.func";
export const useGetTotalUnclaimed = buildUseQuery<QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse>({
  builderQueryFn: getTotalUnclaimed,
  queryKeyPrefix: "TotalUnclaimedQuery"
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetClaimsRecords = buildUseQuery<QueryClaimsRecordsRequest, QueryClaimsRecordsResponse>({
  builderQueryFn: getClaimsRecords,
  queryKeyPrefix: "ClaimsRecordsQuery"
});
export const useGetClaimsRecord = buildUseQuery<QueryClaimsRecordRequest, QueryClaimsRecordResponse>({
  builderQueryFn: getClaimsRecord,
  queryKeyPrefix: "ClaimsRecordQuery"
});