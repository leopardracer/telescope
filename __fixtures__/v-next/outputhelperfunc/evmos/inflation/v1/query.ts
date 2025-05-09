import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "evmos.inflation.v1";
/** QueryPeriodRequest is the request type for the Query/Period RPC method. */
export interface QueryPeriodRequest {}
export interface QueryPeriodRequestProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryPeriodRequest";
  value: Uint8Array;
}
/** QueryPeriodRequest is the request type for the Query/Period RPC method. */
export interface QueryPeriodRequestAmino {}
export interface QueryPeriodRequestAminoMsg {
  type: "/evmos.inflation.v1.QueryPeriodRequest";
  value: QueryPeriodRequestAmino;
}
/** QueryPeriodRequest is the request type for the Query/Period RPC method. */
export interface QueryPeriodRequestSDKType {}
/** QueryPeriodResponse is the response type for the Query/Period RPC method. */
export interface QueryPeriodResponse {
  /** period is the current minting per epoch provision value. */
  period: bigint;
}
export interface QueryPeriodResponseProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryPeriodResponse";
  value: Uint8Array;
}
/** QueryPeriodResponse is the response type for the Query/Period RPC method. */
export interface QueryPeriodResponseAmino {
  /** period is the current minting per epoch provision value. */
  period?: string;
}
export interface QueryPeriodResponseAminoMsg {
  type: "/evmos.inflation.v1.QueryPeriodResponse";
  value: QueryPeriodResponseAmino;
}
/** QueryPeriodResponse is the response type for the Query/Period RPC method. */
export interface QueryPeriodResponseSDKType {
  period: bigint;
}
/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionRequest {}
export interface QueryEpochMintProvisionRequestProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionRequest";
  value: Uint8Array;
}
/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionRequestAmino {}
export interface QueryEpochMintProvisionRequestAminoMsg {
  type: "/evmos.inflation.v1.QueryEpochMintProvisionRequest";
  value: QueryEpochMintProvisionRequestAmino;
}
/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionRequestSDKType {}
/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionResponse {
  /** epoch_mint_provision is the current minting per epoch provision value. */
  epochMintProvision: DecCoin;
}
export interface QueryEpochMintProvisionResponseProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionResponse";
  value: Uint8Array;
}
/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionResponseAmino {
  /** epoch_mint_provision is the current minting per epoch provision value. */
  epoch_mint_provision?: DecCoinAmino;
}
export interface QueryEpochMintProvisionResponseAminoMsg {
  type: "/evmos.inflation.v1.QueryEpochMintProvisionResponse";
  value: QueryEpochMintProvisionResponseAmino;
}
/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionResponseSDKType {
  epoch_mint_provision: DecCoinSDKType;
}
/**
 * QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC
 * method.
 */
export interface QuerySkippedEpochsRequest {}
export interface QuerySkippedEpochsRequestProtoMsg {
  typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsRequest";
  value: Uint8Array;
}
/**
 * QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC
 * method.
 */
export interface QuerySkippedEpochsRequestAmino {}
export interface QuerySkippedEpochsRequestAminoMsg {
  type: "/evmos.inflation.v1.QuerySkippedEpochsRequest";
  value: QuerySkippedEpochsRequestAmino;
}
/**
 * QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC
 * method.
 */
export interface QuerySkippedEpochsRequestSDKType {}
/**
 * QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs
 * RPC method.
 */
export interface QuerySkippedEpochsResponse {
  /** number of epochs that the inflation module has been disabled. */
  skippedEpochs: bigint;
}
export interface QuerySkippedEpochsResponseProtoMsg {
  typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsResponse";
  value: Uint8Array;
}
/**
 * QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs
 * RPC method.
 */
export interface QuerySkippedEpochsResponseAmino {
  /** number of epochs that the inflation module has been disabled. */
  skipped_epochs?: string;
}
export interface QuerySkippedEpochsResponseAminoMsg {
  type: "/evmos.inflation.v1.QuerySkippedEpochsResponse";
  value: QuerySkippedEpochsResponseAmino;
}
/**
 * QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs
 * RPC method.
 */
