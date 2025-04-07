import { buildQuery } from "../../../helper-func-types";
import { QueryProvidersRequest, QueryProvidersResponse, QueryProviderRequest, QueryProviderResponse } from "./query";
export const getProviders = buildQuery<QueryProvidersRequest, QueryProvidersResponse>({
  encode: QueryProvidersRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.provider.v1beta2.Query",
  method: "Providers"
});
export const getProvider = buildQuery<QueryProviderRequest, QueryProviderResponse>({
  encode: QueryProviderRequest.encode,
  decode: QueryProviderResponse.decode,
  service: "akash.provider.v1beta2.Query",
  method: "Provider"
});