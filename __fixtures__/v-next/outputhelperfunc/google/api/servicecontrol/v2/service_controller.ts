import { AttributeContext, AttributeContextAmino, AttributeContextSDKType } from "../../../rpc/context/attribute_context";
import { Status, StatusAmino, StatusSDKType } from "../../../rpc/status";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { isSet, DeepPartial, isObject } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "google.api.servicecontrol.v2";
/** Request message for the Check method. */
export interface CheckRequest {
  /**
   * The service name as specified in its service configuration. For example,
   * `"pubsub.googleapis.com"`.
   * 
   * See
   * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
   * for the definition of a service name.
   */
  serviceName: string;
  /**
   * Specifies the version of the service configuration that should be used to
   * process the request. Must not be empty. Set this field to 'latest' to
   * specify using the latest configuration.
   */
  serviceConfigId: string;
  /** Describes attributes about the operation being executed by the service. */
  attributes?: AttributeContext;
  /** Describes the resources and the policies applied to each resource. */
  resources: ResourceInfo[];
  /** Optional. Contains a comma-separated list of flags. */
  flags: string;
}
export interface CheckRequestProtoMsg {
  typeUrl: "/google.api.servicecontrol.v2.CheckRequest";
  value: Uint8Array;
}
/** Request message for the Check method. */
export interface CheckRequestAmino {
  /**
   * The service name as specified in its service configuration. For example,
   * `"pubsub.googleapis.com"`.
   * 
   * See
   * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
   * for the definition of a service name.
   */
  service_name?: string;
  /**
   * Specifies the version of the service configuration that should be used to
   * process the request. Must not be empty. Set this field to 'latest' to
   * specify using the latest configuration.
   */
  service_config_id?: string;
  /** Describes attributes about the operation being executed by the service. */
  attributes?: AttributeContextAmino;
  /** Describes the resources and the policies applied to each resource. */
  resources?: ResourceInfoAmino[];
  /** Optional. Contains a comma-separated list of flags. */
  flags?: string;
}
export interface CheckRequestAminoMsg {
  type: "/google.api.servicecontrol.v2.CheckRequest";
  value: CheckRequestAmino;
}
/** Request message for the Check method. */
export interface CheckRequestSDKType {
  service_name: string;
  service_config_id: string;
  attributes?: AttributeContextSDKType;
  resources: ResourceInfoSDKType[];
  flags: string;
}
/** Describes a resource referenced in the request. */
export interface ResourceInfo {
  /** The name of the resource referenced in the request. */
  name: string;
  /** The resource type in the format of "{service}/{kind}". */
  type: string;
  /**
   * The resource permission needed for this request.
   * The format must be "{service}/{plural}.{verb}".
   */
  permission: string;
  /**
   * Optional. The identifier of the container of this resource. For Google
   * Cloud APIs, the resource container must be one of the following formats:
   *     - `projects/<project-id or project-number>`
   *     - `folders/<folder-id>`
   *     - `organizations/<organization-id>`
   * For the policy enforcement on the container level (VPCSC and Location
   * Policy check), this field takes precedence on the container extracted from
   * name when presents.
   */
  container: string;
  /**
   * Optional. The location of the resource. The value must be a valid zone,
   * region or multiregion. For example: "europe-west4" or
   * "northamerica-northeast1-a"
   */
  location: string;
}
export interface ResourceInfoProtoMsg {
  typeUrl: "/google.api.servicecontrol.v2.ResourceInfo";
  value: Uint8Array;
}
/** Describes a resource referenced in the request. */
export interface ResourceInfoAmino {
  /** The name of the resource referenced in the request. */
  name?: string;
  /** The resource type in the format of "{service}/{kind}". */
  type?: string;
  /**
   * The resource permission needed for this request.
   * The format must be "{service}/{plural}.{verb}".
   */
  permission?: string;
  /**
   * Optional. The identifier of the container of this resource. For Google
   * Cloud APIs, the resource container must be one of the following formats:
   *     - `projects/<project-id or project-number>`
   *     - `folders/<folder-id>`
   *     - `organizations/<organization-id>`
   * For the policy enforcement on the container level (VPCSC and Location
   * Policy check), this field takes precedence on the container extracted from
   * name when presents.
   */
  container?: string;
  /**
   * Optional. The location of the resource. The value must be a valid zone,
   * region or multiregion. For example: "europe-west4" or
   * "northamerica-northeast1-a"
   */
  location?: string;
}
export interface ResourceInfoAminoMsg {
  type: "/google.api.servicecontrol.v2.ResourceInfo";
  value: ResourceInfoAmino;
}
/** Describes a resource referenced in the request. */
export interface ResourceInfoSDKType {
  name: string;
  type: string;
  permission: string;
  container: string;
  location: string;
}
export interface CheckResponse_HeadersEntry {
  key: string;
  value: string;
}
export interface CheckResponse_HeadersEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface CheckResponse_HeadersEntryAmino {
  key?: string;
  value?: string;
}
export interface CheckResponse_HeadersEntryAminoMsg {
  type: string;
  value: CheckResponse_HeadersEntryAmino;
}
export interface CheckResponse_HeadersEntrySDKType {
  key: string;
  value: string;
}
/** Response message for the Check method. */
export interface CheckResponse {
  /**
   * Operation is allowed when this field is not set. Any non-'OK' status
   * indicates a denial; [google.rpc.Status.details][google.rpc.Status.details]
   * would contain additional details about the denial.
   */
  status?: Status;
  /** Returns a set of request contexts generated from the `CheckRequest`. */
  headers: {
    [key: string]: string;
  };
}
export interface CheckResponseProtoMsg {
  typeUrl: "/google.api.servicecontrol.v2.CheckResponse";
  value: Uint8Array;
}
/** Response message for the Check method. */
export interface CheckResponseAmino {
  /**
   * Operation is allowed when this field is not set. Any non-'OK' status
   * indicates a denial; [google.rpc.Status.details][google.rpc.Status.details]
   * would contain additional details about the denial.
   */
  status?: StatusAmino;
  /** Returns a set of request contexts generated from the `CheckRequest`. */
  headers?: {
    [key: string]: string;
  };
}
export interface CheckResponseAminoMsg {
  type: "/google.api.servicecontrol.v2.CheckResponse";
  value: CheckResponseAmino;
}
/** Response message for the Check method. */
export interface CheckResponseSDKType {
  status?: StatusSDKType;
  headers: {
    [key: string]: string;
  };
}
/** Request message for the Report method. */
export interface ReportRequest {
  /**
   * The service name as specified in its service configuration. For example,
   * `"pubsub.googleapis.com"`.
   * 
   * See
   * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
   * for the definition of a service name.
   */
  serviceName: string;
  /**
   * Specifies the version of the service configuration that should be used to
   * process the request. Must not be empty. Set this field to 'latest' to
   * specify using the latest configuration.
   */
  serviceConfigId: string;
  /**
   * Describes the list of operations to be reported. Each operation is
   * represented as an AttributeContext, and contains all attributes around an
   * API access.
   */
  operations: AttributeContext[];
}
export interface ReportRequestProtoMsg {
  typeUrl: "/google.api.servicecontrol.v2.ReportRequest";
  value: Uint8Array;
}
/** Request message for the Report method. */
export interface ReportRequestAmino {
  /**
   * The service name as specified in its service configuration. For example,
   * `"pubsub.googleapis.com"`.
   * 
   * See
   * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
   * for the definition of a service name.
   */
  service_name?: string;
  /**
   * Specifies the version of the service configuration that should be used to
   * process the request. Must not be empty. Set this field to 'latest' to
   * specify using the latest configuration.
   */
  service_config_id?: string;
  /**
   * Describes the list of operations to be reported. Each operation is
   * represented as an AttributeContext, and contains all attributes around an
   * API access.
   */
  operations?: AttributeContextAmino[];
}
export interface ReportRequestAminoMsg {
  type: "/google.api.servicecontrol.v2.ReportRequest";
  value: ReportRequestAmino;
}
/** Request message for the Report method. */
export interface ReportRequestSDKType {
  service_name: string;
  service_config_id: string;
  operations: AttributeContextSDKType[];
}
/**
 * Response message for the Report method.
 * If the request contains any invalid data, the server returns an RPC error.
 */
