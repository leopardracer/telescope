import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, isObject } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "google.api.expr.v1beta1";
export interface SourceInfo_PositionsEntry {
  key: number;
  value: number;
}
export interface SourceInfo_PositionsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface SourceInfo_PositionsEntryAmino {
  key?: number;
  value?: number;
}
export interface SourceInfo_PositionsEntryAminoMsg {
  type: string;
  value: SourceInfo_PositionsEntryAmino;
}
export interface SourceInfo_PositionsEntrySDKType {
  key: number;
  value: number;
}
/** Source information collected at parse time. */
export interface SourceInfo {
  /**
   * The location name. All position information attached to an expression is
   * relative to this location.
   * 
   * The location could be a file, UI element, or similar. For example,
   * `acme/app/AnvilPolicy.cel`.
   */
  location: string;
  /**
   * Monotonically increasing list of character offsets where newlines appear.
   * 
   * The line number of a given position is the index `i` where for a given
   * `id` the `line_offsets[i] < id_positions[id] < line_offsets[i+1]`. The
   * column may be derivd from `id_positions[id] - line_offsets[i]`.
   */
  lineOffsets: number[];
  /**
   * A map from the parse node id (e.g. `Expr.id`) to the character offset
   * within source.
   */
  positions: {
    [key: number]: number;
  };
}
export interface SourceInfoProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.SourceInfo";
  value: Uint8Array;
}
/** Source information collected at parse time. */
export interface SourceInfoAmino {
  /**
   * The location name. All position information attached to an expression is
   * relative to this location.
   * 
   * The location could be a file, UI element, or similar. For example,
   * `acme/app/AnvilPolicy.cel`.
   */
  location?: string;
  /**
   * Monotonically increasing list of character offsets where newlines appear.
   * 
   * The line number of a given position is the index `i` where for a given
   * `id` the `line_offsets[i] < id_positions[id] < line_offsets[i+1]`. The
   * column may be derivd from `id_positions[id] - line_offsets[i]`.
   */
  line_offsets?: number[];
  /**
   * A map from the parse node id (e.g. `Expr.id`) to the character offset
   * within source.
   */
  positions?: {
    [key: number]: number;
  };
}
export interface SourceInfoAminoMsg {
  type: "/google.api.expr.v1beta1.SourceInfo";
  value: SourceInfoAmino;
}
/** Source information collected at parse time. */
export interface SourceInfoSDKType {
  location: string;
  line_offsets: number[];
  positions: {
    [key: number]: number;
  };
}
/** A specific position in source. */
export interface SourcePosition {
  /** The soucre location name (e.g. file name). */
  location: string;
  /** The character offset. */
  offset: number;
  /**
   * The 1-based index of the starting line in the source text
   * where the issue occurs, or 0 if unknown.
   */
  line: number;
  /**
   * The 0-based index of the starting position within the line of source text
   * where the issue occurs.  Only meaningful if line is nonzer..
   */
  column: number;
}
export interface SourcePositionProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.SourcePosition";
  value: Uint8Array;
}
/** A specific position in source. */
export interface SourcePositionAmino {
  /** The soucre location name (e.g. file name). */
  location?: string;
  /** The character offset. */
  offset?: number;
  /**
   * The 1-based index of the starting line in the source text
   * where the issue occurs, or 0 if unknown.
   */
  line?: number;
  /**
   * The 0-based index of the starting position within the line of source text
   * where the issue occurs.  Only meaningful if line is nonzer..
   */
  column?: number;
}
export interface SourcePositionAminoMsg {
  type: "/google.api.expr.v1beta1.SourcePosition";
  value: SourcePositionAmino;
}
/** A specific position in source. */
export interface SourcePositionSDKType {
  location: string;
  offset: number;
  line: number;
  column: number;
}
function createBaseSourceInfo_PositionsEntry(): SourceInfo_PositionsEntry {
  return {
    key: 0,
    value: 0
  };
}
export const SourceInfo_PositionsEntry = {
  encode(message: SourceInfo_PositionsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SourceInfo_PositionsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo_PositionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourceInfo_PositionsEntry {
    const obj = createBaseSourceInfo_PositionsEntry();
    if (isSet(object.key)) obj.key = Number(object.key);
    if (isSet(object.value)) obj.value = Number(object.value);
    return obj;
  },
  toJSON(message: SourceInfo_PositionsEntry): JsonSafe<SourceInfo_PositionsEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },
  fromPartial(object: DeepPartial<SourceInfo_PositionsEntry>): SourceInfo_PositionsEntry {
    const message = createBaseSourceInfo_PositionsEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
  fromSDK(object: SourceInfo_PositionsEntrySDKType): SourceInfo_PositionsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  fromSDKJSON(object: any): SourceInfo_PositionsEntrySDKType {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  toSDK(message: SourceInfo_PositionsEntry): SourceInfo_PositionsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: SourceInfo_PositionsEntryAmino): SourceInfo_PositionsEntry {
    const message = createBaseSourceInfo_PositionsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: SourceInfo_PositionsEntry): SourceInfo_PositionsEntryAmino {
    const obj: any = {};
    obj.key = message.key === 0 ? undefined : message.key;
    obj.value = message.value === 0 ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: SourceInfo_PositionsEntryAminoMsg): SourceInfo_PositionsEntry {
    return SourceInfo_PositionsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: SourceInfo_PositionsEntryProtoMsg): SourceInfo_PositionsEntry {
    return SourceInfo_PositionsEntry.decode(message.value);
  },
  toProto(message: SourceInfo_PositionsEntry): Uint8Array {
    return SourceInfo_PositionsEntry.encode(message).finish();
  },
  registerTypeUrl() {}
};
function createBaseSourceInfo(): SourceInfo {
  return {
    location: "",
    lineOffsets: [],
    positions: {}
  };
}
export const SourceInfo = {
  typeUrl: "/google.api.expr.v1beta1.SourceInfo",
  is(o: any): o is SourceInfo {
    return o && (o.$typeUrl === SourceInfo.typeUrl || typeof o.location === "string" && Array.isArray(o.lineOffsets) && (!o.lineOffsets.length || typeof o.lineOffsets[0] === "number") && isSet(o.positions));
  },
  isSDK(o: any): o is SourceInfoSDKType {
    return o && (o.$typeUrl === SourceInfo.typeUrl || typeof o.location === "string" && Array.isArray(o.line_offsets) && (!o.line_offsets.length || typeof o.line_offsets[0] === "number") && isSet(o.positions));
  },
  isAmino(o: any): o is SourceInfoAmino {
    return o && (o.$typeUrl === SourceInfo.typeUrl || typeof o.location === "string" && Array.isArray(o.line_offsets) && (!o.line_offsets.length || typeof o.line_offsets[0] === "number") && isSet(o.positions));
  },
  encode(message: SourceInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.location !== undefined) {
      writer.uint32(18).string(message.location);
    }
    writer.uint32(26).fork();
    for (const v of message.lineOffsets) {
      writer.int32(v);
    }
    writer.ldelim();
    Object.entries(message.positions).forEach(([key, value]) => {
      SourceInfo_PositionsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(32).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SourceInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.location = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lineOffsets.push(reader.int32());
            }
          } else {
            message.lineOffsets.push(reader.int32());
          }
          break;
        case 4:
          const entry4 = SourceInfo_PositionsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.positions[entry4.key] = entry4.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourceInfo {
    const obj = createBaseSourceInfo();
    if (isSet(object.location)) obj.location = String(object.location);
    if (Array.isArray(object?.lineOffsets)) obj.lineOffsets = object.lineOffsets.map((e: any) => Number(e));
    if (isObject(object.positions)) obj.positions = Object.entries(object.positions).reduce<{
      [key: number]: number;
    }>((acc, [key, value]) => {
      acc[Number(key)] = Number(value);
      return acc;
    }, {});
    return obj;
  },
  toJSON(message: SourceInfo): JsonSafe<SourceInfo> {
    const obj: any = {};
    message.location !== undefined && (obj.location = message.location);
    if (message.lineOffsets) {
      obj.lineOffsets = message.lineOffsets.map(e => Math.round(e));
    } else {
      obj.lineOffsets = [];
    }
    obj.positions = {};
    if (message.positions) {
      Object.entries(message.positions).forEach(([k, v]) => {
        obj.positions[k] = Math.round(v);
      });
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SourceInfo>): SourceInfo {
    const message = createBaseSourceInfo();
    message.location = object.location ?? "";
    message.lineOffsets = object.lineOffsets?.map(e => e) || [];
    message.positions = Object.entries(object.positions ?? {}).reduce<{
      [key: number]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Number(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromSDK(object: SourceInfoSDKType): SourceInfo {
    return {
      location: object?.location,
      lineOffsets: Array.isArray(object?.line_offsets) ? object.line_offsets.map((e: any) => e) : [],
      positions: isObject(object.positions) ? Object.entries(object.positions).reduce<{
        [key: number]: number;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Number(value);
        return acc;
      }, {}) : {}
    };
  },
  fromSDKJSON(object: any): SourceInfoSDKType {
    return {
      location: isSet(object.location) ? String(object.location) : "",
      line_offsets: Array.isArray(object?.line_offsets) ? object.line_offsets.map((e: any) => Number(e)) : [],
      positions: isObject(object.positions) ? Object.entries(object.positions).reduce<{
        [key: number]: number;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Number(value);
        return acc;
      }, {}) : {}
    };
  },
  toSDK(message: SourceInfo): SourceInfoSDKType {
    const obj: any = {};
    obj.location = message.location;
    if (message.lineOffsets) {
      obj.line_offsets = message.lineOffsets.map(e => e);
    } else {
      obj.line_offsets = [];
    }
    obj.positions = {};
    if (message.positions) {
      Object.entries(message.positions).forEach(([k, v]) => {
        obj.positions[k] = Math.round(v);
      });
    }
    return obj;
  },
  fromAmino(object: SourceInfoAmino): SourceInfo {
    const message = createBaseSourceInfo();
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    }
    message.lineOffsets = object.line_offsets?.map(e => e) || [];
    message.positions = Object.entries(object.positions ?? {}).reduce<{
      [key: number]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Number(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: SourceInfo): SourceInfoAmino {
    const obj: any = {};
    obj.location = message.location === "" ? undefined : message.location;
    if (message.lineOffsets) {
      obj.line_offsets = message.lineOffsets.map(e => e);
    } else {
      obj.line_offsets = message.lineOffsets;
    }
    obj.positions = {};
    if (message.positions) {
      Object.entries(message.positions).forEach(([k, v]) => {
        obj.positions[k] = Math.round(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: SourceInfoAminoMsg): SourceInfo {
    return SourceInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: SourceInfoProtoMsg): SourceInfo {
    return SourceInfo.decode(message.value);
  },
  toProto(message: SourceInfo): Uint8Array {
    return SourceInfo.encode(message).finish();
  },
  toProtoMsg(message: SourceInfo): SourceInfoProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.SourceInfo",
      value: SourceInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseSourcePosition(): SourcePosition {
  return {
    location: "",
    offset: 0,
    line: 0,
    column: 0
  };
}
export const SourcePosition = {
  typeUrl: "/google.api.expr.v1beta1.SourcePosition",
  is(o: any): o is SourcePosition {
    return o && (o.$typeUrl === SourcePosition.typeUrl || typeof o.location === "string" && typeof o.offset === "number" && typeof o.line === "number" && typeof o.column === "number");
  },
  isSDK(o: any): o is SourcePositionSDKType {
    return o && (o.$typeUrl === SourcePosition.typeUrl || typeof o.location === "string" && typeof o.offset === "number" && typeof o.line === "number" && typeof o.column === "number");
  },
  isAmino(o: any): o is SourcePositionAmino {
    return o && (o.$typeUrl === SourcePosition.typeUrl || typeof o.location === "string" && typeof o.offset === "number" && typeof o.line === "number" && typeof o.column === "number");
  },
  encode(message: SourcePosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.location !== undefined) {
      writer.uint32(10).string(message.location);
    }
    if (message.offset !== undefined) {
      writer.uint32(16).int32(message.offset);
    }
    if (message.line !== undefined) {
      writer.uint32(24).int32(message.line);
    }
    if (message.column !== undefined) {
      writer.uint32(32).int32(message.column);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SourcePosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourcePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location = reader.string();
          break;
        case 2:
          message.offset = reader.int32();
          break;
        case 3:
          message.line = reader.int32();
          break;
        case 4:
          message.column = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourcePosition {
    const obj = createBaseSourcePosition();
    if (isSet(object.location)) obj.location = String(object.location);
    if (isSet(object.offset)) obj.offset = Number(object.offset);
    if (isSet(object.line)) obj.line = Number(object.line);
    if (isSet(object.column)) obj.column = Number(object.column);
    return obj;
  },
  toJSON(message: SourcePosition): JsonSafe<SourcePosition> {
    const obj: any = {};
    message.location !== undefined && (obj.location = message.location);
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.line !== undefined && (obj.line = Math.round(message.line));
    message.column !== undefined && (obj.column = Math.round(message.column));
    return obj;
  },
  fromPartial(object: DeepPartial<SourcePosition>): SourcePosition {
    const message = createBaseSourcePosition();
    message.location = object.location ?? "";
    message.offset = object.offset ?? 0;
    message.line = object.line ?? 0;
    message.column = object.column ?? 0;
    return message;
  },
  fromSDK(object: SourcePositionSDKType): SourcePosition {
    return {
      location: object?.location,
      offset: object?.offset,
      line: object?.line,
      column: object?.column
    };
  },
  fromSDKJSON(object: any): SourcePositionSDKType {
    return {
      location: isSet(object.location) ? String(object.location) : "",
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      line: isSet(object.line) ? Number(object.line) : 0,
      column: isSet(object.column) ? Number(object.column) : 0
    };
  },
  toSDK(message: SourcePosition): SourcePositionSDKType {
    const obj: any = {};
    obj.location = message.location;
    obj.offset = message.offset;
    obj.line = message.line;
    obj.column = message.column;
    return obj;
  },
  fromAmino(object: SourcePositionAmino): SourcePosition {
    const message = createBaseSourcePosition();
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    }
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = object.offset;
    }
    if (object.line !== undefined && object.line !== null) {
      message.line = object.line;
    }
    if (object.column !== undefined && object.column !== null) {
      message.column = object.column;
    }
    return message;
  },
  toAmino(message: SourcePosition): SourcePositionAmino {
    const obj: any = {};
    obj.location = message.location === "" ? undefined : message.location;
    obj.offset = message.offset === 0 ? undefined : message.offset;
    obj.line = message.line === 0 ? undefined : message.line;
    obj.column = message.column === 0 ? undefined : message.column;
    return obj;
  },
  fromAminoMsg(object: SourcePositionAminoMsg): SourcePosition {
    return SourcePosition.fromAmino(object.value);
  },
  fromProtoMsg(message: SourcePositionProtoMsg): SourcePosition {
    return SourcePosition.decode(message.value);
  },
  toProto(message: SourcePosition): Uint8Array {
    return SourcePosition.encode(message).finish();
  },
  toProtoMsg(message: SourcePosition): SourcePositionProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.SourcePosition",
      value: SourcePosition.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};