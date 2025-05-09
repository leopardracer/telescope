import { Api, ApiAmino, ApiSDKType } from "../../../protobuf/api";
import { Documentation, DocumentationAmino, DocumentationSDKType } from "../../documentation";
import { Quota, QuotaAmino, QuotaSDKType } from "../../quota";
import { Authentication, AuthenticationAmino, AuthenticationSDKType } from "../../auth";
import { Usage, UsageAmino, UsageSDKType } from "../../usage";
import { Endpoint, EndpointAmino, EndpointSDKType } from "../../endpoint";
import { MonitoredResourceDescriptor, MonitoredResourceDescriptorAmino, MonitoredResourceDescriptorSDKType } from "../../monitored_resource";
import { Monitoring, MonitoringAmino, MonitoringSDKType } from "../../monitoring";
import { isSet, DeepPartial } from "../../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "google.api.serviceusage.v1";
/** Whether or not a service has been enabled for use by a consumer. */
export enum State {
  /**
   * STATE_UNSPECIFIED - The default value, which indicates that the enabled state of the service
   * is unspecified or not meaningful. Currently, all consumers other than
   * projects (such as folders and organizations) are always in this state.
   */
  STATE_UNSPECIFIED = 0,
  /**
   * DISABLED - The service cannot be used by this consumer. It has either been explicitly
   * disabled, or has never been enabled.
   */
  DISABLED = 1,
  /** ENABLED - The service has been explicitly enabled for use by this consumer. */
  ENABLED = 2,
  UNRECOGNIZED = -1,
}
export const StateSDKType = State;
export const StateAmino = State;
export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return State.STATE_UNSPECIFIED;
    case 1:
    case "DISABLED":
      return State.DISABLED;
    case 2:
    case "ENABLED":
      return State.ENABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}
