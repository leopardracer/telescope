import { buildQuery } from "../../../../helper-func-types";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse } from "./query";
export const getGetNodeInfo = buildQuery<GetNodeInfoRequest, GetNodeInfoResponse>({
  encode: GetNodeInfoRequest.encode,
  decode: GetNodeInfoResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetNodeInfo"
});
export const getGetSyncing = buildQuery<GetSyncingRequest, GetSyncingResponse>({
  encode: GetSyncingRequest.encode,
  decode: GetSyncingResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetSyncing"
});
export const getGetLatestBlock = buildQuery<GetLatestBlockRequest, GetLatestBlockResponse>({
  encode: GetLatestBlockRequest.encode,
  decode: GetLatestBlockResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetLatestBlock"
});
export const getGetBlockByHeight = buildQuery<GetBlockByHeightRequest, GetBlockByHeightResponse>({
  encode: GetBlockByHeightRequest.encode,
  decode: GetBlockByHeightResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetBlockByHeight"
});
export const getGetLatestValidatorSet = buildQuery<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>({
  encode: GetLatestValidatorSetRequest.encode,
  decode: GetLatestValidatorSetResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetLatestValidatorSet"
});
export const getGetValidatorSetByHeight = buildQuery<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>({
  encode: GetValidatorSetByHeightRequest.encode,
  decode: GetValidatorSetByHeightResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetValidatorSetByHeight"
});