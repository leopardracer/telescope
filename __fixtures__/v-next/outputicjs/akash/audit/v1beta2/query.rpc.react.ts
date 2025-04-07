import { buildUseQuery } from "../../../react-query";
import { QueryAllProvidersAttributesRequest, QueryProvidersResponse, QueryProviderAttributesRequest, QueryProviderAuditorRequest, QueryAuditorAttributesRequest } from "./query";
import { getAllProvidersAttributes, getProviderAttributes, getProviderAuditorAttributes, getAuditorAttributes } from "./query.rpc.func";
export const useGetAllProvidersAttributes = buildUseQuery<QueryAllProvidersAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: getAllProvidersAttributes,
  queryKeyPrefix: "AllProvidersAttributesQuery"
});
export const useGetProviderAttributes = buildUseQuery<QueryProviderAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: getProviderAttributes,
  queryKeyPrefix: "ProviderAttributesQuery"
});
export const useGetProviderAuditorAttributes = buildUseQuery<QueryProviderAuditorRequest, QueryProvidersResponse>({
  builderQueryFn: getProviderAuditorAttributes,
  queryKeyPrefix: "ProviderAuditorAttributesQuery"
});
export const useGetAuditorAttributes = buildUseQuery<QueryAuditorAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: getAuditorAttributes,
  queryKeyPrefix: "AuditorAttributesQuery"
});