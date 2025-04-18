import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractInfoAmino, ContractInfoSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntryAmino, ContractCodeHistoryEntrySDKType, Model, ModelAmino, ModelSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { toUtf8, fromUtf8 } from "@cosmjs/encoding";
export const protobufPackage = "cosmwasm.wasm.v1";
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequest {
  /** address is the address of the contract to query */
  address: string;
}
export interface QueryContractInfoRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest";
  value: Uint8Array;
}
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequestAmino {
  /** address is the address of the contract to query */
  address?: string;
}
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequestSDKType {
  address: string;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponse {
  /** address is the address of the contract */
  address: string;
  contractInfo: ContractInfo;
}
export interface QueryContractInfoResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse";
  value: Uint8Array;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponseAmino {
  /** address is the address of the contract */
  address?: string;
  contract_info?: ContractInfoAmino;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponseSDKType {
  address: string;
  contract_info: ContractInfoSDKType;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequest {
  /** address is the address of the contract to query */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryContractHistoryRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest";
  value: Uint8Array;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequestAmino {
  /** address is the address of the contract to query */
  address?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponse {
  entries: ContractCodeHistoryEntry[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryContractHistoryResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse";
  value: Uint8Array;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponseAmino {
  entries?: ContractCodeHistoryEntryAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponseSDKType {
  entries: ContractCodeHistoryEntrySDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequest {
  /** grpc-gateway_out does not support Go style CodID */
  codeId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryContractsByCodeRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest";
  value: Uint8Array;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequestAmino {
  /** grpc-gateway_out does not support Go style CodID */
  code_id?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequestSDKType {
  code_id: bigint;
  pagination?: PageRequestSDKType;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponse {
  /** contracts are a set of contract addresses */
  contracts: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryContractsByCodeResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse";
  value: Uint8Array;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponseAmino {
  /** contracts are a set of contract addresses */
  contracts?: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponseSDKType {
  contracts: string[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequest {
  /** address is the address of the contract */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAllContractStateRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest";
  value: Uint8Array;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequestAmino {
  /** address is the address of the contract */
  address?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponse {
  models: Model[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAllContractStateResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse";
  value: Uint8Array;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponseAmino {
  models?: ModelAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponseSDKType {
  models: ModelSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequest {
  /** address is the address of the contract */
  address: string;
  queryData: Uint8Array;
}
export interface QueryRawContractStateRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest";
  value: Uint8Array;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequestAmino {
  /** address is the address of the contract */
  address?: string;
  query_data?: string;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequestSDKType {
  address: string;
  query_data: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponse {
  /** Data contains the raw store data */
  data: Uint8Array;
}
export interface QueryRawContractStateResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse";
  value: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponseAmino {
  /** Data contains the raw store data */
  data?: string;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponseSDKType {
  data: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequest {
  /** address is the address of the contract */
  address: string;
  /** QueryData contains the query data passed to the contract */
  queryData: Uint8Array;
}
export interface QuerySmartContractStateRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest";
  value: Uint8Array;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequestAmino {
  /** address is the address of the contract */
  address?: string;
  /** QueryData contains the query data passed to the contract */
  query_data?: any;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequestSDKType {
  address: string;
  query_data: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponse {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
}
export interface QuerySmartContractStateResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse";
  value: Uint8Array;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponseAmino {
  /** Data contains the json data returned from the smart contract */
  data?: any;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponseSDKType {
  data: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequest {
  /** grpc-gateway_out does not support Go style CodID */
  codeId: bigint;
}
export interface QueryCodeRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest";
  value: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequestAmino {
  /** grpc-gateway_out does not support Go style CodID */
  code_id?: string;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequestSDKType {
  code_id: bigint;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponse {
  codeId: bigint;
  creator: string;
  dataHash: Uint8Array;
}
export interface CodeInfoResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse";
  value: Uint8Array;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponseAmino {
  code_id: string;
  creator?: string;
  data_hash?: string;
}
/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponseSDKType {
  code_id: bigint;
  creator: string;
  data_hash: Uint8Array;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponse {
  codeInfo?: CodeInfoResponse;
  data: Uint8Array;
}
export interface QueryCodeResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse";
  value: Uint8Array;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponseAmino {
  code_info?: CodeInfoResponseAmino;
  data: string;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponseSDKType {
  code_info?: CodeInfoResponseSDKType;
  data: Uint8Array;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryCodesRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest";
  value: Uint8Array;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponse {
  codeInfos: CodeInfoResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryCodesResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse";
  value: Uint8Array;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponseAmino {
  code_infos?: CodeInfoResponseAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponseSDKType {
  code_infos: CodeInfoResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryPinnedCodesRequestProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest";
  value: Uint8Array;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponse {
  codeIds: bigint[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryPinnedCodesResponseProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse";
  value: Uint8Array;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponseAmino {
  code_ids?: string[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponseSDKType {
  code_ids: bigint[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryContractInfoRequest(): QueryContractInfoRequest {
  return {
    address: ""
  };
}
export const QueryContractInfoRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
  aminoType: "wasm/QueryContractInfoRequest",
  encode(message: QueryContractInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryContractInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractInfoRequest {
    const obj = createBaseQueryContractInfoRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryContractInfoRequest>): QueryContractInfoRequest {
    const message = createBaseQueryContractInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: QueryContractInfoRequestSDKType): QueryContractInfoRequest {
    return {
      address: object?.address
    };
  },
  toSDK(message: QueryContractInfoRequest): QueryContractInfoRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: QueryContractInfoRequestAmino): QueryContractInfoRequest {
    const message = createBaseQueryContractInfoRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryContractInfoRequest, useInterfaces: boolean = true): QueryContractInfoRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromProtoMsg(message: QueryContractInfoRequestProtoMsg, useInterfaces: boolean = true): QueryContractInfoRequest {
    return QueryContractInfoRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryContractInfoRequest): Uint8Array {
    return QueryContractInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractInfoRequest): QueryContractInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
      value: QueryContractInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContractInfoResponse(): QueryContractInfoResponse {
  return {
    address: "",
    contractInfo: ContractInfo.fromPartial({})
  };
}
export const QueryContractInfoResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
  aminoType: "wasm/QueryContractInfoResponse",
  encode(message: QueryContractInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryContractInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractInfoResponse {
    const obj = createBaseQueryContractInfoResponse();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.contractInfo)) obj.contractInfo = ContractInfo.fromJSON(object.contractInfo);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryContractInfoResponse>): QueryContractInfoResponse {
    const message = createBaseQueryContractInfoResponse();
    message.address = object.address ?? "";
    if (object.contractInfo !== undefined && object.contractInfo !== null) {
      message.contractInfo = ContractInfo.fromPartial(object.contractInfo);
    }
    return message;
  },
  fromSDK(object: QueryContractInfoResponseSDKType): QueryContractInfoResponse {
    return {
      address: object?.address,
      contractInfo: object.contract_info ? ContractInfo.fromSDK(object.contract_info) : undefined
    };
  },
  toSDK(message: QueryContractInfoResponse): QueryContractInfoResponseSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.contractInfo !== undefined && (obj.contract_info = message.contractInfo ? ContractInfo.toSDK(message.contractInfo) : undefined);
    return obj;
  },
  fromAmino(object: QueryContractInfoResponseAmino): QueryContractInfoResponse {
    const message = createBaseQueryContractInfoResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.contract_info !== undefined && object.contract_info !== null) {
      message.contractInfo = ContractInfo.fromAmino(object.contract_info);
    }
    return message;
  },
  toAmino(message: QueryContractInfoResponse, useInterfaces: boolean = true): QueryContractInfoResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.contract_info = message.contractInfo ? ContractInfo.toAmino(message.contractInfo, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryContractInfoResponseProtoMsg, useInterfaces: boolean = true): QueryContractInfoResponse {
    return QueryContractInfoResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryContractInfoResponse): Uint8Array {
    return QueryContractInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractInfoResponse): QueryContractInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
      value: QueryContractInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContractHistoryRequest(): QueryContractHistoryRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryContractHistoryRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
  aminoType: "wasm/QueryContractHistoryRequest",
  encode(message: QueryContractHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryContractHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractHistoryRequest {
    const obj = createBaseQueryContractHistoryRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryContractHistoryRequest>): QueryContractHistoryRequest {
    const message = createBaseQueryContractHistoryRequest();
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryContractHistoryRequestSDKType): QueryContractHistoryRequest {
    return {
      address: object?.address,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryContractHistoryRequest): QueryContractHistoryRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryContractHistoryRequestAmino): QueryContractHistoryRequest {
    const message = createBaseQueryContractHistoryRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractHistoryRequest, useInterfaces: boolean = true): QueryContractHistoryRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryContractHistoryRequestProtoMsg, useInterfaces: boolean = true): QueryContractHistoryRequest {
    return QueryContractHistoryRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryContractHistoryRequest): Uint8Array {
    return QueryContractHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractHistoryRequest): QueryContractHistoryRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
      value: QueryContractHistoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContractHistoryResponse(): QueryContractHistoryResponse {
  return {
    entries: [],
    pagination: undefined
  };
}
export const QueryContractHistoryResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
  aminoType: "wasm/QueryContractHistoryResponse",
  encode(message: QueryContractHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      ContractCodeHistoryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryContractHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(ContractCodeHistoryEntry.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractHistoryResponse {
    const obj = createBaseQueryContractHistoryResponse();
    if (Array.isArray(object?.entries)) obj.entries = object.entries.map((e: any) => ContractCodeHistoryEntry.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryContractHistoryResponse>): QueryContractHistoryResponse {
    const message = createBaseQueryContractHistoryResponse();
    message.entries = object.entries?.map(e => ContractCodeHistoryEntry.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryContractHistoryResponseSDKType): QueryContractHistoryResponse {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => ContractCodeHistoryEntry.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryContractHistoryResponse): QueryContractHistoryResponseSDKType {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? ContractCodeHistoryEntry.toSDK(e) : undefined);
    } else {
      obj.entries = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryContractHistoryResponseAmino): QueryContractHistoryResponse {
    const message = createBaseQueryContractHistoryResponse();
    message.entries = object.entries?.map(e => ContractCodeHistoryEntry.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractHistoryResponse, useInterfaces: boolean = true): QueryContractHistoryResponseAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? ContractCodeHistoryEntry.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.entries = message.entries;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryContractHistoryResponseProtoMsg, useInterfaces: boolean = true): QueryContractHistoryResponse {
    return QueryContractHistoryResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryContractHistoryResponse): Uint8Array {
    return QueryContractHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractHistoryResponse): QueryContractHistoryResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
      value: QueryContractHistoryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContractsByCodeRequest(): QueryContractsByCodeRequest {
  return {
    codeId: BigInt(0),
    pagination: undefined
  };
}
export const QueryContractsByCodeRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
  aminoType: "wasm/QueryContractsByCodeRequest",
  encode(message: QueryContractsByCodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryContractsByCodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractsByCodeRequest {
    const obj = createBaseQueryContractsByCodeRequest();
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryContractsByCodeRequest>): QueryContractsByCodeRequest {
    const message = createBaseQueryContractsByCodeRequest();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryContractsByCodeRequestSDKType): QueryContractsByCodeRequest {
    return {
      codeId: object?.code_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestSDKType {
    const obj: any = {};
    obj.code_id = message.codeId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryContractsByCodeRequestAmino): QueryContractsByCodeRequest {
    const message = createBaseQueryContractsByCodeRequest();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractsByCodeRequest, useInterfaces: boolean = true): QueryContractsByCodeRequestAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryContractsByCodeRequestProtoMsg, useInterfaces: boolean = true): QueryContractsByCodeRequest {
    return QueryContractsByCodeRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryContractsByCodeRequest): Uint8Array {
    return QueryContractsByCodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractsByCodeRequest): QueryContractsByCodeRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
      value: QueryContractsByCodeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContractsByCodeResponse(): QueryContractsByCodeResponse {
  return {
    contracts: [],
    pagination: undefined
  };
}
export const QueryContractsByCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
  aminoType: "wasm/QueryContractsByCodeResponse",
  encode(message: QueryContractsByCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contracts) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryContractsByCodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractsByCodeResponse {
    const obj = createBaseQueryContractsByCodeResponse();
    if (Array.isArray(object?.contracts)) obj.contracts = object.contracts.map((e: any) => String(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryContractsByCodeResponse>): QueryContractsByCodeResponse {
    const message = createBaseQueryContractsByCodeResponse();
    message.contracts = object.contracts?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryContractsByCodeResponseSDKType): QueryContractsByCodeResponse {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => e) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseSDKType {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e);
    } else {
      obj.contracts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryContractsByCodeResponseAmino): QueryContractsByCodeResponse {
    const message = createBaseQueryContractsByCodeResponse();
    message.contracts = object.contracts?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractsByCodeResponse, useInterfaces: boolean = true): QueryContractsByCodeResponseAmino {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e);
    } else {
      obj.contracts = message.contracts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryContractsByCodeResponseProtoMsg, useInterfaces: boolean = true): QueryContractsByCodeResponse {
    return QueryContractsByCodeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryContractsByCodeResponse): Uint8Array {
    return QueryContractsByCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractsByCodeResponse): QueryContractsByCodeResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
      value: QueryContractsByCodeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllContractStateRequest(): QueryAllContractStateRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryAllContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
  aminoType: "wasm/QueryAllContractStateRequest",
  encode(message: QueryAllContractStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllContractStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllContractStateRequest {
    const obj = createBaseQueryAllContractStateRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllContractStateRequest>): QueryAllContractStateRequest {
    const message = createBaseQueryAllContractStateRequest();
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAllContractStateRequestSDKType): QueryAllContractStateRequest {
    return {
      address: object?.address,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllContractStateRequest): QueryAllContractStateRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllContractStateRequestAmino): QueryAllContractStateRequest {
    const message = createBaseQueryAllContractStateRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllContractStateRequest, useInterfaces: boolean = true): QueryAllContractStateRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryAllContractStateRequestProtoMsg, useInterfaces: boolean = true): QueryAllContractStateRequest {
    return QueryAllContractStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllContractStateRequest): Uint8Array {
    return QueryAllContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllContractStateRequest): QueryAllContractStateRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
      value: QueryAllContractStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllContractStateResponse(): QueryAllContractStateResponse {
  return {
    models: [],
    pagination: undefined
  };
}
export const QueryAllContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
  aminoType: "wasm/QueryAllContractStateResponse",
  encode(message: QueryAllContractStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.models) {
      Model.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllContractStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.models.push(Model.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllContractStateResponse {
    const obj = createBaseQueryAllContractStateResponse();
    if (Array.isArray(object?.models)) obj.models = object.models.map((e: any) => Model.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllContractStateResponse>): QueryAllContractStateResponse {
    const message = createBaseQueryAllContractStateResponse();
    message.models = object.models?.map(e => Model.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAllContractStateResponseSDKType): QueryAllContractStateResponse {
    return {
      models: Array.isArray(object?.models) ? object.models.map((e: any) => Model.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllContractStateResponse): QueryAllContractStateResponseSDKType {
    const obj: any = {};
    if (message.models) {
      obj.models = message.models.map(e => e ? Model.toSDK(e) : undefined);
    } else {
      obj.models = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllContractStateResponseAmino): QueryAllContractStateResponse {
    const message = createBaseQueryAllContractStateResponse();
    message.models = object.models?.map(e => Model.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllContractStateResponse, useInterfaces: boolean = true): QueryAllContractStateResponseAmino {
    const obj: any = {};
    if (message.models) {
      obj.models = message.models.map(e => e ? Model.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.models = message.models;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryAllContractStateResponseProtoMsg, useInterfaces: boolean = true): QueryAllContractStateResponse {
    return QueryAllContractStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllContractStateResponse): Uint8Array {
    return QueryAllContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllContractStateResponse): QueryAllContractStateResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
      value: QueryAllContractStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRawContractStateRequest(): QueryRawContractStateRequest {
  return {
    address: "",
    queryData: new Uint8Array()
  };
}
export const QueryRawContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
  aminoType: "wasm/QueryRawContractStateRequest",
  encode(message: QueryRawContractStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryRawContractStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.queryData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRawContractStateRequest {
    const obj = createBaseQueryRawContractStateRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.queryData)) obj.queryData = bytesFromBase64(object.queryData);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryRawContractStateRequest>): QueryRawContractStateRequest {
    const message = createBaseQueryRawContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QueryRawContractStateRequestSDKType): QueryRawContractStateRequest {
    return {
      address: object?.address,
      queryData: object?.query_data
    };
  },
  toSDK(message: QueryRawContractStateRequest): QueryRawContractStateRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.query_data = message.queryData;
    return obj;
  },
  fromAmino(object: QueryRawContractStateRequestAmino): QueryRawContractStateRequest {
    const message = createBaseQueryRawContractStateRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.query_data !== undefined && object.query_data !== null) {
      message.queryData = bytesFromBase64(object.query_data);
    }
    return message;
  },
  toAmino(message: QueryRawContractStateRequest, useInterfaces: boolean = true): QueryRawContractStateRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.query_data = message.queryData ? base64FromBytes(message.queryData) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryRawContractStateRequestProtoMsg, useInterfaces: boolean = true): QueryRawContractStateRequest {
    return QueryRawContractStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryRawContractStateRequest): Uint8Array {
    return QueryRawContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRawContractStateRequest): QueryRawContractStateRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
      value: QueryRawContractStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRawContractStateResponse(): QueryRawContractStateResponse {
  return {
    data: new Uint8Array()
  };
}
export const QueryRawContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
  aminoType: "wasm/QueryRawContractStateResponse",
  encode(message: QueryRawContractStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryRawContractStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRawContractStateResponse {
    const obj = createBaseQueryRawContractStateResponse();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryRawContractStateResponse>): QueryRawContractStateResponse {
    const message = createBaseQueryRawContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QueryRawContractStateResponseSDKType): QueryRawContractStateResponse {
    return {
      data: object?.data
    };
  },
  toSDK(message: QueryRawContractStateResponse): QueryRawContractStateResponseSDKType {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: QueryRawContractStateResponseAmino): QueryRawContractStateResponse {
    const message = createBaseQueryRawContractStateResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryRawContractStateResponse, useInterfaces: boolean = true): QueryRawContractStateResponseAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryRawContractStateResponseProtoMsg, useInterfaces: boolean = true): QueryRawContractStateResponse {
    return QueryRawContractStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryRawContractStateResponse): Uint8Array {
    return QueryRawContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRawContractStateResponse): QueryRawContractStateResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
      value: QueryRawContractStateResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySmartContractStateRequest(): QuerySmartContractStateRequest {
  return {
    address: "",
    queryData: new Uint8Array()
  };
}
export const QuerySmartContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
  aminoType: "wasm/QuerySmartContractStateRequest",
  encode(message: QuerySmartContractStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySmartContractStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.queryData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySmartContractStateRequest {
    const obj = createBaseQuerySmartContractStateRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.queryData)) obj.queryData = bytesFromBase64(object.queryData);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySmartContractStateRequest>): QuerySmartContractStateRequest {
    const message = createBaseQuerySmartContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QuerySmartContractStateRequestSDKType): QuerySmartContractStateRequest {
    return {
      address: object?.address,
      queryData: object?.query_data
    };
  },
  toSDK(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.query_data = message.queryData;
    return obj;
  },
  fromAmino(object: QuerySmartContractStateRequestAmino): QuerySmartContractStateRequest {
    const message = createBaseQuerySmartContractStateRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.query_data !== undefined && object.query_data !== null) {
      message.queryData = toUtf8(JSON.stringify(object.query_data));
    }
    return message;
  },
  toAmino(message: QuerySmartContractStateRequest, useInterfaces: boolean = true): QuerySmartContractStateRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.query_data = message.queryData ? JSON.parse(fromUtf8(message.queryData)) : undefined;
    return obj;
  },
  fromProtoMsg(message: QuerySmartContractStateRequestProtoMsg, useInterfaces: boolean = true): QuerySmartContractStateRequest {
    return QuerySmartContractStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySmartContractStateRequest): Uint8Array {
    return QuerySmartContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySmartContractStateRequest): QuerySmartContractStateRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
      value: QuerySmartContractStateRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySmartContractStateResponse(): QuerySmartContractStateResponse {
  return {
    data: new Uint8Array()
  };
}
export const QuerySmartContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
  aminoType: "wasm/QuerySmartContractStateResponse",
  encode(message: QuerySmartContractStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySmartContractStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySmartContractStateResponse {
    const obj = createBaseQuerySmartContractStateResponse();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySmartContractStateResponse>): QuerySmartContractStateResponse {
    const message = createBaseQuerySmartContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QuerySmartContractStateResponseSDKType): QuerySmartContractStateResponse {
    return {
      data: object?.data
    };
  },
  toSDK(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseSDKType {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: QuerySmartContractStateResponseAmino): QuerySmartContractStateResponse {
    const message = createBaseQuerySmartContractStateResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = toUtf8(JSON.stringify(object.data));
    }
    return message;
  },
  toAmino(message: QuerySmartContractStateResponse, useInterfaces: boolean = true): QuerySmartContractStateResponseAmino {
    const obj: any = {};
    obj.data = message.data ? JSON.parse(fromUtf8(message.data)) : undefined;
    return obj;
  },
  fromProtoMsg(message: QuerySmartContractStateResponseProtoMsg, useInterfaces: boolean = true): QuerySmartContractStateResponse {
    return QuerySmartContractStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySmartContractStateResponse): Uint8Array {
    return QuerySmartContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySmartContractStateResponse): QuerySmartContractStateResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
      value: QuerySmartContractStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    codeId: BigInt(0)
  };
}
export const QueryCodeRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
  aminoType: "wasm/QueryCodeRequest",
  encode(message: QueryCodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryCodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCodeRequest {
    const obj = createBaseQueryCodeRequest();
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCodeRequest>): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    return message;
  },
  fromSDK(object: QueryCodeRequestSDKType): QueryCodeRequest {
    return {
      codeId: object?.code_id
    };
  },
  toSDK(message: QueryCodeRequest): QueryCodeRequestSDKType {
    const obj: any = {};
    obj.code_id = message.codeId;
    return obj;
  },
  fromAmino(object: QueryCodeRequestAmino): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    return message;
  },
  toAmino(message: QueryCodeRequest, useInterfaces: boolean = true): QueryCodeRequestAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryCodeRequestProtoMsg, useInterfaces: boolean = true): QueryCodeRequest {
    return QueryCodeRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryCodeRequest): Uint8Array {
    return QueryCodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeRequest): QueryCodeRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
      value: QueryCodeRequest.encode(message).finish()
    };
  }
};
function createBaseCodeInfoResponse(): CodeInfoResponse {
  return {
    codeId: BigInt(0),
    creator: "",
    dataHash: new Uint8Array()
  };
}
export const CodeInfoResponse = {
  typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
  aminoType: "wasm/CodeInfoResponse",
  encode(message: CodeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(26).bytes(message.dataHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): CodeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.dataHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CodeInfoResponse {
    const obj = createBaseCodeInfoResponse();
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.dataHash)) obj.dataHash = bytesFromBase64(object.dataHash);
    return obj;
  },
  fromPartial(object: DeepPartial<CodeInfoResponse>): CodeInfoResponse {
    const message = createBaseCodeInfoResponse();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    message.creator = object.creator ?? "";
    message.dataHash = object.dataHash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: CodeInfoResponseSDKType): CodeInfoResponse {
    return {
      codeId: object?.code_id,
      creator: object?.creator,
      dataHash: object?.data_hash
    };
  },
  toSDK(message: CodeInfoResponse): CodeInfoResponseSDKType {
    const obj: any = {};
    obj.code_id = message.codeId;
    obj.creator = message.creator;
    obj.data_hash = message.dataHash;
    return obj;
  },
  fromAmino(object: CodeInfoResponseAmino): CodeInfoResponse {
    const message = createBaseCodeInfoResponse();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.data_hash !== undefined && object.data_hash !== null) {
      message.dataHash = bytesFromBase64(object.data_hash);
    }
    return message;
  },
  toAmino(message: CodeInfoResponse, useInterfaces: boolean = true): CodeInfoResponseAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId?.toString() : "0";
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.data_hash = message.dataHash ? base64FromBytes(message.dataHash) : undefined;
    return obj;
  },
  fromProtoMsg(message: CodeInfoResponseProtoMsg, useInterfaces: boolean = true): CodeInfoResponse {
    return CodeInfoResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: CodeInfoResponse): Uint8Array {
    return CodeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: CodeInfoResponse): CodeInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
      value: CodeInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    codeInfo: undefined,
    data: new Uint8Array()
  };
}
export const QueryCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
  aminoType: "wasm/QueryCodeResponse",
  encode(message: QueryCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeInfo !== undefined) {
      CodeInfoResponse.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryCodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfo = CodeInfoResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCodeResponse {
    const obj = createBaseQueryCodeResponse();
    if (isSet(object.codeInfo)) obj.codeInfo = CodeInfoResponse.fromJSON(object.codeInfo);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCodeResponse>): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    if (object.codeInfo !== undefined && object.codeInfo !== null) {
      message.codeInfo = CodeInfoResponse.fromPartial(object.codeInfo);
    }
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QueryCodeResponseSDKType): QueryCodeResponse {
    return {
      codeInfo: object.code_info ? CodeInfoResponse.fromSDK(object.code_info) : undefined,
      data: object?.data
    };
  },
  toSDK(message: QueryCodeResponse): QueryCodeResponseSDKType {
    const obj: any = {};
    message.codeInfo !== undefined && (obj.code_info = message.codeInfo ? CodeInfoResponse.toSDK(message.codeInfo) : undefined);
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: QueryCodeResponseAmino): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    if (object.code_info !== undefined && object.code_info !== null) {
      message.codeInfo = CodeInfoResponse.fromAmino(object.code_info);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryCodeResponse, useInterfaces: boolean = true): QueryCodeResponseAmino {
    const obj: any = {};
    obj.code_info = message.codeInfo ? CodeInfoResponse.toAmino(message.codeInfo, useInterfaces) : undefined;
    obj.data = message.data ? base64FromBytes(message.data) : "";
    return obj;
  },
  fromProtoMsg(message: QueryCodeResponseProtoMsg, useInterfaces: boolean = true): QueryCodeResponse {
    return QueryCodeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryCodeResponse): Uint8Array {
    return QueryCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
      value: QueryCodeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCodesRequest(): QueryCodesRequest {
  return {
    pagination: undefined
  };
}
export const QueryCodesRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
  aminoType: "wasm/QueryCodesRequest",
  encode(message: QueryCodesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryCodesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCodesRequest {
    const obj = createBaseQueryCodesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCodesRequest>): QueryCodesRequest {
    const message = createBaseQueryCodesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryCodesRequestSDKType): QueryCodesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryCodesRequest): QueryCodesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryCodesRequestAmino): QueryCodesRequest {
    const message = createBaseQueryCodesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCodesRequest, useInterfaces: boolean = true): QueryCodesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryCodesRequestProtoMsg, useInterfaces: boolean = true): QueryCodesRequest {
    return QueryCodesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryCodesRequest): Uint8Array {
    return QueryCodesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCodesRequest): QueryCodesRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
      value: QueryCodesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCodesResponse(): QueryCodesResponse {
  return {
    codeInfos: [],
    pagination: undefined
  };
}
export const QueryCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
  aminoType: "wasm/QueryCodesResponse",
  encode(message: QueryCodesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.codeInfos) {
      CodeInfoResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryCodesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfos.push(CodeInfoResponse.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCodesResponse {
    const obj = createBaseQueryCodesResponse();
    if (Array.isArray(object?.codeInfos)) obj.codeInfos = object.codeInfos.map((e: any) => CodeInfoResponse.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCodesResponse>): QueryCodesResponse {
    const message = createBaseQueryCodesResponse();
    message.codeInfos = object.codeInfos?.map(e => CodeInfoResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryCodesResponseSDKType): QueryCodesResponse {
    return {
      codeInfos: Array.isArray(object?.code_infos) ? object.code_infos.map((e: any) => CodeInfoResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryCodesResponse): QueryCodesResponseSDKType {
    const obj: any = {};
    if (message.codeInfos) {
      obj.code_infos = message.codeInfos.map(e => e ? CodeInfoResponse.toSDK(e) : undefined);
    } else {
      obj.code_infos = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryCodesResponseAmino): QueryCodesResponse {
    const message = createBaseQueryCodesResponse();
    message.codeInfos = object.code_infos?.map(e => CodeInfoResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCodesResponse, useInterfaces: boolean = true): QueryCodesResponseAmino {
    const obj: any = {};
    if (message.codeInfos) {
      obj.code_infos = message.codeInfos.map(e => e ? CodeInfoResponse.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.code_infos = message.codeInfos;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryCodesResponseProtoMsg, useInterfaces: boolean = true): QueryCodesResponse {
    return QueryCodesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryCodesResponse): Uint8Array {
    return QueryCodesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCodesResponse): QueryCodesResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
      value: QueryCodesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPinnedCodesRequest(): QueryPinnedCodesRequest {
  return {
    pagination: undefined
  };
}
export const QueryPinnedCodesRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
  aminoType: "wasm/QueryPinnedCodesRequest",
  encode(message: QueryPinnedCodesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPinnedCodesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPinnedCodesRequest {
    const obj = createBaseQueryPinnedCodesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPinnedCodesRequest>): QueryPinnedCodesRequest {
    const message = createBaseQueryPinnedCodesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryPinnedCodesRequestSDKType): QueryPinnedCodesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPinnedCodesRequestAmino): QueryPinnedCodesRequest {
    const message = createBaseQueryPinnedCodesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPinnedCodesRequest, useInterfaces: boolean = true): QueryPinnedCodesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryPinnedCodesRequestProtoMsg, useInterfaces: boolean = true): QueryPinnedCodesRequest {
    return QueryPinnedCodesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPinnedCodesRequest): Uint8Array {
    return QueryPinnedCodesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPinnedCodesRequest): QueryPinnedCodesRequestProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
      value: QueryPinnedCodesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPinnedCodesResponse(): QueryPinnedCodesResponse {
  return {
    codeIds: [],
    pagination: undefined
  };
}
export const QueryPinnedCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
  aminoType: "wasm/QueryPinnedCodesResponse",
  encode(message: QueryPinnedCodesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPinnedCodesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
          }
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPinnedCodesResponse {
    const obj = createBaseQueryPinnedCodesResponse();
    if (Array.isArray(object?.codeIds)) obj.codeIds = object.codeIds.map((e: any) => BigInt(e.toString()));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPinnedCodesResponse>): QueryPinnedCodesResponse {
    const message = createBaseQueryPinnedCodesResponse();
    message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryPinnedCodesResponseSDKType): QueryPinnedCodesResponse {
    return {
      codeIds: Array.isArray(object?.code_ids) ? object.code_ids.map((e: any) => e) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseSDKType {
    const obj: any = {};
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map(e => e);
    } else {
      obj.code_ids = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryPinnedCodesResponseAmino): QueryPinnedCodesResponse {
    const message = createBaseQueryPinnedCodesResponse();
    message.codeIds = object.code_ids?.map(e => BigInt(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPinnedCodesResponse, useInterfaces: boolean = true): QueryPinnedCodesResponseAmino {
    const obj: any = {};
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map(e => e.toString());
    } else {
      obj.code_ids = message.codeIds;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryPinnedCodesResponseProtoMsg, useInterfaces: boolean = true): QueryPinnedCodesResponse {
    return QueryPinnedCodesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPinnedCodesResponse): Uint8Array {
    return QueryPinnedCodesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPinnedCodesResponse): QueryPinnedCodesResponseProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
      value: QueryPinnedCodesResponse.encode(message).finish()
    };
  }
};