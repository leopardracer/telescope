import { LabelDescriptor, LabelDescriptorAmino, LabelDescriptorSDKType } from "./label";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "google.api";
/**
 * A description of a log type. Example in YAML format:
 * 
 *     - name: library.googleapis.com/activity_history
 *       description: The history of borrowing and returning library items.
 *       display_name: Activity
 *       labels:
 *       - key: /customer_id
 *         description: Identifier of a library customer
 */
export interface LogDescriptor {
  /**
   * The name of the log. It must be less than 512 characters long and can
   * include the following characters: upper- and lower-case alphanumeric
   * characters [A-Za-z0-9], and punctuation characters including
   * slash, underscore, hyphen, period [/_-.].
   */
  name: string;
  /**
   * The set of labels that are available to describe a specific log entry.
   * Runtime requests that contain labels not specified here are
   * considered invalid.
   */
  labels: LabelDescriptor[];
  /**
   * A human-readable description of this log. This information appears in
   * the documentation and can contain details.
   */
  description: string;
  /**
   * The human-readable name for this log. This information appears on
   * the user interface and should be concise.
   */
  displayName: string;
}
export interface LogDescriptorProtoMsg {
  typeUrl: "/google.api.LogDescriptor";
  value: Uint8Array;
}
/**
 * A description of a log type. Example in YAML format:
 * 
 *     - name: library.googleapis.com/activity_history
 *       description: The history of borrowing and returning library items.
 *       display_name: Activity
 *       labels:
 *       - key: /customer_id
 *         description: Identifier of a library customer
 */
export interface LogDescriptorAmino {
  /**
   * The name of the log. It must be less than 512 characters long and can
   * include the following characters: upper- and lower-case alphanumeric
   * characters [A-Za-z0-9], and punctuation characters including
   * slash, underscore, hyphen, period [/_-.].
   */
  name?: string;
  /**
   * The set of labels that are available to describe a specific log entry.
   * Runtime requests that contain labels not specified here are
   * considered invalid.
   */
  labels?: LabelDescriptorAmino[];
  /**
   * A human-readable description of this log. This information appears in
   * the documentation and can contain details.
   */
  description?: string;
  /**
   * The human-readable name for this log. This information appears on
   * the user interface and should be concise.
   */
  display_name?: string;
}
export interface LogDescriptorAminoMsg {
  type: "/google.api.LogDescriptor";
  value: LogDescriptorAmino;
}
/**
 * A description of a log type. Example in YAML format:
 * 
 *     - name: library.googleapis.com/activity_history
 *       description: The history of borrowing and returning library items.
 *       display_name: Activity
 *       labels:
 *       - key: /customer_id
 *         description: Identifier of a library customer
 */
export interface LogDescriptorSDKType {
  name: string;
  labels: LabelDescriptorSDKType[];
  description: string;
  display_name: string;
}
function createBaseLogDescriptor(): LogDescriptor {
  return {
    name: "",
    labels: [],
    description: "",
    displayName: ""
  };
}
export const LogDescriptor = {
  typeUrl: "/google.api.LogDescriptor",
  is(o: any): o is LogDescriptor {
    return o && (o.$typeUrl === LogDescriptor.typeUrl || typeof o.name === "string" && Array.isArray(o.labels) && (!o.labels.length || LabelDescriptor.is(o.labels[0])) && typeof o.description === "string" && typeof o.displayName === "string");
  },
  isSDK(o: any): o is LogDescriptorSDKType {
    return o && (o.$typeUrl === LogDescriptor.typeUrl || typeof o.name === "string" && Array.isArray(o.labels) && (!o.labels.length || LabelDescriptor.isSDK(o.labels[0])) && typeof o.description === "string" && typeof o.display_name === "string");
  },
  isAmino(o: any): o is LogDescriptorAmino {
    return o && (o.$typeUrl === LogDescriptor.typeUrl || typeof o.name === "string" && Array.isArray(o.labels) && (!o.labels.length || LabelDescriptor.isAmino(o.labels[0])) && typeof o.description === "string" && typeof o.display_name === "string");
  },
  encode(message: LogDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.labels) {
      LabelDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.displayName !== undefined) {
      writer.uint32(34).string(message.displayName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LogDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.labels.push(LabelDescriptor.decode(reader, reader.uint32()));
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.displayName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LogDescriptor {
    const obj = createBaseLogDescriptor();
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.labels)) obj.labels = object.labels.map((e: any) => LabelDescriptor.fromJSON(e));
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.displayName)) obj.displayName = String(object.displayName);
    return obj;
  },
  toJSON(message: LogDescriptor): JsonSafe<LogDescriptor> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.labels) {
      obj.labels = message.labels.map(e => e ? LabelDescriptor.toJSON(e) : undefined);
    } else {
      obj.labels = [];
    }
    message.description !== undefined && (obj.description = message.description);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    return obj;
  },
  fromPartial(object: DeepPartial<LogDescriptor>): LogDescriptor {
    const message = createBaseLogDescriptor();
    message.name = object.name ?? "";
    message.labels = object.labels?.map(e => LabelDescriptor.fromPartial(e)) || [];
    message.description = object.description ?? "";
    message.displayName = object.displayName ?? "";
    return message;
  },
  fromSDK(object: LogDescriptorSDKType): LogDescriptor {
    return {
      name: object?.name,
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => LabelDescriptor.fromSDK(e)) : [],
      description: object?.description,
      displayName: object?.display_name
    };
  },
  fromSDKJSON(object: any): LogDescriptorSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => LabelDescriptor.fromSDKJSON(e)) : [],
      description: isSet(object.description) ? String(object.description) : "",
      display_name: isSet(object.display_name) ? String(object.display_name) : ""
    };
  },
  toSDK(message: LogDescriptor): LogDescriptorSDKType {
    const obj: any = {};
    obj.name = message.name;
    if (message.labels) {
      obj.labels = message.labels.map(e => e ? LabelDescriptor.toSDK(e) : undefined);
    } else {
      obj.labels = [];
    }
    obj.description = message.description;
    obj.display_name = message.displayName;
    return obj;
  },
  fromAmino(object: LogDescriptorAmino): LogDescriptor {
    const message = createBaseLogDescriptor();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.labels = object.labels?.map(e => LabelDescriptor.fromAmino(e)) || [];
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.display_name !== undefined && object.display_name !== null) {
      message.displayName = object.display_name;
    }
    return message;
  },
  toAmino(message: LogDescriptor): LogDescriptorAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    if (message.labels) {
      obj.labels = message.labels.map(e => e ? LabelDescriptor.toAmino(e) : undefined);
    } else {
      obj.labels = message.labels;
    }
    obj.description = message.description === "" ? undefined : message.description;
    obj.display_name = message.displayName === "" ? undefined : message.displayName;
    return obj;
  },
  fromAminoMsg(object: LogDescriptorAminoMsg): LogDescriptor {
    return LogDescriptor.fromAmino(object.value);
  },
  fromProtoMsg(message: LogDescriptorProtoMsg): LogDescriptor {
    return LogDescriptor.decode(message.value);
  },
  toProto(message: LogDescriptor): Uint8Array {
    return LogDescriptor.encode(message).finish();
  },
  toProtoMsg(message: LogDescriptor): LogDescriptorProtoMsg {
    return {
      typeUrl: "/google.api.LogDescriptor",
      value: LogDescriptor.encode(message).finish()
    };
  },
  registerTypeUrl() {
    LabelDescriptor.registerTypeUrl();
  }
};