export interface ReportResponse {}
export interface ReportResponseProtoMsg {
  typeUrl: "/google.api.servicecontrol.v2.ReportResponse";
  value: Uint8Array;
}
/**
 * Response message for the Report method.
 * If the request contains any invalid data, the server returns an RPC error.
 */
export interface ReportResponseAmino {}
export interface ReportResponseAminoMsg {
  type: "/google.api.servicecontrol.v2.ReportResponse";
  value: ReportResponseAmino;
}
/**
 * Response message for the Report method.
 * If the request contains any invalid data, the server returns an RPC error.
 */
export interface ReportResponseSDKType {}
function createBaseCheckRequest(): CheckRequest {
  return {
    serviceName: "",
    serviceConfigId: "",
    attributes: undefined,
    resources: [],
    flags: ""
  };
}
export const CheckRequest = {
  typeUrl: "/google.api.servicecontrol.v2.CheckRequest",
  is(o: any): o is CheckRequest {
    return o && (o.$typeUrl === CheckRequest.typeUrl || typeof o.serviceName === "string" && typeof o.serviceConfigId === "string" && Array.isArray(o.resources) && (!o.resources.length || ResourceInfo.is(o.resources[0])) && typeof o.flags === "string");
  },
  isSDK(o: any): o is CheckRequestSDKType {
    return o && (o.$typeUrl === CheckRequest.typeUrl || typeof o.service_name === "string" && typeof o.service_config_id === "string" && Array.isArray(o.resources) && (!o.resources.length || ResourceInfo.isSDK(o.resources[0])) && typeof o.flags === "string");
  },
  isAmino(o: any): o is CheckRequestAmino {
    return o && (o.$typeUrl === CheckRequest.typeUrl || typeof o.service_name === "string" && typeof o.service_config_id === "string" && Array.isArray(o.resources) && (!o.resources.length || ResourceInfo.isAmino(o.resources[0])) && typeof o.flags === "string");
  },
  encode(message: CheckRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== undefined) {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.serviceConfigId !== undefined) {
      writer.uint32(18).string(message.serviceConfigId);
    }
    if (message.attributes !== undefined) {
      AttributeContext.encode(message.attributes, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.resources) {
      ResourceInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.flags !== undefined) {
      writer.uint32(42).string(message.flags);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CheckRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.serviceConfigId = reader.string();
          break;
        case 3:
          message.attributes = AttributeContext.decode(reader, reader.uint32());
          break;
        case 4:
          message.resources.push(ResourceInfo.decode(reader, reader.uint32()));
          break;
        case 5:
          message.flags = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CheckRequest {
    const obj = createBaseCheckRequest();
    if (isSet(object.serviceName)) obj.serviceName = String(object.serviceName);
    if (isSet(object.serviceConfigId)) obj.serviceConfigId = String(object.serviceConfigId);
    if (isSet(object.attributes)) obj.attributes = AttributeContext.fromJSON(object.attributes);
    if (Array.isArray(object?.resources)) obj.resources = object.resources.map((e: any) => ResourceInfo.fromJSON(e));
    if (isSet(object.flags)) obj.flags = String(object.flags);
    return obj;
  },
  toJSON(message: CheckRequest): JsonSafe<CheckRequest> {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.serviceConfigId !== undefined && (obj.serviceConfigId = message.serviceConfigId);
    message.attributes !== undefined && (obj.attributes = message.attributes ? AttributeContext.toJSON(message.attributes) : undefined);
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? ResourceInfo.toJSON(e) : undefined);
    } else {
      obj.resources = [];
    }
    message.flags !== undefined && (obj.flags = message.flags);
    return obj;
  },
  fromPartial(object: DeepPartial<CheckRequest>): CheckRequest {
    const message = createBaseCheckRequest();
    message.serviceName = object.serviceName ?? "";
    message.serviceConfigId = object.serviceConfigId ?? "";
    if (object.attributes !== undefined && object.attributes !== null) {
      message.attributes = AttributeContext.fromPartial(object.attributes);
    }
    message.resources = object.resources?.map(e => ResourceInfo.fromPartial(e)) || [];
    message.flags = object.flags ?? "";
    return message;
  },
  fromSDK(object: CheckRequestSDKType): CheckRequest {
    return {
      serviceName: object?.service_name,
      serviceConfigId: object?.service_config_id,
      attributes: object.attributes ? AttributeContext.fromSDK(object.attributes) : undefined,
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => ResourceInfo.fromSDK(e)) : [],
      flags: object?.flags
    };
  },
  fromSDKJSON(object: any): CheckRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      service_config_id: isSet(object.service_config_id) ? String(object.service_config_id) : "",
      attributes: isSet(object.attributes) ? AttributeContext.fromSDKJSON(object.attributes) : undefined,
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => ResourceInfo.fromSDKJSON(e)) : [],
      flags: isSet(object.flags) ? String(object.flags) : ""
    };
  },
  toSDK(message: CheckRequest): CheckRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    obj.service_config_id = message.serviceConfigId;
    message.attributes !== undefined && (obj.attributes = message.attributes ? AttributeContext.toSDK(message.attributes) : undefined);
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? ResourceInfo.toSDK(e) : undefined);
    } else {
      obj.resources = [];
    }
    obj.flags = message.flags;
    return obj;
  },
  fromAmino(object: CheckRequestAmino): CheckRequest {
    const message = createBaseCheckRequest();
    if (object.service_name !== undefined && object.service_name !== null) {
      message.serviceName = object.service_name;
    }
    if (object.service_config_id !== undefined && object.service_config_id !== null) {
      message.serviceConfigId = object.service_config_id;
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      message.attributes = AttributeContext.fromAmino(object.attributes);
    }
    message.resources = object.resources?.map(e => ResourceInfo.fromAmino(e)) || [];
    if (object.flags !== undefined && object.flags !== null) {
      message.flags = object.flags;
    }
    return message;
  },
  toAmino(message: CheckRequest): CheckRequestAmino {
    const obj: any = {};
    obj.service_name = message.serviceName === "" ? undefined : message.serviceName;
    obj.service_config_id = message.serviceConfigId === "" ? undefined : message.serviceConfigId;
    obj.attributes = message.attributes ? AttributeContext.toAmino(message.attributes) : undefined;
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? ResourceInfo.toAmino(e) : undefined);
    } else {
      obj.resources = message.resources;
    }
    obj.flags = message.flags === "" ? undefined : message.flags;
    return obj;
  },
  fromAminoMsg(object: CheckRequestAminoMsg): CheckRequest {
    return CheckRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CheckRequestProtoMsg): CheckRequest {
    return CheckRequest.decode(message.value);
  },
  toProto(message: CheckRequest): Uint8Array {
    return CheckRequest.encode(message).finish();
  },
  toProtoMsg(message: CheckRequest): CheckRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v2.CheckRequest",
      value: CheckRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    AttributeContext.registerTypeUrl();
    ResourceInfo.registerTypeUrl();
  }
};
function createBaseResourceInfo(): ResourceInfo {
  return {
    name: "",
    type: "",
    permission: "",
    container: "",
    location: ""
  };
}
export const ResourceInfo = {
  typeUrl: "/google.api.servicecontrol.v2.ResourceInfo",
  is(o: any): o is ResourceInfo {
    return o && (o.$typeUrl === ResourceInfo.typeUrl || typeof o.name === "string" && typeof o.type === "string" && typeof o.permission === "string" && typeof o.container === "string" && typeof o.location === "string");
  },
  isSDK(o: any): o is ResourceInfoSDKType {
    return o && (o.$typeUrl === ResourceInfo.typeUrl || typeof o.name === "string" && typeof o.type === "string" && typeof o.permission === "string" && typeof o.container === "string" && typeof o.location === "string");
  },
  isAmino(o: any): o is ResourceInfoAmino {
    return o && (o.$typeUrl === ResourceInfo.typeUrl || typeof o.name === "string" && typeof o.type === "string" && typeof o.permission === "string" && typeof o.container === "string" && typeof o.location === "string");
  },
  encode(message: ResourceInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== undefined) {
      writer.uint32(18).string(message.type);
    }
    if (message.permission !== undefined) {
      writer.uint32(26).string(message.permission);
    }
    if (message.container !== undefined) {
      writer.uint32(34).string(message.container);
    }
    if (message.location !== undefined) {
      writer.uint32(42).string(message.location);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResourceInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.permission = reader.string();
          break;
        case 4:
          message.container = reader.string();
          break;
        case 5:
          message.location = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResourceInfo {
    const obj = createBaseResourceInfo();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.type)) obj.type = String(object.type);
    if (isSet(object.permission)) obj.permission = String(object.permission);
    if (isSet(object.container)) obj.container = String(object.container);
    if (isSet(object.location)) obj.location = String(object.location);
    return obj;
  },
  toJSON(message: ResourceInfo): JsonSafe<ResourceInfo> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type);
    message.permission !== undefined && (obj.permission = message.permission);
    message.container !== undefined && (obj.container = message.container);
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },
  fromPartial(object: DeepPartial<ResourceInfo>): ResourceInfo {
    const message = createBaseResourceInfo();
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.permission = object.permission ?? "";
    message.container = object.container ?? "";
    message.location = object.location ?? "";
    return message;
  },
  fromSDK(object: ResourceInfoSDKType): ResourceInfo {
    return {
      name: object?.name,
      type: object?.type,
      permission: object?.permission,
      container: object?.container,
      location: object?.location
    };
  },
  fromSDKJSON(object: any): ResourceInfoSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? String(object.type) : "",
      permission: isSet(object.permission) ? String(object.permission) : "",
      container: isSet(object.container) ? String(object.container) : "",
      location: isSet(object.location) ? String(object.location) : ""
    };
  },
  toSDK(message: ResourceInfo): ResourceInfoSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.type = message.type;
    obj.permission = message.permission;
    obj.container = message.container;
    obj.location = message.location;
    return obj;
  },
  fromAmino(object: ResourceInfoAmino): ResourceInfo {
    const message = createBaseResourceInfo();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.permission !== undefined && object.permission !== null) {
      message.permission = object.permission;
    }
    if (object.container !== undefined && object.container !== null) {
      message.container = object.container;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    }
    return message;
  },
  toAmino(message: ResourceInfo): ResourceInfoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.type = message.type === "" ? undefined : message.type;
    obj.permission = message.permission === "" ? undefined : message.permission;
    obj.container = message.container === "" ? undefined : message.container;
    obj.location = message.location === "" ? undefined : message.location;
    return obj;
  },
  fromAminoMsg(object: ResourceInfoAminoMsg): ResourceInfo {
    return ResourceInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceInfoProtoMsg): ResourceInfo {
    return ResourceInfo.decode(message.value);
  },
  toProto(message: ResourceInfo): Uint8Array {
    return ResourceInfo.encode(message).finish();
  },
  toProtoMsg(message: ResourceInfo): ResourceInfoProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v2.ResourceInfo",
      value: ResourceInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseCheckResponse_HeadersEntry(): CheckResponse_HeadersEntry {
  return {
    key: "",
    value: ""
  };
}
export const CheckResponse_HeadersEntry = {
  encode(message: CheckResponse_HeadersEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CheckResponse_HeadersEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResponse_HeadersEntry();
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
  fromJSON(object: any): CheckResponse_HeadersEntry {
    const obj = createBaseCheckResponse_HeadersEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  toJSON(message: CheckResponse_HeadersEntry): JsonSafe<CheckResponse_HeadersEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<CheckResponse_HeadersEntry>): CheckResponse_HeadersEntry {
    const message = createBaseCheckResponse_HeadersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: CheckResponse_HeadersEntrySDKType): CheckResponse_HeadersEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  fromSDKJSON(object: any): CheckResponse_HeadersEntrySDKType {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toSDK(message: CheckResponse_HeadersEntry): CheckResponse_HeadersEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: CheckResponse_HeadersEntryAmino): CheckResponse_HeadersEntry {
    const message = createBaseCheckResponse_HeadersEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: CheckResponse_HeadersEntry): CheckResponse_HeadersEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: CheckResponse_HeadersEntryAminoMsg): CheckResponse_HeadersEntry {
    return CheckResponse_HeadersEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: CheckResponse_HeadersEntryProtoMsg): CheckResponse_HeadersEntry {
    return CheckResponse_HeadersEntry.decode(message.value);
  },
  toProto(message: CheckResponse_HeadersEntry): Uint8Array {
    return CheckResponse_HeadersEntry.encode(message).finish();
  },
  registerTypeUrl() {}
};
function createBaseCheckResponse(): CheckResponse {
  return {
    status: undefined,
    headers: {}
  };
}
export const CheckResponse = {
  typeUrl: "/google.api.servicecontrol.v2.CheckResponse",
  is(o: any): o is CheckResponse {
    return o && (o.$typeUrl === CheckResponse.typeUrl || isSet(o.headers));
  },
  isSDK(o: any): o is CheckResponseSDKType {
    return o && (o.$typeUrl === CheckResponse.typeUrl || isSet(o.headers));
  },
  isAmino(o: any): o is CheckResponseAmino {
    return o && (o.$typeUrl === CheckResponse.typeUrl || isSet(o.headers));
  },
  encode(message: CheckResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.headers).forEach(([key, value]) => {
      CheckResponse_HeadersEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CheckResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = Status.decode(reader, reader.uint32());
          break;
        case 2:
          const entry2 = CheckResponse_HeadersEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.headers[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CheckResponse {
    const obj = createBaseCheckResponse();
    if (isSet(object.status)) obj.status = Status.fromJSON(object.status);
    if (isObject(object.headers)) obj.headers = Object.entries(object.headers).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return obj;
  },
  toJSON(message: CheckResponse): JsonSafe<CheckResponse> {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    obj.headers = {};
    if (message.headers) {
      Object.entries(message.headers).forEach(([k, v]) => {
        obj.headers[k] = v;
      });
    }
    return obj;
  },
  fromPartial(object: DeepPartial<CheckResponse>): CheckResponse {
    const message = createBaseCheckResponse();
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromPartial(object.status);
    }
    message.headers = Object.entries(object.headers ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromSDK(object: CheckResponseSDKType): CheckResponse {
    return {
      status: object.status ? Status.fromSDK(object.status) : undefined,
      headers: isObject(object.headers) ? Object.entries(object.headers).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  fromSDKJSON(object: any): CheckResponseSDKType {
    return {
      status: isSet(object.status) ? Status.fromSDKJSON(object.status) : undefined,
      headers: isObject(object.headers) ? Object.entries(object.headers).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toSDK(message: CheckResponse): CheckResponseSDKType {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status ? Status.toSDK(message.status) : undefined);
    obj.headers = {};
    if (message.headers) {
      Object.entries(message.headers).forEach(([k, v]) => {
        obj.headers[k] = v;
      });
    }
    return obj;
  },
  fromAmino(object: CheckResponseAmino): CheckResponse {
    const message = createBaseCheckResponse();
    if (object.status !== undefined && object.status !== null) {
      message.status = Status.fromAmino(object.status);
    }
    message.headers = Object.entries(object.headers ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: CheckResponse): CheckResponseAmino {
    const obj: any = {};
    obj.status = message.status ? Status.toAmino(message.status) : undefined;
    obj.headers = {};
    if (message.headers) {
      Object.entries(message.headers).forEach(([k, v]) => {
        obj.headers[k] = v;
      });
    }
    return obj;
  },
  fromAminoMsg(object: CheckResponseAminoMsg): CheckResponse {
    return CheckResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: CheckResponseProtoMsg): CheckResponse {
    return CheckResponse.decode(message.value);
  },
  toProto(message: CheckResponse): Uint8Array {
    return CheckResponse.encode(message).finish();
  },
  toProtoMsg(message: CheckResponse): CheckResponseProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v2.CheckResponse",
      value: CheckResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Status.registerTypeUrl();
  }
};
function createBaseReportRequest(): ReportRequest {
  return {
    serviceName: "",
    serviceConfigId: "",
    operations: []
  };
}
export const ReportRequest = {
  typeUrl: "/google.api.servicecontrol.v2.ReportRequest",
  is(o: any): o is ReportRequest {
    return o && (o.$typeUrl === ReportRequest.typeUrl || typeof o.serviceName === "string" && typeof o.serviceConfigId === "string" && Array.isArray(o.operations) && (!o.operations.length || AttributeContext.is(o.operations[0])));
  },
  isSDK(o: any): o is ReportRequestSDKType {
    return o && (o.$typeUrl === ReportRequest.typeUrl || typeof o.service_name === "string" && typeof o.service_config_id === "string" && Array.isArray(o.operations) && (!o.operations.length || AttributeContext.isSDK(o.operations[0])));
  },
  isAmino(o: any): o is ReportRequestAmino {
    return o && (o.$typeUrl === ReportRequest.typeUrl || typeof o.service_name === "string" && typeof o.service_config_id === "string" && Array.isArray(o.operations) && (!o.operations.length || AttributeContext.isAmino(o.operations[0])));
  },
  encode(message: ReportRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== undefined) {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.serviceConfigId !== undefined) {
      writer.uint32(18).string(message.serviceConfigId);
    }
    for (const v of message.operations) {
      AttributeContext.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReportRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.serviceConfigId = reader.string();
          break;
        case 3:
          message.operations.push(AttributeContext.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReportRequest {
    const obj = createBaseReportRequest();
    if (isSet(object.serviceName)) obj.serviceName = String(object.serviceName);
    if (isSet(object.serviceConfigId)) obj.serviceConfigId = String(object.serviceConfigId);
    if (Array.isArray(object?.operations)) obj.operations = object.operations.map((e: any) => AttributeContext.fromJSON(e));
    return obj;
  },
  toJSON(message: ReportRequest): JsonSafe<ReportRequest> {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.serviceConfigId !== undefined && (obj.serviceConfigId = message.serviceConfigId);
    if (message.operations) {
      obj.operations = message.operations.map(e => e ? AttributeContext.toJSON(e) : undefined);
    } else {
      obj.operations = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ReportRequest>): ReportRequest {
    const message = createBaseReportRequest();
    message.serviceName = object.serviceName ?? "";
    message.serviceConfigId = object.serviceConfigId ?? "";
    message.operations = object.operations?.map(e => AttributeContext.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ReportRequestSDKType): ReportRequest {
    return {
      serviceName: object?.service_name,
      serviceConfigId: object?.service_config_id,
      operations: Array.isArray(object?.operations) ? object.operations.map((e: any) => AttributeContext.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): ReportRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      service_config_id: isSet(object.service_config_id) ? String(object.service_config_id) : "",
      operations: Array.isArray(object?.operations) ? object.operations.map((e: any) => AttributeContext.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: ReportRequest): ReportRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    obj.service_config_id = message.serviceConfigId;
    if (message.operations) {
      obj.operations = message.operations.map(e => e ? AttributeContext.toSDK(e) : undefined);
    } else {
      obj.operations = [];
    }
    return obj;
  },
  fromAmino(object: ReportRequestAmino): ReportRequest {
    const message = createBaseReportRequest();
    if (object.service_name !== undefined && object.service_name !== null) {
      message.serviceName = object.service_name;
    }
    if (object.service_config_id !== undefined && object.service_config_id !== null) {
      message.serviceConfigId = object.service_config_id;
    }
    message.operations = object.operations?.map(e => AttributeContext.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ReportRequest): ReportRequestAmino {
    const obj: any = {};
    obj.service_name = message.serviceName === "" ? undefined : message.serviceName;
    obj.service_config_id = message.serviceConfigId === "" ? undefined : message.serviceConfigId;
    if (message.operations) {
      obj.operations = message.operations.map(e => e ? AttributeContext.toAmino(e) : undefined);
    } else {
      obj.operations = message.operations;
    }
    return obj;
  },
  fromAminoMsg(object: ReportRequestAminoMsg): ReportRequest {
    return ReportRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ReportRequestProtoMsg): ReportRequest {
    return ReportRequest.decode(message.value);
  },
  toProto(message: ReportRequest): Uint8Array {
    return ReportRequest.encode(message).finish();
  },
  toProtoMsg(message: ReportRequest): ReportRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v2.ReportRequest",
      value: ReportRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    AttributeContext.registerTypeUrl();
  }
};
function createBaseReportResponse(): ReportResponse {
  return {};
}
export const ReportResponse = {
  typeUrl: "/google.api.servicecontrol.v2.ReportResponse",
  is(o: any): o is ReportResponse {
    return o && o.$typeUrl === ReportResponse.typeUrl;
  },
  isSDK(o: any): o is ReportResponseSDKType {
    return o && o.$typeUrl === ReportResponse.typeUrl;
  },
  isAmino(o: any): o is ReportResponseAmino {
    return o && o.$typeUrl === ReportResponse.typeUrl;
  },
  encode(_: ReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportResponse();
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
  fromJSON(_: any): ReportResponse {
    const obj = createBaseReportResponse();
    return obj;
  },
  toJSON(_: ReportResponse): JsonSafe<ReportResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<ReportResponse>): ReportResponse {
    const message = createBaseReportResponse();
    return message;
  },
  fromSDK(_: ReportResponseSDKType): ReportResponse {
    return {};
  },
  fromSDKJSON(_: any): ReportResponseSDKType {
    return {};
  },
  toSDK(_: ReportResponse): ReportResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ReportResponseAmino): ReportResponse {
    const message = createBaseReportResponse();
    return message;
  },
  toAmino(_: ReportResponse): ReportResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ReportResponseAminoMsg): ReportResponse {
    return ReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ReportResponseProtoMsg): ReportResponse {
    return ReportResponse.decode(message.value);
  },
  toProto(message: ReportResponse): Uint8Array {
    return ReportResponse.encode(message).finish();
  },
  toProtoMsg(message: ReportResponse): ReportResponseProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v2.ReportResponse",
      value: ReportResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};