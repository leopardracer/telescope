import { Api, ApiAmino, ApiSDKType } from "../protobuf/api";
import { Type, TypeAmino, TypeSDKType, Enum, EnumAmino, EnumSDKType } from "../protobuf/type";
import { Documentation, DocumentationAmino, DocumentationSDKType } from "./documentation";
import { Backend, BackendAmino, BackendSDKType } from "./backend";
import { Http, HttpAmino, HttpSDKType } from "./http";
import { Quota, QuotaAmino, QuotaSDKType } from "./quota";
import { Authentication, AuthenticationAmino, AuthenticationSDKType } from "./auth";
import { Context, ContextAmino, ContextSDKType } from "./context";
import { Usage, UsageAmino, UsageSDKType } from "./usage";
import { Endpoint, EndpointAmino, EndpointSDKType } from "./endpoint";
import { Control, ControlAmino, ControlSDKType } from "./control";
import { LogDescriptor, LogDescriptorAmino, LogDescriptorSDKType } from "./log";
import { MetricDescriptor, MetricDescriptorAmino, MetricDescriptorSDKType } from "./metric";
import { MonitoredResourceDescriptor, MonitoredResourceDescriptorAmino, MonitoredResourceDescriptorSDKType } from "./monitored_resource";
import { Billing, BillingAmino, BillingSDKType } from "./billing";
import { Logging, LoggingAmino, LoggingSDKType } from "./logging";
import { Monitoring, MonitoringAmino, MonitoringSDKType } from "./monitoring";
import { SystemParameters, SystemParametersAmino, SystemParametersSDKType } from "./system_parameter";
import { SourceInfo, SourceInfoAmino, SourceInfoSDKType } from "./source_info";
import { UInt32Value, UInt32ValueAmino, UInt32ValueSDKType } from "../protobuf/wrappers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "google.api";
/**
 * `Service` is the root object of Google service configuration schema. It
 * describes basic information about a service, such as the name and the
 * title, and delegates other aspects to sub-sections. Each sub-section is
 * either a proto message or a repeated proto message that configures a
 * specific aspect, such as auth. See each proto message definition for details.
 * 
 * Example:
 * 
 *     type: google.api.Service
 *     name: calendar.googleapis.com
 *     title: Google Calendar API
 *     apis:
 *     - name: google.calendar.v3.Calendar
 *     authentication:
 *       providers:
 *       - id: google_calendar_auth
 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 *         issuer: https://securetoken.google.com
 *       rules:
 *       - selector: "*"
 *         requirements:
 *           provider_id: google_calendar_auth
 */
export interface Service {
  /**
   * The service name, which is a DNS-like logical identifier for the
   * service, such as `calendar.googleapis.com`. The service name
   * typically goes through DNS verification to make sure the owner
   * of the service also owns the DNS name.
   */
  name: string;
  /** The product title for this service. */
  title: string;
  /** The Google project that owns this service. */
  producerProjectId: string;
  /**
   * A unique ID for a specific instance of this message, typically assigned
   * by the client for tracking purpose. Must be no longer than 63 characters
   * and only lower case letters, digits, '.', '_' and '-' are allowed. If
   * empty, the server may choose to generate one instead.
   */
  id: string;
  /**
   * A list of API interfaces exported by this service. Only the `name` field
   * of the [google.protobuf.Api][google.protobuf.Api] needs to be provided by the configuration
   * author, as the remaining fields will be derived from the IDL during the
   * normalization process. It is an error to specify an API interface here
   * which cannot be resolved against the associated IDL files.
   */
  apis: Api[];
  /**
   * A list of all proto message types included in this API service.
   * Types referenced directly or indirectly by the `apis` are
   * automatically included.  Messages which are not referenced but
   * shall be included, such as types used by the `google.protobuf.Any` type,
   * should be listed here by name. Example:
   * 
   *     types:
   *     - name: google.protobuf.Int32
   */
  types: Type[];
  /**
   * A list of all enum types included in this API service.  Enums
   * referenced directly or indirectly by the `apis` are automatically
   * included.  Enums which are not referenced but shall be included
   * should be listed here by name. Example:
   * 
   *     enums:
   *     - name: google.someapi.v1.SomeEnum
   */
  enums: Enum[];
  /** Additional API documentation. */
  documentation?: Documentation;
  /** API backend configuration. */
  backend?: Backend;
  /** HTTP configuration. */
  http?: Http;
  /** Quota configuration. */
  quota?: Quota;
  /** Auth configuration. */
  authentication?: Authentication;
  /** Context configuration. */
  context?: Context;
  /** Configuration controlling usage of this service. */
  usage?: Usage;
  /**
   * Configuration for network endpoints.  If this is empty, then an endpoint
   * with the same name as the service is automatically generated to service all
   * defined APIs.
   */
  endpoints: Endpoint[];
  /** Configuration for the service control plane. */
  control?: Control;
  /** Defines the logs used by this service. */
  logs: LogDescriptor[];
  /** Defines the metrics used by this service. */
  metrics: MetricDescriptor[];
  /**
   * Defines the monitored resources used by this service. This is required
   * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
   */
  monitoredResources: MonitoredResourceDescriptor[];
  /** Billing configuration. */
  billing?: Billing;
  /** Logging configuration. */
  logging?: Logging;
  /** Monitoring configuration. */
  monitoring?: Monitoring;
  /** System parameter configuration. */
  systemParameters?: SystemParameters;
  /** Output only. The source information for this configuration if available. */
  sourceInfo?: SourceInfo;
  /**
   * Obsolete. Do not use.
   * 
   * This field has no semantic meaning. The service config compiler always
   * sets this field to `3`.
   */
  /** @deprecated */
  configVersion?: UInt32Value;
}
export interface ServiceProtoMsg {
  typeUrl: "/google.api.Service";
  value: Uint8Array;
}
/**
 * `Service` is the root object of Google service configuration schema. It
 * describes basic information about a service, such as the name and the
 * title, and delegates other aspects to sub-sections. Each sub-section is
 * either a proto message or a repeated proto message that configures a
 * specific aspect, such as auth. See each proto message definition for details.
 * 
 * Example:
 * 
 *     type: google.api.Service
 *     name: calendar.googleapis.com
 *     title: Google Calendar API
 *     apis:
 *     - name: google.calendar.v3.Calendar
 *     authentication:
 *       providers:
 *       - id: google_calendar_auth
 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 *         issuer: https://securetoken.google.com
 *       rules:
 *       - selector: "*"
 *         requirements:
 *           provider_id: google_calendar_auth
 */
