import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, IncentiveAmino, IncentiveSDKType, GasMeter, GasMeterAmino, GasMeterSDKType } from "./incentives";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "evmos.incentives.v1";
/**
 * QueryIncentivesRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryIncentivesRequestProtoMsg {
  typeUrl: "/evmos.incentives.v1.QueryIncentivesRequest";
  value: Uint8Array;
}
/**
 * QueryIncentivesRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
/**
 * QueryIncentivesRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryIncentivesResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesResponse {
  incentives: Incentive[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryIncentivesResponseProtoMsg {
  typeUrl: "/evmos.incentives.v1.QueryIncentivesResponse";
  value: Uint8Array;
}
/**
 * QueryIncentivesResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesResponseAmino {
  incentives?: IncentiveAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
/**
 * QueryIncentivesResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesResponseSDKType {
  incentives: IncentiveSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryIncentiveRequest is the request type for the Query/Incentive RPC method. */
export interface QueryIncentiveRequest {
  /** contract identifier is the hex contract address of a contract */
  contract: string;
}
export interface QueryIncentiveRequestProtoMsg {
  typeUrl: "/evmos.incentives.v1.QueryIncentiveRequest";
  value: Uint8Array;
}
/** QueryIncentiveRequest is the request type for the Query/Incentive RPC method. */
export interface QueryIncentiveRequestAmino {
  /** contract identifier is the hex contract address of a contract */
  contract?: string;
}
/** QueryIncentiveRequest is the request type for the Query/Incentive RPC method. */
export interface QueryIncentiveRequestSDKType {
  contract: string;
}
/**
 * QueryIncentiveResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryIncentiveResponse {
  incentive: Incentive;
}
export interface QueryIncentiveResponseProtoMsg {
  typeUrl: "/evmos.incentives.v1.QueryIncentiveResponse";
  value: Uint8Array;
}
/**
 * QueryIncentiveResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryIncentiveResponseAmino {
  incentive?: IncentiveAmino;
}
/**
 * QueryIncentiveResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryIncentiveResponseSDKType {
  incentive: IncentiveSDKType;
}
/**
 * QueryGasMetersRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersRequest {
  /** contract is the hex contract address of a incentivized smart contract */
  contract: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGasMetersRequestProtoMsg {
  typeUrl: "/evmos.incentives.v1.QueryGasMetersRequest";
  value: Uint8Array;
}
/**
 * QueryGasMetersRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersRequestAmino {
  /** contract is the hex contract address of a incentivized smart contract */
  contract?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
/**
 * QueryGasMetersRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersRequestSDKType {
  contract: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryGasMetersResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersResponse {
  gasMeters: GasMeter[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGasMetersResponseProtoMsg {
  typeUrl: "/evmos.incentives.v1.QueryGasMetersResponse";
  value: Uint8Array;
}
/**
 * QueryGasMetersResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersResponseAmino {
  gas_meters?: GasMeterAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
/**
 * QueryGasMetersResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersResponseSDKType {
  gas_meters: GasMeterSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryGasMeterRequest is the request type for the Query/Incentive RPC method. */
