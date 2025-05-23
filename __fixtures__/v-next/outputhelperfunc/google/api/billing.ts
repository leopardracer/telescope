import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, isSet } from "../../helpers";
export const protobufPackage = "google.api";
/**
 * Billing related configuration of the service.
 * 
 * The following example shows how to configure monitored resources and metrics
 * for billing, `consumer_destinations` is the only supported destination and
 * the monitored resources need at least one label key
 * `cloud.googleapis.com/location` to indicate the location of the billing
 * usage, using different monitored resources between monitoring and billing is
 * recommended so they can be evolved independently:
 * 
 * 
 *     monitored_resources:
 *     - type: library.googleapis.com/billing_branch
 *       labels:
 *       - key: cloud.googleapis.com/location
 *         description: |
 *           Predefined label to support billing location restriction.
 *       - key: city
 *         description: |
 *           Custom label to define the city where the library branch is located
 *           in.
 *       - key: name
 *         description: Custom label to define the name of the library branch.
 *     metrics:
 *     - name: library.googleapis.com/book/borrowed_count
 *       metric_kind: DELTA
 *       value_type: INT64
 *       unit: "1"
 *     billing:
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/billing_branch
 *         metrics:
 *         - library.googleapis.com/book/borrowed_count
 */
export interface Billing {
  /**
   * Billing configurations for sending metrics to the consumer project.
   * There can be multiple consumer destinations per service, each one must have
   * a different monitored resource type. A metric can be used in at most
   * one consumer destination.
   */
  consumerDestinations: Billing_BillingDestination[];
}
export interface BillingProtoMsg {
  typeUrl: "/google.api.Billing";
  value: Uint8Array;
}
/**
 * Billing related configuration of the service.
 * 
 * The following example shows how to configure monitored resources and metrics
 * for billing, `consumer_destinations` is the only supported destination and
 * the monitored resources need at least one label key
 * `cloud.googleapis.com/location` to indicate the location of the billing
 * usage, using different monitored resources between monitoring and billing is
 * recommended so they can be evolved independently:
 * 
 * 
 *     monitored_resources:
 *     - type: library.googleapis.com/billing_branch
 *       labels:
 *       - key: cloud.googleapis.com/location
 *         description: |
 *           Predefined label to support billing location restriction.
 *       - key: city
 *         description: |
 *           Custom label to define the city where the library branch is located
 *           in.
 *       - key: name
 *         description: Custom label to define the name of the library branch.
 *     metrics:
 *     - name: library.googleapis.com/book/borrowed_count
 *       metric_kind: DELTA
 *       value_type: INT64
 *       unit: "1"
 *     billing:
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/billing_branch
 *         metrics:
 *         - library.googleapis.com/book/borrowed_count
 */
export interface BillingAmino {
  /**
   * Billing configurations for sending metrics to the consumer project.
   * There can be multiple consumer destinations per service, each one must have
   * a different monitored resource type. A metric can be used in at most
   * one consumer destination.
   */
  consumer_destinations?: Billing_BillingDestinationAmino[];
}
export interface BillingAminoMsg {
  type: "/google.api.Billing";
  value: BillingAmino;
}
/**
 * Billing related configuration of the service.
 * 
 * The following example shows how to configure monitored resources and metrics
 * for billing, `consumer_destinations` is the only supported destination and
 * the monitored resources need at least one label key
 * `cloud.googleapis.com/location` to indicate the location of the billing
 * usage, using different monitored resources between monitoring and billing is
 * recommended so they can be evolved independently:
 * 
 * 
 *     monitored_resources:
 *     - type: library.googleapis.com/billing_branch
 *       labels:
 *       - key: cloud.googleapis.com/location
 *         description: |
 *           Predefined label to support billing location restriction.
 *       - key: city
 *         description: |
 *           Custom label to define the city where the library branch is located
 *           in.
 *       - key: name
 *         description: Custom label to define the name of the library branch.
 *     metrics:
 *     - name: library.googleapis.com/book/borrowed_count
 *       metric_kind: DELTA
 *       value_type: INT64
 *       unit: "1"
 *     billing:
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/billing_branch
 *         metrics:
 *         - library.googleapis.com/book/borrowed_count
 */
export interface BillingSDKType {
  consumer_destinations: Billing_BillingDestinationSDKType[];
}
/**
 * Configuration of a specific billing destination (Currently only support
 * bill against consumer project).
 */
