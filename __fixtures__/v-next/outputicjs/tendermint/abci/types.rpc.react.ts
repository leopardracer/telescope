import { buildUseQuery } from "../../react-query";
import { RequestEcho, ResponseEcho, RequestFlush, ResponseFlush, RequestInfo, ResponseInfo, RequestSetOption, ResponseSetOption, RequestDeliverTx, ResponseDeliverTx, RequestCheckTx, ResponseCheckTx, RequestQuery, ResponseQuery, RequestCommit, ResponseCommit, RequestInitChain, ResponseInitChain, RequestBeginBlock, ResponseBeginBlock, RequestEndBlock, ResponseEndBlock, RequestListSnapshots, ResponseListSnapshots, RequestOfferSnapshot, ResponseOfferSnapshot, RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk, RequestApplySnapshotChunk, ResponseApplySnapshotChunk } from "./types";
import { getEcho, getFlush, getInfo, getSetOption, getDeliverTx, getCheckTx, getQuery, getCommit, getInitChain, getBeginBlock, getEndBlock, getListSnapshots, getOfferSnapshot, getLoadSnapshotChunk, getApplySnapshotChunk } from "./types.rpc.func";
export const useGetEcho = buildUseQuery<RequestEcho, ResponseEcho>({
  builderQueryFn: getEcho,
  queryKeyPrefix: "EchoQuery"
});
export const useGetFlush = buildUseQuery<RequestFlush, ResponseFlush>({
  builderQueryFn: getFlush,
  queryKeyPrefix: "FlushQuery"
});
export const useGetInfo = buildUseQuery<RequestInfo, ResponseInfo>({
  builderQueryFn: getInfo,
  queryKeyPrefix: "InfoQuery"
});
export const useGetSetOption = buildUseQuery<RequestSetOption, ResponseSetOption>({
  builderQueryFn: getSetOption,
  queryKeyPrefix: "SetOptionQuery"
});
export const useGetDeliverTx = buildUseQuery<RequestDeliverTx, ResponseDeliverTx>({
  builderQueryFn: getDeliverTx,
  queryKeyPrefix: "DeliverTxQuery"
});
export const useGetCheckTx = buildUseQuery<RequestCheckTx, ResponseCheckTx>({
  builderQueryFn: getCheckTx,
  queryKeyPrefix: "CheckTxQuery"
});
export const useGetQuery = buildUseQuery<RequestQuery, ResponseQuery>({
  builderQueryFn: getQuery,
  queryKeyPrefix: "QueryQuery"
});
export const useGetCommit = buildUseQuery<RequestCommit, ResponseCommit>({
  builderQueryFn: getCommit,
  queryKeyPrefix: "CommitQuery"
});
export const useGetInitChain = buildUseQuery<RequestInitChain, ResponseInitChain>({
  builderQueryFn: getInitChain,
  queryKeyPrefix: "InitChainQuery"
});
export const useGetBeginBlock = buildUseQuery<RequestBeginBlock, ResponseBeginBlock>({
  builderQueryFn: getBeginBlock,
  queryKeyPrefix: "BeginBlockQuery"
});
export const useGetEndBlock = buildUseQuery<RequestEndBlock, ResponseEndBlock>({
  builderQueryFn: getEndBlock,
  queryKeyPrefix: "EndBlockQuery"
});
export const useGetListSnapshots = buildUseQuery<RequestListSnapshots, ResponseListSnapshots>({
  builderQueryFn: getListSnapshots,
  queryKeyPrefix: "ListSnapshotsQuery"
});
export const useGetOfferSnapshot = buildUseQuery<RequestOfferSnapshot, ResponseOfferSnapshot>({
  builderQueryFn: getOfferSnapshot,
  queryKeyPrefix: "OfferSnapshotQuery"
});
export const useGetLoadSnapshotChunk = buildUseQuery<RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk>({
  builderQueryFn: getLoadSnapshotChunk,
  queryKeyPrefix: "LoadSnapshotChunkQuery"
});
export const useGetApplySnapshotChunk = buildUseQuery<RequestApplySnapshotChunk, ResponseApplySnapshotChunk>({
  builderQueryFn: getApplySnapshotChunk,
  queryKeyPrefix: "ApplySnapshotChunkQuery"
});