export interface QuerySkippedEpochsResponseSDKType {
  skipped_epochs: bigint;
}
/**
 * QueryCirculatingSupplyRequest is the request type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyRequest {}
export interface QueryCirculatingSupplyRequestProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyRequest";
  value: Uint8Array;
}
/**
 * QueryCirculatingSupplyRequest is the request type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyRequestAmino {}
export interface QueryCirculatingSupplyRequestAminoMsg {
  type: "/evmos.inflation.v1.QueryCirculatingSupplyRequest";
  value: QueryCirculatingSupplyRequestAmino;
}
/**
 * QueryCirculatingSupplyRequest is the request type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyRequestSDKType {}
/**
 * QueryCirculatingSupplyResponse is the response type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyResponse {
  /** total amount of coins in circulation */
  circulatingSupply: DecCoin;
}
export interface QueryCirculatingSupplyResponseProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyResponse";
  value: Uint8Array;
}
/**
 * QueryCirculatingSupplyResponse is the response type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyResponseAmino {
  /** total amount of coins in circulation */
  circulating_supply?: DecCoinAmino;
}
export interface QueryCirculatingSupplyResponseAminoMsg {
  type: "/evmos.inflation.v1.QueryCirculatingSupplyResponse";
  value: QueryCirculatingSupplyResponseAmino;
}
/**
 * QueryCirculatingSupplyResponse is the response type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyResponseSDKType {
  circulating_supply: DecCoinSDKType;
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequest {}
export interface QueryInflationRateRequestProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryInflationRateRequest";
  value: Uint8Array;
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequestAmino {}
export interface QueryInflationRateRequestAminoMsg {
  type: "/evmos.inflation.v1.QueryInflationRateRequest";
  value: QueryInflationRateRequestAmino;
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequestSDKType {}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponse {
  /** rate by which the total supply increases within one period */
  inflationRate: string;
}
export interface QueryInflationRateResponseProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryInflationRateResponse";
  value: Uint8Array;
}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponseAmino {
  /** rate by which the total supply increases within one period */
  inflation_rate?: string;
}
export interface QueryInflationRateResponseAminoMsg {
  type: "/evmos.inflation.v1.QueryInflationRateResponse";
  value: QueryInflationRateResponseAmino;
}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponseSDKType {
  inflation_rate: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/evmos.inflation.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/evmos.inflation.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/evmos.inflation.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryPeriodRequest(): QueryPeriodRequest {
  return {};
}
export const QueryPeriodRequest = {
  typeUrl: "/evmos.inflation.v1.QueryPeriodRequest",
  is(o: any): o is QueryPeriodRequest {
    return o && o.$typeUrl === QueryPeriodRequest.typeUrl;
  },
  isSDK(o: any): o is QueryPeriodRequestSDKType {
    return o && o.$typeUrl === QueryPeriodRequest.typeUrl;
  },
  isAmino(o: any): o is QueryPeriodRequestAmino {
    return o && o.$typeUrl === QueryPeriodRequest.typeUrl;
  },
  encode(_: QueryPeriodRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPeriodRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPeriodRequest();
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
  fromJSON(_: any): QueryPeriodRequest {
    const obj = createBaseQueryPeriodRequest();
    return obj;
  },
  toJSON(_: QueryPeriodRequest): JsonSafe<QueryPeriodRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryPeriodRequest>): QueryPeriodRequest {
    const message = createBaseQueryPeriodRequest();
    return message;
  },
  fromSDK(_: QueryPeriodRequestSDKType): QueryPeriodRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryPeriodRequestSDKType {
    return {};
  },
  toSDK(_: QueryPeriodRequest): QueryPeriodRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryPeriodRequestAmino): QueryPeriodRequest {
    const message = createBaseQueryPeriodRequest();
    return message;
  },
  toAmino(_: QueryPeriodRequest): QueryPeriodRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPeriodRequestAminoMsg): QueryPeriodRequest {
    return QueryPeriodRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPeriodRequestProtoMsg): QueryPeriodRequest {
    return QueryPeriodRequest.decode(message.value);
  },
  toProto(message: QueryPeriodRequest): Uint8Array {
    return QueryPeriodRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPeriodRequest): QueryPeriodRequestProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryPeriodRequest",
      value: QueryPeriodRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPeriodResponse(): QueryPeriodResponse {
  return {
    period: BigInt(0)
  };
}
export const QueryPeriodResponse = {
  typeUrl: "/evmos.inflation.v1.QueryPeriodResponse",
  is(o: any): o is QueryPeriodResponse {
    return o && (o.$typeUrl === QueryPeriodResponse.typeUrl || typeof o.period === "bigint");
  },
  isSDK(o: any): o is QueryPeriodResponseSDKType {
    return o && (o.$typeUrl === QueryPeriodResponse.typeUrl || typeof o.period === "bigint");
  },
  isAmino(o: any): o is QueryPeriodResponseAmino {
    return o && (o.$typeUrl === QueryPeriodResponse.typeUrl || typeof o.period === "bigint");
  },
  encode(message: QueryPeriodResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.period !== undefined) {
      writer.uint32(8).uint64(message.period);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPeriodResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPeriodResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.period = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPeriodResponse {
    const obj = createBaseQueryPeriodResponse();
    if (isSet(object.period)) obj.period = BigInt(object.period.toString());
    return obj;
  },
  toJSON(message: QueryPeriodResponse): JsonSafe<QueryPeriodResponse> {
    const obj: any = {};
    message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPeriodResponse>): QueryPeriodResponse {
    const message = createBaseQueryPeriodResponse();
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period.toString());
    }
    return message;
  },
  fromSDK(object: QueryPeriodResponseSDKType): QueryPeriodResponse {
    return {
      period: object?.period
    };
  },
  fromSDKJSON(object: any): QueryPeriodResponseSDKType {
    return {
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryPeriodResponse): QueryPeriodResponseSDKType {
    const obj: any = {};
    obj.period = message.period;
    return obj;
  },
  fromAmino(object: QueryPeriodResponseAmino): QueryPeriodResponse {
    const message = createBaseQueryPeriodResponse();
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period);
    }
    return message;
  },
  toAmino(message: QueryPeriodResponse): QueryPeriodResponseAmino {
    const obj: any = {};
    obj.period = message.period !== BigInt(0) ? message.period?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPeriodResponseAminoMsg): QueryPeriodResponse {
    return QueryPeriodResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPeriodResponseProtoMsg): QueryPeriodResponse {
    return QueryPeriodResponse.decode(message.value);
  },
  toProto(message: QueryPeriodResponse): Uint8Array {
    return QueryPeriodResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPeriodResponse): QueryPeriodResponseProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryPeriodResponse",
      value: QueryPeriodResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryEpochMintProvisionRequest(): QueryEpochMintProvisionRequest {
  return {};
}
export const QueryEpochMintProvisionRequest = {
  typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionRequest",
  is(o: any): o is QueryEpochMintProvisionRequest {
    return o && o.$typeUrl === QueryEpochMintProvisionRequest.typeUrl;
  },
  isSDK(o: any): o is QueryEpochMintProvisionRequestSDKType {
    return o && o.$typeUrl === QueryEpochMintProvisionRequest.typeUrl;
  },
  isAmino(o: any): o is QueryEpochMintProvisionRequestAmino {
    return o && o.$typeUrl === QueryEpochMintProvisionRequest.typeUrl;
  },
  encode(_: QueryEpochMintProvisionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochMintProvisionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochMintProvisionRequest();
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
  fromJSON(_: any): QueryEpochMintProvisionRequest {
    const obj = createBaseQueryEpochMintProvisionRequest();
    return obj;
  },
  toJSON(_: QueryEpochMintProvisionRequest): JsonSafe<QueryEpochMintProvisionRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryEpochMintProvisionRequest>): QueryEpochMintProvisionRequest {
    const message = createBaseQueryEpochMintProvisionRequest();
    return message;
  },
  fromSDK(_: QueryEpochMintProvisionRequestSDKType): QueryEpochMintProvisionRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryEpochMintProvisionRequestSDKType {
    return {};
  },
  toSDK(_: QueryEpochMintProvisionRequest): QueryEpochMintProvisionRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryEpochMintProvisionRequestAmino): QueryEpochMintProvisionRequest {
    const message = createBaseQueryEpochMintProvisionRequest();
    return message;
  },
  toAmino(_: QueryEpochMintProvisionRequest): QueryEpochMintProvisionRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEpochMintProvisionRequestAminoMsg): QueryEpochMintProvisionRequest {
    return QueryEpochMintProvisionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochMintProvisionRequestProtoMsg): QueryEpochMintProvisionRequest {
    return QueryEpochMintProvisionRequest.decode(message.value);
  },
  toProto(message: QueryEpochMintProvisionRequest): Uint8Array {
    return QueryEpochMintProvisionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochMintProvisionRequest): QueryEpochMintProvisionRequestProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionRequest",
      value: QueryEpochMintProvisionRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryEpochMintProvisionResponse(): QueryEpochMintProvisionResponse {
  return {
    epochMintProvision: DecCoin.fromPartial({})
  };
}
export const QueryEpochMintProvisionResponse = {
  typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionResponse",
  is(o: any): o is QueryEpochMintProvisionResponse {
    return o && (o.$typeUrl === QueryEpochMintProvisionResponse.typeUrl || DecCoin.is(o.epochMintProvision));
  },
  isSDK(o: any): o is QueryEpochMintProvisionResponseSDKType {
    return o && (o.$typeUrl === QueryEpochMintProvisionResponse.typeUrl || DecCoin.isSDK(o.epoch_mint_provision));
  },
  isAmino(o: any): o is QueryEpochMintProvisionResponseAmino {
    return o && (o.$typeUrl === QueryEpochMintProvisionResponse.typeUrl || DecCoin.isAmino(o.epoch_mint_provision));
  },
  encode(message: QueryEpochMintProvisionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochMintProvision !== undefined) {
      DecCoin.encode(message.epochMintProvision, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochMintProvisionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochMintProvisionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochMintProvision = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEpochMintProvisionResponse {
    const obj = createBaseQueryEpochMintProvisionResponse();
    if (isSet(object.epochMintProvision)) obj.epochMintProvision = DecCoin.fromJSON(object.epochMintProvision);
    return obj;
  },
  toJSON(message: QueryEpochMintProvisionResponse): JsonSafe<QueryEpochMintProvisionResponse> {
    const obj: any = {};
    message.epochMintProvision !== undefined && (obj.epochMintProvision = message.epochMintProvision ? DecCoin.toJSON(message.epochMintProvision) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryEpochMintProvisionResponse>): QueryEpochMintProvisionResponse {
    const message = createBaseQueryEpochMintProvisionResponse();
    if (object.epochMintProvision !== undefined && object.epochMintProvision !== null) {
      message.epochMintProvision = DecCoin.fromPartial(object.epochMintProvision);
    }
    return message;
  },
  fromSDK(object: QueryEpochMintProvisionResponseSDKType): QueryEpochMintProvisionResponse {
    return {
      epochMintProvision: object.epoch_mint_provision ? DecCoin.fromSDK(object.epoch_mint_provision) : undefined
    };
  },
  fromSDKJSON(object: any): QueryEpochMintProvisionResponseSDKType {
    return {
      epoch_mint_provision: isSet(object.epoch_mint_provision) ? DecCoin.fromSDKJSON(object.epoch_mint_provision) : undefined
    };
  },
  toSDK(message: QueryEpochMintProvisionResponse): QueryEpochMintProvisionResponseSDKType {
    const obj: any = {};
    message.epochMintProvision !== undefined && (obj.epoch_mint_provision = message.epochMintProvision ? DecCoin.toSDK(message.epochMintProvision) : undefined);
    return obj;
  },
  fromAmino(object: QueryEpochMintProvisionResponseAmino): QueryEpochMintProvisionResponse {
    const message = createBaseQueryEpochMintProvisionResponse();
    if (object.epoch_mint_provision !== undefined && object.epoch_mint_provision !== null) {
      message.epochMintProvision = DecCoin.fromAmino(object.epoch_mint_provision);
    }
    return message;
  },
  toAmino(message: QueryEpochMintProvisionResponse): QueryEpochMintProvisionResponseAmino {
    const obj: any = {};
    obj.epoch_mint_provision = message.epochMintProvision ? DecCoin.toAmino(message.epochMintProvision) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEpochMintProvisionResponseAminoMsg): QueryEpochMintProvisionResponse {
    return QueryEpochMintProvisionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochMintProvisionResponseProtoMsg): QueryEpochMintProvisionResponse {
    return QueryEpochMintProvisionResponse.decode(message.value);
  },
  toProto(message: QueryEpochMintProvisionResponse): Uint8Array {
    return QueryEpochMintProvisionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochMintProvisionResponse): QueryEpochMintProvisionResponseProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionResponse",
      value: QueryEpochMintProvisionResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    DecCoin.registerTypeUrl();
  }
};
function createBaseQuerySkippedEpochsRequest(): QuerySkippedEpochsRequest {
  return {};
}
export const QuerySkippedEpochsRequest = {
  typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsRequest",
  is(o: any): o is QuerySkippedEpochsRequest {
    return o && o.$typeUrl === QuerySkippedEpochsRequest.typeUrl;
  },
  isSDK(o: any): o is QuerySkippedEpochsRequestSDKType {
    return o && o.$typeUrl === QuerySkippedEpochsRequest.typeUrl;
  },
  isAmino(o: any): o is QuerySkippedEpochsRequestAmino {
    return o && o.$typeUrl === QuerySkippedEpochsRequest.typeUrl;
  },
  encode(_: QuerySkippedEpochsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySkippedEpochsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySkippedEpochsRequest();
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
  fromJSON(_: any): QuerySkippedEpochsRequest {
    const obj = createBaseQuerySkippedEpochsRequest();
    return obj;
  },
  toJSON(_: QuerySkippedEpochsRequest): JsonSafe<QuerySkippedEpochsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QuerySkippedEpochsRequest>): QuerySkippedEpochsRequest {
    const message = createBaseQuerySkippedEpochsRequest();
    return message;
  },
  fromSDK(_: QuerySkippedEpochsRequestSDKType): QuerySkippedEpochsRequest {
    return {};
  },
  fromSDKJSON(_: any): QuerySkippedEpochsRequestSDKType {
    return {};
  },
  toSDK(_: QuerySkippedEpochsRequest): QuerySkippedEpochsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QuerySkippedEpochsRequestAmino): QuerySkippedEpochsRequest {
    const message = createBaseQuerySkippedEpochsRequest();
    return message;
  },
  toAmino(_: QuerySkippedEpochsRequest): QuerySkippedEpochsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySkippedEpochsRequestAminoMsg): QuerySkippedEpochsRequest {
    return QuerySkippedEpochsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySkippedEpochsRequestProtoMsg): QuerySkippedEpochsRequest {
    return QuerySkippedEpochsRequest.decode(message.value);
  },
  toProto(message: QuerySkippedEpochsRequest): Uint8Array {
    return QuerySkippedEpochsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySkippedEpochsRequest): QuerySkippedEpochsRequestProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsRequest",
      value: QuerySkippedEpochsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySkippedEpochsResponse(): QuerySkippedEpochsResponse {
  return {
    skippedEpochs: BigInt(0)
  };
}
export const QuerySkippedEpochsResponse = {
  typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsResponse",
  is(o: any): o is QuerySkippedEpochsResponse {
    return o && (o.$typeUrl === QuerySkippedEpochsResponse.typeUrl || typeof o.skippedEpochs === "bigint");
  },
  isSDK(o: any): o is QuerySkippedEpochsResponseSDKType {
    return o && (o.$typeUrl === QuerySkippedEpochsResponse.typeUrl || typeof o.skipped_epochs === "bigint");
  },
  isAmino(o: any): o is QuerySkippedEpochsResponseAmino {
    return o && (o.$typeUrl === QuerySkippedEpochsResponse.typeUrl || typeof o.skipped_epochs === "bigint");
  },
  encode(message: QuerySkippedEpochsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.skippedEpochs !== undefined) {
      writer.uint32(8).uint64(message.skippedEpochs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySkippedEpochsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySkippedEpochsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skippedEpochs = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySkippedEpochsResponse {
    const obj = createBaseQuerySkippedEpochsResponse();
    if (isSet(object.skippedEpochs)) obj.skippedEpochs = BigInt(object.skippedEpochs.toString());
    return obj;
  },
  toJSON(message: QuerySkippedEpochsResponse): JsonSafe<QuerySkippedEpochsResponse> {
    const obj: any = {};
    message.skippedEpochs !== undefined && (obj.skippedEpochs = (message.skippedEpochs || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySkippedEpochsResponse>): QuerySkippedEpochsResponse {
    const message = createBaseQuerySkippedEpochsResponse();
    if (object.skippedEpochs !== undefined && object.skippedEpochs !== null) {
      message.skippedEpochs = BigInt(object.skippedEpochs.toString());
    }
    return message;
  },
  fromSDK(object: QuerySkippedEpochsResponseSDKType): QuerySkippedEpochsResponse {
    return {
      skippedEpochs: object?.skipped_epochs
    };
  },
  fromSDKJSON(object: any): QuerySkippedEpochsResponseSDKType {
    return {
      skipped_epochs: isSet(object.skipped_epochs) ? BigInt(object.skipped_epochs.toString()) : BigInt(0)
    };
  },
  toSDK(message: QuerySkippedEpochsResponse): QuerySkippedEpochsResponseSDKType {
    const obj: any = {};
    obj.skipped_epochs = message.skippedEpochs;
    return obj;
  },
  fromAmino(object: QuerySkippedEpochsResponseAmino): QuerySkippedEpochsResponse {
    const message = createBaseQuerySkippedEpochsResponse();
    if (object.skipped_epochs !== undefined && object.skipped_epochs !== null) {
      message.skippedEpochs = BigInt(object.skipped_epochs);
    }
    return message;
  },
  toAmino(message: QuerySkippedEpochsResponse): QuerySkippedEpochsResponseAmino {
    const obj: any = {};
    obj.skipped_epochs = message.skippedEpochs !== BigInt(0) ? message.skippedEpochs?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySkippedEpochsResponseAminoMsg): QuerySkippedEpochsResponse {
    return QuerySkippedEpochsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySkippedEpochsResponseProtoMsg): QuerySkippedEpochsResponse {
    return QuerySkippedEpochsResponse.decode(message.value);
  },
  toProto(message: QuerySkippedEpochsResponse): Uint8Array {
    return QuerySkippedEpochsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySkippedEpochsResponse): QuerySkippedEpochsResponseProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsResponse",
      value: QuerySkippedEpochsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryCirculatingSupplyRequest(): QueryCirculatingSupplyRequest {
  return {};
}
export const QueryCirculatingSupplyRequest = {
  typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyRequest",
  is(o: any): o is QueryCirculatingSupplyRequest {
    return o && o.$typeUrl === QueryCirculatingSupplyRequest.typeUrl;
  },
  isSDK(o: any): o is QueryCirculatingSupplyRequestSDKType {
    return o && o.$typeUrl === QueryCirculatingSupplyRequest.typeUrl;
  },
  isAmino(o: any): o is QueryCirculatingSupplyRequestAmino {
    return o && o.$typeUrl === QueryCirculatingSupplyRequest.typeUrl;
  },
  encode(_: QueryCirculatingSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCirculatingSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCirculatingSupplyRequest();
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
  fromJSON(_: any): QueryCirculatingSupplyRequest {
    const obj = createBaseQueryCirculatingSupplyRequest();
    return obj;
  },
  toJSON(_: QueryCirculatingSupplyRequest): JsonSafe<QueryCirculatingSupplyRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryCirculatingSupplyRequest>): QueryCirculatingSupplyRequest {
    const message = createBaseQueryCirculatingSupplyRequest();
    return message;
  },
  fromSDK(_: QueryCirculatingSupplyRequestSDKType): QueryCirculatingSupplyRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryCirculatingSupplyRequestSDKType {
    return {};
  },
  toSDK(_: QueryCirculatingSupplyRequest): QueryCirculatingSupplyRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryCirculatingSupplyRequestAmino): QueryCirculatingSupplyRequest {
    const message = createBaseQueryCirculatingSupplyRequest();
    return message;
  },
  toAmino(_: QueryCirculatingSupplyRequest): QueryCirculatingSupplyRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCirculatingSupplyRequestAminoMsg): QueryCirculatingSupplyRequest {
    return QueryCirculatingSupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCirculatingSupplyRequestProtoMsg): QueryCirculatingSupplyRequest {
    return QueryCirculatingSupplyRequest.decode(message.value);
  },
  toProto(message: QueryCirculatingSupplyRequest): Uint8Array {
    return QueryCirculatingSupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCirculatingSupplyRequest): QueryCirculatingSupplyRequestProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyRequest",
      value: QueryCirculatingSupplyRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryCirculatingSupplyResponse(): QueryCirculatingSupplyResponse {
  return {
    circulatingSupply: DecCoin.fromPartial({})
  };
}
export const QueryCirculatingSupplyResponse = {
  typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyResponse",
  is(o: any): o is QueryCirculatingSupplyResponse {
    return o && (o.$typeUrl === QueryCirculatingSupplyResponse.typeUrl || DecCoin.is(o.circulatingSupply));
  },
  isSDK(o: any): o is QueryCirculatingSupplyResponseSDKType {
    return o && (o.$typeUrl === QueryCirculatingSupplyResponse.typeUrl || DecCoin.isSDK(o.circulating_supply));
  },
  isAmino(o: any): o is QueryCirculatingSupplyResponseAmino {
    return o && (o.$typeUrl === QueryCirculatingSupplyResponse.typeUrl || DecCoin.isAmino(o.circulating_supply));
  },
  encode(message: QueryCirculatingSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.circulatingSupply !== undefined) {
      DecCoin.encode(message.circulatingSupply, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCirculatingSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCirculatingSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.circulatingSupply = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCirculatingSupplyResponse {
    const obj = createBaseQueryCirculatingSupplyResponse();
    if (isSet(object.circulatingSupply)) obj.circulatingSupply = DecCoin.fromJSON(object.circulatingSupply);
    return obj;
  },
  toJSON(message: QueryCirculatingSupplyResponse): JsonSafe<QueryCirculatingSupplyResponse> {
    const obj: any = {};
    message.circulatingSupply !== undefined && (obj.circulatingSupply = message.circulatingSupply ? DecCoin.toJSON(message.circulatingSupply) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCirculatingSupplyResponse>): QueryCirculatingSupplyResponse {
    const message = createBaseQueryCirculatingSupplyResponse();
    if (object.circulatingSupply !== undefined && object.circulatingSupply !== null) {
      message.circulatingSupply = DecCoin.fromPartial(object.circulatingSupply);
    }
    return message;
  },
  fromSDK(object: QueryCirculatingSupplyResponseSDKType): QueryCirculatingSupplyResponse {
    return {
      circulatingSupply: object.circulating_supply ? DecCoin.fromSDK(object.circulating_supply) : undefined
    };
  },
  fromSDKJSON(object: any): QueryCirculatingSupplyResponseSDKType {
    return {
      circulating_supply: isSet(object.circulating_supply) ? DecCoin.fromSDKJSON(object.circulating_supply) : undefined
    };
  },
  toSDK(message: QueryCirculatingSupplyResponse): QueryCirculatingSupplyResponseSDKType {
    const obj: any = {};
    message.circulatingSupply !== undefined && (obj.circulating_supply = message.circulatingSupply ? DecCoin.toSDK(message.circulatingSupply) : undefined);
    return obj;
  },
  fromAmino(object: QueryCirculatingSupplyResponseAmino): QueryCirculatingSupplyResponse {
    const message = createBaseQueryCirculatingSupplyResponse();
    if (object.circulating_supply !== undefined && object.circulating_supply !== null) {
      message.circulatingSupply = DecCoin.fromAmino(object.circulating_supply);
    }
    return message;
  },
  toAmino(message: QueryCirculatingSupplyResponse): QueryCirculatingSupplyResponseAmino {
    const obj: any = {};
    obj.circulating_supply = message.circulatingSupply ? DecCoin.toAmino(message.circulatingSupply) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCirculatingSupplyResponseAminoMsg): QueryCirculatingSupplyResponse {
    return QueryCirculatingSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCirculatingSupplyResponseProtoMsg): QueryCirculatingSupplyResponse {
    return QueryCirculatingSupplyResponse.decode(message.value);
  },
  toProto(message: QueryCirculatingSupplyResponse): Uint8Array {
    return QueryCirculatingSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCirculatingSupplyResponse): QueryCirculatingSupplyResponseProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyResponse",
      value: QueryCirculatingSupplyResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    DecCoin.registerTypeUrl();
  }
};
function createBaseQueryInflationRateRequest(): QueryInflationRateRequest {
  return {};
}
export const QueryInflationRateRequest = {
  typeUrl: "/evmos.inflation.v1.QueryInflationRateRequest",
  is(o: any): o is QueryInflationRateRequest {
    return o && o.$typeUrl === QueryInflationRateRequest.typeUrl;
  },
  isSDK(o: any): o is QueryInflationRateRequestSDKType {
    return o && o.$typeUrl === QueryInflationRateRequest.typeUrl;
  },
  isAmino(o: any): o is QueryInflationRateRequestAmino {
    return o && o.$typeUrl === QueryInflationRateRequest.typeUrl;
  },
  encode(_: QueryInflationRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInflationRateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInflationRateRequest();
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
  fromJSON(_: any): QueryInflationRateRequest {
    const obj = createBaseQueryInflationRateRequest();
    return obj;
  },
  toJSON(_: QueryInflationRateRequest): JsonSafe<QueryInflationRateRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryInflationRateRequest>): QueryInflationRateRequest {
    const message = createBaseQueryInflationRateRequest();
    return message;
  },
  fromSDK(_: QueryInflationRateRequestSDKType): QueryInflationRateRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryInflationRateRequestSDKType {
    return {};
  },
  toSDK(_: QueryInflationRateRequest): QueryInflationRateRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryInflationRateRequestAmino): QueryInflationRateRequest {
    const message = createBaseQueryInflationRateRequest();
    return message;
  },
  toAmino(_: QueryInflationRateRequest): QueryInflationRateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryInflationRateRequestAminoMsg): QueryInflationRateRequest {
    return QueryInflationRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInflationRateRequestProtoMsg): QueryInflationRateRequest {
    return QueryInflationRateRequest.decode(message.value);
  },
  toProto(message: QueryInflationRateRequest): Uint8Array {
    return QueryInflationRateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInflationRateRequest): QueryInflationRateRequestProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryInflationRateRequest",
      value: QueryInflationRateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryInflationRateResponse(): QueryInflationRateResponse {
  return {
    inflationRate: ""
  };
}
export const QueryInflationRateResponse = {
  typeUrl: "/evmos.inflation.v1.QueryInflationRateResponse",
  is(o: any): o is QueryInflationRateResponse {
    return o && (o.$typeUrl === QueryInflationRateResponse.typeUrl || typeof o.inflationRate === "string");
  },
  isSDK(o: any): o is QueryInflationRateResponseSDKType {
    return o && (o.$typeUrl === QueryInflationRateResponse.typeUrl || typeof o.inflation_rate === "string");
  },
  isAmino(o: any): o is QueryInflationRateResponseAmino {
    return o && (o.$typeUrl === QueryInflationRateResponse.typeUrl || typeof o.inflation_rate === "string");
  },
  encode(message: QueryInflationRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflationRate !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.inflationRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInflationRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInflationRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflationRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInflationRateResponse {
    const obj = createBaseQueryInflationRateResponse();
    if (isSet(object.inflationRate)) obj.inflationRate = String(object.inflationRate);
    return obj;
  },
  toJSON(message: QueryInflationRateResponse): JsonSafe<QueryInflationRateResponse> {
    const obj: any = {};
    message.inflationRate !== undefined && (obj.inflationRate = message.inflationRate);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryInflationRateResponse>): QueryInflationRateResponse {
    const message = createBaseQueryInflationRateResponse();
    message.inflationRate = object.inflationRate ?? "";
    return message;
  },
  fromSDK(object: QueryInflationRateResponseSDKType): QueryInflationRateResponse {
    return {
      inflationRate: object?.inflation_rate
    };
  },
  fromSDKJSON(object: any): QueryInflationRateResponseSDKType {
    return {
      inflation_rate: isSet(object.inflation_rate) ? String(object.inflation_rate) : ""
    };
  },
  toSDK(message: QueryInflationRateResponse): QueryInflationRateResponseSDKType {
    const obj: any = {};
    obj.inflation_rate = message.inflationRate;
    return obj;
  },
  fromAmino(object: QueryInflationRateResponseAmino): QueryInflationRateResponse {
    const message = createBaseQueryInflationRateResponse();
    if (object.inflation_rate !== undefined && object.inflation_rate !== null) {
      message.inflationRate = object.inflation_rate;
    }
    return message;
  },
  toAmino(message: QueryInflationRateResponse): QueryInflationRateResponseAmino {
    const obj: any = {};
    obj.inflation_rate = message.inflationRate === "" ? undefined : message.inflationRate;
    return obj;
  },
  fromAminoMsg(object: QueryInflationRateResponseAminoMsg): QueryInflationRateResponse {
    return QueryInflationRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInflationRateResponseProtoMsg): QueryInflationRateResponse {
    return QueryInflationRateResponse.decode(message.value);
  },
  toProto(message: QueryInflationRateResponse): Uint8Array {
    return QueryInflationRateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInflationRateResponse): QueryInflationRateResponseProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryInflationRateResponse",
      value: QueryInflationRateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/evmos.inflation.v1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
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
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryParamsRequestSDKType {
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
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/evmos.inflation.v1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
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
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
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
  fromSDKJSON(object: any): QueryParamsResponseSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined
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
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Params.registerTypeUrl();
  }
};