export interface Billing_BillingDestination {
  /**
   * The monitored resource type. The type must be defined in
   * [Service.monitored_resources][google.api.Service.monitored_resources] section.
   */
  monitoredResource: string;
  /**
   * Names of the metrics to report to this billing destination.
   * Each name must be defined in [Service.metrics][google.api.Service.metrics] section.
   */
  metrics: string[];
}
export interface Billing_BillingDestinationProtoMsg {
  typeUrl: "/google.api.BillingDestination";
  value: Uint8Array;
}
/**
 * Configuration of a specific billing destination (Currently only support
 * bill against consumer project).
 */
export interface Billing_BillingDestinationAmino {
  /**
   * The monitored resource type. The type must be defined in
   * [Service.monitored_resources][google.api.Service.monitored_resources] section.
   */
  monitored_resource?: string;
  /**
   * Names of the metrics to report to this billing destination.
   * Each name must be defined in [Service.metrics][google.api.Service.metrics] section.
   */
  metrics?: string[];
}
export interface Billing_BillingDestinationAminoMsg {
  type: "/google.api.BillingDestination";
  value: Billing_BillingDestinationAmino;
}
/**
 * Configuration of a specific billing destination (Currently only support
 * bill against consumer project).
 */
export interface Billing_BillingDestinationSDKType {
  monitored_resource: string;
  metrics: string[];
}
function createBaseBilling(): Billing {
  return {
    consumerDestinations: []
  };
}
export const Billing = {
  typeUrl: "/google.api.Billing",
  is(o: any): o is Billing {
    return o && (o.$typeUrl === Billing.typeUrl || Array.isArray(o.consumerDestinations) && (!o.consumerDestinations.length || Billing_BillingDestination.is(o.consumerDestinations[0])));
  },
  isSDK(o: any): o is BillingSDKType {
    return o && (o.$typeUrl === Billing.typeUrl || Array.isArray(o.consumer_destinations) && (!o.consumer_destinations.length || Billing_BillingDestination.isSDK(o.consumer_destinations[0])));
  },
  isAmino(o: any): o is BillingAmino {
    return o && (o.$typeUrl === Billing.typeUrl || Array.isArray(o.consumer_destinations) && (!o.consumer_destinations.length || Billing_BillingDestination.isAmino(o.consumer_destinations[0])));
  },
  encode(message: Billing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.consumerDestinations) {
      Billing_BillingDestination.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Billing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBilling();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 8:
          message.consumerDestinations.push(Billing_BillingDestination.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Billing {
    const obj = createBaseBilling();
    if (Array.isArray(object?.consumerDestinations)) obj.consumerDestinations = object.consumerDestinations.map((e: any) => Billing_BillingDestination.fromJSON(e));
    return obj;
  },
  toJSON(message: Billing): JsonSafe<Billing> {
    const obj: any = {};
    if (message.consumerDestinations) {
      obj.consumerDestinations = message.consumerDestinations.map(e => e ? Billing_BillingDestination.toJSON(e) : undefined);
    } else {
      obj.consumerDestinations = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Billing>): Billing {
    const message = createBaseBilling();
    message.consumerDestinations = object.consumerDestinations?.map(e => Billing_BillingDestination.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: BillingSDKType): Billing {
    return {
      consumerDestinations: Array.isArray(object?.consumer_destinations) ? object.consumer_destinations.map((e: any) => Billing_BillingDestination.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): BillingSDKType {
    return {
      consumer_destinations: Array.isArray(object?.consumer_destinations) ? object.consumer_destinations.map((e: any) => Billing_BillingDestination.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Billing): BillingSDKType {
    const obj: any = {};
    if (message.consumerDestinations) {
      obj.consumer_destinations = message.consumerDestinations.map(e => e ? Billing_BillingDestination.toSDK(e) : undefined);
    } else {
      obj.consumer_destinations = [];
    }
    return obj;
  },
  fromAmino(object: BillingAmino): Billing {
    const message = createBaseBilling();
    message.consumerDestinations = object.consumer_destinations?.map(e => Billing_BillingDestination.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Billing): BillingAmino {
    const obj: any = {};
    if (message.consumerDestinations) {
      obj.consumer_destinations = message.consumerDestinations.map(e => e ? Billing_BillingDestination.toAmino(e) : undefined);
    } else {
      obj.consumer_destinations = message.consumerDestinations;
    }
    return obj;
  },
  fromAminoMsg(object: BillingAminoMsg): Billing {
    return Billing.fromAmino(object.value);
  },
  fromProtoMsg(message: BillingProtoMsg): Billing {
    return Billing.decode(message.value);
  },
  toProto(message: Billing): Uint8Array {
    return Billing.encode(message).finish();
  },
  toProtoMsg(message: Billing): BillingProtoMsg {
    return {
      typeUrl: "/google.api.Billing",
      value: Billing.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Billing_BillingDestination.registerTypeUrl();
  }
};
function createBaseBilling_BillingDestination(): Billing_BillingDestination {
  return {
    monitoredResource: "",
    metrics: []
  };
}
export const Billing_BillingDestination = {
  typeUrl: "/google.api.BillingDestination",
  is(o: any): o is Billing_BillingDestination {
    return o && (o.$typeUrl === Billing_BillingDestination.typeUrl || typeof o.monitoredResource === "string" && Array.isArray(o.metrics) && (!o.metrics.length || typeof o.metrics[0] === "string"));
  },
  isSDK(o: any): o is Billing_BillingDestinationSDKType {
    return o && (o.$typeUrl === Billing_BillingDestination.typeUrl || typeof o.monitored_resource === "string" && Array.isArray(o.metrics) && (!o.metrics.length || typeof o.metrics[0] === "string"));
  },
  isAmino(o: any): o is Billing_BillingDestinationAmino {
    return o && (o.$typeUrl === Billing_BillingDestination.typeUrl || typeof o.monitored_resource === "string" && Array.isArray(o.metrics) && (!o.metrics.length || typeof o.metrics[0] === "string"));
  },
  encode(message: Billing_BillingDestination, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.monitoredResource !== undefined) {
      writer.uint32(10).string(message.monitoredResource);
    }
    for (const v of message.metrics) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Billing_BillingDestination {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBilling_BillingDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monitoredResource = reader.string();
          break;
        case 2:
          message.metrics.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Billing_BillingDestination {
    const obj = createBaseBilling_BillingDestination();
    if (isSet(object.monitoredResource)) obj.monitoredResource = String(object.monitoredResource);
    if (Array.isArray(object?.metrics)) obj.metrics = object.metrics.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: Billing_BillingDestination): JsonSafe<Billing_BillingDestination> {
    const obj: any = {};
    message.monitoredResource !== undefined && (obj.monitoredResource = message.monitoredResource);
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e);
    } else {
      obj.metrics = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Billing_BillingDestination>): Billing_BillingDestination {
    const message = createBaseBilling_BillingDestination();
    message.monitoredResource = object.monitoredResource ?? "";
    message.metrics = object.metrics?.map(e => e) || [];
    return message;
  },
  fromSDK(object: Billing_BillingDestinationSDKType): Billing_BillingDestination {
    return {
      monitoredResource: object?.monitored_resource,
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): Billing_BillingDestinationSDKType {
    return {
      monitored_resource: isSet(object.monitored_resource) ? String(object.monitored_resource) : "",
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: Billing_BillingDestination): Billing_BillingDestinationSDKType {
    const obj: any = {};
    obj.monitored_resource = message.monitoredResource;
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e);
    } else {
      obj.metrics = [];
    }
    return obj;
  },
  fromAmino(object: Billing_BillingDestinationAmino): Billing_BillingDestination {
    const message = createBaseBilling_BillingDestination();
    if (object.monitored_resource !== undefined && object.monitored_resource !== null) {
      message.monitoredResource = object.monitored_resource;
    }
    message.metrics = object.metrics?.map(e => e) || [];
    return message;
  },
  toAmino(message: Billing_BillingDestination): Billing_BillingDestinationAmino {
    const obj: any = {};
    obj.monitored_resource = message.monitoredResource === "" ? undefined : message.monitoredResource;
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e);
    } else {
      obj.metrics = message.metrics;
    }
    return obj;
  },
  fromAminoMsg(object: Billing_BillingDestinationAminoMsg): Billing_BillingDestination {
    return Billing_BillingDestination.fromAmino(object.value);
  },
  fromProtoMsg(message: Billing_BillingDestinationProtoMsg): Billing_BillingDestination {
    return Billing_BillingDestination.decode(message.value);
  },
  toProto(message: Billing_BillingDestination): Uint8Array {
    return Billing_BillingDestination.encode(message).finish();
  },
  toProtoMsg(message: Billing_BillingDestination): Billing_BillingDestinationProtoMsg {
    return {
      typeUrl: "/google.api.BillingDestination",
      value: Billing_BillingDestination.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};