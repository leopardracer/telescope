import { PlacementRequirements, PlacementRequirementsAmino, PlacementRequirementsSDKType } from "../../base/v1beta2/attribute";
import { Resource, ResourceAmino, ResourceSDKType } from "./resource";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "akash.deployment.v1beta2";
/** GroupSpec stores group specifications */
export interface GroupSpec {
  name: string;
  requirements: PlacementRequirements;
  resources: Resource[];
}
export interface GroupSpecProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.GroupSpec";
  value: Uint8Array;
}
/** GroupSpec stores group specifications */
export interface GroupSpecAmino {
  name: string;
  requirements: PlacementRequirementsAmino;
  resources: ResourceAmino[];
}
export interface GroupSpecAminoMsg {
  type: "akash/deployment/v1beta2/group-spec";
  value: GroupSpecAmino;
}
/** GroupSpec stores group specifications */
export interface GroupSpecSDKType {
  name: string;
  requirements: PlacementRequirementsSDKType;
  resources: ResourceSDKType[];
}
function createBaseGroupSpec(): GroupSpec {
  return {
    name: "",
    requirements: PlacementRequirements.fromPartial({}),
    resources: []
  };
}
export const GroupSpec = {
  typeUrl: "/akash.deployment.v1beta2.GroupSpec",
  aminoType: "akash/deployment/v1beta2/group-spec",
  is(o: any): o is GroupSpec {
    return o && (o.$typeUrl === GroupSpec.typeUrl || typeof o.name === "string" && PlacementRequirements.is(o.requirements) && Array.isArray(o.resources) && (!o.resources.length || Resource.is(o.resources[0])));
  },
  isSDK(o: any): o is GroupSpecSDKType {
    return o && (o.$typeUrl === GroupSpec.typeUrl || typeof o.name === "string" && PlacementRequirements.isSDK(o.requirements) && Array.isArray(o.resources) && (!o.resources.length || Resource.isSDK(o.resources[0])));
  },
  isAmino(o: any): o is GroupSpecAmino {
    return o && (o.$typeUrl === GroupSpec.typeUrl || typeof o.name === "string" && PlacementRequirements.isAmino(o.requirements) && Array.isArray(o.resources) && (!o.resources.length || Resource.isAmino(o.resources[0])));
  },
  encode(message: GroupSpec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.requirements !== undefined) {
      PlacementRequirements.encode(message.requirements, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GroupSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.requirements = PlacementRequirements.decode(reader, reader.uint32());
          break;
        case 3:
          message.resources.push(Resource.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GroupSpec {
    const obj = createBaseGroupSpec();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.requirements)) obj.requirements = PlacementRequirements.fromJSON(object.requirements);
    if (Array.isArray(object?.resources)) obj.resources = object.resources.map((e: any) => Resource.fromJSON(e));
    return obj;
  },
  toJSON(message: GroupSpec): JsonSafe<GroupSpec> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.requirements !== undefined && (obj.requirements = message.requirements ? PlacementRequirements.toJSON(message.requirements) : undefined);
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? Resource.toJSON(e) : undefined);
    } else {
      obj.resources = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GroupSpec>, I>>(object: I): GroupSpec {
    const message = createBaseGroupSpec();
    message.name = object.name ?? "";
    if (object.requirements !== undefined && object.requirements !== null) {
      message.requirements = PlacementRequirements.fromPartial(object.requirements);
    }
    message.resources = object.resources?.map(e => Resource.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GroupSpecSDKType): GroupSpec {
    return {
      name: object?.name,
      requirements: object.requirements ? PlacementRequirements.fromSDK(object.requirements) : undefined,
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Resource.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GroupSpecSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      requirements: isSet(object.requirements) ? PlacementRequirements.fromSDKJSON(object.requirements) : undefined,
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Resource.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GroupSpec): GroupSpecSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.requirements !== undefined && (obj.requirements = message.requirements ? PlacementRequirements.toSDK(message.requirements) : undefined);
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? Resource.toSDK(e) : undefined);
    } else {
      obj.resources = [];
    }
    return obj;
  },
  fromAmino(object: GroupSpecAmino): GroupSpec {
    const message = createBaseGroupSpec();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.requirements !== undefined && object.requirements !== null) {
      message.requirements = PlacementRequirements.fromAmino(object.requirements);
    }
    message.resources = object.resources?.map(e => Resource.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GroupSpec): GroupSpecAmino {
    const obj: any = {};
    obj.name = message.name ?? "";
    obj.requirements = message.requirements ? PlacementRequirements.toAmino(message.requirements) : PlacementRequirements.toAmino(PlacementRequirements.fromPartial({}));
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? Resource.toAmino(e) : undefined);
    } else {
      obj.resources = message.resources;
    }
    return obj;
  },
  fromAminoMsg(object: GroupSpecAminoMsg): GroupSpec {
    return GroupSpec.fromAmino(object.value);
  },
  toAminoMsg(message: GroupSpec): GroupSpecAminoMsg {
    return {
      type: "akash/deployment/v1beta2/group-spec",
      value: GroupSpec.toAmino(message)
    };
  },
  fromProtoMsg(message: GroupSpecProtoMsg): GroupSpec {
    return GroupSpec.decode(message.value);
  },
  toProto(message: GroupSpec): Uint8Array {
    return GroupSpec.encode(message).finish();
  },
  toProtoMsg(message: GroupSpec): GroupSpecProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.GroupSpec",
      value: GroupSpec.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PlacementRequirements.registerTypeUrl();
    Resource.registerTypeUrl();
  }
};