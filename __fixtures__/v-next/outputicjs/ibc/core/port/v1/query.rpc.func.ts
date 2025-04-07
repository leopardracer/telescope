import { buildQuery } from "../../../../helper-func-types";
import { QueryAppVersionRequest, QueryAppVersionResponse } from "./query";
export const getAppVersion = buildQuery<QueryAppVersionRequest, QueryAppVersionResponse>({
  encode: QueryAppVersionRequest.encode,
  decode: QueryAppVersionResponse.decode,
  service: "ibc.core.port.v1.Query",
  method: "AppVersion"
});