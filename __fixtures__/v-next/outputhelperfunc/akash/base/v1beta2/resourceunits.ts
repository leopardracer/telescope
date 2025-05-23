import { CPU, CPUAmino, CPUSDKType, Memory, MemoryAmino, MemorySDKType, Storage, StorageAmino, StorageSDKType } from "./resource";
import { Endpoint, EndpointAmino, EndpointSDKType } from "./endpoint";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "akash.base.v1beta2";
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnits {
  cpu?: CPU;
  memory?: Memory;
  storage: Storage[];
  endpoints: Endpoint[];
}
export interface ResourceUnitsProtoMsg {
  typeUrl: "/akash.base.v1beta2.ResourceUnits";
  value: Uint8Array;
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnitsAmino {
  cpu?: CPUAmino;
  memory?: MemoryAmino;
  storage?: StorageAmino[];
  endpoints: EndpointAmino[];
}
export interface ResourceUnitsAminoMsg {
  type: "akash/base/v1beta2/resource-units";
  value: ResourceUnitsAmino;
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnitsSDKType {
  cpu?: CPUSDKType;
  memory?: MemorySDKType;
  storage: StorageSDKType[];
  endpoints: EndpointSDKType[];
}
function createBaseResourceUnits(): ResourceUnits {
  return {
    cpu: undefined,
    memory: undefined,
    storage: [],
    endpoints: []
  };
}
export const ResourceUnits = {
  typeUrl: "/akash.base.v1beta2.ResourceUnits",
  aminoType: "akash/base/v1beta2/resource-units",
  is(o: any): o is ResourceUnits {
    return o && (o.$typeUrl === ResourceUnits.typeUrl || Array.isArray(o.storage) && (!o.storage.length || Storage.is(o.storage[0])) && Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.is(o.endpoints[0])));
  },
  isSDK(o: any): o is ResourceUnitsSDKType {
    return o && (o.$typeUrl === ResourceUnits.typeUrl || Array.isArray(o.storage) && (!o.storage.length || Storage.isSDK(o.storage[0])) && Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.isSDK(o.endpoints[0])));
  },
  isAmino(o: any): o is ResourceUnitsAmino {
    return o && (o.$typeUrl === ResourceUnits.typeUrl || Array.isArray(o.storage) && (!o.storage.length || Storage.isAmino(o.storage[0])) && Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.isAmino(o.endpoints[0])));
  },
  encode(message: ResourceUnits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cpu !== undefined) {
      CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.storage) {
      Storage.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.storage.push(Storage.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.storage)) obj.storage = object.storage.map((e: any) => Storage.fromJSON(e));
    if (Array.isArray(object?.endpoints)) obj.endpoints = object.endpoints.map((e: any) => Endpoint.fromJSON(e));
    return obj;
  },
  toJSON(message: ResourceUnits): JsonSafe<ResourceUnits> {
    const obj: any = {};
    message.cpu !== undefined && (obj.cpu = message.cpu ? CPU.toJSON(message.cpu) : undefined);
    message.memory !== undefined && (obj.memory = message.memory ? Memory.toJSON(message.memory) : undefined);
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? Storage.toJSON(e) : undefined);
    } else {
      obj.storage = [];
    }
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
    message.storage = object.storage?.map(e => Storage.fromPartial(e)) || [];
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ResourceUnitsSDKType): ResourceUnits {
    return {
      cpu: object.cpu ? CPU.fromSDK(object.cpu) : undefined,
      memory: object.memory ? Memory.fromSDK(object.memory) : undefined,
      storage: Array.isArray(object?.storage) ? object.storage.map((e: any) => Storage.fromSDK(e)) : [],
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): ResourceUnitsSDKType {
    return {
      cpu: isSet(object.cpu) ? CPU.fromSDKJSON(object.cpu) : undefined,
      memory: isSet(object.memory) ? Memory.fromSDKJSON(object.memory) : undefined,
      storage: Array.isArray(object?.storage) ? object.storage.map((e: any) => Storage.fromSDKJSON(e)) : [],
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: ResourceUnits): ResourceUnitsSDKType {
    const obj: any = {};
    message.cpu !== undefined && (obj.cpu = message.cpu ? CPU.toSDK(message.cpu) : undefined);
    message.memory !== undefined && (obj.memory = message.memory ? Memory.toSDK(message.memory) : undefined);
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? Storage.toSDK(e) : undefined);
    } else {
      obj.storage = [];
    }
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
    message.storage = object.storage?.map(e => Storage.fromAmino(e)) || [];
    message.endpoints = object.endpoints?.map(e => Endpoint.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ResourceUnits): ResourceUnitsAmino {
    const obj: any = {};
    obj.cpu = message.cpu ? CPU.toAmino(message.cpu) : undefined;
    obj.memory = message.memory ? Memory.toAmino(message.memory) : undefined;
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? Storage.toAmino(e) : undefined);
    } else {
      obj.storage = message.storage;
    }
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
      type: "akash/base/v1beta2/resource-units",
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
      typeUrl: "/akash.base.v1beta2.ResourceUnits",
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