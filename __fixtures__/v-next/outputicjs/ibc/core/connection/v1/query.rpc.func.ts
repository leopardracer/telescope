import { buildQuery } from "../../../../helper-func-types";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse } from "./query";
export const getConnection = buildQuery<QueryConnectionRequest, QueryConnectionResponse>({
  encode: QueryConnectionRequest.encode,
  decode: QueryConnectionResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "Connection"
});
export const getConnections = buildQuery<QueryConnectionsRequest, QueryConnectionsResponse>({
  encode: QueryConnectionsRequest.encode,
  decode: QueryConnectionsResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "Connections"
});
export const getClientConnections = buildQuery<QueryClientConnectionsRequest, QueryClientConnectionsResponse>({
  encode: QueryClientConnectionsRequest.encode,
  decode: QueryClientConnectionsResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ClientConnections"
});
export const getConnectionClientState = buildQuery<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>({
  encode: QueryConnectionClientStateRequest.encode,
  decode: QueryConnectionClientStateResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ConnectionClientState"
});
export const getConnectionConsensusState = buildQuery<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>({
  encode: QueryConnectionConsensusStateRequest.encode,
  decode: QueryConnectionConsensusStateResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ConnectionConsensusState"
});