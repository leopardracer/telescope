import { ResourceValue, ResourceValueAmino, ResourceValueSDKType } from "./resourcevalue";
import { Attribute, AttributeAmino, AttributeSDKType } from "./attribute";
import { Endpoint, EndpointAmino, EndpointSDKType } from "./endpoint";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "akash.base.v1beta1";
/** CPU stores resource units and cpu config attributes */
export interface CPU {
  units: ResourceValue;
  attributes: Attribute[];
}
export interface CPUProtoMsg {
  typeUrl: "/akash.base.v1beta1.CPU";
  value: Uint8Array;
}
/** CPU stores resource units and cpu config attributes */
export interface CPUAmino {
  units?: ResourceValueAmino;
  attributes?: AttributeAmino[];
}
export interface CPUAminoMsg {
  type: "akash/base/cpu";
  value: CPUAmino;
}
/** CPU stores resource units and cpu config attributes */
export interface CPUSDKType {
  units: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}
/** Memory stores resource quantity and memory attributes */
export interface Memory {
  quantity: ResourceValue;
  attributes: Attribute[];
}
export interface MemoryProtoMsg {
  typeUrl: "/akash.base.v1beta1.Memory";
  value: Uint8Array;
}
/** Memory stores resource quantity and memory attributes */
export interface MemoryAmino {
  quantity: ResourceValueAmino;
  attributes?: AttributeAmino[];
}
export interface MemoryAminoMsg {
  type: "akash/base/memory";
  value: MemoryAmino;
}
/** Memory stores resource quantity and memory attributes */
export interface MemorySDKType {
  quantity: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}
