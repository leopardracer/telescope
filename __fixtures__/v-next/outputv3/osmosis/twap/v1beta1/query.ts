import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "osmosis.twap.v1beta1";
export interface ArithmeticTwapRequest {
  poolId: bigint;
  baseAsset: string;
  quoteAsset: string;
  startTime: Date;
  endTime?: Date;
}
export interface ArithmeticTwapRequestProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest";
  value: Uint8Array;
}
export interface ArithmeticTwapRequestAmino {
  pool_id?: string;
  base_asset?: string;
  quote_asset?: string;
  start_time?: string;
  end_time?: string;
}
export interface ArithmeticTwapRequestSDKType {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: Date;
  end_time?: Date;
}
export interface ArithmeticTwapResponse {
  arithmeticTwap: string;
}
export interface ArithmeticTwapResponseProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse";
  value: Uint8Array;
}
export interface ArithmeticTwapResponseAmino {
  arithmetic_twap?: string;
}
export interface ArithmeticTwapResponseSDKType {
  arithmetic_twap: string;
}
export interface ArithmeticTwapToNowRequest {
  poolId: bigint;
  baseAsset: string;
  quoteAsset: string;
  startTime: Date;
}
export interface ArithmeticTwapToNowRequestProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest";
  value: Uint8Array;
}
export interface ArithmeticTwapToNowRequestAmino {
  pool_id?: string;
  base_asset?: string;
  quote_asset?: string;
  start_time?: string;
}
export interface ArithmeticTwapToNowRequestSDKType {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: Date;
}
export interface ArithmeticTwapToNowResponse {
  arithmeticTwap: string;
}
export interface ArithmeticTwapToNowResponseProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse";
  value: Uint8Array;
}
export interface ArithmeticTwapToNowResponseAmino {
  arithmetic_twap?: string;
}
export interface ArithmeticTwapToNowResponseSDKType {
  arithmetic_twap: string;
}
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ParamsRequest";
  value: Uint8Array;
}
export interface ParamsRequestAmino {}
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ParamsResponse";
  value: Uint8Array;
}
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseArithmeticTwapRequest(): ArithmeticTwapRequest {
  return {
    poolId: BigInt(0),
    baseAsset: "",
    quoteAsset: "",
    startTime: new Date(),
    endTime: undefined
  };
}
export const ArithmeticTwapRequest = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest",
  aminoType: "osmosis/twap/arithmetic-twap-request",
  encode(message: ArithmeticTwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ArithmeticTwapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ArithmeticTwapRequest {
    const obj = createBaseArithmeticTwapRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.baseAsset)) obj.baseAsset = String(object.baseAsset);
    if (isSet(object.quoteAsset)) obj.quoteAsset = String(object.quoteAsset);
    if (isSet(object.startTime)) obj.startTime = new Date(object.startTime);
    if (isSet(object.endTime)) obj.endTime = new Date(object.endTime);
    return obj;
  },
  fromPartial(object: DeepPartial<ArithmeticTwapRequest>): ArithmeticTwapRequest {
    const message = createBaseArithmeticTwapRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  },
  fromSDK(object: ArithmeticTwapRequestSDKType): ArithmeticTwapRequest {
    return {
      poolId: object?.pool_id,
      baseAsset: object?.base_asset,
      quoteAsset: object?.quote_asset,
      startTime: object.start_time ?? undefined,
      endTime: object.end_time ?? undefined
    };
  },
  toSDK(message: ArithmeticTwapRequest): ArithmeticTwapRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.base_asset = message.baseAsset;
    obj.quote_asset = message.quoteAsset;
    message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
    message.endTime !== undefined && (obj.end_time = message.endTime ?? undefined);
    return obj;
  },
  fromAmino(object: ArithmeticTwapRequestAmino): ArithmeticTwapRequest {
    const message = createBaseArithmeticTwapRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset !== undefined && object.base_asset !== null) {
      message.baseAsset = object.base_asset;
    }
    if (object.quote_asset !== undefined && object.quote_asset !== null) {
      message.quoteAsset = object.quote_asset;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
    }
    return message;
  },
  toAmino(message: ArithmeticTwapRequest, useInterfaces: boolean = true): ArithmeticTwapRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.base_asset = message.baseAsset === "" ? undefined : message.baseAsset;
    obj.quote_asset = message.quoteAsset === "" ? undefined : message.quoteAsset;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : undefined;
    return obj;
  },
  fromProtoMsg(message: ArithmeticTwapRequestProtoMsg, useInterfaces: boolean = true): ArithmeticTwapRequest {
    return ArithmeticTwapRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ArithmeticTwapRequest): Uint8Array {
    return ArithmeticTwapRequest.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapRequest): ArithmeticTwapRequestProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest",
      value: ArithmeticTwapRequest.encode(message).finish()
    };
  }
};
function createBaseArithmeticTwapResponse(): ArithmeticTwapResponse {
  return {
    arithmeticTwap: ""
  };
}
export const ArithmeticTwapResponse = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse",
  aminoType: "osmosis/twap/arithmetic-twap-response",
  encode(message: ArithmeticTwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ArithmeticTwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arithmeticTwap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ArithmeticTwapResponse {
    const obj = createBaseArithmeticTwapResponse();
    if (isSet(object.arithmeticTwap)) obj.arithmeticTwap = String(object.arithmeticTwap);
    return obj;
  },
  fromPartial(object: DeepPartial<ArithmeticTwapResponse>): ArithmeticTwapResponse {
    const message = createBaseArithmeticTwapResponse();
    message.arithmeticTwap = object.arithmeticTwap ?? "";
    return message;
  },
  fromSDK(object: ArithmeticTwapResponseSDKType): ArithmeticTwapResponse {
    return {
      arithmeticTwap: object?.arithmetic_twap
    };
  },
  toSDK(message: ArithmeticTwapResponse): ArithmeticTwapResponseSDKType {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmeticTwap;
    return obj;
  },
  fromAmino(object: ArithmeticTwapResponseAmino): ArithmeticTwapResponse {
    const message = createBaseArithmeticTwapResponse();
    if (object.arithmetic_twap !== undefined && object.arithmetic_twap !== null) {
      message.arithmeticTwap = object.arithmetic_twap;
    }
    return message;
  },
  toAmino(message: ArithmeticTwapResponse, useInterfaces: boolean = true): ArithmeticTwapResponseAmino {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmeticTwap === "" ? undefined : message.arithmeticTwap;
    return obj;
  },
  fromProtoMsg(message: ArithmeticTwapResponseProtoMsg, useInterfaces: boolean = true): ArithmeticTwapResponse {
    return ArithmeticTwapResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ArithmeticTwapResponse): Uint8Array {
    return ArithmeticTwapResponse.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapResponse): ArithmeticTwapResponseProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse",
      value: ArithmeticTwapResponse.encode(message).finish()
    };
  }
};
function createBaseArithmeticTwapToNowRequest(): ArithmeticTwapToNowRequest {
  return {
    poolId: BigInt(0),
    baseAsset: "",
    quoteAsset: "",
    startTime: new Date()
  };
}
export const ArithmeticTwapToNowRequest = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest",
  aminoType: "osmosis/twap/arithmetic-twap-to-now-request",
  encode(message: ArithmeticTwapToNowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ArithmeticTwapToNowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapToNowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ArithmeticTwapToNowRequest {
    const obj = createBaseArithmeticTwapToNowRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.baseAsset)) obj.baseAsset = String(object.baseAsset);
    if (isSet(object.quoteAsset)) obj.quoteAsset = String(object.quoteAsset);
    if (isSet(object.startTime)) obj.startTime = new Date(object.startTime);
    return obj;
  },
  fromPartial(object: DeepPartial<ArithmeticTwapToNowRequest>): ArithmeticTwapToNowRequest {
    const message = createBaseArithmeticTwapToNowRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime ?? undefined;
    return message;
  },
  fromSDK(object: ArithmeticTwapToNowRequestSDKType): ArithmeticTwapToNowRequest {
    return {
      poolId: object?.pool_id,
      baseAsset: object?.base_asset,
      quoteAsset: object?.quote_asset,
      startTime: object.start_time ?? undefined
    };
  },
  toSDK(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.base_asset = message.baseAsset;
    obj.quote_asset = message.quoteAsset;
    message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
    return obj;
  },
  fromAmino(object: ArithmeticTwapToNowRequestAmino): ArithmeticTwapToNowRequest {
    const message = createBaseArithmeticTwapToNowRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset !== undefined && object.base_asset !== null) {
      message.baseAsset = object.base_asset;
    }
    if (object.quote_asset !== undefined && object.quote_asset !== null) {
      message.quoteAsset = object.quote_asset;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    return message;
  },
  toAmino(message: ArithmeticTwapToNowRequest, useInterfaces: boolean = true): ArithmeticTwapToNowRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.base_asset = message.baseAsset === "" ? undefined : message.baseAsset;
    obj.quote_asset = message.quoteAsset === "" ? undefined : message.quoteAsset;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    return obj;
  },
  fromProtoMsg(message: ArithmeticTwapToNowRequestProtoMsg, useInterfaces: boolean = true): ArithmeticTwapToNowRequest {
    return ArithmeticTwapToNowRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ArithmeticTwapToNowRequest): Uint8Array {
    return ArithmeticTwapToNowRequest.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest",
      value: ArithmeticTwapToNowRequest.encode(message).finish()
    };
  }
};
function createBaseArithmeticTwapToNowResponse(): ArithmeticTwapToNowResponse {
  return {
    arithmeticTwap: ""
  };
}
export const ArithmeticTwapToNowResponse = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse",
  aminoType: "osmosis/twap/arithmetic-twap-to-now-response",
  encode(message: ArithmeticTwapToNowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ArithmeticTwapToNowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapToNowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arithmeticTwap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ArithmeticTwapToNowResponse {
    const obj = createBaseArithmeticTwapToNowResponse();
    if (isSet(object.arithmeticTwap)) obj.arithmeticTwap = String(object.arithmeticTwap);
    return obj;
  },
  fromPartial(object: DeepPartial<ArithmeticTwapToNowResponse>): ArithmeticTwapToNowResponse {
    const message = createBaseArithmeticTwapToNowResponse();
    message.arithmeticTwap = object.arithmeticTwap ?? "";
    return message;
  },
  fromSDK(object: ArithmeticTwapToNowResponseSDKType): ArithmeticTwapToNowResponse {
    return {
      arithmeticTwap: object?.arithmetic_twap
    };
  },
  toSDK(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseSDKType {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmeticTwap;
    return obj;
  },
  fromAmino(object: ArithmeticTwapToNowResponseAmino): ArithmeticTwapToNowResponse {
    const message = createBaseArithmeticTwapToNowResponse();
    if (object.arithmetic_twap !== undefined && object.arithmetic_twap !== null) {
      message.arithmeticTwap = object.arithmetic_twap;
    }
    return message;
  },
  toAmino(message: ArithmeticTwapToNowResponse, useInterfaces: boolean = true): ArithmeticTwapToNowResponseAmino {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmeticTwap === "" ? undefined : message.arithmeticTwap;
    return obj;
  },
  fromProtoMsg(message: ArithmeticTwapToNowResponseProtoMsg, useInterfaces: boolean = true): ArithmeticTwapToNowResponse {
    return ArithmeticTwapToNowResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ArithmeticTwapToNowResponse): Uint8Array {
    return ArithmeticTwapToNowResponse.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse",
      value: ArithmeticTwapToNowResponse.encode(message).finish()
    };
  }
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/osmosis.twap.v1beta1.ParamsRequest",
  aminoType: "osmosis/twap/params-request",
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
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
  fromJSON(_: any): ParamsRequest {
    const obj = createBaseParamsRequest();
    return obj;
  },
  fromPartial(_: DeepPartial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromSDK(_: ParamsRequestSDKType): ParamsRequest {
    return {};
  },
  toSDK(_: ParamsRequest): ParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  toAmino(_: ParamsRequest, useInterfaces: boolean = true): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: ParamsRequestProtoMsg, useInterfaces: boolean = true): ParamsRequest {
    return ParamsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/osmosis.twap.v1beta1.ParamsResponse",
  aminoType: "osmosis/twap/params-response",
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
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
  fromJSON(object: any): ParamsResponse {
    const obj = createBaseParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  fromPartial(object: DeepPartial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: ParamsResponseSDKType): ParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: ParamsResponse): ParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: ParamsResponse, useInterfaces: boolean = true): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: ParamsResponseProtoMsg, useInterfaces: boolean = true): ParamsResponse {
    return ParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};