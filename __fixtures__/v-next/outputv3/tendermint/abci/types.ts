import { Timestamp, TimestampAmino, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Header, HeaderAmino, HeaderSDKType } from "../types/types";
import { ProofOps, ProofOpsAmino, ProofOpsSDKType } from "../crypto/proof";
import { EvidenceParams, EvidenceParamsAmino, EvidenceParamsSDKType, ValidatorParams, ValidatorParamsAmino, ValidatorParamsSDKType, VersionParams, VersionParamsAmino, VersionParamsSDKType } from "../types/params";
import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../helpers";
export const protobufPackage = "tendermint.abci";
export enum CheckTxType {
  NEW = 0,
  RECHECK = 1,
  UNRECOGNIZED = -1,
}
export const CheckTxTypeSDKType = CheckTxType;
export const CheckTxTypeAmino = CheckTxType;
export function checkTxTypeFromJSON(object: any): CheckTxType {
  switch (object) {
    case 0:
    case "NEW":
      return CheckTxType.NEW;
    case 1:
    case "RECHECK":
      return CheckTxType.RECHECK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CheckTxType.UNRECOGNIZED;
  }
}
export function checkTxTypeToJSON(object: CheckTxType): string {
  switch (object) {
    case CheckTxType.NEW:
      return "NEW";
    case CheckTxType.RECHECK:
      return "RECHECK";
    case CheckTxType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseOfferSnapshot_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,
  /** ACCEPT - Snapshot accepted, apply chunks */
  ACCEPT = 1,
  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,
  /** REJECT - Reject this specific snapshot, try others */
  REJECT = 3,
  /** REJECT_FORMAT - Reject all snapshots of this format, try others */
  REJECT_FORMAT = 4,
  /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
  REJECT_SENDER = 5,
  UNRECOGNIZED = -1,
}
export const ResponseOfferSnapshot_ResultSDKType = ResponseOfferSnapshot_Result;
export const ResponseOfferSnapshot_ResultAmino = ResponseOfferSnapshot_Result;
export function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseOfferSnapshot_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseOfferSnapshot_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseOfferSnapshot_Result.ABORT;
    case 3:
    case "REJECT":
      return ResponseOfferSnapshot_Result.REJECT;
    case 4:
    case "REJECT_FORMAT":
      return ResponseOfferSnapshot_Result.REJECT_FORMAT;
    case 5:
    case "REJECT_SENDER":
      return ResponseOfferSnapshot_Result.REJECT_SENDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseOfferSnapshot_Result.UNRECOGNIZED;
  }
}
export function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string {
  switch (object) {
    case ResponseOfferSnapshot_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseOfferSnapshot_Result.ACCEPT:
      return "ACCEPT";
    case ResponseOfferSnapshot_Result.ABORT:
      return "ABORT";
    case ResponseOfferSnapshot_Result.REJECT:
      return "REJECT";
    case ResponseOfferSnapshot_Result.REJECT_FORMAT:
      return "REJECT_FORMAT";
    case ResponseOfferSnapshot_Result.REJECT_SENDER:
      return "REJECT_SENDER";
    case ResponseOfferSnapshot_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseApplySnapshotChunk_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,
  /** ACCEPT - Chunk successfully accepted */
  ACCEPT = 1,
  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,
  /** RETRY - Retry chunk (combine with refetch and reject) */
  RETRY = 3,
  /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
  RETRY_SNAPSHOT = 4,
  /** REJECT_SNAPSHOT - Reject this snapshot, try others */
  REJECT_SNAPSHOT = 5,
  UNRECOGNIZED = -1,
}
export const ResponseApplySnapshotChunk_ResultSDKType = ResponseApplySnapshotChunk_Result;
export const ResponseApplySnapshotChunk_ResultAmino = ResponseApplySnapshotChunk_Result;
export function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseApplySnapshotChunk_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseApplySnapshotChunk_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseApplySnapshotChunk_Result.ABORT;
    case 3:
    case "RETRY":
      return ResponseApplySnapshotChunk_Result.RETRY;
    case 4:
    case "RETRY_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
    case 5:
    case "REJECT_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
  }
}
export function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string {
  switch (object) {
    case ResponseApplySnapshotChunk_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseApplySnapshotChunk_Result.ACCEPT:
      return "ACCEPT";
    case ResponseApplySnapshotChunk_Result.ABORT:
      return "ABORT";
    case ResponseApplySnapshotChunk_Result.RETRY:
      return "RETRY";
    case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
      return "RETRY_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
      return "REJECT_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum EvidenceType {
  UNKNOWN = 0,
  DUPLICATE_VOTE = 1,
  LIGHT_CLIENT_ATTACK = 2,
  UNRECOGNIZED = -1,
}
export const EvidenceTypeSDKType = EvidenceType;
export const EvidenceTypeAmino = EvidenceType;
export function evidenceTypeFromJSON(object: any): EvidenceType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return EvidenceType.UNKNOWN;
    case 1:
    case "DUPLICATE_VOTE":
      return EvidenceType.DUPLICATE_VOTE;
    case 2:
    case "LIGHT_CLIENT_ATTACK":
      return EvidenceType.LIGHT_CLIENT_ATTACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EvidenceType.UNRECOGNIZED;
  }
}
export function evidenceTypeToJSON(object: EvidenceType): string {
  switch (object) {
    case EvidenceType.UNKNOWN:
      return "UNKNOWN";
    case EvidenceType.DUPLICATE_VOTE:
      return "DUPLICATE_VOTE";
    case EvidenceType.LIGHT_CLIENT_ATTACK:
      return "LIGHT_CLIENT_ATTACK";
    case EvidenceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Request {
  echo?: RequestEcho;
  flush?: RequestFlush;
  info?: RequestInfo;
  setOption?: RequestSetOption;
  initChain?: RequestInitChain;
  query?: RequestQuery;
  beginBlock?: RequestBeginBlock;
  checkTx?: RequestCheckTx;
  deliverTx?: RequestDeliverTx;
  endBlock?: RequestEndBlock;
  commit?: RequestCommit;
  listSnapshots?: RequestListSnapshots;
  offerSnapshot?: RequestOfferSnapshot;
  loadSnapshotChunk?: RequestLoadSnapshotChunk;
  applySnapshotChunk?: RequestApplySnapshotChunk;
}
export interface RequestProtoMsg {
  typeUrl: "/tendermint.abci.Request";
  value: Uint8Array;
}
export interface RequestAmino {
  echo?: RequestEchoAmino;
  flush?: RequestFlushAmino;
  info?: RequestInfoAmino;
  set_option?: RequestSetOptionAmino;
  init_chain?: RequestInitChainAmino;
  query?: RequestQueryAmino;
  begin_block?: RequestBeginBlockAmino;
  check_tx?: RequestCheckTxAmino;
  deliver_tx?: RequestDeliverTxAmino;
  end_block?: RequestEndBlockAmino;
  commit?: RequestCommitAmino;
  list_snapshots?: RequestListSnapshotsAmino;
  offer_snapshot?: RequestOfferSnapshotAmino;
  load_snapshot_chunk?: RequestLoadSnapshotChunkAmino;
  apply_snapshot_chunk?: RequestApplySnapshotChunkAmino;
}
export interface RequestSDKType {
  echo?: RequestEchoSDKType;
  flush?: RequestFlushSDKType;
  info?: RequestInfoSDKType;
  set_option?: RequestSetOptionSDKType;
  init_chain?: RequestInitChainSDKType;
  query?: RequestQuerySDKType;
  begin_block?: RequestBeginBlockSDKType;
  check_tx?: RequestCheckTxSDKType;
  deliver_tx?: RequestDeliverTxSDKType;
  end_block?: RequestEndBlockSDKType;
  commit?: RequestCommitSDKType;
  list_snapshots?: RequestListSnapshotsSDKType;
  offer_snapshot?: RequestOfferSnapshotSDKType;
  load_snapshot_chunk?: RequestLoadSnapshotChunkSDKType;
  apply_snapshot_chunk?: RequestApplySnapshotChunkSDKType;
}
export interface RequestEcho {
  message: string;
}
export interface RequestEchoProtoMsg {
  typeUrl: "/tendermint.abci.RequestEcho";
  value: Uint8Array;
}
export interface RequestEchoAmino {
  message?: string;
}
export interface RequestEchoSDKType {
  message: string;
}
export interface RequestFlush {}
export interface RequestFlushProtoMsg {
  typeUrl: "/tendermint.abci.RequestFlush";
  value: Uint8Array;
}
export interface RequestFlushAmino {}
export interface RequestFlushSDKType {}
export interface RequestInfo {
  version: string;
  blockVersion: bigint;
  p2pVersion: bigint;
}
export interface RequestInfoProtoMsg {
  typeUrl: "/tendermint.abci.RequestInfo";
  value: Uint8Array;
}
export interface RequestInfoAmino {
  version?: string;
  block_version?: string;
  p2p_version?: string;
}
export interface RequestInfoSDKType {
  version: string;
  block_version: bigint;
  p2p_version: bigint;
}
/** nondeterministic */
export interface RequestSetOption {
  key: string;
  value: string;
}
export interface RequestSetOptionProtoMsg {
  typeUrl: "/tendermint.abci.RequestSetOption";
  value: Uint8Array;
}
/** nondeterministic */
export interface RequestSetOptionAmino {
  key?: string;
  value?: string;
}
/** nondeterministic */
export interface RequestSetOptionSDKType {
  key: string;
  value: string;
}
export interface RequestInitChain {
  time: Date;
  chainId: string;
  consensusParams?: ConsensusParams;
  validators: ValidatorUpdate[];
  appStateBytes: Uint8Array;
  initialHeight: bigint;
}
export interface RequestInitChainProtoMsg {
  typeUrl: "/tendermint.abci.RequestInitChain";
  value: Uint8Array;
}
export interface RequestInitChainAmino {
  time?: string;
  chain_id?: string;
  consensus_params?: ConsensusParamsAmino;
  validators?: ValidatorUpdateAmino[];
  app_state_bytes?: string;
  initial_height?: string;
}
export interface RequestInitChainSDKType {
  time: Date;
  chain_id: string;
  consensus_params?: ConsensusParamsSDKType;
  validators: ValidatorUpdateSDKType[];
  app_state_bytes: Uint8Array;
  initial_height: bigint;
}
export interface RequestQuery {
  data: Uint8Array;
  path: string;
  height: bigint;
  prove: boolean;
}
export interface RequestQueryProtoMsg {
  typeUrl: "/tendermint.abci.RequestQuery";
  value: Uint8Array;
}
export interface RequestQueryAmino {
  data?: string;
  path?: string;
  height?: string;
  prove?: boolean;
}
export interface RequestQuerySDKType {
  data: Uint8Array;
  path: string;
  height: bigint;
  prove: boolean;
}
export interface RequestBeginBlock {
  hash: Uint8Array;
  header: Header;
  lastCommitInfo: LastCommitInfo;
  byzantineValidators: Evidence[];
}
export interface RequestBeginBlockProtoMsg {
  typeUrl: "/tendermint.abci.RequestBeginBlock";
  value: Uint8Array;
}
export interface RequestBeginBlockAmino {
  hash?: string;
  header?: HeaderAmino;
  last_commit_info?: LastCommitInfoAmino;
  byzantine_validators?: EvidenceAmino[];
}
export interface RequestBeginBlockSDKType {
  hash: Uint8Array;
  header: HeaderSDKType;
  last_commit_info: LastCommitInfoSDKType;
  byzantine_validators: EvidenceSDKType[];
}
export interface RequestCheckTx {
  tx: Uint8Array;
  type: CheckTxType;
}
export interface RequestCheckTxProtoMsg {
  typeUrl: "/tendermint.abci.RequestCheckTx";
  value: Uint8Array;
}
export interface RequestCheckTxAmino {
  tx?: string;
  type?: CheckTxType;
}
export interface RequestCheckTxSDKType {
  tx: Uint8Array;
  type: CheckTxType;
}
export interface RequestDeliverTx {
  tx: Uint8Array;
}
export interface RequestDeliverTxProtoMsg {
  typeUrl: "/tendermint.abci.RequestDeliverTx";
  value: Uint8Array;
}
export interface RequestDeliverTxAmino {
  tx?: string;
}
export interface RequestDeliverTxSDKType {
  tx: Uint8Array;
}
export interface RequestEndBlock {
  height: bigint;
}
export interface RequestEndBlockProtoMsg {
  typeUrl: "/tendermint.abci.RequestEndBlock";
  value: Uint8Array;
}
export interface RequestEndBlockAmino {
  height?: string;
}
export interface RequestEndBlockSDKType {
  height: bigint;
}
export interface RequestCommit {}
export interface RequestCommitProtoMsg {
  typeUrl: "/tendermint.abci.RequestCommit";
  value: Uint8Array;
}
export interface RequestCommitAmino {}
export interface RequestCommitSDKType {}
/** lists available snapshots */
export interface RequestListSnapshots {}
export interface RequestListSnapshotsProtoMsg {
  typeUrl: "/tendermint.abci.RequestListSnapshots";
  value: Uint8Array;
}
/** lists available snapshots */
export interface RequestListSnapshotsAmino {}
/** lists available snapshots */
export interface RequestListSnapshotsSDKType {}
/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
  /** snapshot offered by peers */
  snapshot?: Snapshot;
  /** light client-verified app hash for snapshot height */
  appHash: Uint8Array;
}
export interface RequestOfferSnapshotProtoMsg {
  typeUrl: "/tendermint.abci.RequestOfferSnapshot";
  value: Uint8Array;
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshotAmino {
  /** snapshot offered by peers */
  snapshot?: SnapshotAmino;
  /** light client-verified app hash for snapshot height */
  app_hash?: string;
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshotSDKType {
  snapshot?: SnapshotSDKType;
  app_hash: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
  height: bigint;
  format: number;
  chunk: number;
}
export interface RequestLoadSnapshotChunkProtoMsg {
  typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk";
  value: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunkAmino {
  height?: string;
  format?: number;
  chunk?: number;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunkSDKType {
  height: bigint;
  format: number;
  chunk: number;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
  index: number;
  chunk: Uint8Array;
  sender: string;
}
export interface RequestApplySnapshotChunkProtoMsg {
  typeUrl: "/tendermint.abci.RequestApplySnapshotChunk";
  value: Uint8Array;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunkAmino {
  index?: number;
  chunk?: string;
  sender?: string;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunkSDKType {
  index: number;
  chunk: Uint8Array;
  sender: string;
}
export interface Response {
  exception?: ResponseException;
  echo?: ResponseEcho;
  flush?: ResponseFlush;
  info?: ResponseInfo;
  setOption?: ResponseSetOption;
  initChain?: ResponseInitChain;
  query?: ResponseQuery;
  beginBlock?: ResponseBeginBlock;
  checkTx?: ResponseCheckTx;
  deliverTx?: ResponseDeliverTx;
  endBlock?: ResponseEndBlock;
  commit?: ResponseCommit;
  listSnapshots?: ResponseListSnapshots;
  offerSnapshot?: ResponseOfferSnapshot;
  loadSnapshotChunk?: ResponseLoadSnapshotChunk;
  applySnapshotChunk?: ResponseApplySnapshotChunk;
}
export interface ResponseProtoMsg {
  typeUrl: "/tendermint.abci.Response";
  value: Uint8Array;
}
export interface ResponseAmino {
  exception?: ResponseExceptionAmino;
  echo?: ResponseEchoAmino;
  flush?: ResponseFlushAmino;
  info?: ResponseInfoAmino;
  set_option?: ResponseSetOptionAmino;
  init_chain?: ResponseInitChainAmino;
  query?: ResponseQueryAmino;
  begin_block?: ResponseBeginBlockAmino;
  check_tx?: ResponseCheckTxAmino;
  deliver_tx?: ResponseDeliverTxAmino;
  end_block?: ResponseEndBlockAmino;
  commit?: ResponseCommitAmino;
  list_snapshots?: ResponseListSnapshotsAmino;
  offer_snapshot?: ResponseOfferSnapshotAmino;
  load_snapshot_chunk?: ResponseLoadSnapshotChunkAmino;
  apply_snapshot_chunk?: ResponseApplySnapshotChunkAmino;
}
export interface ResponseSDKType {
  exception?: ResponseExceptionSDKType;
  echo?: ResponseEchoSDKType;
  flush?: ResponseFlushSDKType;
  info?: ResponseInfoSDKType;
  set_option?: ResponseSetOptionSDKType;
  init_chain?: ResponseInitChainSDKType;
  query?: ResponseQuerySDKType;
  begin_block?: ResponseBeginBlockSDKType;
  check_tx?: ResponseCheckTxSDKType;
  deliver_tx?: ResponseDeliverTxSDKType;
  end_block?: ResponseEndBlockSDKType;
  commit?: ResponseCommitSDKType;
  list_snapshots?: ResponseListSnapshotsSDKType;
  offer_snapshot?: ResponseOfferSnapshotSDKType;
  load_snapshot_chunk?: ResponseLoadSnapshotChunkSDKType;
  apply_snapshot_chunk?: ResponseApplySnapshotChunkSDKType;
}
/** nondeterministic */
export interface ResponseException {
  error: string;
}
export interface ResponseExceptionProtoMsg {
  typeUrl: "/tendermint.abci.ResponseException";
  value: Uint8Array;
}
/** nondeterministic */
export interface ResponseExceptionAmino {
  error?: string;
}
/** nondeterministic */
export interface ResponseExceptionSDKType {
  error: string;
}
export interface ResponseEcho {
  message: string;
}
export interface ResponseEchoProtoMsg {
  typeUrl: "/tendermint.abci.ResponseEcho";
  value: Uint8Array;
}
export interface ResponseEchoAmino {
  message?: string;
}
export interface ResponseEchoSDKType {
  message: string;
}
export interface ResponseFlush {}
export interface ResponseFlushProtoMsg {
  typeUrl: "/tendermint.abci.ResponseFlush";
  value: Uint8Array;
}
export interface ResponseFlushAmino {}
export interface ResponseFlushSDKType {}
export interface ResponseInfo {
  data: string;
  version: string;
  appVersion: bigint;
  lastBlockHeight: bigint;
  lastBlockAppHash: Uint8Array;
}
export interface ResponseInfoProtoMsg {
  typeUrl: "/tendermint.abci.ResponseInfo";
  value: Uint8Array;
}
export interface ResponseInfoAmino {
  data?: string;
  version?: string;
  app_version?: string;
  last_block_height?: string;
  last_block_app_hash?: string;
}
export interface ResponseInfoSDKType {
  data: string;
  version: string;
  app_version: bigint;
  last_block_height: bigint;
  last_block_app_hash: Uint8Array;
}
/** nondeterministic */
export interface ResponseSetOption {
  code: number;
  /** bytes data = 2; */
  log: string;
  info: string;
}
export interface ResponseSetOptionProtoMsg {
  typeUrl: "/tendermint.abci.ResponseSetOption";
  value: Uint8Array;
}
/** nondeterministic */
export interface ResponseSetOptionAmino {
  code?: number;
  /** bytes data = 2; */
  log?: string;
  info?: string;
}
/** nondeterministic */
export interface ResponseSetOptionSDKType {
  code: number;
  log: string;
  info: string;
}
export interface ResponseInitChain {
  consensusParams?: ConsensusParams;
  validators: ValidatorUpdate[];
  appHash: Uint8Array;
}
export interface ResponseInitChainProtoMsg {
  typeUrl: "/tendermint.abci.ResponseInitChain";
  value: Uint8Array;
}
export interface ResponseInitChainAmino {
  consensus_params?: ConsensusParamsAmino;
  validators?: ValidatorUpdateAmino[];
  app_hash?: string;
}
export interface ResponseInitChainSDKType {
  consensus_params?: ConsensusParamsSDKType;
  validators: ValidatorUpdateSDKType[];
  app_hash: Uint8Array;
}
export interface ResponseQuery {
  code: number;
  /** bytes data = 2; // use "value" instead. */
  log: string;
  /** nondeterministic */
  info: string;
  index: bigint;
  key: Uint8Array;
  value: Uint8Array;
  proofOps?: ProofOps;
  height: bigint;
  codespace: string;
}
export interface ResponseQueryProtoMsg {
  typeUrl: "/tendermint.abci.ResponseQuery";
  value: Uint8Array;
}
export interface ResponseQueryAmino {
  code?: number;
  /** bytes data = 2; // use "value" instead. */
  log?: string;
  /** nondeterministic */
  info?: string;
  index?: string;
  key?: string;
  value?: string;
  proof_ops?: ProofOpsAmino;
  height?: string;
  codespace?: string;
}
export interface ResponseQuerySDKType {
  code: number;
  log: string;
  info: string;
  index: bigint;
  key: Uint8Array;
  value: Uint8Array;
  proof_ops?: ProofOpsSDKType;
  height: bigint;
  codespace: string;
}
export interface ResponseBeginBlock {
  events: Event[];
}
export interface ResponseBeginBlockProtoMsg {
  typeUrl: "/tendermint.abci.ResponseBeginBlock";
  value: Uint8Array;
}
export interface ResponseBeginBlockAmino {
  events?: EventAmino[];
}
export interface ResponseBeginBlockSDKType {
  events: EventSDKType[];
}
export interface ResponseCheckTx {
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gasWanted: bigint;
  gasUsed: bigint;
  events: Event[];
  codespace: string;
}
export interface ResponseCheckTxProtoMsg {
  typeUrl: "/tendermint.abci.ResponseCheckTx";
  value: Uint8Array;
}
export interface ResponseCheckTxAmino {
  code?: number;
  data?: string;
  /** nondeterministic */
  log?: string;
  /** nondeterministic */
  info?: string;
  gas_wanted?: string;
  gas_used?: string;
  events?: EventAmino[];
  codespace?: string;
}
export interface ResponseCheckTxSDKType {
  code: number;
  data: Uint8Array;
  log: string;
  info: string;
  gas_wanted: bigint;
  gas_used: bigint;
  events: EventSDKType[];
  codespace: string;
}
export interface ResponseDeliverTx {
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gasWanted: bigint;
  gasUsed: bigint;
  events: Event[];
  codespace: string;
}
export interface ResponseDeliverTxProtoMsg {
  typeUrl: "/tendermint.abci.ResponseDeliverTx";
  value: Uint8Array;
}
export interface ResponseDeliverTxAmino {
  code?: number;
  data?: string;
  /** nondeterministic */
  log?: string;
  /** nondeterministic */
  info?: string;
  gas_wanted?: string;
  gas_used?: string;
  events?: EventAmino[];
  codespace?: string;
}
export interface ResponseDeliverTxSDKType {
  code: number;
  data: Uint8Array;
  log: string;
  info: string;
  gas_wanted: bigint;
  gas_used: bigint;
  events: EventSDKType[];
  codespace: string;
}
export interface ResponseEndBlock {
  validatorUpdates: ValidatorUpdate[];
  consensusParamUpdates?: ConsensusParams;
  events: Event[];
}
export interface ResponseEndBlockProtoMsg {
  typeUrl: "/tendermint.abci.ResponseEndBlock";
  value: Uint8Array;
}
export interface ResponseEndBlockAmino {
  validator_updates?: ValidatorUpdateAmino[];
  consensus_param_updates?: ConsensusParamsAmino;
  events?: EventAmino[];
}
export interface ResponseEndBlockSDKType {
  validator_updates: ValidatorUpdateSDKType[];
  consensus_param_updates?: ConsensusParamsSDKType;
  events: EventSDKType[];
}
export interface ResponseCommit {
  /** reserve 1 */
  data: Uint8Array;
  retainHeight: bigint;
}
export interface ResponseCommitProtoMsg {
  typeUrl: "/tendermint.abci.ResponseCommit";
  value: Uint8Array;
}
export interface ResponseCommitAmino {
  /** reserve 1 */
  data?: string;
  retain_height?: string;
}
export interface ResponseCommitSDKType {
  data: Uint8Array;
  retain_height: bigint;
}
export interface ResponseListSnapshots {
  snapshots: Snapshot[];
}
export interface ResponseListSnapshotsProtoMsg {
  typeUrl: "/tendermint.abci.ResponseListSnapshots";
  value: Uint8Array;
}
export interface ResponseListSnapshotsAmino {
  snapshots?: SnapshotAmino[];
}
export interface ResponseListSnapshotsSDKType {
  snapshots: SnapshotSDKType[];
}
export interface ResponseOfferSnapshot {
  result: ResponseOfferSnapshot_Result;
}
export interface ResponseOfferSnapshotProtoMsg {
  typeUrl: "/tendermint.abci.ResponseOfferSnapshot";
  value: Uint8Array;
}
export interface ResponseOfferSnapshotAmino {
  result?: ResponseOfferSnapshot_Result;
}
export interface ResponseOfferSnapshotSDKType {
  result: ResponseOfferSnapshot_Result;
}
export interface ResponseLoadSnapshotChunk {
  chunk: Uint8Array;
}
export interface ResponseLoadSnapshotChunkProtoMsg {
  typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk";
  value: Uint8Array;
}
export interface ResponseLoadSnapshotChunkAmino {
  chunk?: string;
}
export interface ResponseLoadSnapshotChunkSDKType {
  chunk: Uint8Array;
}
export interface ResponseApplySnapshotChunk {
  result: ResponseApplySnapshotChunk_Result;
  /** Chunks to refetch and reapply */
  refetchChunks: number[];
  /** Chunk senders to reject and ban */
  rejectSenders: string[];
}
export interface ResponseApplySnapshotChunkProtoMsg {
  typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk";
  value: Uint8Array;
}
export interface ResponseApplySnapshotChunkAmino {
  result?: ResponseApplySnapshotChunk_Result;
  /** Chunks to refetch and reapply */
  refetch_chunks?: number[];
  /** Chunk senders to reject and ban */
  reject_senders?: string[];
}
export interface ResponseApplySnapshotChunkSDKType {
  result: ResponseApplySnapshotChunk_Result;
  refetch_chunks: number[];
  reject_senders: string[];
}
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParams {
  block?: BlockParams;
  evidence?: EvidenceParams;
  validator?: ValidatorParams;
  version?: VersionParams;
}
export interface ConsensusParamsProtoMsg {
  typeUrl: "/tendermint.abci.ConsensusParams";
  value: Uint8Array;
}
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParamsAmino {
  block?: BlockParamsAmino;
  evidence?: EvidenceParamsAmino;
  validator?: ValidatorParamsAmino;
  version?: VersionParamsAmino;
}
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParamsSDKType {
  block?: BlockParamsSDKType;
  evidence?: EvidenceParamsSDKType;
  validator?: ValidatorParamsSDKType;
  version?: VersionParamsSDKType;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
  /** Note: must be greater than 0 */
  maxBytes: bigint;
  /** Note: must be greater or equal to -1 */
  maxGas: bigint;
}
export interface BlockParamsProtoMsg {
  typeUrl: "/tendermint.abci.BlockParams";
  value: Uint8Array;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsAmino {
  /** Note: must be greater than 0 */
  max_bytes?: string;
  /** Note: must be greater or equal to -1 */
  max_gas?: string;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsSDKType {
  max_bytes: bigint;
  max_gas: bigint;
}
export interface LastCommitInfo {
  round: number;
  votes: VoteInfo[];
}
export interface LastCommitInfoProtoMsg {
  typeUrl: "/tendermint.abci.LastCommitInfo";
  value: Uint8Array;
}
export interface LastCommitInfoAmino {
  round?: number;
  votes?: VoteInfoAmino[];
}
export interface LastCommitInfoSDKType {
  round: number;
  votes: VoteInfoSDKType[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
  type: string;
  attributes: EventAttribute[];
}
export interface EventProtoMsg {
  typeUrl: "/tendermint.abci.Event";
  value: Uint8Array;
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface EventAmino {
  type?: string;
  attributes?: EventAttributeAmino[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface EventSDKType {
  type: string;
  attributes: EventAttributeSDKType[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
  key: Uint8Array;
  value: Uint8Array;
  /** nondeterministic */
  index: boolean;
}
export interface EventAttributeProtoMsg {
  typeUrl: "/tendermint.abci.EventAttribute";
  value: Uint8Array;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttributeAmino {
  key?: string;
  value?: string;
  /** nondeterministic */
  index?: boolean;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttributeSDKType {
  key: Uint8Array;
  value: Uint8Array;
  index: boolean;
}
/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */
export interface TxResult {
  height: bigint;
  index: number;
  tx: Uint8Array;
  result: ResponseDeliverTx;
}
export interface TxResultProtoMsg {
  typeUrl: "/tendermint.abci.TxResult";
  value: Uint8Array;
}
/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */
export interface TxResultAmino {
  height?: string;
  index?: number;
  tx?: string;
  result?: ResponseDeliverTxAmino;
}
/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */
export interface TxResultSDKType {
  height: bigint;
  index: number;
  tx: Uint8Array;
  result: ResponseDeliverTxSDKType;
}
/** Validator */
export interface Validator {
  /** The first 20 bytes of SHA256(public key) */
  address: Uint8Array;
  /** PubKey pub_key = 2 [(gogoproto.nullable)=false]; */
  power: bigint;
}
export interface ValidatorProtoMsg {
  typeUrl: "/tendermint.abci.Validator";
  value: Uint8Array;
}
/** Validator */
export interface ValidatorAmino {
  /** The first 20 bytes of SHA256(public key) */
  address?: string;
  /** PubKey pub_key = 2 [(gogoproto.nullable)=false]; */
  power?: string;
}
/** Validator */
export interface ValidatorSDKType {
  address: Uint8Array;
  power: bigint;
}
/** ValidatorUpdate */
export interface ValidatorUpdate {
  pubKey: PublicKey;
  power: bigint;
}
export interface ValidatorUpdateProtoMsg {
  typeUrl: "/tendermint.abci.ValidatorUpdate";
  value: Uint8Array;
}
/** ValidatorUpdate */
export interface ValidatorUpdateAmino {
  pub_key?: PublicKeyAmino;
  power?: string;
}
/** ValidatorUpdate */
export interface ValidatorUpdateSDKType {
  pub_key: PublicKeySDKType;
  power: bigint;
}
/** VoteInfo */
export interface VoteInfo {
  validator: Validator;
  signedLastBlock: boolean;
}
export interface VoteInfoProtoMsg {
  typeUrl: "/tendermint.abci.VoteInfo";
  value: Uint8Array;
}
/** VoteInfo */
export interface VoteInfoAmino {
  validator?: ValidatorAmino;
  signed_last_block?: boolean;
}
/** VoteInfo */
export interface VoteInfoSDKType {
  validator: ValidatorSDKType;
  signed_last_block: boolean;
}
export interface Evidence {
  type: EvidenceType;
  /** The offending validator */
  validator: Validator;
  /** The height when the offense occurred */
  height: bigint;
  /** The corresponding time where the offense occurred */
  time: Date;
  /**
   * Total voting power of the validator set in case the ABCI application does
   * not store historical validators.
   * https://github.com/tendermint/tendermint/issues/4581
   */
  totalVotingPower: bigint;
}
export interface EvidenceProtoMsg {
  typeUrl: "/tendermint.abci.Evidence";
  value: Uint8Array;
}
export interface EvidenceAmino {
  type?: EvidenceType;
  /** The offending validator */
  validator?: ValidatorAmino;
  /** The height when the offense occurred */
  height?: string;
  /** The corresponding time where the offense occurred */
  time?: string;
  /**
   * Total voting power of the validator set in case the ABCI application does
   * not store historical validators.
   * https://github.com/tendermint/tendermint/issues/4581
   */
  total_voting_power?: string;
}
export interface EvidenceSDKType {
  type: EvidenceType;
  validator: ValidatorSDKType;
  height: bigint;
  time: Date;
  total_voting_power: bigint;
}
export interface Snapshot {
  /** The height at which the snapshot was taken */
  height: bigint;
  /** The application-specific snapshot format */
  format: number;
  /** Number of chunks in the snapshot */
  chunks: number;
  /** Arbitrary snapshot hash, equal only if identical */
  hash: Uint8Array;
  /** Arbitrary application metadata */
  metadata: Uint8Array;
}
export interface SnapshotProtoMsg {
  typeUrl: "/tendermint.abci.Snapshot";
  value: Uint8Array;
}
export interface SnapshotAmino {
  /** The height at which the snapshot was taken */
  height?: string;
  /** The application-specific snapshot format */
  format?: number;
  /** Number of chunks in the snapshot */
  chunks?: number;
  /** Arbitrary snapshot hash, equal only if identical */
  hash?: string;
  /** Arbitrary application metadata */
  metadata?: string;
}
export interface SnapshotSDKType {
  height: bigint;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: Uint8Array;
}
function createBaseRequest(): Request {
  return {
    echo: undefined,
    flush: undefined,
    info: undefined,
    setOption: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined
  };
}
export const Request = {
  typeUrl: "/tendermint.abci.Request",
  encode(message: Request, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.echo !== undefined) {
      RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
    }
    if (message.info !== undefined) {
      RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    if (message.setOption !== undefined) {
      RequestSetOption.encode(message.setOption, writer.uint32(34).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      RequestInitChain.encode(message.initChain, writer.uint32(42).fork()).ldelim();
    }
    if (message.query !== undefined) {
      RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      RequestBeginBlock.encode(message.beginBlock, writer.uint32(58).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
    }
    if (message.deliverTx !== undefined) {
      RequestDeliverTx.encode(message.deliverTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.endBlock !== undefined) {
      RequestEndBlock.encode(message.endBlock, writer.uint32(82).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      RequestListSnapshots.encode(message.listSnapshots, writer.uint32(98).fork()).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(106).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(114).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Request {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.echo = RequestEcho.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.flush = RequestFlush.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.info = RequestInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.setOption = RequestSetOption.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.initChain = RequestInitChain.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.query = RequestQuery.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.beginBlock = RequestBeginBlock.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 8:
          message.checkTx = RequestCheckTx.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 9:
          message.deliverTx = RequestDeliverTx.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 10:
          message.endBlock = RequestEndBlock.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 11:
          message.commit = RequestCommit.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 12:
          message.listSnapshots = RequestListSnapshots.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 13:
          message.offerSnapshot = RequestOfferSnapshot.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 14:
          message.loadSnapshotChunk = RequestLoadSnapshotChunk.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 15:
          message.applySnapshotChunk = RequestApplySnapshotChunk.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Request {
    const obj = createBaseRequest();
    if (isSet(object.echo)) obj.echo = RequestEcho.fromJSON(object.echo);
    if (isSet(object.flush)) obj.flush = RequestFlush.fromJSON(object.flush);
    if (isSet(object.info)) obj.info = RequestInfo.fromJSON(object.info);
    if (isSet(object.setOption)) obj.setOption = RequestSetOption.fromJSON(object.setOption);
    if (isSet(object.initChain)) obj.initChain = RequestInitChain.fromJSON(object.initChain);
    if (isSet(object.query)) obj.query = RequestQuery.fromJSON(object.query);
    if (isSet(object.beginBlock)) obj.beginBlock = RequestBeginBlock.fromJSON(object.beginBlock);
    if (isSet(object.checkTx)) obj.checkTx = RequestCheckTx.fromJSON(object.checkTx);
    if (isSet(object.deliverTx)) obj.deliverTx = RequestDeliverTx.fromJSON(object.deliverTx);
    if (isSet(object.endBlock)) obj.endBlock = RequestEndBlock.fromJSON(object.endBlock);
    if (isSet(object.commit)) obj.commit = RequestCommit.fromJSON(object.commit);
    if (isSet(object.listSnapshots)) obj.listSnapshots = RequestListSnapshots.fromJSON(object.listSnapshots);
    if (isSet(object.offerSnapshot)) obj.offerSnapshot = RequestOfferSnapshot.fromJSON(object.offerSnapshot);
    if (isSet(object.loadSnapshotChunk)) obj.loadSnapshotChunk = RequestLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk);
    if (isSet(object.applySnapshotChunk)) obj.applySnapshotChunk = RequestApplySnapshotChunk.fromJSON(object.applySnapshotChunk);
    return obj;
  },
  fromPartial(object: DeepPartial<Request>): Request {
    const message = createBaseRequest();
    if (object.echo !== undefined && object.echo !== null) {
      message.echo = RequestEcho.fromPartial(object.echo);
    }
    if (object.flush !== undefined && object.flush !== null) {
      message.flush = RequestFlush.fromPartial(object.flush);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = RequestInfo.fromPartial(object.info);
    }
    if (object.setOption !== undefined && object.setOption !== null) {
      message.setOption = RequestSetOption.fromPartial(object.setOption);
    }
    if (object.initChain !== undefined && object.initChain !== null) {
      message.initChain = RequestInitChain.fromPartial(object.initChain);
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = RequestQuery.fromPartial(object.query);
    }
    if (object.beginBlock !== undefined && object.beginBlock !== null) {
      message.beginBlock = RequestBeginBlock.fromPartial(object.beginBlock);
    }
    if (object.checkTx !== undefined && object.checkTx !== null) {
      message.checkTx = RequestCheckTx.fromPartial(object.checkTx);
    }
    if (object.deliverTx !== undefined && object.deliverTx !== null) {
      message.deliverTx = RequestDeliverTx.fromPartial(object.deliverTx);
    }
    if (object.endBlock !== undefined && object.endBlock !== null) {
      message.endBlock = RequestEndBlock.fromPartial(object.endBlock);
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = RequestCommit.fromPartial(object.commit);
    }
    if (object.listSnapshots !== undefined && object.listSnapshots !== null) {
      message.listSnapshots = RequestListSnapshots.fromPartial(object.listSnapshots);
    }
    if (object.offerSnapshot !== undefined && object.offerSnapshot !== null) {
      message.offerSnapshot = RequestOfferSnapshot.fromPartial(object.offerSnapshot);
    }
    if (object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null) {
      message.loadSnapshotChunk = RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk);
    }
    if (object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null) {
      message.applySnapshotChunk = RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk);
    }
    return message;
  },
  fromSDK(object: RequestSDKType): Request {
    return {
      echo: object.echo ? RequestEcho.fromSDK(object.echo) : undefined,
      flush: object.flush ? RequestFlush.fromSDK(object.flush) : undefined,
      info: object.info ? RequestInfo.fromSDK(object.info) : undefined,
      setOption: object.set_option ? RequestSetOption.fromSDK(object.set_option) : undefined,
      initChain: object.init_chain ? RequestInitChain.fromSDK(object.init_chain) : undefined,
      query: object.query ? RequestQuery.fromSDK(object.query) : undefined,
      beginBlock: object.begin_block ? RequestBeginBlock.fromSDK(object.begin_block) : undefined,
      checkTx: object.check_tx ? RequestCheckTx.fromSDK(object.check_tx) : undefined,
      deliverTx: object.deliver_tx ? RequestDeliverTx.fromSDK(object.deliver_tx) : undefined,
      endBlock: object.end_block ? RequestEndBlock.fromSDK(object.end_block) : undefined,
      commit: object.commit ? RequestCommit.fromSDK(object.commit) : undefined,
      listSnapshots: object.list_snapshots ? RequestListSnapshots.fromSDK(object.list_snapshots) : undefined,
      offerSnapshot: object.offer_snapshot ? RequestOfferSnapshot.fromSDK(object.offer_snapshot) : undefined,
      loadSnapshotChunk: object.load_snapshot_chunk ? RequestLoadSnapshotChunk.fromSDK(object.load_snapshot_chunk) : undefined,
      applySnapshotChunk: object.apply_snapshot_chunk ? RequestApplySnapshotChunk.fromSDK(object.apply_snapshot_chunk) : undefined
    };
  },
  toSDK(message: Request): RequestSDKType {
    const obj: any = {};
    message.echo !== undefined && (obj.echo = message.echo ? RequestEcho.toSDK(message.echo) : undefined);
    message.flush !== undefined && (obj.flush = message.flush ? RequestFlush.toSDK(message.flush) : undefined);
    message.info !== undefined && (obj.info = message.info ? RequestInfo.toSDK(message.info) : undefined);
    message.setOption !== undefined && (obj.set_option = message.setOption ? RequestSetOption.toSDK(message.setOption) : undefined);
    message.initChain !== undefined && (obj.init_chain = message.initChain ? RequestInitChain.toSDK(message.initChain) : undefined);
    message.query !== undefined && (obj.query = message.query ? RequestQuery.toSDK(message.query) : undefined);
    message.beginBlock !== undefined && (obj.begin_block = message.beginBlock ? RequestBeginBlock.toSDK(message.beginBlock) : undefined);
    message.checkTx !== undefined && (obj.check_tx = message.checkTx ? RequestCheckTx.toSDK(message.checkTx) : undefined);
    message.deliverTx !== undefined && (obj.deliver_tx = message.deliverTx ? RequestDeliverTx.toSDK(message.deliverTx) : undefined);
    message.endBlock !== undefined && (obj.end_block = message.endBlock ? RequestEndBlock.toSDK(message.endBlock) : undefined);
    message.commit !== undefined && (obj.commit = message.commit ? RequestCommit.toSDK(message.commit) : undefined);
    message.listSnapshots !== undefined && (obj.list_snapshots = message.listSnapshots ? RequestListSnapshots.toSDK(message.listSnapshots) : undefined);
    message.offerSnapshot !== undefined && (obj.offer_snapshot = message.offerSnapshot ? RequestOfferSnapshot.toSDK(message.offerSnapshot) : undefined);
    message.loadSnapshotChunk !== undefined && (obj.load_snapshot_chunk = message.loadSnapshotChunk ? RequestLoadSnapshotChunk.toSDK(message.loadSnapshotChunk) : undefined);
    message.applySnapshotChunk !== undefined && (obj.apply_snapshot_chunk = message.applySnapshotChunk ? RequestApplySnapshotChunk.toSDK(message.applySnapshotChunk) : undefined);
    return obj;
  },
  fromAmino(object: RequestAmino): Request {
    const message = createBaseRequest();
    if (object.echo !== undefined && object.echo !== null) {
      message.echo = RequestEcho.fromAmino(object.echo);
    }
    if (object.flush !== undefined && object.flush !== null) {
      message.flush = RequestFlush.fromAmino(object.flush);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = RequestInfo.fromAmino(object.info);
    }
    if (object.set_option !== undefined && object.set_option !== null) {
      message.setOption = RequestSetOption.fromAmino(object.set_option);
    }
    if (object.init_chain !== undefined && object.init_chain !== null) {
      message.initChain = RequestInitChain.fromAmino(object.init_chain);
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = RequestQuery.fromAmino(object.query);
    }
    if (object.begin_block !== undefined && object.begin_block !== null) {
      message.beginBlock = RequestBeginBlock.fromAmino(object.begin_block);
    }
    if (object.check_tx !== undefined && object.check_tx !== null) {
      message.checkTx = RequestCheckTx.fromAmino(object.check_tx);
    }
    if (object.deliver_tx !== undefined && object.deliver_tx !== null) {
      message.deliverTx = RequestDeliverTx.fromAmino(object.deliver_tx);
    }
    if (object.end_block !== undefined && object.end_block !== null) {
      message.endBlock = RequestEndBlock.fromAmino(object.end_block);
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = RequestCommit.fromAmino(object.commit);
    }
    if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
      message.listSnapshots = RequestListSnapshots.fromAmino(object.list_snapshots);
    }
    if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
      message.offerSnapshot = RequestOfferSnapshot.fromAmino(object.offer_snapshot);
    }
    if (object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null) {
      message.loadSnapshotChunk = RequestLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk);
    }
    if (object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null) {
      message.applySnapshotChunk = RequestApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk);
    }
    return message;
  },
  toAmino(message: Request, useInterfaces: boolean = true): RequestAmino {
    const obj: any = {};
    obj.echo = message.echo ? RequestEcho.toAmino(message.echo, useInterfaces) : undefined;
    obj.flush = message.flush ? RequestFlush.toAmino(message.flush, useInterfaces) : undefined;
    obj.info = message.info ? RequestInfo.toAmino(message.info, useInterfaces) : undefined;
    obj.set_option = message.setOption ? RequestSetOption.toAmino(message.setOption, useInterfaces) : undefined;
    obj.init_chain = message.initChain ? RequestInitChain.toAmino(message.initChain, useInterfaces) : undefined;
    obj.query = message.query ? RequestQuery.toAmino(message.query, useInterfaces) : undefined;
    obj.begin_block = message.beginBlock ? RequestBeginBlock.toAmino(message.beginBlock, useInterfaces) : undefined;
    obj.check_tx = message.checkTx ? RequestCheckTx.toAmino(message.checkTx, useInterfaces) : undefined;
    obj.deliver_tx = message.deliverTx ? RequestDeliverTx.toAmino(message.deliverTx, useInterfaces) : undefined;
    obj.end_block = message.endBlock ? RequestEndBlock.toAmino(message.endBlock, useInterfaces) : undefined;
    obj.commit = message.commit ? RequestCommit.toAmino(message.commit, useInterfaces) : undefined;
    obj.list_snapshots = message.listSnapshots ? RequestListSnapshots.toAmino(message.listSnapshots, useInterfaces) : undefined;
    obj.offer_snapshot = message.offerSnapshot ? RequestOfferSnapshot.toAmino(message.offerSnapshot, useInterfaces) : undefined;
    obj.load_snapshot_chunk = message.loadSnapshotChunk ? RequestLoadSnapshotChunk.toAmino(message.loadSnapshotChunk, useInterfaces) : undefined;
    obj.apply_snapshot_chunk = message.applySnapshotChunk ? RequestApplySnapshotChunk.toAmino(message.applySnapshotChunk, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: RequestProtoMsg, useInterfaces: boolean = true): Request {
    return Request.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Request): Uint8Array {
    return Request.encode(message).finish();
  },
  toProtoMsg(message: Request): RequestProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Request",
      value: Request.encode(message).finish()
    };
  }
};
function createBaseRequestEcho(): RequestEcho {
  return {
    message: ""
  };
}
export const RequestEcho = {
  typeUrl: "/tendermint.abci.RequestEcho",
  encode(message: RequestEcho, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RequestEcho {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestEcho {
    const obj = createBaseRequestEcho();
    if (isSet(object.message)) obj.message = String(object.message);
    return obj;
  },
  fromPartial(object: DeepPartial<RequestEcho>): RequestEcho {
    const message = createBaseRequestEcho();
    message.message = object.message ?? "";
    return message;
  },
  fromSDK(object: RequestEchoSDKType): RequestEcho {
    return {
      message: object?.message
    };
  },
  toSDK(message: RequestEcho): RequestEchoSDKType {
    const obj: any = {};
    obj.message = message.message;
    return obj;
  },
  fromAmino(object: RequestEchoAmino): RequestEcho {
    const message = createBaseRequestEcho();
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: RequestEcho, useInterfaces: boolean = true): RequestEchoAmino {
    const obj: any = {};
    obj.message = message.message === "" ? undefined : message.message;
    return obj;
  },
  fromProtoMsg(message: RequestEchoProtoMsg, useInterfaces: boolean = true): RequestEcho {
    return RequestEcho.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RequestEcho): Uint8Array {
    return RequestEcho.encode(message).finish();
  },
  toProtoMsg(message: RequestEcho): RequestEchoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestEcho",
      value: RequestEcho.encode(message).finish()
    };
  }
};
function createBaseRequestFlush(): RequestFlush {
  return {};
}
export const RequestFlush = {
  typeUrl: "/tendermint.abci.RequestFlush",
  encode(_: RequestFlush, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RequestFlush {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestFlush();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): RequestFlush {
    const obj = createBaseRequestFlush();
    return obj;
  },
  fromPartial(_: DeepPartial<RequestFlush>): RequestFlush {
    const message = createBaseRequestFlush();
    return message;
  },
  fromSDK(_: RequestFlushSDKType): RequestFlush {
    return {};
  },
  toSDK(_: RequestFlush): RequestFlushSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: RequestFlushAmino): RequestFlush {
    const message = createBaseRequestFlush();
    return message;
  },
  toAmino(_: RequestFlush, useInterfaces: boolean = true): RequestFlushAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: RequestFlushProtoMsg, useInterfaces: boolean = true): RequestFlush {
    return RequestFlush.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RequestFlush): Uint8Array {
    return RequestFlush.encode(message).finish();
  },
  toProtoMsg(message: RequestFlush): RequestFlushProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestFlush",
      value: RequestFlush.encode(message).finish()
    };
  }
};
function createBaseRequestInfo(): RequestInfo {
  return {
    version: "",
    blockVersion: BigInt(0),
    p2pVersion: BigInt(0)
  };
}
export const RequestInfo = {
  typeUrl: "/tendermint.abci.RequestInfo",
  encode(message: RequestInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.blockVersion !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockVersion);
    }
    if (message.p2pVersion !== BigInt(0)) {
      writer.uint32(24).uint64(message.p2pVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RequestInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.blockVersion = reader.uint64();
          break;
        case 3:
          message.p2pVersion = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestInfo {
    const obj = createBaseRequestInfo();
    if (isSet(object.version)) obj.version = String(object.version);
    if (isSet(object.blockVersion)) obj.blockVersion = BigInt(object.blockVersion.toString());
    if (isSet(object.p2pVersion)) obj.p2pVersion = BigInt(object.p2pVersion.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<RequestInfo>): RequestInfo {
    const message = createBaseRequestInfo();
    message.version = object.version ?? "";
    if (object.blockVersion !== undefined && object.blockVersion !== null) {
      message.blockVersion = BigInt(object.blockVersion.toString());
    }
    if (object.p2pVersion !== undefined && object.p2pVersion !== null) {
      message.p2pVersion = BigInt(object.p2pVersion.toString());
    }
    return message;
  },
  fromSDK(object: RequestInfoSDKType): RequestInfo {
    return {
      version: object?.version,
      blockVersion: object?.block_version,
      p2pVersion: object?.p2p_version
    };
  },
  toSDK(message: RequestInfo): RequestInfoSDKType {
    const obj: any = {};
    obj.version = message.version;
    obj.block_version = message.blockVersion;
    obj.p2p_version = message.p2pVersion;
    return obj;
  },
  fromAmino(object: RequestInfoAmino): RequestInfo {
    const message = createBaseRequestInfo();
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.block_version !== undefined && object.block_version !== null) {
      message.blockVersion = BigInt(object.block_version);
    }
    if (object.p2p_version !== undefined && object.p2p_version !== null) {
      message.p2pVersion = BigInt(object.p2p_version);
    }
    return message;
  },
  toAmino(message: RequestInfo, useInterfaces: boolean = true): RequestInfoAmino {
    const obj: any = {};
    obj.version = message.version === "" ? undefined : message.version;
    obj.block_version = message.blockVersion !== BigInt(0) ? message.blockVersion?.toString() : undefined;
    obj.p2p_version = message.p2pVersion !== BigInt(0) ? message.p2pVersion?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: RequestInfoProtoMsg, useInterfaces: boolean = true): RequestInfo {
    return RequestInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RequestInfo): Uint8Array {
    return RequestInfo.encode(message).finish();
  },
  toProtoMsg(message: RequestInfo): RequestInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestInfo",
      value: RequestInfo.encode(message).finish()
    };
  }
};
function createBaseRequestSetOption(): RequestSetOption {
  return {
    key: "",
    value: ""
  };
}
export const RequestSetOption = {
  typeUrl: "/tendermint.abci.RequestSetOption",
  encode(message: RequestSetOption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RequestSetOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestSetOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestSetOption {
    const obj = createBaseRequestSetOption();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  fromPartial(object: DeepPartial<RequestSetOption>): RequestSetOption {
    const message = createBaseRequestSetOption();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: RequestSetOptionSDKType): RequestSetOption {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: RequestSetOption): RequestSetOptionSDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: RequestSetOptionAmino): RequestSetOption {
    const message = createBaseRequestSetOption();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: RequestSetOption, useInterfaces: boolean = true): RequestSetOptionAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromProtoMsg(message: RequestSetOptionProtoMsg, useInterfaces: boolean = true): RequestSetOption {
    return RequestSetOption.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RequestSetOption): Uint8Array {
    return RequestSetOption.encode(message).finish();
  },
  toProtoMsg(message: RequestSetOption): RequestSetOptionProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestSetOption",
      value: RequestSetOption.encode(message).finish()
    };
  }
};
function createBaseRequestInitChain(): RequestInitChain {
  return {
    time: new Date(),
    chainId: "",
    consensusParams: undefined,
    validators: [],
    appStateBytes: new Uint8Array(),
    initialHeight: BigInt(0)
  };
}
export const RequestInitChain = {
  typeUrl: "/tendermint.abci.RequestInitChain",
  encode(message: RequestInitChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.appStateBytes.length !== 0) {
      writer.uint32(42).bytes(message.appStateBytes);
    }
    if (message.initialHeight !== BigInt(0)) {
      writer.uint32(48).int64(message.initialHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RequestInitChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 5:
          message.appStateBytes = reader.bytes();
          break;
        case 6:
          message.initialHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestInitChain {
    const obj = createBaseRequestInitChain();
    if (isSet(object.time)) obj.time = new Date(object.time);
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.consensusParams)) obj.consensusParams = ConsensusParams.fromJSON(object.consensusParams);
    if (Array.isArray(object?.validators)) obj.validators = object.validators.map((e: any) => ValidatorUpdate.fromJSON(e));
    if (isSet(object.appStateBytes)) obj.appStateBytes = bytesFromBase64(object.appStateBytes);
    if (isSet(object.initialHeight)) obj.initialHeight = BigInt(object.initialHeight.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<RequestInitChain>): RequestInitChain {
    const message = createBaseRequestInitChain();
    message.time = object.time ?? undefined;
    message.chainId = object.chainId ?? "";
    if (object.consensusParams !== undefined && object.consensusParams !== null) {
      message.consensusParams = ConsensusParams.fromPartial(object.consensusParams);
    }
    message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.appStateBytes = object.appStateBytes ?? new Uint8Array();
    if (object.initialHeight !== undefined && object.initialHeight !== null) {
      message.initialHeight = BigInt(object.initialHeight.toString());
    }
    return message;
  },
  fromSDK(object: RequestInitChainSDKType): RequestInitChain {
    return {
      time: object.time ?? undefined,
      chainId: object?.chain_id,
      consensusParams: object.consensus_params ? ConsensusParams.fromSDK(object.consensus_params) : undefined,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => ValidatorUpdate.fromSDK(e)) : [],
      appStateBytes: object?.app_state_bytes,
      initialHeight: object?.initial_height
    };
  },
  toSDK(message: RequestInitChain): RequestInitChainSDKType {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time ?? undefined);
    obj.chain_id = message.chainId;
    message.consensusParams !== undefined && (obj.consensus_params = message.consensusParams ? ConsensusParams.toSDK(message.consensusParams) : undefined);
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? ValidatorUpdate.toSDK(e) : undefined);
    } else {
      obj.validators = [];
    }
    obj.app_state_bytes = message.appStateBytes;
    obj.initial_height = message.initialHeight;
    return obj;
  },
  fromAmino(object: RequestInitChainAmino): RequestInitChain {
    const message = createBaseRequestInitChain();
    if (object.time !== undefined && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.consensus_params !== undefined && object.consensus_params !== null) {
      message.consensusParams = ConsensusParams.fromAmino(object.consensus_params);
    }
    message.validators = object.validators?.map(e => ValidatorUpdate.fromAmino(e)) || [];
    if (object.app_state_bytes !== undefined && object.app_state_bytes !== null) {
      message.appStateBytes = bytesFromBase64(object.app_state_bytes);
    }
    if (object.initial_height !== undefined && object.initial_height !== null) {
      message.initialHeight = BigInt(object.initial_height);
    }
    return message;
  },
  toAmino(message: RequestInitChain, useInterfaces: boolean = true): RequestInitChainAmino {
    const obj: any = {};
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.consensus_params = message.consensusParams ? ConsensusParams.toAmino(message.consensusParams, useInterfaces) : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? ValidatorUpdate.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.app_state_bytes = message.appStateBytes ? base64FromBytes(message.appStateBytes) : undefined;
    obj.initial_height = message.initialHeight !== BigInt(0) ? message.initialHeight?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: RequestInitChainProtoMsg, useInterfaces: boolean = true): RequestInitChain {
    return RequestInitChain.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RequestInitChain): Uint8Array {
    return RequestInitChain.encode(message).finish();
  },
  toProtoMsg(message: RequestInitChain): RequestInitChainProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestInitChain",
      value: RequestInitChain.encode(message).finish()
    };
  }
};
function createBaseRequestQuery(): RequestQuery {
  return {
    data: new Uint8Array(),
    path: "",
    height: BigInt(0),
    prove: false
  };
}
export const RequestQuery = {
  typeUrl: "/tendermint.abci.RequestQuery",
  encode(message: RequestQuery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RequestQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.prove = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestQuery {
    const obj = createBaseRequestQuery();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    if (isSet(object.path)) obj.path = String(object.path);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.prove)) obj.prove = Boolean(object.prove);
    return obj;
  },
  fromPartial(object: DeepPartial<RequestQuery>): RequestQuery {
    const message = createBaseRequestQuery();
    message.data = object.data ?? new Uint8Array();
    message.path = object.path ?? "";
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.prove = object.prove ?? false;
    return message;
  },
  fromSDK(object: RequestQuerySDKType): RequestQuery {
    return {
      data: object?.data,
      path: object?.path,
      height: object?.height,
      prove: object?.prove
    };
  },
  toSDK(message: RequestQuery): RequestQuerySDKType {
    const obj: any = {};
    obj.data = message.data;
    obj.path = message.path;
    obj.height = message.height;
    obj.prove = message.prove;
    return obj;
  },
  fromAmino(object: RequestQueryAmino): RequestQuery {
    const message = createBaseRequestQuery();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.prove !== undefined && object.prove !== null) {
      message.prove = object.prove;
    }
    return message;
  },
  toAmino(message: RequestQuery, useInterfaces: boolean = true): RequestQueryAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.path = message.path === "" ? undefined : message.path;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.prove = message.prove === false ? undefined : message.prove;
    return obj;
  },
  fromProtoMsg(message: RequestQueryProtoMsg, useInterfaces: boolean = true): RequestQuery {
    return RequestQuery.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RequestQuery): Uint8Array {
    return RequestQuery.encode(message).finish();
  },
  toProtoMsg(message: RequestQuery): RequestQueryProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestQuery",
      value: RequestQuery.encode(message).finish()
    };
  }
};
function createBaseRequestBeginBlock(): RequestBeginBlock {
  return {
    hash: new Uint8Array(),
    header: Header.fromPartial({}),
    lastCommitInfo: LastCommitInfo.fromPartial({}),
    byzantineValidators: []
  };
}
export const RequestBeginBlock = {
  typeUrl: "/tendermint.abci.RequestBeginBlock",
  encode(message: RequestBeginBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastCommitInfo !== undefined) {
      LastCommitInfo.encode(message.lastCommitInfo, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.byzantineValidators) {
      Evidence.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RequestBeginBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestBeginBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.header = Header.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.lastCommitInfo = LastCommitInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.byzantineValidators.push(Evidence.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestBeginBlock {
    const obj = createBaseRequestBeginBlock();
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    if (isSet(object.header)) obj.header = Header.fromJSON(object.header);
    if (isSet(object.lastCommitInfo)) obj.lastCommitInfo = LastCommitInfo.fromJSON(object.lastCommitInfo);
    if (Array.isArray(object?.byzantineValidators)) obj.byzantineValidators = object.byzantineValidators.map((e: any) => Evidence.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<RequestBeginBlock>): RequestBeginBlock {
    const message = createBaseRequestBeginBlock();
    message.hash = object.hash ?? new Uint8Array();
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromPartial(object.header);
    }
    if (object.lastCommitInfo !== undefined && object.lastCommitInfo !== null) {
      message.lastCommitInfo = LastCommitInfo.fromPartial(object.lastCommitInfo);
    }
    message.byzantineValidators = object.byzantineValidators?.map(e => Evidence.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: RequestBeginBlockSDKType): RequestBeginBlock {
    return {
      hash: object?.hash,
      header: object.header ? Header.fromSDK(object.header) : undefined,
      lastCommitInfo: object.last_commit_info ? LastCommitInfo.fromSDK(object.last_commit_info) : undefined,
      byzantineValidators: Array.isArray(object?.byzantine_validators) ? object.byzantine_validators.map((e: any) => Evidence.fromSDK(e)) : []
    };
  },
  toSDK(message: RequestBeginBlock): RequestBeginBlockSDKType {
    const obj: any = {};
    obj.hash = message.hash;
    message.header !== undefined && (obj.header = message.header ? Header.toSDK(message.header) : undefined);
    message.lastCommitInfo !== undefined && (obj.last_commit_info = message.lastCommitInfo ? LastCommitInfo.toSDK(message.lastCommitInfo) : undefined);
    if (message.byzantineValidators) {
      obj.byzantine_validators = message.byzantineValidators.map(e => e ? Evidence.toSDK(e) : undefined);
    } else {
      obj.byzantine_validators = [];
    }
    return obj;
  },
  fromAmino(object: RequestBeginBlockAmino): RequestBeginBlock {
    const message = createBaseRequestBeginBlock();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    if (object.last_commit_info !== undefined && object.last_commit_info !== null) {
      message.lastCommitInfo = LastCommitInfo.fromAmino(object.last_commit_info);
    }
    message.byzantineValidators = object.byzantine_validators?.map(e => Evidence.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RequestBeginBlock, useInterfaces: boolean = true): RequestBeginBlockAmino {
    const obj: any = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.header = message.header ? Header.toAmino(message.header, useInterfaces) : undefined;
    obj.last_commit_info = message.lastCommitInfo ? LastCommitInfo.toAmino(message.lastCommitInfo, useInterfaces) : undefined;
    if (message.byzantineValidators) {
      obj.byzantine_validators = message.byzantineValidators.map(e => e ? Evidence.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.byzantine_validators = message.byzantineValidators;
    }
    return obj;
  },
  fromProtoMsg(message: RequestBeginBlockProtoMsg, useInterfaces: boolean = true): RequestBeginBlock {
    return RequestBeginBlock.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RequestBeginBlock): Uint8Array {
    return RequestBeginBlock.encode(message).finish();
  },
  toProtoMsg(message: RequestBeginBlock): RequestBeginBlockProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestBeginBlock",
      value: RequestBeginBlock.encode(message).finish()
    };
  }
};
function createBaseRequestCheckTx(): RequestCheckTx {
  return {
    tx: new Uint8Array(),
    type: 0
  };
}
export const RequestCheckTx = {
  typeUrl: "/tendermint.abci.RequestCheckTx",
  encode(message: RequestCheckTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RequestCheckTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        case 2:
          message.type = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestCheckTx {
    const obj = createBaseRequestCheckTx();
    if (isSet(object.tx)) obj.tx = bytesFromBase64(object.tx);
    if (isSet(object.type)) obj.type = checkTxTypeFromJSON(object.type);
    return obj;
  },
  fromPartial(object: DeepPartial<RequestCheckTx>): RequestCheckTx {
    const message = createBaseRequestCheckTx();
    message.tx = object.tx ?? new Uint8Array();
    message.type = object.type ?? 0;
    return message;
  },
  fromSDK(object: RequestCheckTxSDKType): RequestCheckTx {
    return {
      tx: object?.tx,
      type: isSet(object.type) ? checkTxTypeFromJSON(object.type) : -1
    };
  },
  toSDK(message: RequestCheckTx): RequestCheckTxSDKType {
    const obj: any = {};
    obj.tx = message.tx;
    message.type !== undefined && (obj.type = checkTxTypeToJSON(message.type));
    return obj;
  },
  fromAmino(object: RequestCheckTxAmino): RequestCheckTx {
    const message = createBaseRequestCheckTx();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    return message;
  },
  toAmino(message: RequestCheckTx, useInterfaces: boolean = true): RequestCheckTxAmino {
    const obj: any = {};
    obj.tx = message.tx ? base64FromBytes(message.tx) : undefined;
    obj.type = message.type === 0 ? undefined : message.type;
    return obj;
  },
  fromProtoMsg(message: RequestCheckTxProtoMsg, useInterfaces: boolean = true): RequestCheckTx {
    return RequestCheckTx.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RequestCheckTx): Uint8Array {
    return RequestCheckTx.encode(message).finish();
  },
  toProtoMsg(message: RequestCheckTx): RequestCheckTxProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestCheckTx",
      value: RequestCheckTx.encode(message).finish()
    };
  }
};
function createBaseRequestDeliverTx(): RequestDeliverTx {
  return {
    tx: new Uint8Array()
  };
}
export const RequestDeliverTx = {
  typeUrl: "/tendermint.abci.RequestDeliverTx",
  encode(message: RequestDeliverTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RequestDeliverTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestDeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestDeliverTx {
    const obj = createBaseRequestDeliverTx();
    if (isSet(object.tx)) obj.tx = bytesFromBase64(object.tx);
    return obj;
  },
  fromPartial(object: DeepPartial<RequestDeliverTx>): RequestDeliverTx {
    const message = createBaseRequestDeliverTx();
    message.tx = object.tx ?? new Uint8Array();
    return message;
  },
  fromSDK(object: RequestDeliverTxSDKType): RequestDeliverTx {
    return {
      tx: object?.tx
    };
  },
  toSDK(message: RequestDeliverTx): RequestDeliverTxSDKType {
    const obj: any = {};
    obj.tx = message.tx;
    return obj;
  },
  fromAmino(object: RequestDeliverTxAmino): RequestDeliverTx {
    const message = createBaseRequestDeliverTx();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }
    return message;
  },
  toAmino(message: RequestDeliverTx, useInterfaces: boolean = true): RequestDeliverTxAmino {
    const obj: any = {};
    obj.tx = message.tx ? base64FromBytes(message.tx) : undefined;
    return obj;
  },
  fromProtoMsg(message: RequestDeliverTxProtoMsg, useInterfaces: boolean = true): RequestDeliverTx {
    return RequestDeliverTx.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RequestDeliverTx): Uint8Array {
    return RequestDeliverTx.encode(message).finish();
  },
  toProtoMsg(message: RequestDeliverTx): RequestDeliverTxProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestDeliverTx",
      value: RequestDeliverTx.encode(message).finish()
    };
  }
};
function createBaseRequestEndBlock(): RequestEndBlock {
  return {
    height: BigInt(0)
  };
}
export const RequestEndBlock = {
  typeUrl: "/tendermint.abci.RequestEndBlock",
  encode(message: RequestEndBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RequestEndBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEndBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestEndBlock {
    const obj = createBaseRequestEndBlock();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<RequestEndBlock>): RequestEndBlock {
    const message = createBaseRequestEndBlock();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    return message;
  },
  fromSDK(object: RequestEndBlockSDKType): RequestEndBlock {
    return {
      height: object?.height
    };
  },
  toSDK(message: RequestEndBlock): RequestEndBlockSDKType {
    const obj: any = {};
    obj.height = message.height;
    return obj;
  },
  fromAmino(object: RequestEndBlockAmino): RequestEndBlock {
    const message = createBaseRequestEndBlock();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: RequestEndBlock, useInterfaces: boolean = true): RequestEndBlockAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: RequestEndBlockProtoMsg, useInterfaces: boolean = true): RequestEndBlock {
    return RequestEndBlock.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RequestEndBlock): Uint8Array {
    return RequestEndBlock.encode(message).finish();
  },
  toProtoMsg(message: RequestEndBlock): RequestEndBlockProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestEndBlock",
      value: RequestEndBlock.encode(message).finish()
    };
  }
};
function createBaseRequestCommit(): RequestCommit {
  return {};
}
export const RequestCommit = {
  typeUrl: "/tendermint.abci.RequestCommit",
  encode(_: RequestCommit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RequestCommit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): RequestCommit {
    const obj = createBaseRequestCommit();
    return obj;
  },
  fromPartial(_: DeepPartial<RequestCommit>): RequestCommit {
    const message = createBaseRequestCommit();
    return message;
  },
  fromSDK(_: RequestCommitSDKType): RequestCommit {
    return {};
  },
  toSDK(_: RequestCommit): RequestCommitSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: RequestCommitAmino): RequestCommit {
    const message = createBaseRequestCommit();
    return message;
  },
  toAmino(_: RequestCommit, useInterfaces: boolean = true): RequestCommitAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: RequestCommitProtoMsg, useInterfaces: boolean = true): RequestCommit {
    return RequestCommit.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RequestCommit): Uint8Array {
    return RequestCommit.encode(message).finish();
  },
  toProtoMsg(message: RequestCommit): RequestCommitProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestCommit",
      value: RequestCommit.encode(message).finish()
    };
  }
};
function createBaseRequestListSnapshots(): RequestListSnapshots {
  return {};
}
export const RequestListSnapshots = {
  typeUrl: "/tendermint.abci.RequestListSnapshots",
  encode(_: RequestListSnapshots, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RequestListSnapshots {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestListSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): RequestListSnapshots {
    const obj = createBaseRequestListSnapshots();
    return obj;
  },
  fromPartial(_: DeepPartial<RequestListSnapshots>): RequestListSnapshots {
    const message = createBaseRequestListSnapshots();
    return message;
  },
  fromSDK(_: RequestListSnapshotsSDKType): RequestListSnapshots {
    return {};
  },
  toSDK(_: RequestListSnapshots): RequestListSnapshotsSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: RequestListSnapshotsAmino): RequestListSnapshots {
    const message = createBaseRequestListSnapshots();
    return message;
  },
  toAmino(_: RequestListSnapshots, useInterfaces: boolean = true): RequestListSnapshotsAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: RequestListSnapshotsProtoMsg, useInterfaces: boolean = true): RequestListSnapshots {
    return RequestListSnapshots.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RequestListSnapshots): Uint8Array {
    return RequestListSnapshots.encode(message).finish();
  },
  toProtoMsg(message: RequestListSnapshots): RequestListSnapshotsProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestListSnapshots",
      value: RequestListSnapshots.encode(message).finish()
    };
  }
};
function createBaseRequestOfferSnapshot(): RequestOfferSnapshot {
  return {
    snapshot: undefined,
    appHash: new Uint8Array()
  };
}
export const RequestOfferSnapshot = {
  typeUrl: "/tendermint.abci.RequestOfferSnapshot",
  encode(message: RequestOfferSnapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(18).bytes(message.appHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RequestOfferSnapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshot = Snapshot.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestOfferSnapshot {
    const obj = createBaseRequestOfferSnapshot();
    if (isSet(object.snapshot)) obj.snapshot = Snapshot.fromJSON(object.snapshot);
    if (isSet(object.appHash)) obj.appHash = bytesFromBase64(object.appHash);
    return obj;
  },
  fromPartial(object: DeepPartial<RequestOfferSnapshot>): RequestOfferSnapshot {
    const message = createBaseRequestOfferSnapshot();
    if (object.snapshot !== undefined && object.snapshot !== null) {
      message.snapshot = Snapshot.fromPartial(object.snapshot);
    }
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: RequestOfferSnapshotSDKType): RequestOfferSnapshot {
    return {
      snapshot: object.snapshot ? Snapshot.fromSDK(object.snapshot) : undefined,
      appHash: object?.app_hash
    };
  },
  toSDK(message: RequestOfferSnapshot): RequestOfferSnapshotSDKType {
    const obj: any = {};
    message.snapshot !== undefined && (obj.snapshot = message.snapshot ? Snapshot.toSDK(message.snapshot) : undefined);
    obj.app_hash = message.appHash;
    return obj;
  },
  fromAmino(object: RequestOfferSnapshotAmino): RequestOfferSnapshot {
    const message = createBaseRequestOfferSnapshot();
    if (object.snapshot !== undefined && object.snapshot !== null) {
      message.snapshot = Snapshot.fromAmino(object.snapshot);
    }
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.appHash = bytesFromBase64(object.app_hash);
    }
    return message;
  },
  toAmino(message: RequestOfferSnapshot, useInterfaces: boolean = true): RequestOfferSnapshotAmino {
    const obj: any = {};
    obj.snapshot = message.snapshot ? Snapshot.toAmino(message.snapshot, useInterfaces) : undefined;
    obj.app_hash = message.appHash ? base64FromBytes(message.appHash) : undefined;
    return obj;
  },
  fromProtoMsg(message: RequestOfferSnapshotProtoMsg, useInterfaces: boolean = true): RequestOfferSnapshot {
    return RequestOfferSnapshot.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RequestOfferSnapshot): Uint8Array {
    return RequestOfferSnapshot.encode(message).finish();
  },
  toProtoMsg(message: RequestOfferSnapshot): RequestOfferSnapshotProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestOfferSnapshot",
      value: RequestOfferSnapshot.encode(message).finish()
    };
  }
};
function createBaseRequestLoadSnapshotChunk(): RequestLoadSnapshotChunk {
  return {
    height: BigInt(0),
    format: 0,
    chunk: 0
  };
}
export const RequestLoadSnapshotChunk = {
  typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
  encode(message: RequestLoadSnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunk !== 0) {
      writer.uint32(24).uint32(message.chunk);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RequestLoadSnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunk = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestLoadSnapshotChunk {
    const obj = createBaseRequestLoadSnapshotChunk();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.format)) obj.format = Number(object.format);
    if (isSet(object.chunk)) obj.chunk = Number(object.chunk);
    return obj;
  },
  fromPartial(object: DeepPartial<RequestLoadSnapshotChunk>): RequestLoadSnapshotChunk {
    const message = createBaseRequestLoadSnapshotChunk();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.format = object.format ?? 0;
    message.chunk = object.chunk ?? 0;
    return message;
  },
  fromSDK(object: RequestLoadSnapshotChunkSDKType): RequestLoadSnapshotChunk {
    return {
      height: object?.height,
      format: object?.format,
      chunk: object?.chunk
    };
  },
  toSDK(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkSDKType {
    const obj: any = {};
    obj.height = message.height;
    obj.format = message.format;
    obj.chunk = message.chunk;
    return obj;
  },
  fromAmino(object: RequestLoadSnapshotChunkAmino): RequestLoadSnapshotChunk {
    const message = createBaseRequestLoadSnapshotChunk();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    }
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = object.chunk;
    }
    return message;
  },
  toAmino(message: RequestLoadSnapshotChunk, useInterfaces: boolean = true): RequestLoadSnapshotChunkAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.format = message.format === 0 ? undefined : message.format;
    obj.chunk = message.chunk === 0 ? undefined : message.chunk;
    return obj;
  },
  fromProtoMsg(message: RequestLoadSnapshotChunkProtoMsg, useInterfaces: boolean = true): RequestLoadSnapshotChunk {
    return RequestLoadSnapshotChunk.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RequestLoadSnapshotChunk): Uint8Array {
    return RequestLoadSnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
      value: RequestLoadSnapshotChunk.encode(message).finish()
    };
  }
};
function createBaseRequestApplySnapshotChunk(): RequestApplySnapshotChunk {
  return {
    index: 0,
    chunk: new Uint8Array(),
    sender: ""
  };
}
export const RequestApplySnapshotChunk = {
  typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
  encode(message: RequestApplySnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(18).bytes(message.chunk);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RequestApplySnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.chunk = reader.bytes();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestApplySnapshotChunk {
    const obj = createBaseRequestApplySnapshotChunk();
    if (isSet(object.index)) obj.index = Number(object.index);
    if (isSet(object.chunk)) obj.chunk = bytesFromBase64(object.chunk);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  fromPartial(object: DeepPartial<RequestApplySnapshotChunk>): RequestApplySnapshotChunk {
    const message = createBaseRequestApplySnapshotChunk();
    message.index = object.index ?? 0;
    message.chunk = object.chunk ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: RequestApplySnapshotChunkSDKType): RequestApplySnapshotChunk {
    return {
      index: object?.index,
      chunk: object?.chunk,
      sender: object?.sender
    };
  },
  toSDK(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkSDKType {
    const obj: any = {};
    obj.index = message.index;
    obj.chunk = message.chunk;
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: RequestApplySnapshotChunkAmino): RequestApplySnapshotChunk {
    const message = createBaseRequestApplySnapshotChunk();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = bytesFromBase64(object.chunk);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: RequestApplySnapshotChunk, useInterfaces: boolean = true): RequestApplySnapshotChunkAmino {
    const obj: any = {};
    obj.index = message.index === 0 ? undefined : message.index;
    obj.chunk = message.chunk ? base64FromBytes(message.chunk) : undefined;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromProtoMsg(message: RequestApplySnapshotChunkProtoMsg, useInterfaces: boolean = true): RequestApplySnapshotChunk {
    return RequestApplySnapshotChunk.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RequestApplySnapshotChunk): Uint8Array {
    return RequestApplySnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
      value: RequestApplySnapshotChunk.encode(message).finish()
    };
  }
};
function createBaseResponse(): Response {
  return {
    exception: undefined,
    echo: undefined,
    flush: undefined,
    info: undefined,
    setOption: undefined,
    initChain: undefined,
    query: undefined,
    beginBlock: undefined,
    checkTx: undefined,
    deliverTx: undefined,
    endBlock: undefined,
    commit: undefined,
    listSnapshots: undefined,
    offerSnapshot: undefined,
    loadSnapshotChunk: undefined,
    applySnapshotChunk: undefined
  };
}
export const Response = {
  typeUrl: "/tendermint.abci.Response",
  encode(message: Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exception !== undefined) {
      ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
    }
    if (message.echo !== undefined) {
      ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    if (message.setOption !== undefined) {
      ResponseSetOption.encode(message.setOption, writer.uint32(42).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      ResponseInitChain.encode(message.initChain, writer.uint32(50).fork()).ldelim();
    }
    if (message.query !== undefined) {
      ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      ResponseBeginBlock.encode(message.beginBlock, writer.uint32(66).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      ResponseCheckTx.encode(message.checkTx, writer.uint32(74).fork()).ldelim();
    }
    if (message.deliverTx !== undefined) {
      ResponseDeliverTx.encode(message.deliverTx, writer.uint32(82).fork()).ldelim();
    }
    if (message.endBlock !== undefined) {
      ResponseEndBlock.encode(message.endBlock, writer.uint32(90).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(106).fork()).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(114).fork()).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exception = ResponseException.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.echo = ResponseEcho.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.flush = ResponseFlush.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.info = ResponseInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.setOption = ResponseSetOption.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.initChain = ResponseInitChain.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.query = ResponseQuery.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 8:
          message.beginBlock = ResponseBeginBlock.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 9:
          message.checkTx = ResponseCheckTx.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 10:
          message.deliverTx = ResponseDeliverTx.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 11:
          message.endBlock = ResponseEndBlock.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 12:
          message.commit = ResponseCommit.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 13:
          message.listSnapshots = ResponseListSnapshots.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 14:
          message.offerSnapshot = ResponseOfferSnapshot.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 15:
          message.loadSnapshotChunk = ResponseLoadSnapshotChunk.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 16:
          message.applySnapshotChunk = ResponseApplySnapshotChunk.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Response {
    const obj = createBaseResponse();
    if (isSet(object.exception)) obj.exception = ResponseException.fromJSON(object.exception);
    if (isSet(object.echo)) obj.echo = ResponseEcho.fromJSON(object.echo);
    if (isSet(object.flush)) obj.flush = ResponseFlush.fromJSON(object.flush);
    if (isSet(object.info)) obj.info = ResponseInfo.fromJSON(object.info);
    if (isSet(object.setOption)) obj.setOption = ResponseSetOption.fromJSON(object.setOption);
    if (isSet(object.initChain)) obj.initChain = ResponseInitChain.fromJSON(object.initChain);
    if (isSet(object.query)) obj.query = ResponseQuery.fromJSON(object.query);
    if (isSet(object.beginBlock)) obj.beginBlock = ResponseBeginBlock.fromJSON(object.beginBlock);
    if (isSet(object.checkTx)) obj.checkTx = ResponseCheckTx.fromJSON(object.checkTx);
    if (isSet(object.deliverTx)) obj.deliverTx = ResponseDeliverTx.fromJSON(object.deliverTx);
    if (isSet(object.endBlock)) obj.endBlock = ResponseEndBlock.fromJSON(object.endBlock);
    if (isSet(object.commit)) obj.commit = ResponseCommit.fromJSON(object.commit);
    if (isSet(object.listSnapshots)) obj.listSnapshots = ResponseListSnapshots.fromJSON(object.listSnapshots);
    if (isSet(object.offerSnapshot)) obj.offerSnapshot = ResponseOfferSnapshot.fromJSON(object.offerSnapshot);
    if (isSet(object.loadSnapshotChunk)) obj.loadSnapshotChunk = ResponseLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk);
    if (isSet(object.applySnapshotChunk)) obj.applySnapshotChunk = ResponseApplySnapshotChunk.fromJSON(object.applySnapshotChunk);
    return obj;
  },
  fromPartial(object: DeepPartial<Response>): Response {
    const message = createBaseResponse();
    if (object.exception !== undefined && object.exception !== null) {
      message.exception = ResponseException.fromPartial(object.exception);
    }
    if (object.echo !== undefined && object.echo !== null) {
      message.echo = ResponseEcho.fromPartial(object.echo);
    }
    if (object.flush !== undefined && object.flush !== null) {
      message.flush = ResponseFlush.fromPartial(object.flush);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = ResponseInfo.fromPartial(object.info);
    }
    if (object.setOption !== undefined && object.setOption !== null) {
      message.setOption = ResponseSetOption.fromPartial(object.setOption);
    }
    if (object.initChain !== undefined && object.initChain !== null) {
      message.initChain = ResponseInitChain.fromPartial(object.initChain);
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = ResponseQuery.fromPartial(object.query);
    }
    if (object.beginBlock !== undefined && object.beginBlock !== null) {
      message.beginBlock = ResponseBeginBlock.fromPartial(object.beginBlock);
    }
    if (object.checkTx !== undefined && object.checkTx !== null) {
      message.checkTx = ResponseCheckTx.fromPartial(object.checkTx);
    }
    if (object.deliverTx !== undefined && object.deliverTx !== null) {
      message.deliverTx = ResponseDeliverTx.fromPartial(object.deliverTx);
    }
    if (object.endBlock !== undefined && object.endBlock !== null) {
      message.endBlock = ResponseEndBlock.fromPartial(object.endBlock);
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = ResponseCommit.fromPartial(object.commit);
    }
    if (object.listSnapshots !== undefined && object.listSnapshots !== null) {
      message.listSnapshots = ResponseListSnapshots.fromPartial(object.listSnapshots);
    }
    if (object.offerSnapshot !== undefined && object.offerSnapshot !== null) {
      message.offerSnapshot = ResponseOfferSnapshot.fromPartial(object.offerSnapshot);
    }
    if (object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null) {
      message.loadSnapshotChunk = ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk);
    }
    if (object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null) {
      message.applySnapshotChunk = ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk);
    }
    return message;
  },
  fromSDK(object: ResponseSDKType): Response {
    return {
      exception: object.exception ? ResponseException.fromSDK(object.exception) : undefined,
      echo: object.echo ? ResponseEcho.fromSDK(object.echo) : undefined,
      flush: object.flush ? ResponseFlush.fromSDK(object.flush) : undefined,
      info: object.info ? ResponseInfo.fromSDK(object.info) : undefined,
      setOption: object.set_option ? ResponseSetOption.fromSDK(object.set_option) : undefined,
      initChain: object.init_chain ? ResponseInitChain.fromSDK(object.init_chain) : undefined,
      query: object.query ? ResponseQuery.fromSDK(object.query) : undefined,
      beginBlock: object.begin_block ? ResponseBeginBlock.fromSDK(object.begin_block) : undefined,
      checkTx: object.check_tx ? ResponseCheckTx.fromSDK(object.check_tx) : undefined,
      deliverTx: object.deliver_tx ? ResponseDeliverTx.fromSDK(object.deliver_tx) : undefined,
      endBlock: object.end_block ? ResponseEndBlock.fromSDK(object.end_block) : undefined,
      commit: object.commit ? ResponseCommit.fromSDK(object.commit) : undefined,
      listSnapshots: object.list_snapshots ? ResponseListSnapshots.fromSDK(object.list_snapshots) : undefined,
      offerSnapshot: object.offer_snapshot ? ResponseOfferSnapshot.fromSDK(object.offer_snapshot) : undefined,
      loadSnapshotChunk: object.load_snapshot_chunk ? ResponseLoadSnapshotChunk.fromSDK(object.load_snapshot_chunk) : undefined,
      applySnapshotChunk: object.apply_snapshot_chunk ? ResponseApplySnapshotChunk.fromSDK(object.apply_snapshot_chunk) : undefined
    };
  },
  toSDK(message: Response): ResponseSDKType {
    const obj: any = {};
    message.exception !== undefined && (obj.exception = message.exception ? ResponseException.toSDK(message.exception) : undefined);
    message.echo !== undefined && (obj.echo = message.echo ? ResponseEcho.toSDK(message.echo) : undefined);
    message.flush !== undefined && (obj.flush = message.flush ? ResponseFlush.toSDK(message.flush) : undefined);
    message.info !== undefined && (obj.info = message.info ? ResponseInfo.toSDK(message.info) : undefined);
    message.setOption !== undefined && (obj.set_option = message.setOption ? ResponseSetOption.toSDK(message.setOption) : undefined);
    message.initChain !== undefined && (obj.init_chain = message.initChain ? ResponseInitChain.toSDK(message.initChain) : undefined);
    message.query !== undefined && (obj.query = message.query ? ResponseQuery.toSDK(message.query) : undefined);
    message.beginBlock !== undefined && (obj.begin_block = message.beginBlock ? ResponseBeginBlock.toSDK(message.beginBlock) : undefined);
    message.checkTx !== undefined && (obj.check_tx = message.checkTx ? ResponseCheckTx.toSDK(message.checkTx) : undefined);
    message.deliverTx !== undefined && (obj.deliver_tx = message.deliverTx ? ResponseDeliverTx.toSDK(message.deliverTx) : undefined);
    message.endBlock !== undefined && (obj.end_block = message.endBlock ? ResponseEndBlock.toSDK(message.endBlock) : undefined);
    message.commit !== undefined && (obj.commit = message.commit ? ResponseCommit.toSDK(message.commit) : undefined);
    message.listSnapshots !== undefined && (obj.list_snapshots = message.listSnapshots ? ResponseListSnapshots.toSDK(message.listSnapshots) : undefined);
    message.offerSnapshot !== undefined && (obj.offer_snapshot = message.offerSnapshot ? ResponseOfferSnapshot.toSDK(message.offerSnapshot) : undefined);
    message.loadSnapshotChunk !== undefined && (obj.load_snapshot_chunk = message.loadSnapshotChunk ? ResponseLoadSnapshotChunk.toSDK(message.loadSnapshotChunk) : undefined);
    message.applySnapshotChunk !== undefined && (obj.apply_snapshot_chunk = message.applySnapshotChunk ? ResponseApplySnapshotChunk.toSDK(message.applySnapshotChunk) : undefined);
    return obj;
  },
  fromAmino(object: ResponseAmino): Response {
    const message = createBaseResponse();
    if (object.exception !== undefined && object.exception !== null) {
      message.exception = ResponseException.fromAmino(object.exception);
    }
    if (object.echo !== undefined && object.echo !== null) {
      message.echo = ResponseEcho.fromAmino(object.echo);
    }
    if (object.flush !== undefined && object.flush !== null) {
      message.flush = ResponseFlush.fromAmino(object.flush);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = ResponseInfo.fromAmino(object.info);
    }
    if (object.set_option !== undefined && object.set_option !== null) {
      message.setOption = ResponseSetOption.fromAmino(object.set_option);
    }
    if (object.init_chain !== undefined && object.init_chain !== null) {
      message.initChain = ResponseInitChain.fromAmino(object.init_chain);
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = ResponseQuery.fromAmino(object.query);
    }
    if (object.begin_block !== undefined && object.begin_block !== null) {
      message.beginBlock = ResponseBeginBlock.fromAmino(object.begin_block);
    }
    if (object.check_tx !== undefined && object.check_tx !== null) {
      message.checkTx = ResponseCheckTx.fromAmino(object.check_tx);
    }
    if (object.deliver_tx !== undefined && object.deliver_tx !== null) {
      message.deliverTx = ResponseDeliverTx.fromAmino(object.deliver_tx);
    }
    if (object.end_block !== undefined && object.end_block !== null) {
      message.endBlock = ResponseEndBlock.fromAmino(object.end_block);
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = ResponseCommit.fromAmino(object.commit);
    }
    if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
      message.listSnapshots = ResponseListSnapshots.fromAmino(object.list_snapshots);
    }
    if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
      message.offerSnapshot = ResponseOfferSnapshot.fromAmino(object.offer_snapshot);
    }
    if (object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null) {
      message.loadSnapshotChunk = ResponseLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk);
    }
    if (object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null) {
      message.applySnapshotChunk = ResponseApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk);
    }
    return message;
  },
  toAmino(message: Response, useInterfaces: boolean = true): ResponseAmino {
    const obj: any = {};
    obj.exception = message.exception ? ResponseException.toAmino(message.exception, useInterfaces) : undefined;
    obj.echo = message.echo ? ResponseEcho.toAmino(message.echo, useInterfaces) : undefined;
    obj.flush = message.flush ? ResponseFlush.toAmino(message.flush, useInterfaces) : undefined;
    obj.info = message.info ? ResponseInfo.toAmino(message.info, useInterfaces) : undefined;
    obj.set_option = message.setOption ? ResponseSetOption.toAmino(message.setOption, useInterfaces) : undefined;
    obj.init_chain = message.initChain ? ResponseInitChain.toAmino(message.initChain, useInterfaces) : undefined;
    obj.query = message.query ? ResponseQuery.toAmino(message.query, useInterfaces) : undefined;
    obj.begin_block = message.beginBlock ? ResponseBeginBlock.toAmino(message.beginBlock, useInterfaces) : undefined;
    obj.check_tx = message.checkTx ? ResponseCheckTx.toAmino(message.checkTx, useInterfaces) : undefined;
    obj.deliver_tx = message.deliverTx ? ResponseDeliverTx.toAmino(message.deliverTx, useInterfaces) : undefined;
    obj.end_block = message.endBlock ? ResponseEndBlock.toAmino(message.endBlock, useInterfaces) : undefined;
    obj.commit = message.commit ? ResponseCommit.toAmino(message.commit, useInterfaces) : undefined;
    obj.list_snapshots = message.listSnapshots ? ResponseListSnapshots.toAmino(message.listSnapshots, useInterfaces) : undefined;
    obj.offer_snapshot = message.offerSnapshot ? ResponseOfferSnapshot.toAmino(message.offerSnapshot, useInterfaces) : undefined;
    obj.load_snapshot_chunk = message.loadSnapshotChunk ? ResponseLoadSnapshotChunk.toAmino(message.loadSnapshotChunk, useInterfaces) : undefined;
    obj.apply_snapshot_chunk = message.applySnapshotChunk ? ResponseApplySnapshotChunk.toAmino(message.applySnapshotChunk, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: ResponseProtoMsg, useInterfaces: boolean = true): Response {
    return Response.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Response): Uint8Array {
    return Response.encode(message).finish();
  },
  toProtoMsg(message: Response): ResponseProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Response",
      value: Response.encode(message).finish()
    };
  }
};
function createBaseResponseException(): ResponseException {
  return {
    error: ""
  };
}
export const ResponseException = {
  typeUrl: "/tendermint.abci.ResponseException",
  encode(message: ResponseException, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ResponseException {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseException();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseException {
    const obj = createBaseResponseException();
    if (isSet(object.error)) obj.error = String(object.error);
    return obj;
  },
  fromPartial(object: DeepPartial<ResponseException>): ResponseException {
    const message = createBaseResponseException();
    message.error = object.error ?? "";
    return message;
  },
  fromSDK(object: ResponseExceptionSDKType): ResponseException {
    return {
      error: object?.error
    };
  },
  toSDK(message: ResponseException): ResponseExceptionSDKType {
    const obj: any = {};
    obj.error = message.error;
    return obj;
  },
  fromAmino(object: ResponseExceptionAmino): ResponseException {
    const message = createBaseResponseException();
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: ResponseException, useInterfaces: boolean = true): ResponseExceptionAmino {
    const obj: any = {};
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromProtoMsg(message: ResponseExceptionProtoMsg, useInterfaces: boolean = true): ResponseException {
    return ResponseException.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ResponseException): Uint8Array {
    return ResponseException.encode(message).finish();
  },
  toProtoMsg(message: ResponseException): ResponseExceptionProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseException",
      value: ResponseException.encode(message).finish()
    };
  }
};
function createBaseResponseEcho(): ResponseEcho {
  return {
    message: ""
  };
}
export const ResponseEcho = {
  typeUrl: "/tendermint.abci.ResponseEcho",
  encode(message: ResponseEcho, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ResponseEcho {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseEcho {
    const obj = createBaseResponseEcho();
    if (isSet(object.message)) obj.message = String(object.message);
    return obj;
  },
  fromPartial(object: DeepPartial<ResponseEcho>): ResponseEcho {
    const message = createBaseResponseEcho();
    message.message = object.message ?? "";
    return message;
  },
  fromSDK(object: ResponseEchoSDKType): ResponseEcho {
    return {
      message: object?.message
    };
  },
  toSDK(message: ResponseEcho): ResponseEchoSDKType {
    const obj: any = {};
    obj.message = message.message;
    return obj;
  },
  fromAmino(object: ResponseEchoAmino): ResponseEcho {
    const message = createBaseResponseEcho();
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: ResponseEcho, useInterfaces: boolean = true): ResponseEchoAmino {
    const obj: any = {};
    obj.message = message.message === "" ? undefined : message.message;
    return obj;
  },
  fromProtoMsg(message: ResponseEchoProtoMsg, useInterfaces: boolean = true): ResponseEcho {
    return ResponseEcho.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ResponseEcho): Uint8Array {
    return ResponseEcho.encode(message).finish();
  },
  toProtoMsg(message: ResponseEcho): ResponseEchoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseEcho",
      value: ResponseEcho.encode(message).finish()
    };
  }
};
function createBaseResponseFlush(): ResponseFlush {
  return {};
}
export const ResponseFlush = {
  typeUrl: "/tendermint.abci.ResponseFlush",
  encode(_: ResponseFlush, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ResponseFlush {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseFlush();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): ResponseFlush {
    const obj = createBaseResponseFlush();
    return obj;
  },
  fromPartial(_: DeepPartial<ResponseFlush>): ResponseFlush {
    const message = createBaseResponseFlush();
    return message;
  },
  fromSDK(_: ResponseFlushSDKType): ResponseFlush {
    return {};
  },
  toSDK(_: ResponseFlush): ResponseFlushSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ResponseFlushAmino): ResponseFlush {
    const message = createBaseResponseFlush();
    return message;
  },
  toAmino(_: ResponseFlush, useInterfaces: boolean = true): ResponseFlushAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: ResponseFlushProtoMsg, useInterfaces: boolean = true): ResponseFlush {
    return ResponseFlush.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ResponseFlush): Uint8Array {
    return ResponseFlush.encode(message).finish();
  },
  toProtoMsg(message: ResponseFlush): ResponseFlushProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseFlush",
      value: ResponseFlush.encode(message).finish()
    };
  }
};
function createBaseResponseInfo(): ResponseInfo {
  return {
    data: "",
    version: "",
    appVersion: BigInt(0),
    lastBlockHeight: BigInt(0),
    lastBlockAppHash: new Uint8Array()
  };
}
export const ResponseInfo = {
  typeUrl: "/tendermint.abci.ResponseInfo",
  encode(message: ResponseInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.appVersion !== BigInt(0)) {
      writer.uint32(24).uint64(message.appVersion);
    }
    if (message.lastBlockHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.lastBlockHeight);
    }
    if (message.lastBlockAppHash.length !== 0) {
      writer.uint32(42).bytes(message.lastBlockAppHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ResponseInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.appVersion = reader.uint64();
          break;
        case 4:
          message.lastBlockHeight = reader.int64();
          break;
        case 5:
          message.lastBlockAppHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseInfo {
    const obj = createBaseResponseInfo();
    if (isSet(object.data)) obj.data = String(object.data);
    if (isSet(object.version)) obj.version = String(object.version);
    if (isSet(object.appVersion)) obj.appVersion = BigInt(object.appVersion.toString());
    if (isSet(object.lastBlockHeight)) obj.lastBlockHeight = BigInt(object.lastBlockHeight.toString());
    if (isSet(object.lastBlockAppHash)) obj.lastBlockAppHash = bytesFromBase64(object.lastBlockAppHash);
    return obj;
  },
  fromPartial(object: DeepPartial<ResponseInfo>): ResponseInfo {
    const message = createBaseResponseInfo();
    message.data = object.data ?? "";
    message.version = object.version ?? "";
    if (object.appVersion !== undefined && object.appVersion !== null) {
      message.appVersion = BigInt(object.appVersion.toString());
    }
    if (object.lastBlockHeight !== undefined && object.lastBlockHeight !== null) {
      message.lastBlockHeight = BigInt(object.lastBlockHeight.toString());
    }
    message.lastBlockAppHash = object.lastBlockAppHash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: ResponseInfoSDKType): ResponseInfo {
    return {
      data: object?.data,
      version: object?.version,
      appVersion: object?.app_version,
      lastBlockHeight: object?.last_block_height,
      lastBlockAppHash: object?.last_block_app_hash
    };
  },
  toSDK(message: ResponseInfo): ResponseInfoSDKType {
    const obj: any = {};
    obj.data = message.data;
    obj.version = message.version;
    obj.app_version = message.appVersion;
    obj.last_block_height = message.lastBlockHeight;
    obj.last_block_app_hash = message.lastBlockAppHash;
    return obj;
  },
  fromAmino(object: ResponseInfoAmino): ResponseInfo {
    const message = createBaseResponseInfo();
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.app_version !== undefined && object.app_version !== null) {
      message.appVersion = BigInt(object.app_version);
    }
    if (object.last_block_height !== undefined && object.last_block_height !== null) {
      message.lastBlockHeight = BigInt(object.last_block_height);
    }
    if (object.last_block_app_hash !== undefined && object.last_block_app_hash !== null) {
      message.lastBlockAppHash = bytesFromBase64(object.last_block_app_hash);
    }
    return message;
  },
  toAmino(message: ResponseInfo, useInterfaces: boolean = true): ResponseInfoAmino {
    const obj: any = {};
    obj.data = message.data === "" ? undefined : message.data;
    obj.version = message.version === "" ? undefined : message.version;
    obj.app_version = message.appVersion !== BigInt(0) ? message.appVersion?.toString() : undefined;
    obj.last_block_height = message.lastBlockHeight !== BigInt(0) ? message.lastBlockHeight?.toString() : undefined;
    obj.last_block_app_hash = message.lastBlockAppHash ? base64FromBytes(message.lastBlockAppHash) : undefined;
    return obj;
  },
  fromProtoMsg(message: ResponseInfoProtoMsg, useInterfaces: boolean = true): ResponseInfo {
    return ResponseInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ResponseInfo): Uint8Array {
    return ResponseInfo.encode(message).finish();
  },
  toProtoMsg(message: ResponseInfo): ResponseInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseInfo",
      value: ResponseInfo.encode(message).finish()
    };
  }
};
function createBaseResponseSetOption(): ResponseSetOption {
  return {
    code: 0,
    log: "",
    info: ""
  };
}
export const ResponseSetOption = {
  typeUrl: "/tendermint.abci.ResponseSetOption",
  encode(message: ResponseSetOption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ResponseSetOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseSetOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseSetOption {
    const obj = createBaseResponseSetOption();
    if (isSet(object.code)) obj.code = Number(object.code);
    if (isSet(object.log)) obj.log = String(object.log);
    if (isSet(object.info)) obj.info = String(object.info);
    return obj;
  },
  fromPartial(object: DeepPartial<ResponseSetOption>): ResponseSetOption {
    const message = createBaseResponseSetOption();
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    return message;
  },
  fromSDK(object: ResponseSetOptionSDKType): ResponseSetOption {
    return {
      code: object?.code,
      log: object?.log,
      info: object?.info
    };
  },
  toSDK(message: ResponseSetOption): ResponseSetOptionSDKType {
    const obj: any = {};
    obj.code = message.code;
    obj.log = message.log;
    obj.info = message.info;
    return obj;
  },
  fromAmino(object: ResponseSetOptionAmino): ResponseSetOption {
    const message = createBaseResponseSetOption();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    return message;
  },
  toAmino(message: ResponseSetOption, useInterfaces: boolean = true): ResponseSetOptionAmino {
    const obj: any = {};
    obj.code = message.code === 0 ? undefined : message.code;
    obj.log = message.log === "" ? undefined : message.log;
    obj.info = message.info === "" ? undefined : message.info;
    return obj;
  },
  fromProtoMsg(message: ResponseSetOptionProtoMsg, useInterfaces: boolean = true): ResponseSetOption {
    return ResponseSetOption.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ResponseSetOption): Uint8Array {
    return ResponseSetOption.encode(message).finish();
  },
  toProtoMsg(message: ResponseSetOption): ResponseSetOptionProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseSetOption",
      value: ResponseSetOption.encode(message).finish()
    };
  }
};
function createBaseResponseInitChain(): ResponseInitChain {
  return {
    consensusParams: undefined,
    validators: [],
    appHash: new Uint8Array()
  };
}
export const ResponseInitChain = {
  typeUrl: "/tendermint.abci.ResponseInitChain",
  encode(message: ResponseInitChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(26).bytes(message.appHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ResponseInitChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseInitChain {
    const obj = createBaseResponseInitChain();
    if (isSet(object.consensusParams)) obj.consensusParams = ConsensusParams.fromJSON(object.consensusParams);
    if (Array.isArray(object?.validators)) obj.validators = object.validators.map((e: any) => ValidatorUpdate.fromJSON(e));
    if (isSet(object.appHash)) obj.appHash = bytesFromBase64(object.appHash);
    return obj;
  },
  fromPartial(object: DeepPartial<ResponseInitChain>): ResponseInitChain {
    const message = createBaseResponseInitChain();
    if (object.consensusParams !== undefined && object.consensusParams !== null) {
      message.consensusParams = ConsensusParams.fromPartial(object.consensusParams);
    }
    message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: ResponseInitChainSDKType): ResponseInitChain {
    return {
      consensusParams: object.consensus_params ? ConsensusParams.fromSDK(object.consensus_params) : undefined,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => ValidatorUpdate.fromSDK(e)) : [],
      appHash: object?.app_hash
    };
  },
  toSDK(message: ResponseInitChain): ResponseInitChainSDKType {
    const obj: any = {};
    message.consensusParams !== undefined && (obj.consensus_params = message.consensusParams ? ConsensusParams.toSDK(message.consensusParams) : undefined);
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? ValidatorUpdate.toSDK(e) : undefined);
    } else {
      obj.validators = [];
    }
    obj.app_hash = message.appHash;
    return obj;
  },
  fromAmino(object: ResponseInitChainAmino): ResponseInitChain {
    const message = createBaseResponseInitChain();
    if (object.consensus_params !== undefined && object.consensus_params !== null) {
      message.consensusParams = ConsensusParams.fromAmino(object.consensus_params);
    }
    message.validators = object.validators?.map(e => ValidatorUpdate.fromAmino(e)) || [];
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.appHash = bytesFromBase64(object.app_hash);
    }
    return message;
  },
  toAmino(message: ResponseInitChain, useInterfaces: boolean = true): ResponseInitChainAmino {
    const obj: any = {};
    obj.consensus_params = message.consensusParams ? ConsensusParams.toAmino(message.consensusParams, useInterfaces) : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? ValidatorUpdate.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.app_hash = message.appHash ? base64FromBytes(message.appHash) : undefined;
    return obj;
  },
  fromProtoMsg(message: ResponseInitChainProtoMsg, useInterfaces: boolean = true): ResponseInitChain {
    return ResponseInitChain.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ResponseInitChain): Uint8Array {
    return ResponseInitChain.encode(message).finish();
  },
  toProtoMsg(message: ResponseInitChain): ResponseInitChainProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseInitChain",
      value: ResponseInitChain.encode(message).finish()
    };
  }
};
function createBaseResponseQuery(): ResponseQuery {
  return {
    code: 0,
    log: "",
    info: "",
    index: BigInt(0),
    key: new Uint8Array(),
    value: new Uint8Array(),
    proofOps: undefined,
    height: BigInt(0),
    codespace: ""
  };
}
export const ResponseQuery = {
  typeUrl: "/tendermint.abci.ResponseQuery",
  encode(message: ResponseQuery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ResponseQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64();
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proofOps = ProofOps.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 9:
          message.height = reader.int64();
          break;
        case 10:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseQuery {
    const obj = createBaseResponseQuery();
    if (isSet(object.code)) obj.code = Number(object.code);
    if (isSet(object.log)) obj.log = String(object.log);
    if (isSet(object.info)) obj.info = String(object.info);
    if (isSet(object.index)) obj.index = BigInt(object.index.toString());
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.value)) obj.value = bytesFromBase64(object.value);
    if (isSet(object.proofOps)) obj.proofOps = ProofOps.fromJSON(object.proofOps);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.codespace)) obj.codespace = String(object.codespace);
    return obj;
  },
  fromPartial(object: DeepPartial<ResponseQuery>): ResponseQuery {
    const message = createBaseResponseQuery();
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    if (object.proofOps !== undefined && object.proofOps !== null) {
      message.proofOps = ProofOps.fromPartial(object.proofOps);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromSDK(object: ResponseQuerySDKType): ResponseQuery {
    return {
      code: object?.code,
      log: object?.log,
      info: object?.info,
      index: object?.index,
      key: object?.key,
      value: object?.value,
      proofOps: object.proof_ops ? ProofOps.fromSDK(object.proof_ops) : undefined,
      height: object?.height,
      codespace: object?.codespace
    };
  },
  toSDK(message: ResponseQuery): ResponseQuerySDKType {
    const obj: any = {};
    obj.code = message.code;
    obj.log = message.log;
    obj.info = message.info;
    obj.index = message.index;
    obj.key = message.key;
    obj.value = message.value;
    message.proofOps !== undefined && (obj.proof_ops = message.proofOps ? ProofOps.toSDK(message.proofOps) : undefined);
    obj.height = message.height;
    obj.codespace = message.codespace;
    return obj;
  },
  fromAmino(object: ResponseQueryAmino): ResponseQuery {
    const message = createBaseResponseQuery();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.proof_ops !== undefined && object.proof_ops !== null) {
      message.proofOps = ProofOps.fromAmino(object.proof_ops);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    return message;
  },
  toAmino(message: ResponseQuery, useInterfaces: boolean = true): ResponseQueryAmino {
    const obj: any = {};
    obj.code = message.code === 0 ? undefined : message.code;
    obj.log = message.log === "" ? undefined : message.log;
    obj.info = message.info === "" ? undefined : message.info;
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : undefined;
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    obj.proof_ops = message.proofOps ? ProofOps.toAmino(message.proofOps, useInterfaces) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.codespace = message.codespace === "" ? undefined : message.codespace;
    return obj;
  },
  fromProtoMsg(message: ResponseQueryProtoMsg, useInterfaces: boolean = true): ResponseQuery {
    return ResponseQuery.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ResponseQuery): Uint8Array {
    return ResponseQuery.encode(message).finish();
  },
  toProtoMsg(message: ResponseQuery): ResponseQueryProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseQuery",
      value: ResponseQuery.encode(message).finish()
    };
  }
};
function createBaseResponseBeginBlock(): ResponseBeginBlock {
  return {
    events: []
  };
}
export const ResponseBeginBlock = {
  typeUrl: "/tendermint.abci.ResponseBeginBlock",
  encode(message: ResponseBeginBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ResponseBeginBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseBeginBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseBeginBlock {
    const obj = createBaseResponseBeginBlock();
    if (Array.isArray(object?.events)) obj.events = object.events.map((e: any) => Event.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<ResponseBeginBlock>): ResponseBeginBlock {
    const message = createBaseResponseBeginBlock();
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ResponseBeginBlockSDKType): ResponseBeginBlock {
    return {
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromSDK(e)) : []
    };
  },
  toSDK(message: ResponseBeginBlock): ResponseBeginBlockSDKType {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toSDK(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromAmino(object: ResponseBeginBlockAmino): ResponseBeginBlock {
    const message = createBaseResponseBeginBlock();
    message.events = object.events?.map(e => Event.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ResponseBeginBlock, useInterfaces: boolean = true): ResponseBeginBlockAmino {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.events = message.events;
    }
    return obj;
  },
  fromProtoMsg(message: ResponseBeginBlockProtoMsg, useInterfaces: boolean = true): ResponseBeginBlock {
    return ResponseBeginBlock.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ResponseBeginBlock): Uint8Array {
    return ResponseBeginBlock.encode(message).finish();
  },
  toProtoMsg(message: ResponseBeginBlock): ResponseBeginBlockProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseBeginBlock",
      value: ResponseBeginBlock.encode(message).finish()
    };
  }
};
function createBaseResponseCheckTx(): ResponseCheckTx {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    events: [],
    codespace: ""
  };
}
export const ResponseCheckTx = {
  typeUrl: "/tendermint.abci.ResponseCheckTx",
  encode(message: ResponseCheckTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ResponseCheckTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64();
          break;
        case 6:
          message.gasUsed = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseCheckTx {
    const obj = createBaseResponseCheckTx();
    if (isSet(object.code)) obj.code = Number(object.code);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    if (isSet(object.log)) obj.log = String(object.log);
    if (isSet(object.info)) obj.info = String(object.info);
    if (isSet(object.gas_wanted)) obj.gasWanted = BigInt(object.gas_wanted.toString());
    if (isSet(object.gas_used)) obj.gasUsed = BigInt(object.gas_used.toString());
    if (Array.isArray(object?.events)) obj.events = object.events.map((e: any) => Event.fromJSON(e));
    if (isSet(object.codespace)) obj.codespace = String(object.codespace);
    return obj;
  },
  fromPartial(object: DeepPartial<ResponseCheckTx>): ResponseCheckTx {
    const message = createBaseResponseCheckTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    if (object.gasWanted !== undefined && object.gasWanted !== null) {
      message.gasWanted = BigInt(object.gasWanted.toString());
    }
    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = BigInt(object.gasUsed.toString());
    }
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromSDK(object: ResponseCheckTxSDKType): ResponseCheckTx {
    return {
      code: object?.code,
      data: object?.data,
      log: object?.log,
      info: object?.info,
      gasWanted: object?.gas_wanted,
      gasUsed: object?.gas_used,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromSDK(e)) : [],
      codespace: object?.codespace
    };
  },
  toSDK(message: ResponseCheckTx): ResponseCheckTxSDKType {
    const obj: any = {};
    obj.code = message.code;
    obj.data = message.data;
    obj.log = message.log;
    obj.info = message.info;
    obj.gas_wanted = message.gasWanted;
    obj.gas_used = message.gasUsed;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toSDK(e) : undefined);
    } else {
      obj.events = [];
    }
    obj.codespace = message.codespace;
    return obj;
  },
  fromAmino(object: ResponseCheckTxAmino): ResponseCheckTx {
    const message = createBaseResponseCheckTx();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
      message.gasWanted = BigInt(object.gas_wanted);
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    message.events = object.events?.map(e => Event.fromAmino(e)) || [];
    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    return message;
  },
  toAmino(message: ResponseCheckTx, useInterfaces: boolean = true): ResponseCheckTxAmino {
    const obj: any = {};
    obj.code = message.code === 0 ? undefined : message.code;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.log = message.log === "" ? undefined : message.log;
    obj.info = message.info === "" ? undefined : message.info;
    obj.gas_wanted = message.gasWanted !== BigInt(0) ? message.gasWanted?.toString() : undefined;
    obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed?.toString() : undefined;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.events = message.events;
    }
    obj.codespace = message.codespace === "" ? undefined : message.codespace;
    return obj;
  },
  fromProtoMsg(message: ResponseCheckTxProtoMsg, useInterfaces: boolean = true): ResponseCheckTx {
    return ResponseCheckTx.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ResponseCheckTx): Uint8Array {
    return ResponseCheckTx.encode(message).finish();
  },
  toProtoMsg(message: ResponseCheckTx): ResponseCheckTxProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseCheckTx",
      value: ResponseCheckTx.encode(message).finish()
    };
  }
};
function createBaseResponseDeliverTx(): ResponseDeliverTx {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    events: [],
    codespace: ""
  };
}
export const ResponseDeliverTx = {
  typeUrl: "/tendermint.abci.ResponseDeliverTx",
  encode(message: ResponseDeliverTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ResponseDeliverTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseDeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64();
          break;
        case 6:
          message.gasUsed = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseDeliverTx {
    const obj = createBaseResponseDeliverTx();
    if (isSet(object.code)) obj.code = Number(object.code);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    if (isSet(object.log)) obj.log = String(object.log);
    if (isSet(object.info)) obj.info = String(object.info);
    if (isSet(object.gas_wanted)) obj.gasWanted = BigInt(object.gas_wanted.toString());
    if (isSet(object.gas_used)) obj.gasUsed = BigInt(object.gas_used.toString());
    if (Array.isArray(object?.events)) obj.events = object.events.map((e: any) => Event.fromJSON(e));
    if (isSet(object.codespace)) obj.codespace = String(object.codespace);
    return obj;
  },
  fromPartial(object: DeepPartial<ResponseDeliverTx>): ResponseDeliverTx {
    const message = createBaseResponseDeliverTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    if (object.gasWanted !== undefined && object.gasWanted !== null) {
      message.gasWanted = BigInt(object.gasWanted.toString());
    }
    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = BigInt(object.gasUsed.toString());
    }
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromSDK(object: ResponseDeliverTxSDKType): ResponseDeliverTx {
    return {
      code: object?.code,
      data: object?.data,
      log: object?.log,
      info: object?.info,
      gasWanted: object?.gas_wanted,
      gasUsed: object?.gas_used,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromSDK(e)) : [],
      codespace: object?.codespace
    };
  },
  toSDK(message: ResponseDeliverTx): ResponseDeliverTxSDKType {
    const obj: any = {};
    obj.code = message.code;
    obj.data = message.data;
    obj.log = message.log;
    obj.info = message.info;
    obj.gas_wanted = message.gasWanted;
    obj.gas_used = message.gasUsed;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toSDK(e) : undefined);
    } else {
      obj.events = [];
    }
    obj.codespace = message.codespace;
    return obj;
  },
  fromAmino(object: ResponseDeliverTxAmino): ResponseDeliverTx {
    const message = createBaseResponseDeliverTx();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
      message.gasWanted = BigInt(object.gas_wanted);
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    message.events = object.events?.map(e => Event.fromAmino(e)) || [];
    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    return message;
  },
  toAmino(message: ResponseDeliverTx, useInterfaces: boolean = true): ResponseDeliverTxAmino {
    const obj: any = {};
    obj.code = message.code === 0 ? undefined : message.code;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.log = message.log === "" ? undefined : message.log;
    obj.info = message.info === "" ? undefined : message.info;
    obj.gas_wanted = message.gasWanted !== BigInt(0) ? message.gasWanted?.toString() : undefined;
    obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed?.toString() : undefined;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.events = message.events;
    }
    obj.codespace = message.codespace === "" ? undefined : message.codespace;
    return obj;
  },
  fromProtoMsg(message: ResponseDeliverTxProtoMsg, useInterfaces: boolean = true): ResponseDeliverTx {
    return ResponseDeliverTx.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ResponseDeliverTx): Uint8Array {
    return ResponseDeliverTx.encode(message).finish();
  },
  toProtoMsg(message: ResponseDeliverTx): ResponseDeliverTxProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseDeliverTx",
      value: ResponseDeliverTx.encode(message).finish()
    };
  }
};
function createBaseResponseEndBlock(): ResponseEndBlock {
  return {
    validatorUpdates: [],
    consensusParamUpdates: undefined,
    events: []
  };
}
export const ResponseEndBlock = {
  typeUrl: "/tendermint.abci.ResponseEndBlock",
  encode(message: ResponseEndBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validatorUpdates) {
      ValidatorUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusParamUpdates !== undefined) {
      ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ResponseEndBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEndBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorUpdates.push(ValidatorUpdate.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.consensusParamUpdates = ConsensusParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseEndBlock {
    const obj = createBaseResponseEndBlock();
    if (Array.isArray(object?.validatorUpdates)) obj.validatorUpdates = object.validatorUpdates.map((e: any) => ValidatorUpdate.fromJSON(e));
    if (isSet(object.consensusParamUpdates)) obj.consensusParamUpdates = ConsensusParams.fromJSON(object.consensusParamUpdates);
    if (Array.isArray(object?.events)) obj.events = object.events.map((e: any) => Event.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<ResponseEndBlock>): ResponseEndBlock {
    const message = createBaseResponseEndBlock();
    message.validatorUpdates = object.validatorUpdates?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    if (object.consensusParamUpdates !== undefined && object.consensusParamUpdates !== null) {
      message.consensusParamUpdates = ConsensusParams.fromPartial(object.consensusParamUpdates);
    }
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ResponseEndBlockSDKType): ResponseEndBlock {
    return {
      validatorUpdates: Array.isArray(object?.validator_updates) ? object.validator_updates.map((e: any) => ValidatorUpdate.fromSDK(e)) : [],
      consensusParamUpdates: object.consensus_param_updates ? ConsensusParams.fromSDK(object.consensus_param_updates) : undefined,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromSDK(e)) : []
    };
  },
  toSDK(message: ResponseEndBlock): ResponseEndBlockSDKType {
    const obj: any = {};
    if (message.validatorUpdates) {
      obj.validator_updates = message.validatorUpdates.map(e => e ? ValidatorUpdate.toSDK(e) : undefined);
    } else {
      obj.validator_updates = [];
    }
    message.consensusParamUpdates !== undefined && (obj.consensus_param_updates = message.consensusParamUpdates ? ConsensusParams.toSDK(message.consensusParamUpdates) : undefined);
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toSDK(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromAmino(object: ResponseEndBlockAmino): ResponseEndBlock {
    const message = createBaseResponseEndBlock();
    message.validatorUpdates = object.validator_updates?.map(e => ValidatorUpdate.fromAmino(e)) || [];
    if (object.consensus_param_updates !== undefined && object.consensus_param_updates !== null) {
      message.consensusParamUpdates = ConsensusParams.fromAmino(object.consensus_param_updates);
    }
    message.events = object.events?.map(e => Event.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ResponseEndBlock, useInterfaces: boolean = true): ResponseEndBlockAmino {
    const obj: any = {};
    if (message.validatorUpdates) {
      obj.validator_updates = message.validatorUpdates.map(e => e ? ValidatorUpdate.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validator_updates = message.validatorUpdates;
    }
    obj.consensus_param_updates = message.consensusParamUpdates ? ConsensusParams.toAmino(message.consensusParamUpdates, useInterfaces) : undefined;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.events = message.events;
    }
    return obj;
  },
  fromProtoMsg(message: ResponseEndBlockProtoMsg, useInterfaces: boolean = true): ResponseEndBlock {
    return ResponseEndBlock.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ResponseEndBlock): Uint8Array {
    return ResponseEndBlock.encode(message).finish();
  },
  toProtoMsg(message: ResponseEndBlock): ResponseEndBlockProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseEndBlock",
      value: ResponseEndBlock.encode(message).finish()
    };
  }
};
function createBaseResponseCommit(): ResponseCommit {
  return {
    data: new Uint8Array(),
    retainHeight: BigInt(0)
  };
}
export const ResponseCommit = {
  typeUrl: "/tendermint.abci.ResponseCommit",
  encode(message: ResponseCommit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.retainHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.retainHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ResponseCommit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.retainHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseCommit {
    const obj = createBaseResponseCommit();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    if (isSet(object.retainHeight)) obj.retainHeight = BigInt(object.retainHeight.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ResponseCommit>): ResponseCommit {
    const message = createBaseResponseCommit();
    message.data = object.data ?? new Uint8Array();
    if (object.retainHeight !== undefined && object.retainHeight !== null) {
      message.retainHeight = BigInt(object.retainHeight.toString());
    }
    return message;
  },
  fromSDK(object: ResponseCommitSDKType): ResponseCommit {
    return {
      data: object?.data,
      retainHeight: object?.retain_height
    };
  },
  toSDK(message: ResponseCommit): ResponseCommitSDKType {
    const obj: any = {};
    obj.data = message.data;
    obj.retain_height = message.retainHeight;
    return obj;
  },
  fromAmino(object: ResponseCommitAmino): ResponseCommit {
    const message = createBaseResponseCommit();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.retain_height !== undefined && object.retain_height !== null) {
      message.retainHeight = BigInt(object.retain_height);
    }
    return message;
  },
  toAmino(message: ResponseCommit, useInterfaces: boolean = true): ResponseCommitAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.retain_height = message.retainHeight !== BigInt(0) ? message.retainHeight?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: ResponseCommitProtoMsg, useInterfaces: boolean = true): ResponseCommit {
    return ResponseCommit.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ResponseCommit): Uint8Array {
    return ResponseCommit.encode(message).finish();
  },
  toProtoMsg(message: ResponseCommit): ResponseCommitProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseCommit",
      value: ResponseCommit.encode(message).finish()
    };
  }
};
function createBaseResponseListSnapshots(): ResponseListSnapshots {
  return {
    snapshots: []
  };
}
export const ResponseListSnapshots = {
  typeUrl: "/tendermint.abci.ResponseListSnapshots",
  encode(message: ResponseListSnapshots, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.snapshots) {
      Snapshot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ResponseListSnapshots {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseListSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshots.push(Snapshot.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseListSnapshots {
    const obj = createBaseResponseListSnapshots();
    if (Array.isArray(object?.snapshots)) obj.snapshots = object.snapshots.map((e: any) => Snapshot.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<ResponseListSnapshots>): ResponseListSnapshots {
    const message = createBaseResponseListSnapshots();
    message.snapshots = object.snapshots?.map(e => Snapshot.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ResponseListSnapshotsSDKType): ResponseListSnapshots {
    return {
      snapshots: Array.isArray(object?.snapshots) ? object.snapshots.map((e: any) => Snapshot.fromSDK(e)) : []
    };
  },
  toSDK(message: ResponseListSnapshots): ResponseListSnapshotsSDKType {
    const obj: any = {};
    if (message.snapshots) {
      obj.snapshots = message.snapshots.map(e => e ? Snapshot.toSDK(e) : undefined);
    } else {
      obj.snapshots = [];
    }
    return obj;
  },
  fromAmino(object: ResponseListSnapshotsAmino): ResponseListSnapshots {
    const message = createBaseResponseListSnapshots();
    message.snapshots = object.snapshots?.map(e => Snapshot.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ResponseListSnapshots, useInterfaces: boolean = true): ResponseListSnapshotsAmino {
    const obj: any = {};
    if (message.snapshots) {
      obj.snapshots = message.snapshots.map(e => e ? Snapshot.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.snapshots = message.snapshots;
    }
    return obj;
  },
  fromProtoMsg(message: ResponseListSnapshotsProtoMsg, useInterfaces: boolean = true): ResponseListSnapshots {
    return ResponseListSnapshots.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ResponseListSnapshots): Uint8Array {
    return ResponseListSnapshots.encode(message).finish();
  },
  toProtoMsg(message: ResponseListSnapshots): ResponseListSnapshotsProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseListSnapshots",
      value: ResponseListSnapshots.encode(message).finish()
    };
  }
};
function createBaseResponseOfferSnapshot(): ResponseOfferSnapshot {
  return {
    result: 0
  };
}
export const ResponseOfferSnapshot = {
  typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
  encode(message: ResponseOfferSnapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ResponseOfferSnapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseOfferSnapshot {
    const obj = createBaseResponseOfferSnapshot();
    if (isSet(object.result)) obj.result = responseOfferSnapshot_ResultFromJSON(object.result);
    return obj;
  },
  fromPartial(object: DeepPartial<ResponseOfferSnapshot>): ResponseOfferSnapshot {
    const message = createBaseResponseOfferSnapshot();
    message.result = object.result ?? 0;
    return message;
  },
  fromSDK(object: ResponseOfferSnapshotSDKType): ResponseOfferSnapshot {
    return {
      result: isSet(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : -1
    };
  },
  toSDK(message: ResponseOfferSnapshot): ResponseOfferSnapshotSDKType {
    const obj: any = {};
    message.result !== undefined && (obj.result = responseOfferSnapshot_ResultToJSON(message.result));
    return obj;
  },
  fromAmino(object: ResponseOfferSnapshotAmino): ResponseOfferSnapshot {
    const message = createBaseResponseOfferSnapshot();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: ResponseOfferSnapshot, useInterfaces: boolean = true): ResponseOfferSnapshotAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromProtoMsg(message: ResponseOfferSnapshotProtoMsg, useInterfaces: boolean = true): ResponseOfferSnapshot {
    return ResponseOfferSnapshot.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ResponseOfferSnapshot): Uint8Array {
    return ResponseOfferSnapshot.encode(message).finish();
  },
  toProtoMsg(message: ResponseOfferSnapshot): ResponseOfferSnapshotProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
      value: ResponseOfferSnapshot.encode(message).finish()
    };
  }
};
function createBaseResponseLoadSnapshotChunk(): ResponseLoadSnapshotChunk {
  return {
    chunk: new Uint8Array()
  };
}
export const ResponseLoadSnapshotChunk = {
  typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
  encode(message: ResponseLoadSnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ResponseLoadSnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunk = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseLoadSnapshotChunk {
    const obj = createBaseResponseLoadSnapshotChunk();
    if (isSet(object.chunk)) obj.chunk = bytesFromBase64(object.chunk);
    return obj;
  },
  fromPartial(object: DeepPartial<ResponseLoadSnapshotChunk>): ResponseLoadSnapshotChunk {
    const message = createBaseResponseLoadSnapshotChunk();
    message.chunk = object.chunk ?? new Uint8Array();
    return message;
  },
  fromSDK(object: ResponseLoadSnapshotChunkSDKType): ResponseLoadSnapshotChunk {
    return {
      chunk: object?.chunk
    };
  },
  toSDK(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkSDKType {
    const obj: any = {};
    obj.chunk = message.chunk;
    return obj;
  },
  fromAmino(object: ResponseLoadSnapshotChunkAmino): ResponseLoadSnapshotChunk {
    const message = createBaseResponseLoadSnapshotChunk();
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = bytesFromBase64(object.chunk);
    }
    return message;
  },
  toAmino(message: ResponseLoadSnapshotChunk, useInterfaces: boolean = true): ResponseLoadSnapshotChunkAmino {
    const obj: any = {};
    obj.chunk = message.chunk ? base64FromBytes(message.chunk) : undefined;
    return obj;
  },
  fromProtoMsg(message: ResponseLoadSnapshotChunkProtoMsg, useInterfaces: boolean = true): ResponseLoadSnapshotChunk {
    return ResponseLoadSnapshotChunk.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ResponseLoadSnapshotChunk): Uint8Array {
    return ResponseLoadSnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
      value: ResponseLoadSnapshotChunk.encode(message).finish()
    };
  }
};
function createBaseResponseApplySnapshotChunk(): ResponseApplySnapshotChunk {
  return {
    result: 0,
    refetchChunks: [],
    rejectSenders: []
  };
}
export const ResponseApplySnapshotChunk = {
  typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
  encode(message: ResponseApplySnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.refetchChunks) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.rejectSenders) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ResponseApplySnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = (reader.int32() as any);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.refetchChunks.push(reader.uint32());
            }
          } else {
            message.refetchChunks.push(reader.uint32());
          }
          break;
        case 3:
          message.rejectSenders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResponseApplySnapshotChunk {
    const obj = createBaseResponseApplySnapshotChunk();
    if (isSet(object.result)) obj.result = responseApplySnapshotChunk_ResultFromJSON(object.result);
    if (Array.isArray(object?.refetchChunks)) obj.refetchChunks = object.refetchChunks.map((e: any) => Number(e));
    if (Array.isArray(object?.rejectSenders)) obj.rejectSenders = object.rejectSenders.map((e: any) => String(e));
    return obj;
  },
  fromPartial(object: DeepPartial<ResponseApplySnapshotChunk>): ResponseApplySnapshotChunk {
    const message = createBaseResponseApplySnapshotChunk();
    message.result = object.result ?? 0;
    message.refetchChunks = object.refetchChunks?.map(e => e) || [];
    message.rejectSenders = object.rejectSenders?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ResponseApplySnapshotChunkSDKType): ResponseApplySnapshotChunk {
    return {
      result: isSet(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : -1,
      refetchChunks: Array.isArray(object?.refetch_chunks) ? object.refetch_chunks.map((e: any) => e) : [],
      rejectSenders: Array.isArray(object?.reject_senders) ? object.reject_senders.map((e: any) => e) : []
    };
  },
  toSDK(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkSDKType {
    const obj: any = {};
    message.result !== undefined && (obj.result = responseApplySnapshotChunk_ResultToJSON(message.result));
    if (message.refetchChunks) {
      obj.refetch_chunks = message.refetchChunks.map(e => e);
    } else {
      obj.refetch_chunks = [];
    }
    if (message.rejectSenders) {
      obj.reject_senders = message.rejectSenders.map(e => e);
    } else {
      obj.reject_senders = [];
    }
    return obj;
  },
  fromAmino(object: ResponseApplySnapshotChunkAmino): ResponseApplySnapshotChunk {
    const message = createBaseResponseApplySnapshotChunk();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    message.refetchChunks = object.refetch_chunks?.map(e => e) || [];
    message.rejectSenders = object.reject_senders?.map(e => e) || [];
    return message;
  },
  toAmino(message: ResponseApplySnapshotChunk, useInterfaces: boolean = true): ResponseApplySnapshotChunkAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    if (message.refetchChunks) {
      obj.refetch_chunks = message.refetchChunks.map(e => e);
    } else {
      obj.refetch_chunks = message.refetchChunks;
    }
    if (message.rejectSenders) {
      obj.reject_senders = message.rejectSenders.map(e => e);
    } else {
      obj.reject_senders = message.rejectSenders;
    }
    return obj;
  },
  fromProtoMsg(message: ResponseApplySnapshotChunkProtoMsg, useInterfaces: boolean = true): ResponseApplySnapshotChunk {
    return ResponseApplySnapshotChunk.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ResponseApplySnapshotChunk): Uint8Array {
    return ResponseApplySnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
      value: ResponseApplySnapshotChunk.encode(message).finish()
    };
  }
};
function createBaseConsensusParams(): ConsensusParams {
  return {
    block: undefined,
    evidence: undefined,
    validator: undefined,
    version: undefined
  };
}
export const ConsensusParams = {
  typeUrl: "/tendermint.abci.ConsensusParams",
  encode(message: ConsensusParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== undefined) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ConsensusParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.version = VersionParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusParams {
    const obj = createBaseConsensusParams();
    if (isSet(object.block)) obj.block = BlockParams.fromJSON(object.block);
    if (isSet(object.evidence)) obj.evidence = EvidenceParams.fromJSON(object.evidence);
    if (isSet(object.validator)) obj.validator = ValidatorParams.fromJSON(object.validator);
    if (isSet(object.version)) obj.version = VersionParams.fromJSON(object.version);
    return obj;
  },
  fromPartial(object: DeepPartial<ConsensusParams>): ConsensusParams {
    const message = createBaseConsensusParams();
    if (object.block !== undefined && object.block !== null) {
      message.block = BlockParams.fromPartial(object.block);
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = EvidenceParams.fromPartial(object.evidence);
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = ValidatorParams.fromPartial(object.validator);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = VersionParams.fromPartial(object.version);
    }
    return message;
  },
  fromSDK(object: ConsensusParamsSDKType): ConsensusParams {
    return {
      block: object.block ? BlockParams.fromSDK(object.block) : undefined,
      evidence: object.evidence ? EvidenceParams.fromSDK(object.evidence) : undefined,
      validator: object.validator ? ValidatorParams.fromSDK(object.validator) : undefined,
      version: object.version ? VersionParams.fromSDK(object.version) : undefined
    };
  },
  toSDK(message: ConsensusParams): ConsensusParamsSDKType {
    const obj: any = {};
    message.block !== undefined && (obj.block = message.block ? BlockParams.toSDK(message.block) : undefined);
    message.evidence !== undefined && (obj.evidence = message.evidence ? EvidenceParams.toSDK(message.evidence) : undefined);
    message.validator !== undefined && (obj.validator = message.validator ? ValidatorParams.toSDK(message.validator) : undefined);
    message.version !== undefined && (obj.version = message.version ? VersionParams.toSDK(message.version) : undefined);
    return obj;
  },
  fromAmino(object: ConsensusParamsAmino): ConsensusParams {
    const message = createBaseConsensusParams();
    if (object.block !== undefined && object.block !== null) {
      message.block = BlockParams.fromAmino(object.block);
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = EvidenceParams.fromAmino(object.evidence);
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = ValidatorParams.fromAmino(object.validator);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = VersionParams.fromAmino(object.version);
    }
    return message;
  },
  toAmino(message: ConsensusParams, useInterfaces: boolean = true): ConsensusParamsAmino {
    const obj: any = {};
    obj.block = message.block ? BlockParams.toAmino(message.block, useInterfaces) : undefined;
    obj.evidence = message.evidence ? EvidenceParams.toAmino(message.evidence, useInterfaces) : undefined;
    obj.validator = message.validator ? ValidatorParams.toAmino(message.validator, useInterfaces) : undefined;
    obj.version = message.version ? VersionParams.toAmino(message.version, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: ConsensusParamsProtoMsg, useInterfaces: boolean = true): ConsensusParams {
    return ConsensusParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ConsensusParams): Uint8Array {
    return ConsensusParams.encode(message).finish();
  },
  toProtoMsg(message: ConsensusParams): ConsensusParamsProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ConsensusParams",
      value: ConsensusParams.encode(message).finish()
    };
  }
};
function createBaseBlockParams(): BlockParams {
  return {
    maxBytes: BigInt(0),
    maxGas: BigInt(0)
  };
}
export const BlockParams = {
  typeUrl: "/tendermint.abci.BlockParams",
  encode(message: BlockParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxBytes !== BigInt(0)) {
      writer.uint32(8).int64(message.maxBytes);
    }
    if (message.maxGas !== BigInt(0)) {
      writer.uint32(16).int64(message.maxGas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): BlockParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBytes = reader.int64();
          break;
        case 2:
          message.maxGas = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockParams {
    const obj = createBaseBlockParams();
    if (isSet(object.maxBytes)) obj.maxBytes = BigInt(object.maxBytes.toString());
    if (isSet(object.maxGas)) obj.maxGas = BigInt(object.maxGas.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<BlockParams>): BlockParams {
    const message = createBaseBlockParams();
    if (object.maxBytes !== undefined && object.maxBytes !== null) {
      message.maxBytes = BigInt(object.maxBytes.toString());
    }
    if (object.maxGas !== undefined && object.maxGas !== null) {
      message.maxGas = BigInt(object.maxGas.toString());
    }
    return message;
  },
  fromSDK(object: BlockParamsSDKType): BlockParams {
    return {
      maxBytes: object?.max_bytes,
      maxGas: object?.max_gas
    };
  },
  toSDK(message: BlockParams): BlockParamsSDKType {
    const obj: any = {};
    obj.max_bytes = message.maxBytes;
    obj.max_gas = message.maxGas;
    return obj;
  },
  fromAmino(object: BlockParamsAmino): BlockParams {
    const message = createBaseBlockParams();
    if (object.max_bytes !== undefined && object.max_bytes !== null) {
      message.maxBytes = BigInt(object.max_bytes);
    }
    if (object.max_gas !== undefined && object.max_gas !== null) {
      message.maxGas = BigInt(object.max_gas);
    }
    return message;
  },
  toAmino(message: BlockParams, useInterfaces: boolean = true): BlockParamsAmino {
    const obj: any = {};
    obj.max_bytes = message.maxBytes !== BigInt(0) ? message.maxBytes?.toString() : undefined;
    obj.max_gas = message.maxGas !== BigInt(0) ? message.maxGas?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: BlockParamsProtoMsg, useInterfaces: boolean = true): BlockParams {
    return BlockParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: BlockParams): Uint8Array {
    return BlockParams.encode(message).finish();
  },
  toProtoMsg(message: BlockParams): BlockParamsProtoMsg {
    return {
      typeUrl: "/tendermint.abci.BlockParams",
      value: BlockParams.encode(message).finish()
    };
  }
};
function createBaseLastCommitInfo(): LastCommitInfo {
  return {
    round: 0,
    votes: []
  };
}
export const LastCommitInfo = {
  typeUrl: "/tendermint.abci.LastCommitInfo",
  encode(message: LastCommitInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      VoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): LastCommitInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(VoteInfo.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LastCommitInfo {
    const obj = createBaseLastCommitInfo();
    if (isSet(object.round)) obj.round = Number(object.round);
    if (Array.isArray(object?.votes)) obj.votes = object.votes.map((e: any) => VoteInfo.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<LastCommitInfo>): LastCommitInfo {
    const message = createBaseLastCommitInfo();
    message.round = object.round ?? 0;
    message.votes = object.votes?.map(e => VoteInfo.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: LastCommitInfoSDKType): LastCommitInfo {
    return {
      round: object?.round,
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => VoteInfo.fromSDK(e)) : []
    };
  },
  toSDK(message: LastCommitInfo): LastCommitInfoSDKType {
    const obj: any = {};
    obj.round = message.round;
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? VoteInfo.toSDK(e) : undefined);
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromAmino(object: LastCommitInfoAmino): LastCommitInfo {
    const message = createBaseLastCommitInfo();
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    }
    message.votes = object.votes?.map(e => VoteInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: LastCommitInfo, useInterfaces: boolean = true): LastCommitInfoAmino {
    const obj: any = {};
    obj.round = message.round === 0 ? undefined : message.round;
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? VoteInfo.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.votes = message.votes;
    }
    return obj;
  },
  fromProtoMsg(message: LastCommitInfoProtoMsg, useInterfaces: boolean = true): LastCommitInfo {
    return LastCommitInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: LastCommitInfo): Uint8Array {
    return LastCommitInfo.encode(message).finish();
  },
  toProtoMsg(message: LastCommitInfo): LastCommitInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.LastCommitInfo",
      value: LastCommitInfo.encode(message).finish()
    };
  }
};
function createBaseEvent(): Event {
  return {
    type: "",
    attributes: []
  };
}
export const Event = {
  typeUrl: "/tendermint.abci.Event",
  encode(message: Event, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      EventAttribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Event {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(EventAttribute.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Event {
    const obj = createBaseEvent();
    if (isSet(object.type)) obj.type = String(object.type);
    if (Array.isArray(object?.attributes)) obj.attributes = object.attributes.map((e: any) => EventAttribute.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<Event>): Event {
    const message = createBaseEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map(e => EventAttribute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: EventSDKType): Event {
    return {
      type: object?.type,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => EventAttribute.fromSDK(e)) : []
    };
  },
  toSDK(message: Event): EventSDKType {
    const obj: any = {};
    obj.type = message.type;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? EventAttribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: EventAmino): Event {
    const message = createBaseEvent();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    message.attributes = object.attributes?.map(e => EventAttribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Event, useInterfaces: boolean = true): EventAmino {
    const obj: any = {};
    obj.type = message.type === "" ? undefined : message.type;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? EventAttribute.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromProtoMsg(message: EventProtoMsg, useInterfaces: boolean = true): Event {
    return Event.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Event): Uint8Array {
    return Event.encode(message).finish();
  },
  toProtoMsg(message: Event): EventProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Event",
      value: Event.encode(message).finish()
    };
  }
};
function createBaseEventAttribute(): EventAttribute {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    index: false
  };
}
export const EventAttribute = {
  typeUrl: "/tendermint.abci.EventAttribute",
  encode(message: EventAttribute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.index === true) {
      writer.uint32(24).bool(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventAttribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.index = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventAttribute {
    const obj = createBaseEventAttribute();
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.value)) obj.value = bytesFromBase64(object.value);
    if (isSet(object.index)) obj.index = Boolean(object.index);
    return obj;
  },
  fromPartial(object: DeepPartial<EventAttribute>): EventAttribute {
    const message = createBaseEventAttribute();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.index = object.index ?? false;
    return message;
  },
  fromSDK(object: EventAttributeSDKType): EventAttribute {
    return {
      key: object?.key,
      value: object?.value,
      index: object?.index
    };
  },
  toSDK(message: EventAttribute): EventAttributeSDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    obj.index = message.index;
    return obj;
  },
  fromAmino(object: EventAttributeAmino): EventAttribute {
    const message = createBaseEventAttribute();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: EventAttribute, useInterfaces: boolean = true): EventAttributeAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    obj.index = message.index === false ? undefined : message.index;
    return obj;
  },
  fromProtoMsg(message: EventAttributeProtoMsg, useInterfaces: boolean = true): EventAttribute {
    return EventAttribute.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventAttribute): Uint8Array {
    return EventAttribute.encode(message).finish();
  },
  toProtoMsg(message: EventAttribute): EventAttributeProtoMsg {
    return {
      typeUrl: "/tendermint.abci.EventAttribute",
      value: EventAttribute.encode(message).finish()
    };
  }
};
function createBaseTxResult(): TxResult {
  return {
    height: BigInt(0),
    index: 0,
    tx: new Uint8Array(),
    result: ResponseDeliverTx.fromPartial({})
  };
}
export const TxResult = {
  typeUrl: "/tendermint.abci.TxResult",
  encode(message: TxResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.tx.length !== 0) {
      writer.uint32(26).bytes(message.tx);
    }
    if (message.result !== undefined) {
      ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TxResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.index = reader.uint32();
          break;
        case 3:
          message.tx = reader.bytes();
          break;
        case 4:
          message.result = ResponseDeliverTx.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxResult {
    const obj = createBaseTxResult();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.index)) obj.index = Number(object.index);
    if (isSet(object.tx)) obj.tx = bytesFromBase64(object.tx);
    if (isSet(object.result)) obj.result = ResponseDeliverTx.fromJSON(object.result);
    return obj;
  },
  fromPartial(object: DeepPartial<TxResult>): TxResult {
    const message = createBaseTxResult();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.index = object.index ?? 0;
    message.tx = object.tx ?? new Uint8Array();
    if (object.result !== undefined && object.result !== null) {
      message.result = ResponseDeliverTx.fromPartial(object.result);
    }
    return message;
  },
  fromSDK(object: TxResultSDKType): TxResult {
    return {
      height: object?.height,
      index: object?.index,
      tx: object?.tx,
      result: object.result ? ResponseDeliverTx.fromSDK(object.result) : undefined
    };
  },
  toSDK(message: TxResult): TxResultSDKType {
    const obj: any = {};
    obj.height = message.height;
    obj.index = message.index;
    obj.tx = message.tx;
    message.result !== undefined && (obj.result = message.result ? ResponseDeliverTx.toSDK(message.result) : undefined);
    return obj;
  },
  fromAmino(object: TxResultAmino): TxResult {
    const message = createBaseTxResult();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = ResponseDeliverTx.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: TxResult, useInterfaces: boolean = true): TxResultAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.index = message.index === 0 ? undefined : message.index;
    obj.tx = message.tx ? base64FromBytes(message.tx) : undefined;
    obj.result = message.result ? ResponseDeliverTx.toAmino(message.result, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: TxResultProtoMsg, useInterfaces: boolean = true): TxResult {
    return TxResult.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TxResult): Uint8Array {
    return TxResult.encode(message).finish();
  },
  toProtoMsg(message: TxResult): TxResultProtoMsg {
    return {
      typeUrl: "/tendermint.abci.TxResult",
      value: TxResult.encode(message).finish()
    };
  }
};
function createBaseValidator(): Validator {
  return {
    address: new Uint8Array(),
    power: BigInt(0)
  };
}
export const Validator = {
  typeUrl: "/tendermint.abci.Validator",
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 3:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    const obj = createBaseValidator();
    if (isSet(object.address)) obj.address = bytesFromBase64(object.address);
    if (isSet(object.power)) obj.power = BigInt(object.power.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array();
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power.toString());
    }
    return message;
  },
  fromSDK(object: ValidatorSDKType): Validator {
    return {
      address: object?.address,
      power: object?.power
    };
  },
  toSDK(message: Validator): ValidatorSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.power = message.power;
    return obj;
  },
  fromAmino(object: ValidatorAmino): Validator {
    const message = createBaseValidator();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message: Validator, useInterfaces: boolean = true): ValidatorAmino {
    const obj: any = {};
    obj.address = message.address ? base64FromBytes(message.address) : undefined;
    obj.power = message.power !== BigInt(0) ? message.power?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: ValidatorProtoMsg, useInterfaces: boolean = true): Validator {
    return Validator.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
function createBaseValidatorUpdate(): ValidatorUpdate {
  return {
    pubKey: PublicKey.fromPartial({}),
    power: BigInt(0)
  };
}
export const ValidatorUpdate = {
  typeUrl: "/tendermint.abci.ValidatorUpdate",
  encode(message: ValidatorUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorUpdate {
    const obj = createBaseValidatorUpdate();
    if (isSet(object.pubKey)) obj.pubKey = PublicKey.fromJSON(object.pubKey);
    if (isSet(object.power)) obj.power = BigInt(object.power.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorUpdate>): ValidatorUpdate {
    const message = createBaseValidatorUpdate();
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = PublicKey.fromPartial(object.pubKey);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power.toString());
    }
    return message;
  },
  fromSDK(object: ValidatorUpdateSDKType): ValidatorUpdate {
    return {
      pubKey: object.pub_key ? PublicKey.fromSDK(object.pub_key) : undefined,
      power: object?.power
    };
  },
  toSDK(message: ValidatorUpdate): ValidatorUpdateSDKType {
    const obj: any = {};
    message.pubKey !== undefined && (obj.pub_key = message.pubKey ? PublicKey.toSDK(message.pubKey) : undefined);
    obj.power = message.power;
    return obj;
  },
  fromAmino(object: ValidatorUpdateAmino): ValidatorUpdate {
    const message = createBaseValidatorUpdate();
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = PublicKey.fromAmino(object.pub_key);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message: ValidatorUpdate, useInterfaces: boolean = true): ValidatorUpdateAmino {
    const obj: any = {};
    obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey, useInterfaces) : undefined;
    obj.power = message.power !== BigInt(0) ? message.power?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: ValidatorUpdateProtoMsg, useInterfaces: boolean = true): ValidatorUpdate {
    return ValidatorUpdate.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorUpdate): Uint8Array {
    return ValidatorUpdate.encode(message).finish();
  },
  toProtoMsg(message: ValidatorUpdate): ValidatorUpdateProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ValidatorUpdate",
      value: ValidatorUpdate.encode(message).finish()
    };
  }
};
function createBaseVoteInfo(): VoteInfo {
  return {
    validator: Validator.fromPartial({}),
    signedLastBlock: false
  };
}
export const VoteInfo = {
  typeUrl: "/tendermint.abci.VoteInfo",
  encode(message: VoteInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.signedLastBlock === true) {
      writer.uint32(16).bool(message.signedLastBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): VoteInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.signedLastBlock = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VoteInfo {
    const obj = createBaseVoteInfo();
    if (isSet(object.validator)) obj.validator = Validator.fromJSON(object.validator);
    if (isSet(object.signedLastBlock)) obj.signedLastBlock = Boolean(object.signedLastBlock);
    return obj;
  },
  fromPartial(object: DeepPartial<VoteInfo>): VoteInfo {
    const message = createBaseVoteInfo();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    }
    message.signedLastBlock = object.signedLastBlock ?? false;
    return message;
  },
  fromSDK(object: VoteInfoSDKType): VoteInfo {
    return {
      validator: object.validator ? Validator.fromSDK(object.validator) : undefined,
      signedLastBlock: object?.signed_last_block
    };
  },
  toSDK(message: VoteInfo): VoteInfoSDKType {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator ? Validator.toSDK(message.validator) : undefined);
    obj.signed_last_block = message.signedLastBlock;
    return obj;
  },
  fromAmino(object: VoteInfoAmino): VoteInfo {
    const message = createBaseVoteInfo();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    if (object.signed_last_block !== undefined && object.signed_last_block !== null) {
      message.signedLastBlock = object.signed_last_block;
    }
    return message;
  },
  toAmino(message: VoteInfo, useInterfaces: boolean = true): VoteInfoAmino {
    const obj: any = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator, useInterfaces) : undefined;
    obj.signed_last_block = message.signedLastBlock === false ? undefined : message.signedLastBlock;
    return obj;
  },
  fromProtoMsg(message: VoteInfoProtoMsg, useInterfaces: boolean = true): VoteInfo {
    return VoteInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: VoteInfo): Uint8Array {
    return VoteInfo.encode(message).finish();
  },
  toProtoMsg(message: VoteInfo): VoteInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.VoteInfo",
      value: VoteInfo.encode(message).finish()
    };
  }
};
function createBaseEvidence(): Evidence {
  return {
    type: 0,
    validator: Validator.fromPartial({}),
    height: BigInt(0),
    time: new Date(),
    totalVotingPower: BigInt(0)
  };
}
export const Evidence = {
  typeUrl: "/tendermint.abci.Evidence",
  encode(message: Evidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(40).int64(message.totalVotingPower);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Evidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;
        case 2:
          message.validator = Validator.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.totalVotingPower = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Evidence {
    const obj = createBaseEvidence();
    if (isSet(object.type)) obj.type = evidenceTypeFromJSON(object.type);
    if (isSet(object.validator)) obj.validator = Validator.fromJSON(object.validator);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.time)) obj.time = new Date(object.time);
    if (isSet(object.totalVotingPower)) obj.totalVotingPower = BigInt(object.totalVotingPower.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Evidence>): Evidence {
    const message = createBaseEvidence();
    message.type = object.type ?? 0;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.time = object.time ?? undefined;
    if (object.totalVotingPower !== undefined && object.totalVotingPower !== null) {
      message.totalVotingPower = BigInt(object.totalVotingPower.toString());
    }
    return message;
  },
  fromSDK(object: EvidenceSDKType): Evidence {
    return {
      type: isSet(object.type) ? evidenceTypeFromJSON(object.type) : -1,
      validator: object.validator ? Validator.fromSDK(object.validator) : undefined,
      height: object?.height,
      time: object.time ?? undefined,
      totalVotingPower: object?.total_voting_power
    };
  },
  toSDK(message: Evidence): EvidenceSDKType {
    const obj: any = {};
    message.type !== undefined && (obj.type = evidenceTypeToJSON(message.type));
    message.validator !== undefined && (obj.validator = message.validator ? Validator.toSDK(message.validator) : undefined);
    obj.height = message.height;
    message.time !== undefined && (obj.time = message.time ?? undefined);
    obj.total_voting_power = message.totalVotingPower;
    return obj;
  },
  fromAmino(object: EvidenceAmino): Evidence {
    const message = createBaseEvidence();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
      message.totalVotingPower = BigInt(object.total_voting_power);
    }
    return message;
  },
  toAmino(message: Evidence, useInterfaces: boolean = true): EvidenceAmino {
    const obj: any = {};
    obj.type = message.type === 0 ? undefined : message.type;
    obj.validator = message.validator ? Validator.toAmino(message.validator, useInterfaces) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
    obj.total_voting_power = message.totalVotingPower !== BigInt(0) ? message.totalVotingPower?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: EvidenceProtoMsg, useInterfaces: boolean = true): Evidence {
    return Evidence.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Evidence): Uint8Array {
    return Evidence.encode(message).finish();
  },
  toProtoMsg(message: Evidence): EvidenceProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Evidence",
      value: Evidence.encode(message).finish()
    };
  }
};
function createBaseSnapshot(): Snapshot {
  return {
    height: BigInt(0),
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}
export const Snapshot = {
  typeUrl: "/tendermint.abci.Snapshot",
  encode(message: Snapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Snapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Snapshot {
    const obj = createBaseSnapshot();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.format)) obj.format = Number(object.format);
    if (isSet(object.chunks)) obj.chunks = Number(object.chunks);
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    if (isSet(object.metadata)) obj.metadata = bytesFromBase64(object.metadata);
    return obj;
  },
  fromPartial(object: DeepPartial<Snapshot>): Snapshot {
    const message = createBaseSnapshot();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
  fromSDK(object: SnapshotSDKType): Snapshot {
    return {
      height: object?.height,
      format: object?.format,
      chunks: object?.chunks,
      hash: object?.hash,
      metadata: object?.metadata
    };
  },
  toSDK(message: Snapshot): SnapshotSDKType {
    const obj: any = {};
    obj.height = message.height;
    obj.format = message.format;
    obj.chunks = message.chunks;
    obj.hash = message.hash;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAmino(object: SnapshotAmino): Snapshot {
    const message = createBaseSnapshot();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    }
    if (object.chunks !== undefined && object.chunks !== null) {
      message.chunks = object.chunks;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },
  toAmino(message: Snapshot, useInterfaces: boolean = true): SnapshotAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.format = message.format === 0 ? undefined : message.format;
    obj.chunks = message.chunks === 0 ? undefined : message.chunks;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    return obj;
  },
  fromProtoMsg(message: SnapshotProtoMsg, useInterfaces: boolean = true): Snapshot {
    return Snapshot.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Snapshot): Uint8Array {
    return Snapshot.encode(message).finish();
  },
  toProtoMsg(message: Snapshot): SnapshotProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Snapshot",
      value: Snapshot.encode(message).finish()
    };
  }
};