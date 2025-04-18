import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../protobuf/any";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial } from "../../helpers";
export const protobufPackage = "google.api";
/** Source information used to create a Service Config */
export interface SourceInfo {
  /** All files used during config generation. */
  sourceFiles: Any[];
}
export interface SourceInfoProtoMsg {
  typeUrl: "/google.api.SourceInfo";
  value: Uint8Array;
}
/** Source information used to create a Service Config */
export interface SourceInfoAmino {
  /** All files used during config generation. */
  source_files?: AnyAmino[];
}
export interface SourceInfoAminoMsg {
  type: "/google.api.SourceInfo";
  value: SourceInfoAmino;
}
/** Source information used to create a Service Config */
export interface SourceInfoSDKType {
  source_files: AnySDKType[];
}
function createBaseSourceInfo(): SourceInfo {
  return {
    sourceFiles: []
  };
}
export const SourceInfo = {
  typeUrl: "/google.api.SourceInfo",
  is(o: any): o is SourceInfo {
    return o && (o.$typeUrl === SourceInfo.typeUrl || Array.isArray(o.sourceFiles) && (!o.sourceFiles.length || Any.is(o.sourceFiles[0])));
  },
  isSDK(o: any): o is SourceInfoSDKType {
    return o && (o.$typeUrl === SourceInfo.typeUrl || Array.isArray(o.source_files) && (!o.source_files.length || Any.isSDK(o.source_files[0])));
  },
  isAmino(o: any): o is SourceInfoAmino {
    return o && (o.$typeUrl === SourceInfo.typeUrl || Array.isArray(o.source_files) && (!o.source_files.length || Any.isAmino(o.source_files[0])));
  },
  encode(message: SourceInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sourceFiles) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SourceInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceFiles.push(Any.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.sourceFiles)) obj.sourceFiles = object.sourceFiles.map((e: any) => Any.fromJSON(e));
    return obj;
  },
  toJSON(message: SourceInfo): JsonSafe<SourceInfo> {
    const obj: any = {};
    if (message.sourceFiles) {
      obj.sourceFiles = message.sourceFiles.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.sourceFiles = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SourceInfo>): SourceInfo {
    const message = createBaseSourceInfo();
    message.sourceFiles = object.sourceFiles?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: SourceInfoSDKType): SourceInfo {
    return {
      sourceFiles: Array.isArray(object?.source_files) ? object.source_files.map((e: any) => Any.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): SourceInfoSDKType {
    return {
      source_files: Array.isArray(object?.source_files) ? object.source_files.map((e: any) => Any.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: SourceInfo): SourceInfoSDKType {
    const obj: any = {};
    if (message.sourceFiles) {
      obj.source_files = message.sourceFiles.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.source_files = [];
    }
    return obj;
  },
  fromAmino(object: SourceInfoAmino): SourceInfo {
    const message = createBaseSourceInfo();
    message.sourceFiles = object.source_files?.map(e => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SourceInfo): SourceInfoAmino {
    const obj: any = {};
    if (message.sourceFiles) {
      obj.source_files = message.sourceFiles.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.source_files = message.sourceFiles;
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
      typeUrl: "/google.api.SourceInfo",
      value: SourceInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};