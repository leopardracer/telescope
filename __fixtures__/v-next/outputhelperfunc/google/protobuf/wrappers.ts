import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "google.protobuf";
/**
 * Wrapper message for `double`.
 * 
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValue {
  /** The double value. */
  value: number;
}
export interface DoubleValueProtoMsg {
  typeUrl: "/google.protobuf.DoubleValue";
  value: Uint8Array;
}
/**
 * Wrapper message for `double`.
 * 
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValueAmino {
  /** The double value. */
  value?: number;
}
export interface DoubleValueAminoMsg {
  type: "/google.protobuf.DoubleValue";
  value: DoubleValueAmino;
}
/**
 * Wrapper message for `double`.
 * 
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValueSDKType {
  value: number;
}
/**
 * Wrapper message for `float`.
 * 
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValue {
  /** The float value. */
  value: number;
}
export interface FloatValueProtoMsg {
  typeUrl: "/google.protobuf.FloatValue";
  value: Uint8Array;
}
/**
 * Wrapper message for `float`.
 * 
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValueAmino {
  /** The float value. */
  value?: number;
}
export interface FloatValueAminoMsg {
  type: "/google.protobuf.FloatValue";
  value: FloatValueAmino;
}
/**
 * Wrapper message for `float`.
 * 
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValueSDKType {
  value: number;
}
/**
 * Wrapper message for `int64`.
 * 
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64Value {
  /** The int64 value. */
  value: bigint;
}
export interface Int64ValueProtoMsg {
  typeUrl: "/google.protobuf.Int64Value";
  value: Uint8Array;
}
/**
 * Wrapper message for `int64`.
 * 
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64ValueAmino {
  /** The int64 value. */
  value?: string;
}
export interface Int64ValueAminoMsg {
  type: "/google.protobuf.Int64Value";
  value: Int64ValueAmino;
}
/**
 * Wrapper message for `int64`.
 * 
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64ValueSDKType {
  value: bigint;
}
/**
 * Wrapper message for `uint64`.
 * 
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64Value {
  /** The uint64 value. */
  value: bigint;
}
export interface UInt64ValueProtoMsg {
  typeUrl: "/google.protobuf.UInt64Value";
  value: Uint8Array;
}
/**
 * Wrapper message for `uint64`.
 * 
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64ValueAmino {
  /** The uint64 value. */
  value?: string;
}
export interface UInt64ValueAminoMsg {
  type: "/google.protobuf.UInt64Value";
  value: UInt64ValueAmino;
}
/**
 * Wrapper message for `uint64`.
 * 
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64ValueSDKType {
  value: bigint;
}
/**
 * Wrapper message for `int32`.
 * 
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32Value {
  /** The int32 value. */
  value: number;
}
export interface Int32ValueProtoMsg {
  typeUrl: "/google.protobuf.Int32Value";
  value: Uint8Array;
}
/**
 * Wrapper message for `int32`.
 * 
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32ValueAmino {
  /** The int32 value. */
  value?: number;
}
export interface Int32ValueAminoMsg {
  type: "/google.protobuf.Int32Value";
  value: Int32ValueAmino;
}
/**
 * Wrapper message for `int32`.
 * 
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32ValueSDKType {
  value: number;
}
/**
 * Wrapper message for `uint32`.
 * 
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32Value {
  /** The uint32 value. */
  value: number;
}
export interface UInt32ValueProtoMsg {
  typeUrl: "/google.protobuf.UInt32Value";
  value: Uint8Array;
}
/**
 * Wrapper message for `uint32`.
 * 
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32ValueAmino {
  /** The uint32 value. */
  value?: number;
}
export interface UInt32ValueAminoMsg {
  type: "/google.protobuf.UInt32Value";
  value: UInt32ValueAmino;
}
/**
 * Wrapper message for `uint32`.
 * 
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32ValueSDKType {
  value: number;
}
/**
 * Wrapper message for `bool`.
 * 
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValue {
  /** The bool value. */
  value: boolean;
}
export interface BoolValueProtoMsg {
  typeUrl: "/google.protobuf.BoolValue";
  value: Uint8Array;
}
/**
 * Wrapper message for `bool`.
 * 
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValueAmino {
  /** The bool value. */
  value?: boolean;
}
export interface BoolValueAminoMsg {
  type: "/google.protobuf.BoolValue";
  value: BoolValueAmino;
}
/**
 * Wrapper message for `bool`.
 * 
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValueSDKType {
  value: boolean;
}
/**
 * Wrapper message for `string`.
 * 
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValue {
  /** The string value. */
  value: string;
}
export interface StringValueProtoMsg {
  typeUrl: "/google.protobuf.StringValue";
  value: Uint8Array;
}
/**
 * Wrapper message for `string`.
 * 
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValueAmino {
  /** The string value. */
  value?: string;
}
export interface StringValueAminoMsg {
  type: "/google.protobuf.StringValue";
  value: StringValueAmino;
}
/**
 * Wrapper message for `string`.
 * 
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValueSDKType {
  value: string;
}
/**
 * Wrapper message for `bytes`.
 * 
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValue {
  /** The bytes value. */
  value: Uint8Array;
}
export interface BytesValueProtoMsg {
  typeUrl: "/google.protobuf.BytesValue";
  value: Uint8Array;
}
/**
 * Wrapper message for `bytes`.
 * 
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValueAmino {
  /** The bytes value. */
  value?: string;
}
export interface BytesValueAminoMsg {
  type: "/google.protobuf.BytesValue";
  value: BytesValueAmino;
}
/**
 * Wrapper message for `bytes`.
 * 
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValueSDKType {
  value: Uint8Array;
}
function createBaseDoubleValue(): DoubleValue {
  return {
    value: 0
  };
}
export const DoubleValue = {
  typeUrl: "/google.protobuf.DoubleValue",
  is(o: any): o is DoubleValue {
    return o && (o.$typeUrl === DoubleValue.typeUrl || typeof o.value === "number");
  },
  isSDK(o: any): o is DoubleValueSDKType {
    return o && (o.$typeUrl === DoubleValue.typeUrl || typeof o.value === "number");
  },
  isAmino(o: any): o is DoubleValueAmino {
    return o && (o.$typeUrl === DoubleValue.typeUrl || typeof o.value === "number");
  },
  encode(message: DoubleValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== undefined) {
      writer.uint32(9).double(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DoubleValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DoubleValue {
    const obj = createBaseDoubleValue();
    if (isSet(object.value)) obj.value = Number(object.value);
    return obj;
  },
  toJSON(message: DoubleValue): JsonSafe<DoubleValue> {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<DoubleValue>): DoubleValue {
    const message = createBaseDoubleValue();
    message.value = object.value ?? 0;
    return message;
  },
  fromSDK(object: DoubleValueSDKType): DoubleValue {
    return {
      value: object?.value
    };
  },
  fromSDKJSON(object: any): DoubleValueSDKType {
    return {
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  toSDK(message: DoubleValue): DoubleValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: DoubleValueAmino): DoubleValue {
    const message = createBaseDoubleValue();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: DoubleValue): DoubleValueAmino {
    const obj: any = {};
    obj.value = message.value === 0 ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: DoubleValueAminoMsg): DoubleValue {
    return DoubleValue.fromAmino(object.value);
  },
  fromProtoMsg(message: DoubleValueProtoMsg): DoubleValue {
    return DoubleValue.decode(message.value);
  },
  toProto(message: DoubleValue): Uint8Array {
    return DoubleValue.encode(message).finish();
  },
  toProtoMsg(message: DoubleValue): DoubleValueProtoMsg {
    return {
      typeUrl: "/google.protobuf.DoubleValue",
      value: DoubleValue.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseFloatValue(): FloatValue {
  return {
    value: 0
  };
}
export const FloatValue = {
  typeUrl: "/google.protobuf.FloatValue",
  is(o: any): o is FloatValue {
    return o && (o.$typeUrl === FloatValue.typeUrl || typeof o.value === "number");
  },
  isSDK(o: any): o is FloatValueSDKType {
    return o && (o.$typeUrl === FloatValue.typeUrl || typeof o.value === "number");
  },
  isAmino(o: any): o is FloatValueAmino {
    return o && (o.$typeUrl === FloatValue.typeUrl || typeof o.value === "number");
  },
  encode(message: FloatValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== undefined) {
      writer.uint32(13).float(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FloatValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFloatValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FloatValue {
    const obj = createBaseFloatValue();
    if (isSet(object.value)) obj.value = Number(object.value);
    return obj;
  },
  toJSON(message: FloatValue): JsonSafe<FloatValue> {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<FloatValue>): FloatValue {
    const message = createBaseFloatValue();
    message.value = object.value ?? 0;
    return message;
  },
  fromSDK(object: FloatValueSDKType): FloatValue {
    return {
      value: object?.value
    };
  },
  fromSDKJSON(object: any): FloatValueSDKType {
    return {
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  toSDK(message: FloatValue): FloatValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: FloatValueAmino): FloatValue {
    const message = createBaseFloatValue();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: FloatValue): FloatValueAmino {
    const obj: any = {};
    obj.value = message.value === 0 ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: FloatValueAminoMsg): FloatValue {
    return FloatValue.fromAmino(object.value);
  },
  fromProtoMsg(message: FloatValueProtoMsg): FloatValue {
    return FloatValue.decode(message.value);
  },
  toProto(message: FloatValue): Uint8Array {
    return FloatValue.encode(message).finish();
  },
  toProtoMsg(message: FloatValue): FloatValueProtoMsg {
    return {
      typeUrl: "/google.protobuf.FloatValue",
      value: FloatValue.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseInt64Value(): Int64Value {
  return {
    value: BigInt(0)
  };
}
export const Int64Value = {
  typeUrl: "/google.protobuf.Int64Value",
  is(o: any): o is Int64Value {
    return o && (o.$typeUrl === Int64Value.typeUrl || typeof o.value === "bigint");
  },
  isSDK(o: any): o is Int64ValueSDKType {
    return o && (o.$typeUrl === Int64Value.typeUrl || typeof o.value === "bigint");
  },
  isAmino(o: any): o is Int64ValueAmino {
    return o && (o.$typeUrl === Int64Value.typeUrl || typeof o.value === "bigint");
  },
  encode(message: Int64Value, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== undefined) {
      writer.uint32(8).int64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Int64Value {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt64Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Int64Value {
    const obj = createBaseInt64Value();
    if (isSet(object.value)) obj.value = BigInt(object.value.toString());
    return obj;
  },
  toJSON(message: Int64Value): JsonSafe<Int64Value> {
    const obj: any = {};
    message.value !== undefined && (obj.value = (message.value || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Int64Value>): Int64Value {
    const message = createBaseInt64Value();
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value.toString());
    }
    return message;
  },
  fromSDK(object: Int64ValueSDKType): Int64Value {
    return {
      value: object?.value
    };
  },
  fromSDKJSON(object: any): Int64ValueSDKType {
    return {
      value: isSet(object.value) ? BigInt(object.value.toString()) : BigInt(0)
    };
  },
  toSDK(message: Int64Value): Int64ValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: Int64ValueAmino): Int64Value {
    const message = createBaseInt64Value();
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: Int64Value): Int64ValueAmino {
    const obj: any = {};
    obj.value = message.value !== BigInt(0) ? message.value?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: Int64ValueAminoMsg): Int64Value {
    return Int64Value.fromAmino(object.value);
  },
  fromProtoMsg(message: Int64ValueProtoMsg): Int64Value {
    return Int64Value.decode(message.value);
  },
  toProto(message: Int64Value): Uint8Array {
    return Int64Value.encode(message).finish();
  },
  toProtoMsg(message: Int64Value): Int64ValueProtoMsg {
    return {
      typeUrl: "/google.protobuf.Int64Value",
      value: Int64Value.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseUInt64Value(): UInt64Value {
  return {
    value: BigInt(0)
  };
}
export const UInt64Value = {
  typeUrl: "/google.protobuf.UInt64Value",
  is(o: any): o is UInt64Value {
    return o && (o.$typeUrl === UInt64Value.typeUrl || typeof o.value === "bigint");
  },
  isSDK(o: any): o is UInt64ValueSDKType {
    return o && (o.$typeUrl === UInt64Value.typeUrl || typeof o.value === "bigint");
  },
  isAmino(o: any): o is UInt64ValueAmino {
    return o && (o.$typeUrl === UInt64Value.typeUrl || typeof o.value === "bigint");
  },
  encode(message: UInt64Value, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== undefined) {
      writer.uint32(8).uint64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UInt64Value {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt64Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UInt64Value {
    const obj = createBaseUInt64Value();
    if (isSet(object.value)) obj.value = BigInt(object.value.toString());
    return obj;
  },
  toJSON(message: UInt64Value): JsonSafe<UInt64Value> {
    const obj: any = {};
    message.value !== undefined && (obj.value = (message.value || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<UInt64Value>): UInt64Value {
    const message = createBaseUInt64Value();
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value.toString());
    }
    return message;
  },
  fromSDK(object: UInt64ValueSDKType): UInt64Value {
    return {
      value: object?.value
    };
  },
  fromSDKJSON(object: any): UInt64ValueSDKType {
    return {
      value: isSet(object.value) ? BigInt(object.value.toString()) : BigInt(0)
    };
  },
  toSDK(message: UInt64Value): UInt64ValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: UInt64ValueAmino): UInt64Value {
    const message = createBaseUInt64Value();
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: UInt64Value): UInt64ValueAmino {
    const obj: any = {};
    obj.value = message.value !== BigInt(0) ? message.value?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UInt64ValueAminoMsg): UInt64Value {
    return UInt64Value.fromAmino(object.value);
  },
  fromProtoMsg(message: UInt64ValueProtoMsg): UInt64Value {
    return UInt64Value.decode(message.value);
  },
  toProto(message: UInt64Value): Uint8Array {
    return UInt64Value.encode(message).finish();
  },
  toProtoMsg(message: UInt64Value): UInt64ValueProtoMsg {
    return {
      typeUrl: "/google.protobuf.UInt64Value",
      value: UInt64Value.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseInt32Value(): Int32Value {
  return {
    value: 0
  };
}
export const Int32Value = {
  typeUrl: "/google.protobuf.Int32Value",
  is(o: any): o is Int32Value {
    return o && (o.$typeUrl === Int32Value.typeUrl || typeof o.value === "number");
  },
  isSDK(o: any): o is Int32ValueSDKType {
    return o && (o.$typeUrl === Int32Value.typeUrl || typeof o.value === "number");
  },
  isAmino(o: any): o is Int32ValueAmino {
    return o && (o.$typeUrl === Int32Value.typeUrl || typeof o.value === "number");
  },
  encode(message: Int32Value, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== undefined) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Int32Value {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt32Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Int32Value {
    const obj = createBaseInt32Value();
    if (isSet(object.value)) obj.value = Number(object.value);
    return obj;
  },
  toJSON(message: Int32Value): JsonSafe<Int32Value> {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },
  fromPartial(object: DeepPartial<Int32Value>): Int32Value {
    const message = createBaseInt32Value();
    message.value = object.value ?? 0;
    return message;
  },
  fromSDK(object: Int32ValueSDKType): Int32Value {
    return {
      value: object?.value
    };
  },
  fromSDKJSON(object: any): Int32ValueSDKType {
    return {
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  toSDK(message: Int32Value): Int32ValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: Int32ValueAmino): Int32Value {
    const message = createBaseInt32Value();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Int32Value): Int32ValueAmino {
    const obj: any = {};
    obj.value = message.value === 0 ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: Int32ValueAminoMsg): Int32Value {
    return Int32Value.fromAmino(object.value);
  },
  fromProtoMsg(message: Int32ValueProtoMsg): Int32Value {
    return Int32Value.decode(message.value);
  },
  toProto(message: Int32Value): Uint8Array {
    return Int32Value.encode(message).finish();
  },
  toProtoMsg(message: Int32Value): Int32ValueProtoMsg {
    return {
      typeUrl: "/google.protobuf.Int32Value",
      value: Int32Value.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseUInt32Value(): UInt32Value {
  return {
    value: 0
  };
}
export const UInt32Value = {
  typeUrl: "/google.protobuf.UInt32Value",
  is(o: any): o is UInt32Value {
    return o && (o.$typeUrl === UInt32Value.typeUrl || typeof o.value === "number");
  },
  isSDK(o: any): o is UInt32ValueSDKType {
    return o && (o.$typeUrl === UInt32Value.typeUrl || typeof o.value === "number");
  },
  isAmino(o: any): o is UInt32ValueAmino {
    return o && (o.$typeUrl === UInt32Value.typeUrl || typeof o.value === "number");
  },
  encode(message: UInt32Value, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== undefined) {
      writer.uint32(8).uint32(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UInt32Value {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt32Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UInt32Value {
    const obj = createBaseUInt32Value();
    if (isSet(object.value)) obj.value = Number(object.value);
    return obj;
  },
  toJSON(message: UInt32Value): JsonSafe<UInt32Value> {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },
  fromPartial(object: DeepPartial<UInt32Value>): UInt32Value {
    const message = createBaseUInt32Value();
    message.value = object.value ?? 0;
    return message;
  },
  fromSDK(object: UInt32ValueSDKType): UInt32Value {
    return {
      value: object?.value
    };
  },
  fromSDKJSON(object: any): UInt32ValueSDKType {
    return {
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  toSDK(message: UInt32Value): UInt32ValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: UInt32ValueAmino): UInt32Value {
    const message = createBaseUInt32Value();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: UInt32Value): UInt32ValueAmino {
    const obj: any = {};
    obj.value = message.value === 0 ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: UInt32ValueAminoMsg): UInt32Value {
    return UInt32Value.fromAmino(object.value);
  },
  fromProtoMsg(message: UInt32ValueProtoMsg): UInt32Value {
    return UInt32Value.decode(message.value);
  },
  toProto(message: UInt32Value): Uint8Array {
    return UInt32Value.encode(message).finish();
  },
  toProtoMsg(message: UInt32Value): UInt32ValueProtoMsg {
    return {
      typeUrl: "/google.protobuf.UInt32Value",
      value: UInt32Value.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseBoolValue(): BoolValue {
  return {
    value: false
  };
}
export const BoolValue = {
  typeUrl: "/google.protobuf.BoolValue",
  is(o: any): o is BoolValue {
    return o && (o.$typeUrl === BoolValue.typeUrl || typeof o.value === "boolean");
  },
  isSDK(o: any): o is BoolValueSDKType {
    return o && (o.$typeUrl === BoolValue.typeUrl || typeof o.value === "boolean");
  },
  isAmino(o: any): o is BoolValueAmino {
    return o && (o.$typeUrl === BoolValue.typeUrl || typeof o.value === "boolean");
  },
  encode(message: BoolValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== undefined) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BoolValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoolValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BoolValue {
    const obj = createBaseBoolValue();
    if (isSet(object.value)) obj.value = Boolean(object.value);
    return obj;
  },
  toJSON(message: BoolValue): JsonSafe<BoolValue> {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<BoolValue>): BoolValue {
    const message = createBaseBoolValue();
    message.value = object.value ?? false;
    return message;
  },
  fromSDK(object: BoolValueSDKType): BoolValue {
    return {
      value: object?.value
    };
  },
  fromSDKJSON(object: any): BoolValueSDKType {
    return {
      value: isSet(object.value) ? Boolean(object.value) : false
    };
  },
  toSDK(message: BoolValue): BoolValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: BoolValueAmino): BoolValue {
    const message = createBaseBoolValue();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: BoolValue): BoolValueAmino {
    const obj: any = {};
    obj.value = message.value === false ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: BoolValueAminoMsg): BoolValue {
    return BoolValue.fromAmino(object.value);
  },
  fromProtoMsg(message: BoolValueProtoMsg): BoolValue {
    return BoolValue.decode(message.value);
  },
  toProto(message: BoolValue): Uint8Array {
    return BoolValue.encode(message).finish();
  },
  toProtoMsg(message: BoolValue): BoolValueProtoMsg {
    return {
      typeUrl: "/google.protobuf.BoolValue",
      value: BoolValue.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseStringValue(): StringValue {
  return {
    value: ""
  };
}
export const StringValue = {
  typeUrl: "/google.protobuf.StringValue",
  is(o: any): o is StringValue {
    return o && (o.$typeUrl === StringValue.typeUrl || typeof o.value === "string");
  },
  isSDK(o: any): o is StringValueSDKType {
    return o && (o.$typeUrl === StringValue.typeUrl || typeof o.value === "string");
  },
  isAmino(o: any): o is StringValueAmino {
    return o && (o.$typeUrl === StringValue.typeUrl || typeof o.value === "string");
  },
  encode(message: StringValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== undefined) {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StringValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StringValue {
    const obj = createBaseStringValue();
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  toJSON(message: StringValue): JsonSafe<StringValue> {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<StringValue>): StringValue {
    const message = createBaseStringValue();
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: StringValueSDKType): StringValue {
    return {
      value: object?.value
    };
  },
  fromSDKJSON(object: any): StringValueSDKType {
    return {
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toSDK(message: StringValue): StringValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: StringValueAmino): StringValue {
    const message = createBaseStringValue();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: StringValue): StringValueAmino {
    const obj: any = {};
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: StringValueAminoMsg): StringValue {
    return StringValue.fromAmino(object.value);
  },
  fromProtoMsg(message: StringValueProtoMsg): StringValue {
    return StringValue.decode(message.value);
  },
  toProto(message: StringValue): Uint8Array {
    return StringValue.encode(message).finish();
  },
  toProtoMsg(message: StringValue): StringValueProtoMsg {
    return {
      typeUrl: "/google.protobuf.StringValue",
      value: StringValue.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseBytesValue(): BytesValue {
  return {
    value: new Uint8Array()
  };
}
export const BytesValue = {
  typeUrl: "/google.protobuf.BytesValue",
  is(o: any): o is BytesValue {
    return o && (o.$typeUrl === BytesValue.typeUrl || o.value instanceof Uint8Array || typeof o.value === "string");
  },
  isSDK(o: any): o is BytesValueSDKType {
    return o && (o.$typeUrl === BytesValue.typeUrl || o.value instanceof Uint8Array || typeof o.value === "string");
  },
  isAmino(o: any): o is BytesValueAmino {
    return o && (o.$typeUrl === BytesValue.typeUrl || o.value instanceof Uint8Array || typeof o.value === "string");
  },
  encode(message: BytesValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BytesValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BytesValue {
    const obj = createBaseBytesValue();
    if (isSet(object.value)) obj.value = bytesFromBase64(object.value);
    return obj;
  },
  toJSON(message: BytesValue): JsonSafe<BytesValue> {
    const obj: any = {};
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<BytesValue>): BytesValue {
    const message = createBaseBytesValue();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromSDK(object: BytesValueSDKType): BytesValue {
    return {
      value: object?.value
    };
  },
  fromSDKJSON(object: any): BytesValueSDKType {
    return {
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toSDK(message: BytesValue): BytesValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: BytesValueAmino): BytesValue {
    const message = createBaseBytesValue();
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: BytesValue): BytesValueAmino {
    const obj: any = {};
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: BytesValueAminoMsg): BytesValue {
    return BytesValue.fromAmino(object.value);
  },
  fromProtoMsg(message: BytesValueProtoMsg): BytesValue {
    return BytesValue.decode(message.value);
  },
  toProto(message: BytesValue): Uint8Array {
    return BytesValue.encode(message).finish();
  },
  toProtoMsg(message: BytesValue): BytesValueProtoMsg {
    return {
      typeUrl: "/google.protobuf.BytesValue",
      value: BytesValue.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};