import { buildUseQuery } from "../../../../react-query";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse } from "./query";
import { getConnection, getConnections, getClientConnections, getConnectionClientState, getConnectionConsensusState } from "./query.rpc.func";
export const useGetConnection = buildUseQuery<QueryConnectionRequest, QueryConnectionResponse>({
  builderQueryFn: getConnection,
  queryKeyPrefix: "ConnectionQuery"
});
export const useGetConnections = buildUseQuery<QueryConnectionsRequest, QueryConnectionsResponse>({
  builderQueryFn: getConnections,
  queryKeyPrefix: "ConnectionsQuery"
});
export const useGetClientConnections = buildUseQuery<QueryClientConnectionsRequest, QueryClientConnectionsResponse>({
  builderQueryFn: getClientConnections,
  queryKeyPrefix: "ClientConnectionsQuery"
});
export const useGetConnectionClientState = buildUseQuery<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>({
  builderQueryFn: getConnectionClientState,
  queryKeyPrefix: "ConnectionClientStateQuery"
});
export const useGetConnectionConsensusState = buildUseQuery<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>({
  builderQueryFn: getConnectionConsensusState,
  queryKeyPrefix: "ConnectionConsensusStateQuery"
});