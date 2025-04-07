import { buildUseQuery } from "../../../react-query";
import { QueryCertificatesRequest, QueryCertificatesResponse } from "./query";
import { getCertificates } from "./query.rpc.func";
export const useGetCertificates = buildUseQuery<QueryCertificatesRequest, QueryCertificatesResponse>({
  builderQueryFn: getCertificates,
  queryKeyPrefix: "CertificatesQuery"
});