export function stateToJSON(object: State): string {
  switch (object) {
    case State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case State.DISABLED:
      return "DISABLED";
    case State.ENABLED:
      return "ENABLED";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** A service that is available for use by the consumer. */
export interface Service {
  /**
   * The resource name of the consumer and service.
   * 
   * A valid name would be:
   * - projects/123/services/serviceusage.googleapis.com
   */
  name: string;
  /**
   * The resource name of the consumer.
   * 
   * A valid name would be:
   * - projects/123
   */
  parent: string;
  /**
   * The service configuration of the available service.
   * Some fields may be filtered out of the configuration in responses to
   * the `ListServices` method. These fields are present only in responses to
   * the `GetService` method.
   */
  config?: ServiceConfig;
  /** Whether or not the service has been enabled for use by the consumer. */
  state: State;
}
export interface ServiceProtoMsg {
  typeUrl: "/google.api.serviceusage.v1.Service";
  value: Uint8Array;
}
/** A service that is available for use by the consumer. */
export interface ServiceAmino {
  /**
   * The resource name of the consumer and service.
   * 
   * A valid name would be:
   * - projects/123/services/serviceusage.googleapis.com
   */
  name?: string;
  /**
   * The resource name of the consumer.
   * 
   * A valid name would be:
   * - projects/123
   */
  parent?: string;
  /**
   * The service configuration of the available service.
   * Some fields may be filtered out of the configuration in responses to
   * the `ListServices` method. These fields are present only in responses to
   * the `GetService` method.
   */
  config?: ServiceConfigAmino;
  /** Whether or not the service has been enabled for use by the consumer. */
  state?: State;
}
export interface ServiceAminoMsg {
  type: "/google.api.serviceusage.v1.Service";
  value: ServiceAmino;
}
/** A service that is available for use by the consumer. */
export interface ServiceSDKType {
  name: string;
  parent: string;
  config?: ServiceConfigSDKType;
  state: State;
}
/** The configuration of the service. */
export interface ServiceConfig {
  /**
   * The DNS address at which this service is available.
   * 
   * An example DNS address would be:
   * `calendar.googleapis.com`.
   */
  name: string;
  /** The product title for this service. */
  title: string;
  /**
   * A list of API interfaces exported by this service. Contains only the names,
   * versions, and method names of the interfaces.
   */
  apis: Api[];
  /**
   * Additional API documentation. Contains only the summary and the
   * documentation URL.
   */
  documentation?: Documentation;
  /** Quota configuration. */
  quota?: Quota;
  /** Auth configuration. Contains only the OAuth rules. */
  authentication?: Authentication;
  /** Configuration controlling usage of this service. */
  usage?: Usage;
  /**
   * Configuration for network endpoints. Contains only the names and aliases
   * of the endpoints.
   */
  endpoints: Endpoint[];
  /**
   * Defines the monitored resources used by this service. This is required
   * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
   */
  monitoredResources: MonitoredResourceDescriptor[];
  /**
   * Monitoring configuration.
   * This should not include the 'producer_destinations' field.
   */
  monitoring?: Monitoring;
}
export interface ServiceConfigProtoMsg {
  typeUrl: "/google.api.serviceusage.v1.ServiceConfig";
  value: Uint8Array;
}
/** The configuration of the service. */
export interface ServiceConfigAmino {
  /**
   * The DNS address at which this service is available.
   * 
   * An example DNS address would be:
   * `calendar.googleapis.com`.
   */
  name?: string;
  /** The product title for this service. */
  title?: string;
  /**
   * A list of API interfaces exported by this service. Contains only the names,
   * versions, and method names of the interfaces.
   */
  apis?: ApiAmino[];
  /**
   * Additional API documentation. Contains only the summary and the
   * documentation URL.
   */
  documentation?: DocumentationAmino;
  /** Quota configuration. */
  quota?: QuotaAmino;
  /** Auth configuration. Contains only the OAuth rules. */
  authentication?: AuthenticationAmino;
  /** Configuration controlling usage of this service. */
  usage?: UsageAmino;
  /**
   * Configuration for network endpoints. Contains only the names and aliases
   * of the endpoints.
   */
  endpoints?: EndpointAmino[];
  /**
   * Defines the monitored resources used by this service. This is required
   * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
   */
  monitored_resources?: MonitoredResourceDescriptorAmino[];
  /**
   * Monitoring configuration.
   * This should not include the 'producer_destinations' field.
   */
  monitoring?: MonitoringAmino;
}
export interface ServiceConfigAminoMsg {
  type: "/google.api.serviceusage.v1.ServiceConfig";
  value: ServiceConfigAmino;
}
/** The configuration of the service. */
export interface ServiceConfigSDKType {
  name: string;
  title: string;
  apis: ApiSDKType[];
  documentation?: DocumentationSDKType;
  quota?: QuotaSDKType;
  authentication?: AuthenticationSDKType;
  usage?: UsageSDKType;
  endpoints: EndpointSDKType[];
  monitored_resources: MonitoredResourceDescriptorSDKType[];
  monitoring?: MonitoringSDKType;
}
/** The operation metadata returned for the batchend services operation. */
export interface OperationMetadata {
  /**
   * The full name of the resources that this operation is directly
   * associated with.
   */
  resourceNames: string[];
}
export interface OperationMetadataProtoMsg {
  typeUrl: "/google.api.serviceusage.v1.OperationMetadata";
  value: Uint8Array;
}
/** The operation metadata returned for the batchend services operation. */
export interface OperationMetadataAmino {
  /**
   * The full name of the resources that this operation is directly
   * associated with.
   */
  resource_names?: string[];
}
export interface OperationMetadataAminoMsg {
  type: "/google.api.serviceusage.v1.OperationMetadata";
  value: OperationMetadataAmino;
}
/** The operation metadata returned for the batchend services operation. */
export interface OperationMetadataSDKType {
  resource_names: string[];
}
function createBaseService(): Service {
  return {
    name: "",
    parent: "",
    config: undefined,
    state: 0
  };
}
export const Service = {
  typeUrl: "/google.api.serviceusage.v1.Service",
  is(o: any): o is Service {
    return o && (o.$typeUrl === Service.typeUrl || typeof o.name === "string" && typeof o.parent === "string" && isSet(o.state));
  },
  isSDK(o: any): o is ServiceSDKType {
    return o && (o.$typeUrl === Service.typeUrl || typeof o.name === "string" && typeof o.parent === "string" && isSet(o.state));
  },
  isAmino(o: any): o is ServiceAmino {
    return o && (o.$typeUrl === Service.typeUrl || typeof o.name === "string" && typeof o.parent === "string" && isSet(o.state));
  },
  encode(message: Service, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.parent !== undefined) {
      writer.uint32(42).string(message.parent);
    }
    if (message.config !== undefined) {
      ServiceConfig.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Service {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 5:
          message.parent = reader.string();
          break;
        case 2:
          message.config = ServiceConfig.decode(reader, reader.uint32());
          break;
        case 4:
          message.state = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Service {
    const obj = createBaseService();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.parent)) obj.parent = String(object.parent);
    if (isSet(object.config)) obj.config = ServiceConfig.fromJSON(object.config);
    if (isSet(object.state)) obj.state = stateFromJSON(object.state);
    return obj;
  },
  toJSON(message: Service): JsonSafe<Service> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.parent !== undefined && (obj.parent = message.parent);
    message.config !== undefined && (obj.config = message.config ? ServiceConfig.toJSON(message.config) : undefined);
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    return obj;
  },
  fromPartial(object: DeepPartial<Service>): Service {
    const message = createBaseService();
    message.name = object.name ?? "";
    message.parent = object.parent ?? "";
    if (object.config !== undefined && object.config !== null) {
      message.config = ServiceConfig.fromPartial(object.config);
    }
    message.state = object.state ?? 0;
    return message;
  },
  fromSDK(object: ServiceSDKType): Service {
    return {
      name: object?.name,
      parent: object?.parent,
      config: object.config ? ServiceConfig.fromSDK(object.config) : undefined,
      state: isSet(object.state) ? stateFromJSON(object.state) : -1
    };
  },
  fromSDKJSON(object: any): ServiceSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      parent: isSet(object.parent) ? String(object.parent) : "",
      config: isSet(object.config) ? ServiceConfig.fromSDKJSON(object.config) : undefined,
      state: isSet(object.state) ? stateFromJSON(object.state) : -1
    };
  },
  toSDK(message: Service): ServiceSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.parent = message.parent;
    message.config !== undefined && (obj.config = message.config ? ServiceConfig.toSDK(message.config) : undefined);
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    return obj;
  },
  fromAmino(object: ServiceAmino): Service {
    const message = createBaseService();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = ServiceConfig.fromAmino(object.config);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: Service): ServiceAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.config = message.config ? ServiceConfig.toAmino(message.config) : undefined;
    obj.state = message.state === 0 ? undefined : message.state;
    return obj;
  },
  fromAminoMsg(object: ServiceAminoMsg): Service {
    return Service.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceProtoMsg): Service {
    return Service.decode(message.value);
  },
  toProto(message: Service): Uint8Array {
    return Service.encode(message).finish();
  },
  toProtoMsg(message: Service): ServiceProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1.Service",
      value: Service.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ServiceConfig.registerTypeUrl();
  }
};
function createBaseServiceConfig(): ServiceConfig {
  return {
    name: "",
    title: "",
    apis: [],
    documentation: undefined,
    quota: undefined,
    authentication: undefined,
    usage: undefined,
    endpoints: [],
    monitoredResources: [],
    monitoring: undefined
  };
}
export const ServiceConfig = {
  typeUrl: "/google.api.serviceusage.v1.ServiceConfig",
  is(o: any): o is ServiceConfig {
    return o && (o.$typeUrl === ServiceConfig.typeUrl || typeof o.name === "string" && typeof o.title === "string" && Array.isArray(o.apis) && (!o.apis.length || Api.is(o.apis[0])) && Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.is(o.endpoints[0])) && Array.isArray(o.monitoredResources) && (!o.monitoredResources.length || MonitoredResourceDescriptor.is(o.monitoredResources[0])));
  },
  isSDK(o: any): o is ServiceConfigSDKType {
    return o && (o.$typeUrl === ServiceConfig.typeUrl || typeof o.name === "string" && typeof o.title === "string" && Array.isArray(o.apis) && (!o.apis.length || Api.isSDK(o.apis[0])) && Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.isSDK(o.endpoints[0])) && Array.isArray(o.monitored_resources) && (!o.monitored_resources.length || MonitoredResourceDescriptor.isSDK(o.monitored_resources[0])));
  },
  isAmino(o: any): o is ServiceConfigAmino {
    return o && (o.$typeUrl === ServiceConfig.typeUrl || typeof o.name === "string" && typeof o.title === "string" && Array.isArray(o.apis) && (!o.apis.length || Api.isAmino(o.apis[0])) && Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.isAmino(o.endpoints[0])) && Array.isArray(o.monitored_resources) && (!o.monitored_resources.length || MonitoredResourceDescriptor.isAmino(o.monitored_resources[0])));
  },
  encode(message: ServiceConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.title !== undefined) {
      writer.uint32(18).string(message.title);
    }
    for (const v of message.apis) {
      Api.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.documentation !== undefined) {
      Documentation.encode(message.documentation, writer.uint32(50).fork()).ldelim();
    }
    if (message.quota !== undefined) {
      Quota.encode(message.quota, writer.uint32(82).fork()).ldelim();
    }
    if (message.authentication !== undefined) {
      Authentication.encode(message.authentication, writer.uint32(90).fork()).ldelim();
    }
    if (message.usage !== undefined) {
      Usage.encode(message.usage, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.monitoredResources) {
      MonitoredResourceDescriptor.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    if (message.monitoring !== undefined) {
      Monitoring.encode(message.monitoring, writer.uint32(226).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.apis.push(Api.decode(reader, reader.uint32()));
          break;
        case 6:
          message.documentation = Documentation.decode(reader, reader.uint32());
          break;
        case 10:
          message.quota = Quota.decode(reader, reader.uint32());
          break;
        case 11:
          message.authentication = Authentication.decode(reader, reader.uint32());
          break;
        case 15:
          message.usage = Usage.decode(reader, reader.uint32());
          break;
        case 18:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        case 25:
          message.monitoredResources.push(MonitoredResourceDescriptor.decode(reader, reader.uint32()));
          break;
        case 28:
          message.monitoring = Monitoring.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceConfig {
    const obj = createBaseServiceConfig();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.title)) obj.title = String(object.title);
    if (Array.isArray(object?.apis)) obj.apis = object.apis.map((e: any) => Api.fromJSON(e));
    if (isSet(object.documentation)) obj.documentation = Documentation.fromJSON(object.documentation);
    if (isSet(object.quota)) obj.quota = Quota.fromJSON(object.quota);
    if (isSet(object.authentication)) obj.authentication = Authentication.fromJSON(object.authentication);
    if (isSet(object.usage)) obj.usage = Usage.fromJSON(object.usage);
    if (Array.isArray(object?.endpoints)) obj.endpoints = object.endpoints.map((e: any) => Endpoint.fromJSON(e));
    if (Array.isArray(object?.monitoredResources)) obj.monitoredResources = object.monitoredResources.map((e: any) => MonitoredResourceDescriptor.fromJSON(e));
    if (isSet(object.monitoring)) obj.monitoring = Monitoring.fromJSON(object.monitoring);
    return obj;
  },
  toJSON(message: ServiceConfig): JsonSafe<ServiceConfig> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.title !== undefined && (obj.title = message.title);
    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toJSON(e) : undefined);
    } else {
      obj.apis = [];
    }
    message.documentation !== undefined && (obj.documentation = message.documentation ? Documentation.toJSON(message.documentation) : undefined);
    message.quota !== undefined && (obj.quota = message.quota ? Quota.toJSON(message.quota) : undefined);
    message.authentication !== undefined && (obj.authentication = message.authentication ? Authentication.toJSON(message.authentication) : undefined);
    message.usage !== undefined && (obj.usage = message.usage ? Usage.toJSON(message.usage) : undefined);
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toJSON(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    if (message.monitoredResources) {
      obj.monitoredResources = message.monitoredResources.map(e => e ? MonitoredResourceDescriptor.toJSON(e) : undefined);
    } else {
      obj.monitoredResources = [];
    }
    message.monitoring !== undefined && (obj.monitoring = message.monitoring ? Monitoring.toJSON(message.monitoring) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ServiceConfig>): ServiceConfig {
    const message = createBaseServiceConfig();
    message.name = object.name ?? "";
    message.title = object.title ?? "";
    message.apis = object.apis?.map(e => Api.fromPartial(e)) || [];
    if (object.documentation !== undefined && object.documentation !== null) {
      message.documentation = Documentation.fromPartial(object.documentation);
    }
    if (object.quota !== undefined && object.quota !== null) {
      message.quota = Quota.fromPartial(object.quota);
    }
    if (object.authentication !== undefined && object.authentication !== null) {
      message.authentication = Authentication.fromPartial(object.authentication);
    }
    if (object.usage !== undefined && object.usage !== null) {
      message.usage = Usage.fromPartial(object.usage);
    }
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    message.monitoredResources = object.monitoredResources?.map(e => MonitoredResourceDescriptor.fromPartial(e)) || [];
    if (object.monitoring !== undefined && object.monitoring !== null) {
      message.monitoring = Monitoring.fromPartial(object.monitoring);
    }
    return message;
  },
  fromSDK(object: ServiceConfigSDKType): ServiceConfig {
    return {
      name: object?.name,
      title: object?.title,
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => Api.fromSDK(e)) : [],
      documentation: object.documentation ? Documentation.fromSDK(object.documentation) : undefined,
      quota: object.quota ? Quota.fromSDK(object.quota) : undefined,
      authentication: object.authentication ? Authentication.fromSDK(object.authentication) : undefined,
      usage: object.usage ? Usage.fromSDK(object.usage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromSDK(e)) : [],
      monitoredResources: Array.isArray(object?.monitored_resources) ? object.monitored_resources.map((e: any) => MonitoredResourceDescriptor.fromSDK(e)) : [],
      monitoring: object.monitoring ? Monitoring.fromSDK(object.monitoring) : undefined
    };
  },
  fromSDKJSON(object: any): ServiceConfigSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      title: isSet(object.title) ? String(object.title) : "",
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => Api.fromSDKJSON(e)) : [],
      documentation: isSet(object.documentation) ? Documentation.fromSDKJSON(object.documentation) : undefined,
      quota: isSet(object.quota) ? Quota.fromSDKJSON(object.quota) : undefined,
      authentication: isSet(object.authentication) ? Authentication.fromSDKJSON(object.authentication) : undefined,
      usage: isSet(object.usage) ? Usage.fromSDKJSON(object.usage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromSDKJSON(e)) : [],
      monitored_resources: Array.isArray(object?.monitored_resources) ? object.monitored_resources.map((e: any) => MonitoredResourceDescriptor.fromSDKJSON(e)) : [],
      monitoring: isSet(object.monitoring) ? Monitoring.fromSDKJSON(object.monitoring) : undefined
    };
  },
  toSDK(message: ServiceConfig): ServiceConfigSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.title = message.title;
    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toSDK(e) : undefined);
    } else {
      obj.apis = [];
    }
    message.documentation !== undefined && (obj.documentation = message.documentation ? Documentation.toSDK(message.documentation) : undefined);
    message.quota !== undefined && (obj.quota = message.quota ? Quota.toSDK(message.quota) : undefined);
    message.authentication !== undefined && (obj.authentication = message.authentication ? Authentication.toSDK(message.authentication) : undefined);
    message.usage !== undefined && (obj.usage = message.usage ? Usage.toSDK(message.usage) : undefined);
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toSDK(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    if (message.monitoredResources) {
      obj.monitored_resources = message.monitoredResources.map(e => e ? MonitoredResourceDescriptor.toSDK(e) : undefined);
    } else {
      obj.monitored_resources = [];
    }
    message.monitoring !== undefined && (obj.monitoring = message.monitoring ? Monitoring.toSDK(message.monitoring) : undefined);
    return obj;
  },
  fromAmino(object: ServiceConfigAmino): ServiceConfig {
    const message = createBaseServiceConfig();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    message.apis = object.apis?.map(e => Api.fromAmino(e)) || [];
    if (object.documentation !== undefined && object.documentation !== null) {
      message.documentation = Documentation.fromAmino(object.documentation);
    }
    if (object.quota !== undefined && object.quota !== null) {
      message.quota = Quota.fromAmino(object.quota);
    }
    if (object.authentication !== undefined && object.authentication !== null) {
      message.authentication = Authentication.fromAmino(object.authentication);
    }
    if (object.usage !== undefined && object.usage !== null) {
      message.usage = Usage.fromAmino(object.usage);
    }
    message.endpoints = object.endpoints?.map(e => Endpoint.fromAmino(e)) || [];
    message.monitoredResources = object.monitored_resources?.map(e => MonitoredResourceDescriptor.fromAmino(e)) || [];
    if (object.monitoring !== undefined && object.monitoring !== null) {
      message.monitoring = Monitoring.fromAmino(object.monitoring);
    }
    return message;
  },
  toAmino(message: ServiceConfig): ServiceConfigAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.title = message.title === "" ? undefined : message.title;
    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toAmino(e) : undefined);
    } else {
      obj.apis = message.apis;
    }
    obj.documentation = message.documentation ? Documentation.toAmino(message.documentation) : undefined;
    obj.quota = message.quota ? Quota.toAmino(message.quota) : undefined;
    obj.authentication = message.authentication ? Authentication.toAmino(message.authentication) : undefined;
    obj.usage = message.usage ? Usage.toAmino(message.usage) : undefined;
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toAmino(e) : undefined);
    } else {
      obj.endpoints = message.endpoints;
    }
    if (message.monitoredResources) {
      obj.monitored_resources = message.monitoredResources.map(e => e ? MonitoredResourceDescriptor.toAmino(e) : undefined);
    } else {
      obj.monitored_resources = message.monitoredResources;
    }
    obj.monitoring = message.monitoring ? Monitoring.toAmino(message.monitoring) : undefined;
    return obj;
  },
  fromAminoMsg(object: ServiceConfigAminoMsg): ServiceConfig {
    return ServiceConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceConfigProtoMsg): ServiceConfig {
    return ServiceConfig.decode(message.value);
  },
  toProto(message: ServiceConfig): Uint8Array {
    return ServiceConfig.encode(message).finish();
  },
  toProtoMsg(message: ServiceConfig): ServiceConfigProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1.ServiceConfig",
      value: ServiceConfig.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Api.registerTypeUrl();
    Documentation.registerTypeUrl();
    Quota.registerTypeUrl();
    Authentication.registerTypeUrl();
    Usage.registerTypeUrl();
    Endpoint.registerTypeUrl();
    MonitoredResourceDescriptor.registerTypeUrl();
    Monitoring.registerTypeUrl();
  }
};
function createBaseOperationMetadata(): OperationMetadata {
  return {
    resourceNames: []
  };
}
export const OperationMetadata = {
  typeUrl: "/google.api.serviceusage.v1.OperationMetadata",
  is(o: any): o is OperationMetadata {
    return o && (o.$typeUrl === OperationMetadata.typeUrl || Array.isArray(o.resourceNames) && (!o.resourceNames.length || typeof o.resourceNames[0] === "string"));
  },
  isSDK(o: any): o is OperationMetadataSDKType {
    return o && (o.$typeUrl === OperationMetadata.typeUrl || Array.isArray(o.resource_names) && (!o.resource_names.length || typeof o.resource_names[0] === "string"));
  },
  isAmino(o: any): o is OperationMetadataAmino {
    return o && (o.$typeUrl === OperationMetadata.typeUrl || Array.isArray(o.resource_names) && (!o.resource_names.length || typeof o.resource_names[0] === "string"));
  },
  encode(message: OperationMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.resourceNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OperationMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.resourceNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OperationMetadata {
    const obj = createBaseOperationMetadata();
    if (Array.isArray(object?.resourceNames)) obj.resourceNames = object.resourceNames.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: OperationMetadata): JsonSafe<OperationMetadata> {
    const obj: any = {};
    if (message.resourceNames) {
      obj.resourceNames = message.resourceNames.map(e => e);
    } else {
      obj.resourceNames = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<OperationMetadata>): OperationMetadata {
    const message = createBaseOperationMetadata();
    message.resourceNames = object.resourceNames?.map(e => e) || [];
    return message;
  },
  fromSDK(object: OperationMetadataSDKType): OperationMetadata {
    return {
      resourceNames: Array.isArray(object?.resource_names) ? object.resource_names.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): OperationMetadataSDKType {
    return {
      resource_names: Array.isArray(object?.resource_names) ? object.resource_names.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: OperationMetadata): OperationMetadataSDKType {
    const obj: any = {};
    if (message.resourceNames) {
      obj.resource_names = message.resourceNames.map(e => e);
    } else {
      obj.resource_names = [];
    }
    return obj;
  },
  fromAmino(object: OperationMetadataAmino): OperationMetadata {
    const message = createBaseOperationMetadata();
    message.resourceNames = object.resource_names?.map(e => e) || [];
    return message;
  },
  toAmino(message: OperationMetadata): OperationMetadataAmino {
    const obj: any = {};
    if (message.resourceNames) {
      obj.resource_names = message.resourceNames.map(e => e);
    } else {
      obj.resource_names = message.resourceNames;
    }
    return obj;
  },
  fromAminoMsg(object: OperationMetadataAminoMsg): OperationMetadata {
    return OperationMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: OperationMetadataProtoMsg): OperationMetadata {
    return OperationMetadata.decode(message.value);
  },
  toProto(message: OperationMetadata): Uint8Array {
    return OperationMetadata.encode(message).finish();
  },
  toProtoMsg(message: OperationMetadata): OperationMetadataProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1.OperationMetadata",
      value: OperationMetadata.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};