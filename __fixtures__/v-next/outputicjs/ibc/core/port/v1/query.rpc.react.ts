import { buildUseQuery } from "../../../../react-query";
import { QueryAppVersionRequest, QueryAppVersionResponse } from "./query";
import { getAppVersion } from "./query.rpc.func";
export const useGetAppVersion = buildUseQuery<QueryAppVersionRequest, QueryAppVersionResponse>({
  builderQueryFn: getAppVersion,
  queryKeyPrefix: "AppVersionQuery"
});