export interface ServiceAmino {
  /**
   * The service name, which is a DNS-like logical identifier for the
   * service, such as `calendar.googleapis.com`. The service name
   * typically goes through DNS verification to make sure the owner
   * of the service also owns the DNS name.
   */
  name?: string;
  /** The product title for this service. */
  title?: string;
  /** The Google project that owns this service. */
  producer_project_id?: string;
  /**
   * A unique ID for a specific instance of this message, typically assigned
   * by the client for tracking purpose. Must be no longer than 63 characters
   * and only lower case letters, digits, '.', '_' and '-' are allowed. If
   * empty, the server may choose to generate one instead.
   */
  id?: string;
  /**
   * A list of API interfaces exported by this service. Only the `name` field
   * of the [google.protobuf.Api][google.protobuf.Api] needs to be provided by the configuration
   * author, as the remaining fields will be derived from the IDL during the
   * normalization process. It is an error to specify an API interface here
   * which cannot be resolved against the associated IDL files.
   */
  apis?: ApiAmino[];
  /**
   * A list of all proto message types included in this API service.
   * Types referenced directly or indirectly by the `apis` are
   * automatically included.  Messages which are not referenced but
   * shall be included, such as types used by the `google.protobuf.Any` type,
   * should be listed here by name. Example:
   * 
   *     types:
   *     - name: google.protobuf.Int32
   */
  types?: TypeAmino[];
  /**
   * A list of all enum types included in this API service.  Enums
   * referenced directly or indirectly by the `apis` are automatically
   * included.  Enums which are not referenced but shall be included
   * should be listed here by name. Example:
   * 
   *     enums:
   *     - name: google.someapi.v1.SomeEnum
   */
  enums?: EnumAmino[];
  /** Additional API documentation. */
  documentation?: DocumentationAmino;
  /** API backend configuration. */
  backend?: BackendAmino;
  /** HTTP configuration. */
  http?: HttpAmino;
  /** Quota configuration. */
  quota?: QuotaAmino;
  /** Auth configuration. */
  authentication?: AuthenticationAmino;
  /** Context configuration. */
  context?: ContextAmino;
  /** Configuration controlling usage of this service. */
  usage?: UsageAmino;
  /**
   * Configuration for network endpoints.  If this is empty, then an endpoint
   * with the same name as the service is automatically generated to service all
   * defined APIs.
   */
  endpoints?: EndpointAmino[];
  /** Configuration for the service control plane. */
  control?: ControlAmino;
  /** Defines the logs used by this service. */
  logs?: LogDescriptorAmino[];
  /** Defines the metrics used by this service. */
  metrics?: MetricDescriptorAmino[];
  /**
   * Defines the monitored resources used by this service. This is required
   * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
   */
  monitored_resources?: MonitoredResourceDescriptorAmino[];
  /** Billing configuration. */
  billing?: BillingAmino;
  /** Logging configuration. */
  logging?: LoggingAmino;
  /** Monitoring configuration. */
  monitoring?: MonitoringAmino;
  /** System parameter configuration. */
  system_parameters?: SystemParametersAmino;
  /** Output only. The source information for this configuration if available. */
  source_info?: SourceInfoAmino;
  /**
   * Obsolete. Do not use.
   * 
   * This field has no semantic meaning. The service config compiler always
   * sets this field to `3`.
   */
  /** @deprecated */
  config_version?: UInt32ValueAmino;
}
export interface ServiceAminoMsg {
  type: "/google.api.Service";
  value: ServiceAmino;
}
/**
 * `Service` is the root object of Google service configuration schema. It
 * describes basic information about a service, such as the name and the
 * title, and delegates other aspects to sub-sections. Each sub-section is
 * either a proto message or a repeated proto message that configures a
 * specific aspect, such as auth. See each proto message definition for details.
 * 
 * Example:
 * 
 *     type: google.api.Service
 *     name: calendar.googleapis.com
 *     title: Google Calendar API
 *     apis:
 *     - name: google.calendar.v3.Calendar
 *     authentication:
 *       providers:
 *       - id: google_calendar_auth
 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 *         issuer: https://securetoken.google.com
 *       rules:
 *       - selector: "*"
 *         requirements:
 *           provider_id: google_calendar_auth
 */