export interface QueryGasMeterRequest {
  /** contract identifier is the hex contract address of a contract */
  contract: string;
  /** participant identifier is the hex address of a user */
  participant: string;
}
export interface QueryGasMeterRequestProtoMsg {
  typeUrl: "/evmos.incentives.v1.QueryGasMeterRequest";
  value: Uint8Array;
}
/** QueryGasMeterRequest is the request type for the Query/Incentive RPC method. */
export interface QueryGasMeterRequestAmino {
  /** contract identifier is the hex contract address of a contract */
  contract?: string;
  /** participant identifier is the hex address of a user */
  participant?: string;
}
/** QueryGasMeterRequest is the request type for the Query/Incentive RPC method. */
export interface QueryGasMeterRequestSDKType {
  contract: string;
  participant: string;
}
/**
 * QueryGasMeterResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryGasMeterResponse {
  gasMeter: bigint;
}
export interface QueryGasMeterResponseProtoMsg {
  typeUrl: "/evmos.incentives.v1.QueryGasMeterResponse";
  value: Uint8Array;
}
/**
 * QueryGasMeterResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryGasMeterResponseAmino {
  gas_meter?: string;
}
/**
 * QueryGasMeterResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryGasMeterResponseSDKType {
  gas_meter: bigint;
}
/**
 * QueryAllocationMetersRequest is the request type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAllocationMetersRequestProtoMsg {
  typeUrl: "/evmos.incentives.v1.QueryAllocationMetersRequest";
  value: Uint8Array;
}
/**
 * QueryAllocationMetersRequest is the request type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
/**
 * QueryAllocationMetersRequest is the request type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryAllocationMetersResponse is the response type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersResponse {
  allocationMeters: DecCoin[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAllocationMetersResponseProtoMsg {
  typeUrl: "/evmos.incentives.v1.QueryAllocationMetersResponse";
  value: Uint8Array;
}
/**
 * QueryAllocationMetersResponse is the response type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersResponseAmino {
  allocation_meters?: DecCoinAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
/**
 * QueryAllocationMetersResponse is the response type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersResponseSDKType {
  allocation_meters: DecCoinSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryAllocationMeterRequest is the request type for the Query/AllocationMeter
 * RPC method.
 */
export interface QueryAllocationMeterRequest {
  /** denom is the coin denom to query an allocation meter for. */
  denom: string;
}
export interface QueryAllocationMeterRequestProtoMsg {
  typeUrl: "/evmos.incentives.v1.QueryAllocationMeterRequest";
  value: Uint8Array;
}
/**
 * QueryAllocationMeterRequest is the request type for the Query/AllocationMeter
 * RPC method.
 */
export interface QueryAllocationMeterRequestAmino {
  /** denom is the coin denom to query an allocation meter for. */
  denom?: string;
}
/**
 * QueryAllocationMeterRequest is the request type for the Query/AllocationMeter
 * RPC method.
 */
export interface QueryAllocationMeterRequestSDKType {
  denom: string;
}
/**
 * QueryAllocationMeterResponse is the response type for the
 * Query/AllocationMeter RPC method.
 */
export interface QueryAllocationMeterResponse {
  allocationMeter: DecCoin;
}
export interface QueryAllocationMeterResponseProtoMsg {
  typeUrl: "/evmos.incentives.v1.QueryAllocationMeterResponse";
  value: Uint8Array;
}
/**
 * QueryAllocationMeterResponse is the response type for the
 * Query/AllocationMeter RPC method.
 */
export interface QueryAllocationMeterResponseAmino {
  allocation_meter?: DecCoinAmino;
}
/**
 * QueryAllocationMeterResponse is the response type for the
 * Query/AllocationMeter RPC method.
 */