/** Storage stores resource quantity and storage attributes */
export interface Storage {
  quantity: ResourceValue;
  attributes: Attribute[];
}
export interface StorageProtoMsg {
  typeUrl: "/akash.base.v1beta1.Storage";
  value: Uint8Array;
}
/** Storage stores resource quantity and storage attributes */
export interface StorageAmino {
  quantity: ResourceValueAmino;
  attributes?: AttributeAmino[];
}
export interface StorageAminoMsg {
  type: "akash/base/storage";
  value: StorageAmino;
}
/** Storage stores resource quantity and storage attributes */
export interface StorageSDKType {
  quantity: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnits {
  cpu?: CPU;
  memory?: Memory;
  storage?: Storage;
  endpoints: Endpoint[];
}
export interface ResourceUnitsProtoMsg {
  typeUrl: "/akash.base.v1beta1.ResourceUnits";
  value: Uint8Array;
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnitsAmino {
  cpu?: CPUAmino;
  memory?: MemoryAmino;
  storage?: StorageAmino;
  endpoints: EndpointAmino[];
}
export interface ResourceUnitsAminoMsg {
  type: "akash/base/resource-units";
  value: ResourceUnitsAmino;
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnitsSDKType {
  cpu?: CPUSDKType;
  memory?: MemorySDKType;
  storage?: StorageSDKType;
  endpoints: EndpointSDKType[];
}
function createBaseCPU(): CPU {
  return {
    units: ResourceValue.fromPartial({}),
    attributes: []
  };
}
export const CPU = {
  typeUrl: "/akash.base.v1beta1.CPU",
  aminoType: "akash/base/cpu",
  is(o: any): o is CPU {
    return o && (o.$typeUrl === CPU.typeUrl || ResourceValue.is(o.units) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.is(o.attributes[0])));
  },
  isSDK(o: any): o is CPUSDKType {
    return o && (o.$typeUrl === CPU.typeUrl || ResourceValue.isSDK(o.units) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isSDK(o.attributes[0])));
  },
  isAmino(o: any): o is CPUAmino {
    return o && (o.$typeUrl === CPU.typeUrl || ResourceValue.isAmino(o.units) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isAmino(o.attributes[0])));
  },
  encode(message: CPU, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.units !== undefined) {
      ResourceValue.encode(message.units, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CPU {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPU();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.units = ResourceValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CPU {
    const obj = createBaseCPU();
    if (isSet(object.units)) obj.units = ResourceValue.fromJSON(object.units);
    if (Array.isArray(object?.attributes)) obj.attributes = object.attributes.map((e: any) => Attribute.fromJSON(e));
    return obj;
  },
  toJSON(message: CPU): JsonSafe<CPU> {
    const obj: any = {};
    message.units !== undefined && (obj.units = message.units ? ResourceValue.toJSON(message.units) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CPU>, I>>(object: I): CPU {
    const message = createBaseCPU();
    if (object.units !== undefined && object.units !== null) {
      message.units = ResourceValue.fromPartial(object.units);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: CPUSDKType): CPU {
    return {
      units: object.units ? ResourceValue.fromSDK(object.units) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): CPUSDKType {
    return {
      units: isSet(object.units) ? ResourceValue.fromSDKJSON(object.units) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: CPU): CPUSDKType {
    const obj: any = {};
    message.units !== undefined && (obj.units = message.units ? ResourceValue.toSDK(message.units) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: CPUAmino): CPU {
    const message = createBaseCPU();
    if (object.units !== undefined && object.units !== null) {
      message.units = ResourceValue.fromAmino(object.units);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CPU): CPUAmino {
    const obj: any = {};
    obj.units = message.units ? ResourceValue.toAmino(message.units) : undefined;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: CPUAminoMsg): CPU {
    return CPU.fromAmino(object.value);
  },
  toAminoMsg(message: CPU): CPUAminoMsg {
    return {
      type: "akash/base/cpu",
      value: CPU.toAmino(message)
    };
  },
  fromProtoMsg(message: CPUProtoMsg): CPU {
    return CPU.decode(message.value);
  },
  toProto(message: CPU): Uint8Array {
    return CPU.encode(message).finish();
  },
  toProtoMsg(message: CPU): CPUProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta1.CPU",
      value: CPU.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ResourceValue.registerTypeUrl();
    Attribute.registerTypeUrl();
  }
};
function createBaseMemory(): Memory {
  return {
    quantity: ResourceValue.fromPartial({}),
    attributes: []
  };
}
export const Memory = {
  typeUrl: "/akash.base.v1beta1.Memory",
  aminoType: "akash/base/memory",
  is(o: any): o is Memory {
    return o && (o.$typeUrl === Memory.typeUrl || ResourceValue.is(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.is(o.attributes[0])));
  },
  isSDK(o: any): o is MemorySDKType {
    return o && (o.$typeUrl === Memory.typeUrl || ResourceValue.isSDK(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isSDK(o.attributes[0])));
  },
  isAmino(o: any): o is MemoryAmino {
    return o && (o.$typeUrl === Memory.typeUrl || ResourceValue.isAmino(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isAmino(o.attributes[0])));
  },
  encode(message: Memory, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Memory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = ResourceValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Memory {
    const obj = createBaseMemory();
    if (isSet(object.quantity)) obj.quantity = ResourceValue.fromJSON(object.quantity);
    if (Array.isArray(object?.attributes)) obj.attributes = object.attributes.map((e: any) => Attribute.fromJSON(e));
    return obj;
  },
  toJSON(message: Memory): JsonSafe<Memory> {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = message.quantity ? ResourceValue.toJSON(message.quantity) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Memory>, I>>(object: I): Memory {
    const message = createBaseMemory();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromPartial(object.quantity);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MemorySDKType): Memory {
    return {
      quantity: object.quantity ? ResourceValue.fromSDK(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MemorySDKType {
    return {
      quantity: isSet(object.quantity) ? ResourceValue.fromSDKJSON(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Memory): MemorySDKType {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = message.quantity ? ResourceValue.toSDK(message.quantity) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: MemoryAmino): Memory {
    const message = createBaseMemory();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromAmino(object.quantity);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Memory): MemoryAmino {
    const obj: any = {};
    obj.quantity = message.quantity ? ResourceValue.toAmino(message.quantity) : ResourceValue.toAmino(ResourceValue.fromPartial({}));
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: MemoryAminoMsg): Memory {
    return Memory.fromAmino(object.value);
  },
  toAminoMsg(message: Memory): MemoryAminoMsg {
    return {
      type: "akash/base/memory",
      value: Memory.toAmino(message)
    };
  },
  fromProtoMsg(message: MemoryProtoMsg): Memory {
    return Memory.decode(message.value);
  },
  toProto(message: Memory): Uint8Array {
    return Memory.encode(message).finish();
  },
  toProtoMsg(message: Memory): MemoryProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta1.Memory",
      value: Memory.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ResourceValue.registerTypeUrl();
    Attribute.registerTypeUrl();
  }
};
function createBaseStorage(): Storage {
  return {
    quantity: ResourceValue.fromPartial({}),
    attributes: []
  };
}
export const Storage = {
  typeUrl: "/akash.base.v1beta1.Storage",
  aminoType: "akash/base/storage",
  is(o: any): o is Storage {
    return o && (o.$typeUrl === Storage.typeUrl || ResourceValue.is(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.is(o.attributes[0])));
  },
  isSDK(o: any): o is StorageSDKType {
    return o && (o.$typeUrl === Storage.typeUrl || ResourceValue.isSDK(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isSDK(o.attributes[0])));
  },
  isAmino(o: any): o is StorageAmino {
    return o && (o.$typeUrl === Storage.typeUrl || ResourceValue.isAmino(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isAmino(o.attributes[0])));
  },
  encode(message: Storage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Storage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = ResourceValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Storage {
    const obj = createBaseStorage();
    if (isSet(object.quantity)) obj.quantity = ResourceValue.fromJSON(object.quantity);
    if (Array.isArray(object?.attributes)) obj.attributes = object.attributes.map((e: any) => Attribute.fromJSON(e));
    return obj;
  },
  toJSON(message: Storage): JsonSafe<Storage> {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = message.quantity ? ResourceValue.toJSON(message.quantity) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Storage>, I>>(object: I): Storage {
    const message = createBaseStorage();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromPartial(object.quantity);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: StorageSDKType): Storage {
    return {
      quantity: object.quantity ? ResourceValue.fromSDK(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): StorageSDKType {
    return {
      quantity: isSet(object.quantity) ? ResourceValue.fromSDKJSON(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Storage): StorageSDKType {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = message.quantity ? ResourceValue.toSDK(message.quantity) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: StorageAmino): Storage {
    const message = createBaseStorage();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromAmino(object.quantity);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Storage): StorageAmino {
    const obj: any = {};
    obj.quantity = message.quantity ? ResourceValue.toAmino(message.quantity) : ResourceValue.toAmino(ResourceValue.fromPartial({}));
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: StorageAminoMsg): Storage {
    return Storage.fromAmino(object.value);
  },
  toAminoMsg(message: Storage): StorageAminoMsg {
    return {
      type: "akash/base/storage",
      value: Storage.toAmino(message)
    };
  },
  fromProtoMsg(message: StorageProtoMsg): Storage {
    return Storage.decode(message.value);
  },
  toProto(message: Storage): Uint8Array {
    return Storage.encode(message).finish();
  },
  toProtoMsg(message: Storage): StorageProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta1.Storage",
      value: Storage.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ResourceValue.registerTypeUrl();
    Attribute.registerTypeUrl();
  }
};
function createBaseResourceUnits(): ResourceUnits {
  return {
    cpu: undefined,
    memory: undefined,
    storage: undefined,
    endpoints: []
  };
}
export const ResourceUnits = {
  typeUrl: "/akash.base.v1beta1.ResourceUnits",
  aminoType: "akash/base/resource-units",
  is(o: any): o is ResourceUnits {
    return o && (o.$typeUrl === ResourceUnits.typeUrl || Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.is(o.endpoints[0])));
  },
  isSDK(o: any): o is ResourceUnitsSDKType {
    return o && (o.$typeUrl === ResourceUnits.typeUrl || Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.isSDK(o.endpoints[0])));
  },
  isAmino(o: any): o is ResourceUnitsAmino {
    return o && (o.$typeUrl === ResourceUnits.typeUrl || Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.isAmino(o.endpoints[0])));
  },
  encode(message: ResourceUnits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cpu !== undefined) {
      CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
    }
    if (message.storage !== undefined) {
      Storage.encode(message.storage, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResourceUnits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cpu = CPU.decode(reader, reader.uint32());
          break;
        case 2:
          message.memory = Memory.decode(reader, reader.uint32());
          break;
        case 3:
          message.storage = Storage.decode(reader, reader.uint32());
          break;
        case 4:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResourceUnits {
    const obj = createBaseResourceUnits();
    if (isSet(object.cpu)) obj.cpu = CPU.fromJSON(object.cpu);
    if (isSet(object.memory)) obj.memory = Memory.fromJSON(object.memory);
    if (isSet(object.storage)) obj.storage = Storage.fromJSON(object.storage);
    if (Array.isArray(object?.endpoints)) obj.endpoints = object.endpoints.map((e: any) => Endpoint.fromJSON(e));
    return obj;
  },
  toJSON(message: ResourceUnits): JsonSafe<ResourceUnits> {
    const obj: any = {};
    message.cpu !== undefined && (obj.cpu = message.cpu ? CPU.toJSON(message.cpu) : undefined);
    message.memory !== undefined && (obj.memory = message.memory ? Memory.toJSON(message.memory) : undefined);
    message.storage !== undefined && (obj.storage = message.storage ? Storage.toJSON(message.storage) : undefined);
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toJSON(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResourceUnits>, I>>(object: I): ResourceUnits {
    const message = createBaseResourceUnits();
    if (object.cpu !== undefined && object.cpu !== null) {
      message.cpu = CPU.fromPartial(object.cpu);
    }
    if (object.memory !== undefined && object.memory !== null) {
      message.memory = Memory.fromPartial(object.memory);
    }
    if (object.storage !== undefined && object.storage !== null) {
      message.storage = Storage.fromPartial(object.storage);
    }
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ResourceUnitsSDKType): ResourceUnits {
    return {
      cpu: object.cpu ? CPU.fromSDK(object.cpu) : undefined,
      memory: object.memory ? Memory.fromSDK(object.memory) : undefined,
      storage: object.storage ? Storage.fromSDK(object.storage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): ResourceUnitsSDKType {
    return {
      cpu: isSet(object.cpu) ? CPU.fromSDKJSON(object.cpu) : undefined,
      memory: isSet(object.memory) ? Memory.fromSDKJSON(object.memory) : undefined,
      storage: isSet(object.storage) ? Storage.fromSDKJSON(object.storage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: ResourceUnits): ResourceUnitsSDKType {
    const obj: any = {};
    message.cpu !== undefined && (obj.cpu = message.cpu ? CPU.toSDK(message.cpu) : undefined);
    message.memory !== undefined && (obj.memory = message.memory ? Memory.toSDK(message.memory) : undefined);
    message.storage !== undefined && (obj.storage = message.storage ? Storage.toSDK(message.storage) : undefined);
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toSDK(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    return obj;
  },
  fromAmino(object: ResourceUnitsAmino): ResourceUnits {
    const message = createBaseResourceUnits();
    if (object.cpu !== undefined && object.cpu !== null) {
      message.cpu = CPU.fromAmino(object.cpu);
    }
    if (object.memory !== undefined && object.memory !== null) {
      message.memory = Memory.fromAmino(object.memory);
    }
    if (object.storage !== undefined && object.storage !== null) {
      message.storage = Storage.fromAmino(object.storage);
    }
    message.endpoints = object.endpoints?.map(e => Endpoint.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ResourceUnits): ResourceUnitsAmino {
    const obj: any = {};
    obj.cpu = message.cpu ? CPU.toAmino(message.cpu) : undefined;
    obj.memory = message.memory ? Memory.toAmino(message.memory) : undefined;
    obj.storage = message.storage ? Storage.toAmino(message.storage) : undefined;
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toAmino(e) : undefined);
    } else {
      obj.endpoints = message.endpoints;
    }
    return obj;
  },
  fromAminoMsg(object: ResourceUnitsAminoMsg): ResourceUnits {
    return ResourceUnits.fromAmino(object.value);
  },
  toAminoMsg(message: ResourceUnits): ResourceUnitsAminoMsg {
    return {
      type: "akash/base/resource-units",
      value: ResourceUnits.toAmino(message)
    };
  },
  fromProtoMsg(message: ResourceUnitsProtoMsg): ResourceUnits {
    return ResourceUnits.decode(message.value);
  },
  toProto(message: ResourceUnits): Uint8Array {
    return ResourceUnits.encode(message).finish();
  },
  toProtoMsg(message: ResourceUnits): ResourceUnitsProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta1.ResourceUnits",
      value: ResourceUnits.encode(message).finish()
    };
  },
  registerTypeUrl() {
    CPU.registerTypeUrl();
    Memory.registerTypeUrl();
    Storage.registerTypeUrl();
    Endpoint.registerTypeUrl();
  }
};