export interface ServiceSDKType {
  name: string;
  title: string;
  producer_project_id: string;
  id: string;
  apis: ApiSDKType[];
  types: TypeSDKType[];
  enums: EnumSDKType[];
  documentation?: DocumentationSDKType;
  backend?: BackendSDKType;
  http?: HttpSDKType;
  quota?: QuotaSDKType;
  authentication?: AuthenticationSDKType;
  context?: ContextSDKType;
  usage?: UsageSDKType;
  endpoints: EndpointSDKType[];
  control?: ControlSDKType;
  logs: LogDescriptorSDKType[];
  metrics: MetricDescriptorSDKType[];
  monitored_resources: MonitoredResourceDescriptorSDKType[];
  billing?: BillingSDKType;
  logging?: LoggingSDKType;
  monitoring?: MonitoringSDKType;
  system_parameters?: SystemParametersSDKType;
  source_info?: SourceInfoSDKType;
  /** @deprecated */
  config_version?: UInt32ValueSDKType;
}
function createBaseService(): Service {
  return {
    name: "",
    title: "",
    producerProjectId: "",
    id: "",
    apis: [],
    types: [],
    enums: [],
    documentation: undefined,
    backend: undefined,
    http: undefined,
    quota: undefined,
    authentication: undefined,
    context: undefined,
    usage: undefined,
    endpoints: [],
    control: undefined,
    logs: [],
    metrics: [],
    monitoredResources: [],
    billing: undefined,
    logging: undefined,
    monitoring: undefined,
    systemParameters: undefined,
    sourceInfo: undefined,
    configVersion: undefined
  };
}
export const Service = {
  typeUrl: "/google.api.Service",
  is(o: any): o is Service {
    return o && (o.$typeUrl === Service.typeUrl || typeof o.name === "string" && typeof o.title === "string" && typeof o.producerProjectId === "string" && typeof o.id === "string" && Array.isArray(o.apis) && (!o.apis.length || Api.is(o.apis[0])) && Array.isArray(o.types) && (!o.types.length || Type.is(o.types[0])) && Array.isArray(o.enums) && (!o.enums.length || Enum.is(o.enums[0])) && Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.is(o.endpoints[0])) && Array.isArray(o.logs) && (!o.logs.length || LogDescriptor.is(o.logs[0])) && Array.isArray(o.metrics) && (!o.metrics.length || MetricDescriptor.is(o.metrics[0])) && Array.isArray(o.monitoredResources) && (!o.monitoredResources.length || MonitoredResourceDescriptor.is(o.monitoredResources[0])));
  },
  isSDK(o: any): o is ServiceSDKType {
    return o && (o.$typeUrl === Service.typeUrl || typeof o.name === "string" && typeof o.title === "string" && typeof o.producer_project_id === "string" && typeof o.id === "string" && Array.isArray(o.apis) && (!o.apis.length || Api.isSDK(o.apis[0])) && Array.isArray(o.types) && (!o.types.length || Type.isSDK(o.types[0])) && Array.isArray(o.enums) && (!o.enums.length || Enum.isSDK(o.enums[0])) && Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.isSDK(o.endpoints[0])) && Array.isArray(o.logs) && (!o.logs.length || LogDescriptor.isSDK(o.logs[0])) && Array.isArray(o.metrics) && (!o.metrics.length || MetricDescriptor.isSDK(o.metrics[0])) && Array.isArray(o.monitored_resources) && (!o.monitored_resources.length || MonitoredResourceDescriptor.isSDK(o.monitored_resources[0])));
  },
  isAmino(o: any): o is ServiceAmino {
    return o && (o.$typeUrl === Service.typeUrl || typeof o.name === "string" && typeof o.title === "string" && typeof o.producer_project_id === "string" && typeof o.id === "string" && Array.isArray(o.apis) && (!o.apis.length || Api.isAmino(o.apis[0])) && Array.isArray(o.types) && (!o.types.length || Type.isAmino(o.types[0])) && Array.isArray(o.enums) && (!o.enums.length || Enum.isAmino(o.enums[0])) && Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.isAmino(o.endpoints[0])) && Array.isArray(o.logs) && (!o.logs.length || LogDescriptor.isAmino(o.logs[0])) && Array.isArray(o.metrics) && (!o.metrics.length || MetricDescriptor.isAmino(o.metrics[0])) && Array.isArray(o.monitored_resources) && (!o.monitored_resources.length || MonitoredResourceDescriptor.isAmino(o.monitored_resources[0])));
  },
  encode(message: Service, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.title !== undefined) {
      writer.uint32(18).string(message.title);
    }
    if (message.producerProjectId !== undefined) {
      writer.uint32(178).string(message.producerProjectId);
    }
    if (message.id !== undefined) {
      writer.uint32(266).string(message.id);
    }
    for (const v of message.apis) {
      Api.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.types) {
      Type.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.enums) {
      Enum.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.documentation !== undefined) {
      Documentation.encode(message.documentation, writer.uint32(50).fork()).ldelim();
    }
    if (message.backend !== undefined) {
      Backend.encode(message.backend, writer.uint32(66).fork()).ldelim();
    }
    if (message.http !== undefined) {
      Http.encode(message.http, writer.uint32(74).fork()).ldelim();
    }
    if (message.quota !== undefined) {
      Quota.encode(message.quota, writer.uint32(82).fork()).ldelim();
    }
    if (message.authentication !== undefined) {
      Authentication.encode(message.authentication, writer.uint32(90).fork()).ldelim();
    }
    if (message.context !== undefined) {
      Context.encode(message.context, writer.uint32(98).fork()).ldelim();
    }
    if (message.usage !== undefined) {
      Usage.encode(message.usage, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    if (message.control !== undefined) {
      Control.encode(message.control, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.logs) {
      LogDescriptor.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.metrics) {
      MetricDescriptor.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    for (const v of message.monitoredResources) {
      MonitoredResourceDescriptor.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    if (message.billing !== undefined) {
      Billing.encode(message.billing, writer.uint32(210).fork()).ldelim();
    }
    if (message.logging !== undefined) {
      Logging.encode(message.logging, writer.uint32(218).fork()).ldelim();
    }
    if (message.monitoring !== undefined) {
      Monitoring.encode(message.monitoring, writer.uint32(226).fork()).ldelim();
    }
    if (message.systemParameters !== undefined) {
      SystemParameters.encode(message.systemParameters, writer.uint32(234).fork()).ldelim();
    }
    if (message.sourceInfo !== undefined) {
      SourceInfo.encode(message.sourceInfo, writer.uint32(298).fork()).ldelim();
    }
    if (message.configVersion !== undefined) {
      UInt32Value.encode(message.configVersion, writer.uint32(162).fork()).ldelim();
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
        case 2:
          message.title = reader.string();
          break;
        case 22:
          message.producerProjectId = reader.string();
          break;
        case 33:
          message.id = reader.string();
          break;
        case 3:
          message.apis.push(Api.decode(reader, reader.uint32()));
          break;
        case 4:
          message.types.push(Type.decode(reader, reader.uint32()));
          break;
        case 5:
          message.enums.push(Enum.decode(reader, reader.uint32()));
          break;
        case 6:
          message.documentation = Documentation.decode(reader, reader.uint32());
          break;
        case 8:
          message.backend = Backend.decode(reader, reader.uint32());
          break;
        case 9:
          message.http = Http.decode(reader, reader.uint32());
          break;
        case 10:
          message.quota = Quota.decode(reader, reader.uint32());
          break;
        case 11:
          message.authentication = Authentication.decode(reader, reader.uint32());
          break;
        case 12:
          message.context = Context.decode(reader, reader.uint32());
          break;
        case 15:
          message.usage = Usage.decode(reader, reader.uint32());
          break;
        case 18:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        case 21:
          message.control = Control.decode(reader, reader.uint32());
          break;
        case 23:
          message.logs.push(LogDescriptor.decode(reader, reader.uint32()));
          break;
        case 24:
          message.metrics.push(MetricDescriptor.decode(reader, reader.uint32()));
          break;
        case 25:
          message.monitoredResources.push(MonitoredResourceDescriptor.decode(reader, reader.uint32()));
          break;
        case 26:
          message.billing = Billing.decode(reader, reader.uint32());
          break;
        case 27:
          message.logging = Logging.decode(reader, reader.uint32());
          break;
        case 28:
          message.monitoring = Monitoring.decode(reader, reader.uint32());
          break;
        case 29:
          message.systemParameters = SystemParameters.decode(reader, reader.uint32());
          break;
        case 37:
          message.sourceInfo = SourceInfo.decode(reader, reader.uint32());
          break;
        case 20:
          message.configVersion = UInt32Value.decode(reader, reader.uint32());
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
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.producerProjectId)) obj.producerProjectId = String(object.producerProjectId);
    if (isSet(object.id)) obj.id = String(object.id);
    if (Array.isArray(object?.apis)) obj.apis = object.apis.map((e: any) => Api.fromJSON(e));
    if (Array.isArray(object?.types)) obj.types = object.types.map((e: any) => Type.fromJSON(e));
    if (Array.isArray(object?.enums)) obj.enums = object.enums.map((e: any) => Enum.fromJSON(e));
    if (isSet(object.documentation)) obj.documentation = Documentation.fromJSON(object.documentation);
    if (isSet(object.backend)) obj.backend = Backend.fromJSON(object.backend);
    if (isSet(object.http)) obj.http = Http.fromJSON(object.http);
    if (isSet(object.quota)) obj.quota = Quota.fromJSON(object.quota);
    if (isSet(object.authentication)) obj.authentication = Authentication.fromJSON(object.authentication);
    if (isSet(object.context)) obj.context = Context.fromJSON(object.context);
    if (isSet(object.usage)) obj.usage = Usage.fromJSON(object.usage);
    if (Array.isArray(object?.endpoints)) obj.endpoints = object.endpoints.map((e: any) => Endpoint.fromJSON(e));
    if (isSet(object.control)) obj.control = Control.fromJSON(object.control);
    if (Array.isArray(object?.logs)) obj.logs = object.logs.map((e: any) => LogDescriptor.fromJSON(e));
    if (Array.isArray(object?.metrics)) obj.metrics = object.metrics.map((e: any) => MetricDescriptor.fromJSON(e));
    if (Array.isArray(object?.monitoredResources)) obj.monitoredResources = object.monitoredResources.map((e: any) => MonitoredResourceDescriptor.fromJSON(e));
    if (isSet(object.billing)) obj.billing = Billing.fromJSON(object.billing);
    if (isSet(object.logging)) obj.logging = Logging.fromJSON(object.logging);
    if (isSet(object.monitoring)) obj.monitoring = Monitoring.fromJSON(object.monitoring);
    if (isSet(object.systemParameters)) obj.systemParameters = SystemParameters.fromJSON(object.systemParameters);
    if (isSet(object.sourceInfo)) obj.sourceInfo = SourceInfo.fromJSON(object.sourceInfo);
    if (isSet(object.configVersion)) obj.configVersion = UInt32Value.fromJSON(object.configVersion);
    return obj;
  },
  toJSON(message: Service): JsonSafe<Service> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.title !== undefined && (obj.title = message.title);
    message.producerProjectId !== undefined && (obj.producerProjectId = message.producerProjectId);
    message.id !== undefined && (obj.id = message.id);
    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toJSON(e) : undefined);
    } else {
      obj.apis = [];
    }
    if (message.types) {
      obj.types = message.types.map(e => e ? Type.toJSON(e) : undefined);
    } else {
      obj.types = [];
    }
    if (message.enums) {
      obj.enums = message.enums.map(e => e ? Enum.toJSON(e) : undefined);
    } else {
      obj.enums = [];
    }
    message.documentation !== undefined && (obj.documentation = message.documentation ? Documentation.toJSON(message.documentation) : undefined);
    message.backend !== undefined && (obj.backend = message.backend ? Backend.toJSON(message.backend) : undefined);
    message.http !== undefined && (obj.http = message.http ? Http.toJSON(message.http) : undefined);
    message.quota !== undefined && (obj.quota = message.quota ? Quota.toJSON(message.quota) : undefined);
    message.authentication !== undefined && (obj.authentication = message.authentication ? Authentication.toJSON(message.authentication) : undefined);
    message.context !== undefined && (obj.context = message.context ? Context.toJSON(message.context) : undefined);
    message.usage !== undefined && (obj.usage = message.usage ? Usage.toJSON(message.usage) : undefined);
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toJSON(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    message.control !== undefined && (obj.control = message.control ? Control.toJSON(message.control) : undefined);
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? LogDescriptor.toJSON(e) : undefined);
    } else {
      obj.logs = [];
    }
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? MetricDescriptor.toJSON(e) : undefined);
    } else {
      obj.metrics = [];
    }
    if (message.monitoredResources) {
      obj.monitoredResources = message.monitoredResources.map(e => e ? MonitoredResourceDescriptor.toJSON(e) : undefined);
    } else {
      obj.monitoredResources = [];
    }
    message.billing !== undefined && (obj.billing = message.billing ? Billing.toJSON(message.billing) : undefined);
    message.logging !== undefined && (obj.logging = message.logging ? Logging.toJSON(message.logging) : undefined);
    message.monitoring !== undefined && (obj.monitoring = message.monitoring ? Monitoring.toJSON(message.monitoring) : undefined);
    message.systemParameters !== undefined && (obj.systemParameters = message.systemParameters ? SystemParameters.toJSON(message.systemParameters) : undefined);
    message.sourceInfo !== undefined && (obj.sourceInfo = message.sourceInfo ? SourceInfo.toJSON(message.sourceInfo) : undefined);
    message.configVersion !== undefined && (obj.configVersion = message.configVersion ? UInt32Value.toJSON(message.configVersion) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Service>): Service {
    const message = createBaseService();
    message.name = object.name ?? "";
    message.title = object.title ?? "";
    message.producerProjectId = object.producerProjectId ?? "";
    message.id = object.id ?? "";
    message.apis = object.apis?.map(e => Api.fromPartial(e)) || [];
    message.types = object.types?.map(e => Type.fromPartial(e)) || [];
    message.enums = object.enums?.map(e => Enum.fromPartial(e)) || [];
    if (object.documentation !== undefined && object.documentation !== null) {
      message.documentation = Documentation.fromPartial(object.documentation);
    }
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = Backend.fromPartial(object.backend);
    }
    if (object.http !== undefined && object.http !== null) {
      message.http = Http.fromPartial(object.http);
    }
    if (object.quota !== undefined && object.quota !== null) {
      message.quota = Quota.fromPartial(object.quota);
    }
    if (object.authentication !== undefined && object.authentication !== null) {
      message.authentication = Authentication.fromPartial(object.authentication);
    }
    if (object.context !== undefined && object.context !== null) {
      message.context = Context.fromPartial(object.context);
    }
    if (object.usage !== undefined && object.usage !== null) {
      message.usage = Usage.fromPartial(object.usage);
    }
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    if (object.control !== undefined && object.control !== null) {
      message.control = Control.fromPartial(object.control);
    }
    message.logs = object.logs?.map(e => LogDescriptor.fromPartial(e)) || [];
    message.metrics = object.metrics?.map(e => MetricDescriptor.fromPartial(e)) || [];
    message.monitoredResources = object.monitoredResources?.map(e => MonitoredResourceDescriptor.fromPartial(e)) || [];
    if (object.billing !== undefined && object.billing !== null) {
      message.billing = Billing.fromPartial(object.billing);
    }
    if (object.logging !== undefined && object.logging !== null) {
      message.logging = Logging.fromPartial(object.logging);
    }
    if (object.monitoring !== undefined && object.monitoring !== null) {
      message.monitoring = Monitoring.fromPartial(object.monitoring);
    }
    if (object.systemParameters !== undefined && object.systemParameters !== null) {
      message.systemParameters = SystemParameters.fromPartial(object.systemParameters);
    }
    if (object.sourceInfo !== undefined && object.sourceInfo !== null) {
      message.sourceInfo = SourceInfo.fromPartial(object.sourceInfo);
    }
    if (object.configVersion !== undefined && object.configVersion !== null) {
      message.configVersion = UInt32Value.fromPartial(object.configVersion);
    }
    return message;
  },
  fromSDK(object: ServiceSDKType): Service {
    return {
      name: object?.name,
      title: object?.title,
      producerProjectId: object?.producer_project_id,
      id: object?.id,
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => Api.fromSDK(e)) : [],
      types: Array.isArray(object?.types) ? object.types.map((e: any) => Type.fromSDK(e)) : [],
      enums: Array.isArray(object?.enums) ? object.enums.map((e: any) => Enum.fromSDK(e)) : [],
      documentation: object.documentation ? Documentation.fromSDK(object.documentation) : undefined,
      backend: object.backend ? Backend.fromSDK(object.backend) : undefined,
      http: object.http ? Http.fromSDK(object.http) : undefined,
      quota: object.quota ? Quota.fromSDK(object.quota) : undefined,
      authentication: object.authentication ? Authentication.fromSDK(object.authentication) : undefined,
      context: object.context ? Context.fromSDK(object.context) : undefined,
      usage: object.usage ? Usage.fromSDK(object.usage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromSDK(e)) : [],
      control: object.control ? Control.fromSDK(object.control) : undefined,
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => LogDescriptor.fromSDK(e)) : [],
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => MetricDescriptor.fromSDK(e)) : [],
      monitoredResources: Array.isArray(object?.monitored_resources) ? object.monitored_resources.map((e: any) => MonitoredResourceDescriptor.fromSDK(e)) : [],
      billing: object.billing ? Billing.fromSDK(object.billing) : undefined,
      logging: object.logging ? Logging.fromSDK(object.logging) : undefined,
      monitoring: object.monitoring ? Monitoring.fromSDK(object.monitoring) : undefined,
      systemParameters: object.system_parameters ? SystemParameters.fromSDK(object.system_parameters) : undefined,
      sourceInfo: object.source_info ? SourceInfo.fromSDK(object.source_info) : undefined,
      configVersion: object.config_version ? UInt32Value.fromSDK(object.config_version) : undefined
    };
  },
  fromSDKJSON(object: any): ServiceSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      title: isSet(object.title) ? String(object.title) : "",
      producer_project_id: isSet(object.producer_project_id) ? String(object.producer_project_id) : "",
      id: isSet(object.id) ? String(object.id) : "",
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => Api.fromSDKJSON(e)) : [],
      types: Array.isArray(object?.types) ? object.types.map((e: any) => Type.fromSDKJSON(e)) : [],
      enums: Array.isArray(object?.enums) ? object.enums.map((e: any) => Enum.fromSDKJSON(e)) : [],
      documentation: isSet(object.documentation) ? Documentation.fromSDKJSON(object.documentation) : undefined,
      backend: isSet(object.backend) ? Backend.fromSDKJSON(object.backend) : undefined,
      http: isSet(object.http) ? Http.fromSDKJSON(object.http) : undefined,
      quota: isSet(object.quota) ? Quota.fromSDKJSON(object.quota) : undefined,
      authentication: isSet(object.authentication) ? Authentication.fromSDKJSON(object.authentication) : undefined,
      context: isSet(object.context) ? Context.fromSDKJSON(object.context) : undefined,
      usage: isSet(object.usage) ? Usage.fromSDKJSON(object.usage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromSDKJSON(e)) : [],
      control: isSet(object.control) ? Control.fromSDKJSON(object.control) : undefined,
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => LogDescriptor.fromSDKJSON(e)) : [],
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => MetricDescriptor.fromSDKJSON(e)) : [],
      monitored_resources: Array.isArray(object?.monitored_resources) ? object.monitored_resources.map((e: any) => MonitoredResourceDescriptor.fromSDKJSON(e)) : [],
      billing: isSet(object.billing) ? Billing.fromSDKJSON(object.billing) : undefined,
      logging: isSet(object.logging) ? Logging.fromSDKJSON(object.logging) : undefined,
      monitoring: isSet(object.monitoring) ? Monitoring.fromSDKJSON(object.monitoring) : undefined,
      system_parameters: isSet(object.system_parameters) ? SystemParameters.fromSDKJSON(object.system_parameters) : undefined,
      source_info: isSet(object.source_info) ? SourceInfo.fromSDKJSON(object.source_info) : undefined,
      config_version: isSet(object.config_version) ? UInt32Value.fromSDKJSON(object.config_version) : undefined
    };
  },
  toSDK(message: Service): ServiceSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.title = message.title;
    obj.producer_project_id = message.producerProjectId;
    obj.id = message.id;
    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toSDK(e) : undefined);
    } else {
      obj.apis = [];
    }
    if (message.types) {
      obj.types = message.types.map(e => e ? Type.toSDK(e) : undefined);
    } else {
      obj.types = [];
    }
    if (message.enums) {
      obj.enums = message.enums.map(e => e ? Enum.toSDK(e) : undefined);
    } else {
      obj.enums = [];
    }
    message.documentation !== undefined && (obj.documentation = message.documentation ? Documentation.toSDK(message.documentation) : undefined);
    message.backend !== undefined && (obj.backend = message.backend ? Backend.toSDK(message.backend) : undefined);
    message.http !== undefined && (obj.http = message.http ? Http.toSDK(message.http) : undefined);
    message.quota !== undefined && (obj.quota = message.quota ? Quota.toSDK(message.quota) : undefined);
    message.authentication !== undefined && (obj.authentication = message.authentication ? Authentication.toSDK(message.authentication) : undefined);
    message.context !== undefined && (obj.context = message.context ? Context.toSDK(message.context) : undefined);
    message.usage !== undefined && (obj.usage = message.usage ? Usage.toSDK(message.usage) : undefined);
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toSDK(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    message.control !== undefined && (obj.control = message.control ? Control.toSDK(message.control) : undefined);
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? LogDescriptor.toSDK(e) : undefined);
    } else {
      obj.logs = [];
    }
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? MetricDescriptor.toSDK(e) : undefined);
    } else {
      obj.metrics = [];
    }
    if (message.monitoredResources) {
      obj.monitored_resources = message.monitoredResources.map(e => e ? MonitoredResourceDescriptor.toSDK(e) : undefined);
    } else {
      obj.monitored_resources = [];
    }
    message.billing !== undefined && (obj.billing = message.billing ? Billing.toSDK(message.billing) : undefined);
    message.logging !== undefined && (obj.logging = message.logging ? Logging.toSDK(message.logging) : undefined);
    message.monitoring !== undefined && (obj.monitoring = message.monitoring ? Monitoring.toSDK(message.monitoring) : undefined);
    message.systemParameters !== undefined && (obj.system_parameters = message.systemParameters ? SystemParameters.toSDK(message.systemParameters) : undefined);
    message.sourceInfo !== undefined && (obj.source_info = message.sourceInfo ? SourceInfo.toSDK(message.sourceInfo) : undefined);
    message.configVersion !== undefined && (obj.config_version = message.configVersion ? UInt32Value.toSDK(message.configVersion) : undefined);
    return obj;
  },
  fromAmino(object: ServiceAmino): Service {
    const message = createBaseService();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.producer_project_id !== undefined && object.producer_project_id !== null) {
      message.producerProjectId = object.producer_project_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    message.apis = object.apis?.map(e => Api.fromAmino(e)) || [];
    message.types = object.types?.map(e => Type.fromAmino(e)) || [];
    message.enums = object.enums?.map(e => Enum.fromAmino(e)) || [];
    if (object.documentation !== undefined && object.documentation !== null) {
      message.documentation = Documentation.fromAmino(object.documentation);
    }
    if (object.backend !== undefined && object.backend !== null) {
      message.backend = Backend.fromAmino(object.backend);
    }
    if (object.http !== undefined && object.http !== null) {
      message.http = Http.fromAmino(object.http);
    }
    if (object.quota !== undefined && object.quota !== null) {
      message.quota = Quota.fromAmino(object.quota);
    }
    if (object.authentication !== undefined && object.authentication !== null) {
      message.authentication = Authentication.fromAmino(object.authentication);
    }
    if (object.context !== undefined && object.context !== null) {
      message.context = Context.fromAmino(object.context);
    }
    if (object.usage !== undefined && object.usage !== null) {
      message.usage = Usage.fromAmino(object.usage);
    }
    message.endpoints = object.endpoints?.map(e => Endpoint.fromAmino(e)) || [];
    if (object.control !== undefined && object.control !== null) {
      message.control = Control.fromAmino(object.control);
    }
    message.logs = object.logs?.map(e => LogDescriptor.fromAmino(e)) || [];
    message.metrics = object.metrics?.map(e => MetricDescriptor.fromAmino(e)) || [];
    message.monitoredResources = object.monitored_resources?.map(e => MonitoredResourceDescriptor.fromAmino(e)) || [];
    if (object.billing !== undefined && object.billing !== null) {
      message.billing = Billing.fromAmino(object.billing);
    }
    if (object.logging !== undefined && object.logging !== null) {
      message.logging = Logging.fromAmino(object.logging);
    }
    if (object.monitoring !== undefined && object.monitoring !== null) {
      message.monitoring = Monitoring.fromAmino(object.monitoring);
    }
    if (object.system_parameters !== undefined && object.system_parameters !== null) {
      message.systemParameters = SystemParameters.fromAmino(object.system_parameters);
    }
    if (object.source_info !== undefined && object.source_info !== null) {
      message.sourceInfo = SourceInfo.fromAmino(object.source_info);
    }
    if (object.config_version !== undefined && object.config_version !== null) {
      message.configVersion = UInt32Value.fromAmino(object.config_version);
    }
    return message;
  },
  toAmino(message: Service): ServiceAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.title = message.title === "" ? undefined : message.title;
    obj.producer_project_id = message.producerProjectId === "" ? undefined : message.producerProjectId;
    obj.id = message.id === "" ? undefined : message.id;
    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toAmino(e) : undefined);
    } else {
      obj.apis = message.apis;
    }
    if (message.types) {
      obj.types = message.types.map(e => e ? Type.toAmino(e) : undefined);
    } else {
      obj.types = message.types;
    }
    if (message.enums) {
      obj.enums = message.enums.map(e => e ? Enum.toAmino(e) : undefined);
    } else {
      obj.enums = message.enums;
    }
    obj.documentation = message.documentation ? Documentation.toAmino(message.documentation) : undefined;
    obj.backend = message.backend ? Backend.toAmino(message.backend) : undefined;
    obj.http = message.http ? Http.toAmino(message.http) : undefined;
    obj.quota = message.quota ? Quota.toAmino(message.quota) : undefined;
    obj.authentication = message.authentication ? Authentication.toAmino(message.authentication) : undefined;
    obj.context = message.context ? Context.toAmino(message.context) : undefined;
    obj.usage = message.usage ? Usage.toAmino(message.usage) : undefined;
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toAmino(e) : undefined);
    } else {
      obj.endpoints = message.endpoints;
    }
    obj.control = message.control ? Control.toAmino(message.control) : undefined;
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? LogDescriptor.toAmino(e) : undefined);
    } else {
      obj.logs = message.logs;
    }
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? MetricDescriptor.toAmino(e) : undefined);
    } else {
      obj.metrics = message.metrics;
    }
    if (message.monitoredResources) {
      obj.monitored_resources = message.monitoredResources.map(e => e ? MonitoredResourceDescriptor.toAmino(e) : undefined);
    } else {
      obj.monitored_resources = message.monitoredResources;
    }
    obj.billing = message.billing ? Billing.toAmino(message.billing) : undefined;
    obj.logging = message.logging ? Logging.toAmino(message.logging) : undefined;
    obj.monitoring = message.monitoring ? Monitoring.toAmino(message.monitoring) : undefined;
    obj.system_parameters = message.systemParameters ? SystemParameters.toAmino(message.systemParameters) : undefined;
    obj.source_info = message.sourceInfo ? SourceInfo.toAmino(message.sourceInfo) : undefined;
    obj.config_version = message.configVersion ? UInt32Value.toAmino(message.configVersion) : undefined;
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
      typeUrl: "/google.api.Service",
      value: Service.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Api.registerTypeUrl();
    Type.registerTypeUrl();
    Enum.registerTypeUrl();
    Documentation.registerTypeUrl();
    Backend.registerTypeUrl();
    Http.registerTypeUrl();
    Quota.registerTypeUrl();
    Authentication.registerTypeUrl();
    Context.registerTypeUrl();
    Usage.registerTypeUrl();
    Endpoint.registerTypeUrl();
    Control.registerTypeUrl();
    LogDescriptor.registerTypeUrl();
    MetricDescriptor.registerTypeUrl();
    MonitoredResourceDescriptor.registerTypeUrl();
    Billing.registerTypeUrl();
    Logging.registerTypeUrl();
    Monitoring.registerTypeUrl();
    SystemParameters.registerTypeUrl();
    SourceInfo.registerTypeUrl();
    UInt32Value.registerTypeUrl();
  }
};