export interface QueryAllocationMeterResponseSDKType {
  allocation_meter: DecCoinSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/evmos.incentives.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/evmos.incentives.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryIncentivesRequest(): QueryIncentivesRequest {
  return {
    pagination: undefined
  };
}
export const QueryIncentivesRequest = {
  typeUrl: "/evmos.incentives.v1.QueryIncentivesRequest",
  encode(message: QueryIncentivesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryIncentivesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivesRequest();
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
  fromJSON(object: any): QueryIncentivesRequest {
    const obj = createBaseQueryIncentivesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivesRequest>): QueryIncentivesRequest {
    const message = createBaseQueryIncentivesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryIncentivesRequestSDKType): QueryIncentivesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryIncentivesRequest): QueryIncentivesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryIncentivesRequestAmino): QueryIncentivesRequest {
    const message = createBaseQueryIncentivesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryIncentivesRequest, useInterfaces: boolean = true): QueryIncentivesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryIncentivesRequestProtoMsg, useInterfaces: boolean = true): QueryIncentivesRequest {
    return QueryIncentivesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryIncentivesRequest): Uint8Array {
    return QueryIncentivesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivesRequest): QueryIncentivesRequestProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.QueryIncentivesRequest",
      value: QueryIncentivesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIncentivesResponse(): QueryIncentivesResponse {
  return {
    incentives: [],
    pagination: undefined
  };
}
export const QueryIncentivesResponse = {
  typeUrl: "/evmos.incentives.v1.QueryIncentivesResponse",
  encode(message: QueryIncentivesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.incentives) {
      Incentive.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryIncentivesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentives.push(Incentive.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryIncentivesResponse {
    const obj = createBaseQueryIncentivesResponse();
    if (Array.isArray(object?.incentives)) obj.incentives = object.incentives.map((e: any) => Incentive.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivesResponse>): QueryIncentivesResponse {
    const message = createBaseQueryIncentivesResponse();
    message.incentives = object.incentives?.map(e => Incentive.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryIncentivesResponseSDKType): QueryIncentivesResponse {
    return {
      incentives: Array.isArray(object?.incentives) ? object.incentives.map((e: any) => Incentive.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryIncentivesResponse): QueryIncentivesResponseSDKType {
    const obj: any = {};
    if (message.incentives) {
      obj.incentives = message.incentives.map(e => e ? Incentive.toSDK(e) : undefined);
    } else {
      obj.incentives = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryIncentivesResponseAmino): QueryIncentivesResponse {
    const message = createBaseQueryIncentivesResponse();
    message.incentives = object.incentives?.map(e => Incentive.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryIncentivesResponse, useInterfaces: boolean = true): QueryIncentivesResponseAmino {
    const obj: any = {};
    if (message.incentives) {
      obj.incentives = message.incentives.map(e => e ? Incentive.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.incentives = message.incentives;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryIncentivesResponseProtoMsg, useInterfaces: boolean = true): QueryIncentivesResponse {
    return QueryIncentivesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryIncentivesResponse): Uint8Array {
    return QueryIncentivesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivesResponse): QueryIncentivesResponseProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.QueryIncentivesResponse",
      value: QueryIncentivesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIncentiveRequest(): QueryIncentiveRequest {
  return {
    contract: ""
  };
}
export const QueryIncentiveRequest = {
  typeUrl: "/evmos.incentives.v1.QueryIncentiveRequest",
  encode(message: QueryIncentiveRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryIncentiveRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentiveRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentiveRequest {
    const obj = createBaseQueryIncentiveRequest();
    if (isSet(object.contract)) obj.contract = String(object.contract);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentiveRequest>): QueryIncentiveRequest {
    const message = createBaseQueryIncentiveRequest();
    message.contract = object.contract ?? "";
    return message;
  },
  fromSDK(object: QueryIncentiveRequestSDKType): QueryIncentiveRequest {
    return {
      contract: object?.contract
    };
  },
  toSDK(message: QueryIncentiveRequest): QueryIncentiveRequestSDKType {
    const obj: any = {};
    obj.contract = message.contract;
    return obj;
  },
  fromAmino(object: QueryIncentiveRequestAmino): QueryIncentiveRequest {
    const message = createBaseQueryIncentiveRequest();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message: QueryIncentiveRequest, useInterfaces: boolean = true): QueryIncentiveRequestAmino {
    const obj: any = {};
    obj.contract = message.contract === "" ? undefined : message.contract;
    return obj;
  },
  fromProtoMsg(message: QueryIncentiveRequestProtoMsg, useInterfaces: boolean = true): QueryIncentiveRequest {
    return QueryIncentiveRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryIncentiveRequest): Uint8Array {
    return QueryIncentiveRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentiveRequest): QueryIncentiveRequestProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.QueryIncentiveRequest",
      value: QueryIncentiveRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIncentiveResponse(): QueryIncentiveResponse {
  return {
    incentive: Incentive.fromPartial({})
  };
}
export const QueryIncentiveResponse = {
  typeUrl: "/evmos.incentives.v1.QueryIncentiveResponse",
  encode(message: QueryIncentiveResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.incentive !== undefined) {
      Incentive.encode(message.incentive, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryIncentiveResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentiveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentive = Incentive.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentiveResponse {
    const obj = createBaseQueryIncentiveResponse();
    if (isSet(object.incentive)) obj.incentive = Incentive.fromJSON(object.incentive);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentiveResponse>): QueryIncentiveResponse {
    const message = createBaseQueryIncentiveResponse();
    if (object.incentive !== undefined && object.incentive !== null) {
      message.incentive = Incentive.fromPartial(object.incentive);
    }
    return message;
  },
  fromSDK(object: QueryIncentiveResponseSDKType): QueryIncentiveResponse {
    return {
      incentive: object.incentive ? Incentive.fromSDK(object.incentive) : undefined
    };
  },
  toSDK(message: QueryIncentiveResponse): QueryIncentiveResponseSDKType {
    const obj: any = {};
    message.incentive !== undefined && (obj.incentive = message.incentive ? Incentive.toSDK(message.incentive) : undefined);
    return obj;
  },
  fromAmino(object: QueryIncentiveResponseAmino): QueryIncentiveResponse {
    const message = createBaseQueryIncentiveResponse();
    if (object.incentive !== undefined && object.incentive !== null) {
      message.incentive = Incentive.fromAmino(object.incentive);
    }
    return message;
  },
  toAmino(message: QueryIncentiveResponse, useInterfaces: boolean = true): QueryIncentiveResponseAmino {
    const obj: any = {};
    obj.incentive = message.incentive ? Incentive.toAmino(message.incentive, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryIncentiveResponseProtoMsg, useInterfaces: boolean = true): QueryIncentiveResponse {
    return QueryIncentiveResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryIncentiveResponse): Uint8Array {
    return QueryIncentiveResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentiveResponse): QueryIncentiveResponseProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.QueryIncentiveResponse",
      value: QueryIncentiveResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGasMetersRequest(): QueryGasMetersRequest {
  return {
    contract: "",
    pagination: undefined
  };
}
export const QueryGasMetersRequest = {
  typeUrl: "/evmos.incentives.v1.QueryGasMetersRequest",
  encode(message: QueryGasMetersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGasMetersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGasMetersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
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
  fromJSON(object: any): QueryGasMetersRequest {
    const obj = createBaseQueryGasMetersRequest();
    if (isSet(object.contract)) obj.contract = String(object.contract);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGasMetersRequest>): QueryGasMetersRequest {
    const message = createBaseQueryGasMetersRequest();
    message.contract = object.contract ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryGasMetersRequestSDKType): QueryGasMetersRequest {
    return {
      contract: object?.contract,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGasMetersRequest): QueryGasMetersRequestSDKType {
    const obj: any = {};
    obj.contract = message.contract;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGasMetersRequestAmino): QueryGasMetersRequest {
    const message = createBaseQueryGasMetersRequest();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGasMetersRequest, useInterfaces: boolean = true): QueryGasMetersRequestAmino {
    const obj: any = {};
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryGasMetersRequestProtoMsg, useInterfaces: boolean = true): QueryGasMetersRequest {
    return QueryGasMetersRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGasMetersRequest): Uint8Array {
    return QueryGasMetersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGasMetersRequest): QueryGasMetersRequestProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.QueryGasMetersRequest",
      value: QueryGasMetersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGasMetersResponse(): QueryGasMetersResponse {
  return {
    gasMeters: [],
    pagination: undefined
  };
}
export const QueryGasMetersResponse = {
  typeUrl: "/evmos.incentives.v1.QueryGasMetersResponse",
  encode(message: QueryGasMetersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.gasMeters) {
      GasMeter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGasMetersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGasMetersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasMeters.push(GasMeter.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryGasMetersResponse {
    const obj = createBaseQueryGasMetersResponse();
    if (Array.isArray(object?.gasMeters)) obj.gasMeters = object.gasMeters.map((e: any) => GasMeter.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGasMetersResponse>): QueryGasMetersResponse {
    const message = createBaseQueryGasMetersResponse();
    message.gasMeters = object.gasMeters?.map(e => GasMeter.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryGasMetersResponseSDKType): QueryGasMetersResponse {
    return {
      gasMeters: Array.isArray(object?.gas_meters) ? object.gas_meters.map((e: any) => GasMeter.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryGasMetersResponse): QueryGasMetersResponseSDKType {
    const obj: any = {};
    if (message.gasMeters) {
      obj.gas_meters = message.gasMeters.map(e => e ? GasMeter.toSDK(e) : undefined);
    } else {
      obj.gas_meters = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryGasMetersResponseAmino): QueryGasMetersResponse {
    const message = createBaseQueryGasMetersResponse();
    message.gasMeters = object.gas_meters?.map(e => GasMeter.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGasMetersResponse, useInterfaces: boolean = true): QueryGasMetersResponseAmino {
    const obj: any = {};
    if (message.gasMeters) {
      obj.gas_meters = message.gasMeters.map(e => e ? GasMeter.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.gas_meters = message.gasMeters;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryGasMetersResponseProtoMsg, useInterfaces: boolean = true): QueryGasMetersResponse {
    return QueryGasMetersResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGasMetersResponse): Uint8Array {
    return QueryGasMetersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGasMetersResponse): QueryGasMetersResponseProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.QueryGasMetersResponse",
      value: QueryGasMetersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGasMeterRequest(): QueryGasMeterRequest {
  return {
    contract: "",
    participant: ""
  };
}
export const QueryGasMeterRequest = {
  typeUrl: "/evmos.incentives.v1.QueryGasMeterRequest",
  encode(message: QueryGasMeterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.participant !== "") {
      writer.uint32(18).string(message.participant);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGasMeterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGasMeterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.participant = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGasMeterRequest {
    const obj = createBaseQueryGasMeterRequest();
    if (isSet(object.contract)) obj.contract = String(object.contract);
    if (isSet(object.participant)) obj.participant = String(object.participant);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGasMeterRequest>): QueryGasMeterRequest {
    const message = createBaseQueryGasMeterRequest();
    message.contract = object.contract ?? "";
    message.participant = object.participant ?? "";
    return message;
  },
  fromSDK(object: QueryGasMeterRequestSDKType): QueryGasMeterRequest {
    return {
      contract: object?.contract,
      participant: object?.participant
    };
  },
  toSDK(message: QueryGasMeterRequest): QueryGasMeterRequestSDKType {
    const obj: any = {};
    obj.contract = message.contract;
    obj.participant = message.participant;
    return obj;
  },
  fromAmino(object: QueryGasMeterRequestAmino): QueryGasMeterRequest {
    const message = createBaseQueryGasMeterRequest();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = object.participant;
    }
    return message;
  },
  toAmino(message: QueryGasMeterRequest, useInterfaces: boolean = true): QueryGasMeterRequestAmino {
    const obj: any = {};
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.participant = message.participant === "" ? undefined : message.participant;
    return obj;
  },
  fromProtoMsg(message: QueryGasMeterRequestProtoMsg, useInterfaces: boolean = true): QueryGasMeterRequest {
    return QueryGasMeterRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGasMeterRequest): Uint8Array {
    return QueryGasMeterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGasMeterRequest): QueryGasMeterRequestProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.QueryGasMeterRequest",
      value: QueryGasMeterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGasMeterResponse(): QueryGasMeterResponse {
  return {
    gasMeter: BigInt(0)
  };
}
export const QueryGasMeterResponse = {
  typeUrl: "/evmos.incentives.v1.QueryGasMeterResponse",
  encode(message: QueryGasMeterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasMeter !== BigInt(0)) {
      writer.uint32(8).uint64(message.gasMeter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGasMeterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGasMeterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasMeter = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGasMeterResponse {
    const obj = createBaseQueryGasMeterResponse();
    if (isSet(object.gasMeter)) obj.gasMeter = BigInt(object.gasMeter.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGasMeterResponse>): QueryGasMeterResponse {
    const message = createBaseQueryGasMeterResponse();
    if (object.gasMeter !== undefined && object.gasMeter !== null) {
      message.gasMeter = BigInt(object.gasMeter.toString());
    }
    return message;
  },
  fromSDK(object: QueryGasMeterResponseSDKType): QueryGasMeterResponse {
    return {
      gasMeter: object?.gas_meter
    };
  },
  toSDK(message: QueryGasMeterResponse): QueryGasMeterResponseSDKType {
    const obj: any = {};
    obj.gas_meter = message.gasMeter;
    return obj;
  },
  fromAmino(object: QueryGasMeterResponseAmino): QueryGasMeterResponse {
    const message = createBaseQueryGasMeterResponse();
    if (object.gas_meter !== undefined && object.gas_meter !== null) {
      message.gasMeter = BigInt(object.gas_meter);
    }
    return message;
  },
  toAmino(message: QueryGasMeterResponse, useInterfaces: boolean = true): QueryGasMeterResponseAmino {
    const obj: any = {};
    obj.gas_meter = message.gasMeter !== BigInt(0) ? message.gasMeter?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryGasMeterResponseProtoMsg, useInterfaces: boolean = true): QueryGasMeterResponse {
    return QueryGasMeterResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGasMeterResponse): Uint8Array {
    return QueryGasMeterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGasMeterResponse): QueryGasMeterResponseProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.QueryGasMeterResponse",
      value: QueryGasMeterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllocationMetersRequest(): QueryAllocationMetersRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllocationMetersRequest = {
  typeUrl: "/evmos.incentives.v1.QueryAllocationMetersRequest",
  encode(message: QueryAllocationMetersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllocationMetersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationMetersRequest();
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
  fromJSON(object: any): QueryAllocationMetersRequest {
    const obj = createBaseQueryAllocationMetersRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllocationMetersRequest>): QueryAllocationMetersRequest {
    const message = createBaseQueryAllocationMetersRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAllocationMetersRequestSDKType): QueryAllocationMetersRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllocationMetersRequest): QueryAllocationMetersRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllocationMetersRequestAmino): QueryAllocationMetersRequest {
    const message = createBaseQueryAllocationMetersRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllocationMetersRequest, useInterfaces: boolean = true): QueryAllocationMetersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryAllocationMetersRequestProtoMsg, useInterfaces: boolean = true): QueryAllocationMetersRequest {
    return QueryAllocationMetersRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllocationMetersRequest): Uint8Array {
    return QueryAllocationMetersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllocationMetersRequest): QueryAllocationMetersRequestProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.QueryAllocationMetersRequest",
      value: QueryAllocationMetersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllocationMetersResponse(): QueryAllocationMetersResponse {
  return {
    allocationMeters: [],
    pagination: undefined
  };
}
export const QueryAllocationMetersResponse = {
  typeUrl: "/evmos.incentives.v1.QueryAllocationMetersResponse",
  encode(message: QueryAllocationMetersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allocationMeters) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllocationMetersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationMetersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allocationMeters.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryAllocationMetersResponse {
    const obj = createBaseQueryAllocationMetersResponse();
    if (Array.isArray(object?.allocationMeters)) obj.allocationMeters = object.allocationMeters.map((e: any) => DecCoin.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllocationMetersResponse>): QueryAllocationMetersResponse {
    const message = createBaseQueryAllocationMetersResponse();
    message.allocationMeters = object.allocationMeters?.map(e => DecCoin.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAllocationMetersResponseSDKType): QueryAllocationMetersResponse {
    return {
      allocationMeters: Array.isArray(object?.allocation_meters) ? object.allocation_meters.map((e: any) => DecCoin.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllocationMetersResponse): QueryAllocationMetersResponseSDKType {
    const obj: any = {};
    if (message.allocationMeters) {
      obj.allocation_meters = message.allocationMeters.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.allocation_meters = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllocationMetersResponseAmino): QueryAllocationMetersResponse {
    const message = createBaseQueryAllocationMetersResponse();
    message.allocationMeters = object.allocation_meters?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllocationMetersResponse, useInterfaces: boolean = true): QueryAllocationMetersResponseAmino {
    const obj: any = {};
    if (message.allocationMeters) {
      obj.allocation_meters = message.allocationMeters.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.allocation_meters = message.allocationMeters;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryAllocationMetersResponseProtoMsg, useInterfaces: boolean = true): QueryAllocationMetersResponse {
    return QueryAllocationMetersResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllocationMetersResponse): Uint8Array {
    return QueryAllocationMetersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllocationMetersResponse): QueryAllocationMetersResponseProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.QueryAllocationMetersResponse",
      value: QueryAllocationMetersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllocationMeterRequest(): QueryAllocationMeterRequest {
  return {
    denom: ""
  };
}
export const QueryAllocationMeterRequest = {
  typeUrl: "/evmos.incentives.v1.QueryAllocationMeterRequest",
  encode(message: QueryAllocationMeterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllocationMeterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationMeterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllocationMeterRequest {
    const obj = createBaseQueryAllocationMeterRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllocationMeterRequest>): QueryAllocationMeterRequest {
    const message = createBaseQueryAllocationMeterRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromSDK(object: QueryAllocationMeterRequestSDKType): QueryAllocationMeterRequest {
    return {
      denom: object?.denom
    };
  },
  toSDK(message: QueryAllocationMeterRequest): QueryAllocationMeterRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAmino(object: QueryAllocationMeterRequestAmino): QueryAllocationMeterRequest {
    const message = createBaseQueryAllocationMeterRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryAllocationMeterRequest, useInterfaces: boolean = true): QueryAllocationMeterRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromProtoMsg(message: QueryAllocationMeterRequestProtoMsg, useInterfaces: boolean = true): QueryAllocationMeterRequest {
    return QueryAllocationMeterRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllocationMeterRequest): Uint8Array {
    return QueryAllocationMeterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllocationMeterRequest): QueryAllocationMeterRequestProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.QueryAllocationMeterRequest",
      value: QueryAllocationMeterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllocationMeterResponse(): QueryAllocationMeterResponse {
  return {
    allocationMeter: DecCoin.fromPartial({})
  };
}
export const QueryAllocationMeterResponse = {
  typeUrl: "/evmos.incentives.v1.QueryAllocationMeterResponse",
  encode(message: QueryAllocationMeterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allocationMeter !== undefined) {
      DecCoin.encode(message.allocationMeter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllocationMeterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationMeterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allocationMeter = DecCoin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllocationMeterResponse {
    const obj = createBaseQueryAllocationMeterResponse();
    if (isSet(object.allocationMeter)) obj.allocationMeter = DecCoin.fromJSON(object.allocationMeter);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllocationMeterResponse>): QueryAllocationMeterResponse {
    const message = createBaseQueryAllocationMeterResponse();
    if (object.allocationMeter !== undefined && object.allocationMeter !== null) {
      message.allocationMeter = DecCoin.fromPartial(object.allocationMeter);
    }
    return message;
  },
  fromSDK(object: QueryAllocationMeterResponseSDKType): QueryAllocationMeterResponse {
    return {
      allocationMeter: object.allocation_meter ? DecCoin.fromSDK(object.allocation_meter) : undefined
    };
  },
  toSDK(message: QueryAllocationMeterResponse): QueryAllocationMeterResponseSDKType {
    const obj: any = {};
    message.allocationMeter !== undefined && (obj.allocation_meter = message.allocationMeter ? DecCoin.toSDK(message.allocationMeter) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllocationMeterResponseAmino): QueryAllocationMeterResponse {
    const message = createBaseQueryAllocationMeterResponse();
    if (object.allocation_meter !== undefined && object.allocation_meter !== null) {
      message.allocationMeter = DecCoin.fromAmino(object.allocation_meter);
    }
    return message;
  },
  toAmino(message: QueryAllocationMeterResponse, useInterfaces: boolean = true): QueryAllocationMeterResponseAmino {
    const obj: any = {};
    obj.allocation_meter = message.allocationMeter ? DecCoin.toAmino(message.allocationMeter, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryAllocationMeterResponseProtoMsg, useInterfaces: boolean = true): QueryAllocationMeterResponse {
    return QueryAllocationMeterResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllocationMeterResponse): Uint8Array {
    return QueryAllocationMeterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllocationMeterResponse): QueryAllocationMeterResponseProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.QueryAllocationMeterResponse",
      value: QueryAllocationMeterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/evmos.incentives.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest, useInterfaces: boolean = true): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg, useInterfaces: boolean = true): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/evmos.incentives.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse, useInterfaces: boolean = true): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg, useInterfaces: boolean = true): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};