//@ts-nocheck
/* eslint-disable */
import { GroupSpec, GroupSpecAmino, GroupSpecSDKType, GroupID, GroupIDSDKType } from "./group";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, bytesFromBase64, base64FromBytes, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
export const protobufPackage = "akash.deployment.v1beta1";
/** State is an enum which refers to state of deployment */
export enum Deployment_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** active - DeploymentActive denotes state for deployment active */
  active = 1,
  /** closed - DeploymentClosed denotes state for deployment closed */
  closed = 2,
  UNRECOGNIZED = -1,
}
export const Deployment_StateSDKType = Deployment_State;
export const Deployment_StateAmino = Deployment_State;
export function deployment_StateFromJSON(object: any): Deployment_State {
  switch (object) {
    case 0:
    case "invalid":
      return Deployment_State.invalid;
    case 1:
    case "active":
      return Deployment_State.active;
    case 2:
    case "closed":
      return Deployment_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Deployment_State.UNRECOGNIZED;
  }
}
export function deployment_StateToJSON(object: Deployment_State): string {
  switch (object) {
    case Deployment_State.invalid:
      return "invalid";
    case Deployment_State.active:
      return "active";
    case Deployment_State.closed:
      return "closed";
    case Deployment_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeployment {
  id: DeploymentID | undefined;
  groups: GroupSpec[];
  version: Uint8Array;
  deposit: Coin | undefined;
}
export interface MsgCreateDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment";
  value: Uint8Array;
}
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeploymentAmino {
  id: DeploymentIDAmino | undefined;
  groups: GroupSpecAmino[];
  version: string;
  deposit: CoinAmino | undefined;
}
export interface MsgCreateDeploymentAminoMsg {
  type: "akash/deployment/testonly-create-deployment";
  value: MsgCreateDeploymentAmino;
}
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeploymentSDKType {
  id: DeploymentIDSDKType | undefined;
  groups: GroupSpecSDKType[];
  version: Uint8Array;
  deposit: CoinSDKType | undefined;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {}
export interface MsgCreateDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse";
  value: Uint8Array;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponseAmino {}
export interface MsgCreateDeploymentResponseAminoMsg {
  type: "akash/deployment/testonly-create-deployment-response";
  value: MsgCreateDeploymentResponseAmino;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponseSDKType {}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
  id: DeploymentID | undefined;
  amount: Coin | undefined;
}
export interface MsgDepositDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment";
  value: Uint8Array;
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeploymentAmino {
  id: DeploymentIDAmino | undefined;
  amount: CoinAmino | undefined;
}
export interface MsgDepositDeploymentAminoMsg {
  type: "akash/deployment/testonly-deposit-deployment";
  value: MsgDepositDeploymentAmino;
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeploymentSDKType {
  id: DeploymentIDSDKType | undefined;
  amount: CoinSDKType | undefined;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {}
export interface MsgDepositDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse";
  value: Uint8Array;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponseAmino {}
export interface MsgDepositDeploymentResponseAminoMsg {
  type: "akash/deployment/testonly-deposit-deployment-response";
  value: MsgDepositDeploymentResponseAmino;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponseSDKType {}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
  id: DeploymentID | undefined;
  groups: GroupSpec[];
  version: Uint8Array;
}
export interface MsgUpdateDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment";
  value: Uint8Array;
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeploymentAmino {
  id: DeploymentIDAmino | undefined;
  groups: GroupSpecAmino[];
  version: string;
}
export interface MsgUpdateDeploymentAminoMsg {
  type: "akash/deployment/testonly-update-deployment";
  value: MsgUpdateDeploymentAmino;
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeploymentSDKType {
  id: DeploymentIDSDKType | undefined;
  groups: GroupSpecSDKType[];
  version: Uint8Array;
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponse {}
export interface MsgUpdateDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse";
  value: Uint8Array;
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponseAmino {}
export interface MsgUpdateDeploymentResponseAminoMsg {
  type: "akash/deployment/testonly-update-deployment-response";
  value: MsgUpdateDeploymentResponseAmino;
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponseSDKType {}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeployment {
  id: DeploymentID | undefined;
}
export interface MsgCloseDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment";
  value: Uint8Array;
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeploymentAmino {
  id: DeploymentIDAmino | undefined;
}
export interface MsgCloseDeploymentAminoMsg {
  type: "akash/deployment/testonly-close-deployment";
  value: MsgCloseDeploymentAmino;
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeploymentSDKType {
  id: DeploymentIDSDKType | undefined;
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponse {}
export interface MsgCloseDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse";
  value: Uint8Array;
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponseAmino {}
export interface MsgCloseDeploymentResponseAminoMsg {
  type: "akash/deployment/testonly-close-deployment-response";
  value: MsgCloseDeploymentResponseAmino;
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponseSDKType {}
/** DeploymentID stores owner and sequence number */
export interface DeploymentID {
  owner: string;
  dseq: bigint;
}
export interface DeploymentIDProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.DeploymentID";
  value: Uint8Array;
}
/** DeploymentID stores owner and sequence number */
export interface DeploymentIDAmino {
  owner: string;
  dseq: string;
}
export interface DeploymentIDAminoMsg {
  type: "akash/deployment/deployment-i-d";
  value: DeploymentIDAmino;
}
/** DeploymentID stores owner and sequence number */
export interface DeploymentIDSDKType {
  owner: string;
  dseq: bigint;
}
/** Deployment stores deploymentID, state and version details */
export interface Deployment {
  deploymentId: DeploymentID | undefined;
  state: Deployment_State;
  version: Uint8Array;
  createdAt: bigint;
}
export interface DeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.Deployment";
  value: Uint8Array;
}
/** Deployment stores deploymentID, state and version details */
export interface DeploymentAmino {
  deployment_id: DeploymentIDAmino | undefined;
  state: Deployment_State;
  version: string;
  created_at?: string;
}
export interface DeploymentAminoMsg {
  type: "akash/deployment/deployment";
  value: DeploymentAmino;
}
/** Deployment stores deploymentID, state and version details */
export interface DeploymentSDKType {
  deployment_id: DeploymentIDSDKType | undefined;
  state: Deployment_State;
  version: Uint8Array;
  created_at: bigint;
}
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFilters {
  owner: string;
  dseq: bigint;
  state: string;
}
export interface DeploymentFiltersProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.DeploymentFilters";
  value: Uint8Array;
}
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFiltersAmino {
  owner: string;
  dseq: string;
  state: string;
}
export interface DeploymentFiltersAminoMsg {
  type: "akash/deployment/deployment-filters";
  value: DeploymentFiltersAmino;
}
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFiltersSDKType {
  owner: string;
  dseq: bigint;
  state: string;
}
function createBaseMsgCreateDeployment(): MsgCreateDeployment {
  return {
    id: DeploymentID.fromPartial({}),
    groups: [],
    version: new Uint8Array(),
    deposit: Coin.fromPartial({})
  };
}
export const MsgCreateDeployment = {
  typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
  aminoType: "akash/deployment/testonly-create-deployment",
  is(o: any): o is MsgCreateDeployment {
    return o && (o.$typeUrl === MsgCreateDeployment.typeUrl || DeploymentID.is(o.id) && Array.isArray(o.groups) && (!o.groups.length || GroupSpec.is(o.groups[0])) && (o.version instanceof Uint8Array || typeof o.version === "string") && Coin.is(o.deposit));
  },
  isSDK(o: any): o is MsgCreateDeploymentSDKType {
    return o && (o.$typeUrl === MsgCreateDeployment.typeUrl || DeploymentID.isSDK(o.id) && Array.isArray(o.groups) && (!o.groups.length || GroupSpec.isSDK(o.groups[0])) && (o.version instanceof Uint8Array || typeof o.version === "string") && Coin.isSDK(o.deposit));
  },
  encode(message: MsgCreateDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      GroupSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        case 2:
          message.groups.push(GroupSpec.decode(reader, reader.uint32()));
          break;
        case 3:
          message.version = reader.bytes();
          break;
        case 4:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateDeployment {
    const obj = createBaseMsgCreateDeployment();
    if (isSet(object.id)) obj.id = DeploymentID.fromJSON(object.id);
    if (Array.isArray(object?.groups)) obj.groups = object.groups.map((e: any) => GroupSpec.fromJSON(e));
    if (isSet(object.version)) obj.version = bytesFromBase64(object.version);
    if (isSet(object.deposit)) obj.deposit = Coin.fromJSON(object.deposit);
    return obj;
  },
  toJSON(message: MsgCreateDeployment): JsonSafe<MsgCreateDeployment> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.version !== undefined && (obj.version = base64FromBytes(message.version !== undefined ? message.version : new Uint8Array()));
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgCreateDeployment>, I>>(object: I): MsgCreateDeployment {
    const message = createBaseMsgCreateDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    }
    message.groups = object.groups?.map(e => GroupSpec.fromPartial(e)) || [];
    message.version = object.version ?? new Uint8Array();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromPartial(object.deposit);
    }
    return message;
  },
  fromSDK(object: MsgCreateDeploymentSDKType): MsgCreateDeployment {
    return {
      id: object.id ? DeploymentID.fromSDK(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupSpec.fromSDK(e)) : [],
      version: object?.version,
      deposit: object.deposit ? Coin.fromSDK(object.deposit) : undefined
    };
  },
  fromSDKJSON(object: any): MsgCreateDeploymentSDKType {
    return {
      id: isSet(object.id) ? DeploymentID.fromSDKJSON(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupSpec.fromSDKJSON(e)) : [],
      version: isSet(object.version) ? bytesFromBase64(object.version) : new Uint8Array(),
      deposit: isSet(object.deposit) ? Coin.fromSDKJSON(object.deposit) : undefined
    };
  },
  toSDK(message: MsgCreateDeployment): MsgCreateDeploymentSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toSDK(e) : undefined);
    } else {
      obj.groups = [];
    }
    obj.version = message.version;
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toSDK(message.deposit) : undefined);
    return obj;
  },
  fromAmino(object: MsgCreateDeploymentAmino): MsgCreateDeployment {
    const message = createBaseMsgCreateDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    message.groups = object.groups?.map(e => GroupSpec.fromAmino(e)) || [];
    if (object.version !== undefined && object.version !== null) {
      message.version = bytesFromBase64(object.version);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: MsgCreateDeployment): MsgCreateDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toAmino(e) : undefined);
    } else {
      obj.groups = message.groups;
    }
    obj.version = message.version ? base64FromBytes(message.version) : "";
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgCreateDeploymentAminoMsg): MsgCreateDeployment {
    return MsgCreateDeployment.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateDeployment): MsgCreateDeploymentAminoMsg {
    return {
      type: "akash/deployment/testonly-create-deployment",
      value: MsgCreateDeployment.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateDeploymentProtoMsg): MsgCreateDeployment {
    return MsgCreateDeployment.decode(message.value);
  },
  toProto(message: MsgCreateDeployment): Uint8Array {
    return MsgCreateDeployment.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDeployment): MsgCreateDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
      value: MsgCreateDeployment.encode(message).finish()
    };
  },
  registerTypeUrl() {
    DeploymentID.registerTypeUrl();
    GroupSpec.registerTypeUrl();
    Coin.registerTypeUrl();
  }
};
function createBaseMsgCreateDeploymentResponse(): MsgCreateDeploymentResponse {
  return {};
}
export const MsgCreateDeploymentResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse",
  aminoType: "akash/deployment/testonly-create-deployment-response",
  is(o: any): o is MsgCreateDeploymentResponse {
    return o && o.$typeUrl === MsgCreateDeploymentResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateDeploymentResponseSDKType {
    return o && o.$typeUrl === MsgCreateDeploymentResponse.typeUrl;
  },
  encode(_: MsgCreateDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDeploymentResponse();
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
  fromJSON(_: any): MsgCreateDeploymentResponse {
    const obj = createBaseMsgCreateDeploymentResponse();
    return obj;
  },
  toJSON(_: MsgCreateDeploymentResponse): JsonSafe<MsgCreateDeploymentResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgCreateDeploymentResponse>, I>>(_: I): MsgCreateDeploymentResponse {
    const message = createBaseMsgCreateDeploymentResponse();
    return message;
  },
  fromSDK(_: MsgCreateDeploymentResponseSDKType): MsgCreateDeploymentResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgCreateDeploymentResponseSDKType {
    return {};
  },
  toSDK(_: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateDeploymentResponseAmino): MsgCreateDeploymentResponse {
    const message = createBaseMsgCreateDeploymentResponse();
    return message;
  },
  toAmino(_: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateDeploymentResponseAminoMsg): MsgCreateDeploymentResponse {
    return MsgCreateDeploymentResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseAminoMsg {
    return {
      type: "akash/deployment/testonly-create-deployment-response",
      value: MsgCreateDeploymentResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateDeploymentResponseProtoMsg): MsgCreateDeploymentResponse {
    return MsgCreateDeploymentResponse.decode(message.value);
  },
  toProto(message: MsgCreateDeploymentResponse): Uint8Array {
    return MsgCreateDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse",
      value: MsgCreateDeploymentResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDepositDeployment(): MsgDepositDeployment {
  return {
    id: DeploymentID.fromPartial({}),
    amount: Coin.fromPartial({})
  };
}
export const MsgDepositDeployment = {
  typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
  aminoType: "akash/deployment/testonly-deposit-deployment",
  is(o: any): o is MsgDepositDeployment {
    return o && (o.$typeUrl === MsgDepositDeployment.typeUrl || DeploymentID.is(o.id) && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgDepositDeploymentSDKType {
    return o && (o.$typeUrl === MsgDepositDeployment.typeUrl || DeploymentID.isSDK(o.id) && Coin.isSDK(o.amount));
  },
  encode(message: MsgDepositDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDepositDeployment {
    const obj = createBaseMsgDepositDeployment();
    if (isSet(object.id)) obj.id = DeploymentID.fromJSON(object.id);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: MsgDepositDeployment): JsonSafe<MsgDepositDeployment> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgDepositDeployment>, I>>(object: I): MsgDepositDeployment {
    const message = createBaseMsgDepositDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
  fromSDK(object: MsgDepositDeploymentSDKType): MsgDepositDeployment {
    return {
      id: object.id ? DeploymentID.fromSDK(object.id) : undefined,
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined
    };
  },
  fromSDKJSON(object: any): MsgDepositDeploymentSDKType {
    return {
      id: isSet(object.id) ? DeploymentID.fromSDKJSON(object.id) : undefined,
      amount: isSet(object.amount) ? Coin.fromSDKJSON(object.amount) : undefined
    };
  },
  toSDK(message: MsgDepositDeployment): MsgDepositDeploymentSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    return obj;
  },
  fromAmino(object: MsgDepositDeploymentAmino): MsgDepositDeployment {
    const message = createBaseMsgDepositDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgDepositDeployment): MsgDepositDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgDepositDeploymentAminoMsg): MsgDepositDeployment {
    return MsgDepositDeployment.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDepositDeployment): MsgDepositDeploymentAminoMsg {
    return {
      type: "akash/deployment/testonly-deposit-deployment",
      value: MsgDepositDeployment.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDepositDeploymentProtoMsg): MsgDepositDeployment {
    return MsgDepositDeployment.decode(message.value);
  },
  toProto(message: MsgDepositDeployment): Uint8Array {
    return MsgDepositDeployment.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositDeployment): MsgDepositDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
      value: MsgDepositDeployment.encode(message).finish()
    };
  },
  registerTypeUrl() {
    DeploymentID.registerTypeUrl();
    Coin.registerTypeUrl();
  }
};
function createBaseMsgDepositDeploymentResponse(): MsgDepositDeploymentResponse {
  return {};
}
export const MsgDepositDeploymentResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse",
  aminoType: "akash/deployment/testonly-deposit-deployment-response",
  is(o: any): o is MsgDepositDeploymentResponse {
    return o && o.$typeUrl === MsgDepositDeploymentResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDepositDeploymentResponseSDKType {
    return o && o.$typeUrl === MsgDepositDeploymentResponse.typeUrl;
  },
  encode(_: MsgDepositDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositDeploymentResponse();
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
  fromJSON(_: any): MsgDepositDeploymentResponse {
    const obj = createBaseMsgDepositDeploymentResponse();
    return obj;
  },
  toJSON(_: MsgDepositDeploymentResponse): JsonSafe<MsgDepositDeploymentResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgDepositDeploymentResponse>, I>>(_: I): MsgDepositDeploymentResponse {
    const message = createBaseMsgDepositDeploymentResponse();
    return message;
  },
  fromSDK(_: MsgDepositDeploymentResponseSDKType): MsgDepositDeploymentResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgDepositDeploymentResponseSDKType {
    return {};
  },
  toSDK(_: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDepositDeploymentResponseAmino): MsgDepositDeploymentResponse {
    const message = createBaseMsgDepositDeploymentResponse();
    return message;
  },
  toAmino(_: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositDeploymentResponseAminoMsg): MsgDepositDeploymentResponse {
    return MsgDepositDeploymentResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseAminoMsg {
    return {
      type: "akash/deployment/testonly-deposit-deployment-response",
      value: MsgDepositDeploymentResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDepositDeploymentResponseProtoMsg): MsgDepositDeploymentResponse {
    return MsgDepositDeploymentResponse.decode(message.value);
  },
  toProto(message: MsgDepositDeploymentResponse): Uint8Array {
    return MsgDepositDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse",
      value: MsgDepositDeploymentResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateDeployment(): MsgUpdateDeployment {
  return {
    id: DeploymentID.fromPartial({}),
    groups: [],
    version: new Uint8Array()
  };
}
export const MsgUpdateDeployment = {
  typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
  aminoType: "akash/deployment/testonly-update-deployment",
  is(o: any): o is MsgUpdateDeployment {
    return o && (o.$typeUrl === MsgUpdateDeployment.typeUrl || DeploymentID.is(o.id) && Array.isArray(o.groups) && (!o.groups.length || GroupSpec.is(o.groups[0])) && (o.version instanceof Uint8Array || typeof o.version === "string"));
  },
  isSDK(o: any): o is MsgUpdateDeploymentSDKType {
    return o && (o.$typeUrl === MsgUpdateDeployment.typeUrl || DeploymentID.isSDK(o.id) && Array.isArray(o.groups) && (!o.groups.length || GroupSpec.isSDK(o.groups[0])) && (o.version instanceof Uint8Array || typeof o.version === "string"));
  },
  encode(message: MsgUpdateDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      GroupSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        case 2:
          message.groups.push(GroupSpec.decode(reader, reader.uint32()));
          break;
        case 3:
          message.version = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateDeployment {
    const obj = createBaseMsgUpdateDeployment();
    if (isSet(object.id)) obj.id = DeploymentID.fromJSON(object.id);
    if (Array.isArray(object?.groups)) obj.groups = object.groups.map((e: any) => GroupSpec.fromJSON(e));
    if (isSet(object.version)) obj.version = bytesFromBase64(object.version);
    return obj;
  },
  toJSON(message: MsgUpdateDeployment): JsonSafe<MsgUpdateDeployment> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.version !== undefined && (obj.version = base64FromBytes(message.version !== undefined ? message.version : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgUpdateDeployment>, I>>(object: I): MsgUpdateDeployment {
    const message = createBaseMsgUpdateDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    }
    message.groups = object.groups?.map(e => GroupSpec.fromPartial(e)) || [];
    message.version = object.version ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgUpdateDeploymentSDKType): MsgUpdateDeployment {
    return {
      id: object.id ? DeploymentID.fromSDK(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupSpec.fromSDK(e)) : [],
      version: object?.version
    };
  },
  fromSDKJSON(object: any): MsgUpdateDeploymentSDKType {
    return {
      id: isSet(object.id) ? DeploymentID.fromSDKJSON(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupSpec.fromSDKJSON(e)) : [],
      version: isSet(object.version) ? bytesFromBase64(object.version) : new Uint8Array()
    };
  },
  toSDK(message: MsgUpdateDeployment): MsgUpdateDeploymentSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toSDK(e) : undefined);
    } else {
      obj.groups = [];
    }
    obj.version = message.version;
    return obj;
  },
  fromAmino(object: MsgUpdateDeploymentAmino): MsgUpdateDeployment {
    const message = createBaseMsgUpdateDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    message.groups = object.groups?.map(e => GroupSpec.fromAmino(e)) || [];
    if (object.version !== undefined && object.version !== null) {
      message.version = bytesFromBase64(object.version);
    }
    return message;
  },
  toAmino(message: MsgUpdateDeployment): MsgUpdateDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toAmino(e) : undefined);
    } else {
      obj.groups = message.groups;
    }
    obj.version = message.version ? base64FromBytes(message.version) : "";
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDeploymentAminoMsg): MsgUpdateDeployment {
    return MsgUpdateDeployment.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateDeployment): MsgUpdateDeploymentAminoMsg {
    return {
      type: "akash/deployment/testonly-update-deployment",
      value: MsgUpdateDeployment.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateDeploymentProtoMsg): MsgUpdateDeployment {
    return MsgUpdateDeployment.decode(message.value);
  },
  toProto(message: MsgUpdateDeployment): Uint8Array {
    return MsgUpdateDeployment.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDeployment): MsgUpdateDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
      value: MsgUpdateDeployment.encode(message).finish()
    };
  },
  registerTypeUrl() {
    DeploymentID.registerTypeUrl();
    GroupSpec.registerTypeUrl();
  }
};
function createBaseMsgUpdateDeploymentResponse(): MsgUpdateDeploymentResponse {
  return {};
}
export const MsgUpdateDeploymentResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse",
  aminoType: "akash/deployment/testonly-update-deployment-response",
  is(o: any): o is MsgUpdateDeploymentResponse {
    return o && o.$typeUrl === MsgUpdateDeploymentResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateDeploymentResponseSDKType {
    return o && o.$typeUrl === MsgUpdateDeploymentResponse.typeUrl;
  },
  encode(_: MsgUpdateDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDeploymentResponse();
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
  fromJSON(_: any): MsgUpdateDeploymentResponse {
    const obj = createBaseMsgUpdateDeploymentResponse();
    return obj;
  },
  toJSON(_: MsgUpdateDeploymentResponse): JsonSafe<MsgUpdateDeploymentResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgUpdateDeploymentResponse>, I>>(_: I): MsgUpdateDeploymentResponse {
    const message = createBaseMsgUpdateDeploymentResponse();
    return message;
  },
  fromSDK(_: MsgUpdateDeploymentResponseSDKType): MsgUpdateDeploymentResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgUpdateDeploymentResponseSDKType {
    return {};
  },
  toSDK(_: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUpdateDeploymentResponseAmino): MsgUpdateDeploymentResponse {
    const message = createBaseMsgUpdateDeploymentResponse();
    return message;
  },
  toAmino(_: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDeploymentResponseAminoMsg): MsgUpdateDeploymentResponse {
    return MsgUpdateDeploymentResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseAminoMsg {
    return {
      type: "akash/deployment/testonly-update-deployment-response",
      value: MsgUpdateDeploymentResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateDeploymentResponseProtoMsg): MsgUpdateDeploymentResponse {
    return MsgUpdateDeploymentResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDeploymentResponse): Uint8Array {
    return MsgUpdateDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse",
      value: MsgUpdateDeploymentResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCloseDeployment(): MsgCloseDeployment {
  return {
    id: DeploymentID.fromPartial({})
  };
}
export const MsgCloseDeployment = {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
  aminoType: "akash/deployment/testonly-close-deployment",
  is(o: any): o is MsgCloseDeployment {
    return o && (o.$typeUrl === MsgCloseDeployment.typeUrl || DeploymentID.is(o.id));
  },
  isSDK(o: any): o is MsgCloseDeploymentSDKType {
    return o && (o.$typeUrl === MsgCloseDeployment.typeUrl || DeploymentID.isSDK(o.id));
  },
  encode(message: MsgCloseDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCloseDeployment {
    const obj = createBaseMsgCloseDeployment();
    if (isSet(object.id)) obj.id = DeploymentID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: MsgCloseDeployment): JsonSafe<MsgCloseDeployment> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgCloseDeployment>, I>>(object: I): MsgCloseDeployment {
    const message = createBaseMsgCloseDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: MsgCloseDeploymentSDKType): MsgCloseDeployment {
    return {
      id: object.id ? DeploymentID.fromSDK(object.id) : undefined
    };
  },
  fromSDKJSON(object: any): MsgCloseDeploymentSDKType {
    return {
      id: isSet(object.id) ? DeploymentID.fromSDKJSON(object.id) : undefined
    };
  },
  toSDK(message: MsgCloseDeployment): MsgCloseDeploymentSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: MsgCloseDeploymentAmino): MsgCloseDeployment {
    const message = createBaseMsgCloseDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: MsgCloseDeployment): MsgCloseDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgCloseDeploymentAminoMsg): MsgCloseDeployment {
    return MsgCloseDeployment.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCloseDeployment): MsgCloseDeploymentAminoMsg {
    return {
      type: "akash/deployment/testonly-close-deployment",
      value: MsgCloseDeployment.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCloseDeploymentProtoMsg): MsgCloseDeployment {
    return MsgCloseDeployment.decode(message.value);
  },
  toProto(message: MsgCloseDeployment): Uint8Array {
    return MsgCloseDeployment.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseDeployment): MsgCloseDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
      value: MsgCloseDeployment.encode(message).finish()
    };
  },
  registerTypeUrl() {
    DeploymentID.registerTypeUrl();
  }
};
function createBaseMsgCloseDeploymentResponse(): MsgCloseDeploymentResponse {
  return {};
}
export const MsgCloseDeploymentResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse",
  aminoType: "akash/deployment/testonly-close-deployment-response",
  is(o: any): o is MsgCloseDeploymentResponse {
    return o && o.$typeUrl === MsgCloseDeploymentResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCloseDeploymentResponseSDKType {
    return o && o.$typeUrl === MsgCloseDeploymentResponse.typeUrl;
  },
  encode(_: MsgCloseDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseDeploymentResponse();
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
  fromJSON(_: any): MsgCloseDeploymentResponse {
    const obj = createBaseMsgCloseDeploymentResponse();
    return obj;
  },
  toJSON(_: MsgCloseDeploymentResponse): JsonSafe<MsgCloseDeploymentResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgCloseDeploymentResponse>, I>>(_: I): MsgCloseDeploymentResponse {
    const message = createBaseMsgCloseDeploymentResponse();
    return message;
  },
  fromSDK(_: MsgCloseDeploymentResponseSDKType): MsgCloseDeploymentResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgCloseDeploymentResponseSDKType {
    return {};
  },
  toSDK(_: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCloseDeploymentResponseAmino): MsgCloseDeploymentResponse {
    const message = createBaseMsgCloseDeploymentResponse();
    return message;
  },
  toAmino(_: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseDeploymentResponseAminoMsg): MsgCloseDeploymentResponse {
    return MsgCloseDeploymentResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseAminoMsg {
    return {
      type: "akash/deployment/testonly-close-deployment-response",
      value: MsgCloseDeploymentResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCloseDeploymentResponseProtoMsg): MsgCloseDeploymentResponse {
    return MsgCloseDeploymentResponse.decode(message.value);
  },
  toProto(message: MsgCloseDeploymentResponse): Uint8Array {
    return MsgCloseDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse",
      value: MsgCloseDeploymentResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDeploymentID(): DeploymentID {
  return {
    owner: "",
    dseq: BigInt(0)
  };
}
export const DeploymentID = {
  typeUrl: "/akash.deployment.v1beta1.DeploymentID",
  aminoType: "akash/deployment/deployment-i-d",
  is(o: any): o is DeploymentID {
    return o && (o.$typeUrl === DeploymentID.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint");
  },
  isSDK(o: any): o is DeploymentIDSDKType {
    return o && (o.$typeUrl === DeploymentID.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint");
  },
  encode(message: DeploymentID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== undefined) {
      writer.uint32(16).uint64(message.dseq);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeploymentID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeploymentID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeploymentID {
    const obj = createBaseDeploymentID();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.dseq)) obj.dseq = BigInt(object.dseq.toString());
    return obj;
  },
  toJSON(message: DeploymentID): JsonSafe<DeploymentID> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<Partial<DeploymentID>, I>>(object: I): DeploymentID {
    const message = createBaseDeploymentID();
    message.owner = object.owner ?? "";
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq.toString());
    }
    return message;
  },
  fromSDK(object: DeploymentIDSDKType): DeploymentID {
    return {
      owner: object?.owner,
      dseq: object?.dseq
    };
  },
  fromSDKJSON(object: any): DeploymentIDSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0)
    };
  },
  toSDK(message: DeploymentID): DeploymentIDSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    return obj;
  },
  fromAmino(object: DeploymentIDAmino): DeploymentID {
    const message = createBaseDeploymentID();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    return message;
  },
  toAmino(message: DeploymentID): DeploymentIDAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: DeploymentIDAminoMsg): DeploymentID {
    return DeploymentID.fromAmino(object.value);
  },
  toAminoMsg(message: DeploymentID): DeploymentIDAminoMsg {
    return {
      type: "akash/deployment/deployment-i-d",
      value: DeploymentID.toAmino(message)
    };
  },
  fromProtoMsg(message: DeploymentIDProtoMsg): DeploymentID {
    return DeploymentID.decode(message.value);
  },
  toProto(message: DeploymentID): Uint8Array {
    return DeploymentID.encode(message).finish();
  },
  toProtoMsg(message: DeploymentID): DeploymentIDProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.DeploymentID",
      value: DeploymentID.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDeployment(): Deployment {
  return {
    deploymentId: DeploymentID.fromPartial({}),
    state: 0,
    version: new Uint8Array(),
    createdAt: BigInt(0)
  };
}
export const Deployment = {
  typeUrl: "/akash.deployment.v1beta1.Deployment",
  aminoType: "akash/deployment/deployment",
  is(o: any): o is Deployment {
    return o && (o.$typeUrl === Deployment.typeUrl || DeploymentID.is(o.deploymentId) && isSet(o.state) && (o.version instanceof Uint8Array || typeof o.version === "string") && typeof o.createdAt === "bigint");
  },
  isSDK(o: any): o is DeploymentSDKType {
    return o && (o.$typeUrl === Deployment.typeUrl || DeploymentID.isSDK(o.deployment_id) && isSet(o.state) && (o.version instanceof Uint8Array || typeof o.version === "string") && typeof o.created_at === "bigint");
  },
  encode(message: Deployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deploymentId !== undefined) {
      DeploymentID.encode(message.deploymentId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    if (message.createdAt !== undefined) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Deployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deploymentId = DeploymentID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = (reader.int32() as any);
          break;
        case 3:
          message.version = reader.bytes();
          break;
        case 4:
          message.createdAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Deployment {
    const obj = createBaseDeployment();
    if (isSet(object.deploymentId)) obj.deploymentId = DeploymentID.fromJSON(object.deploymentId);
    if (isSet(object.state)) obj.state = deployment_StateFromJSON(object.state);
    if (isSet(object.version)) obj.version = bytesFromBase64(object.version);
    if (isSet(object.createdAt)) obj.createdAt = BigInt(object.createdAt.toString());
    return obj;
  },
  toJSON(message: Deployment): JsonSafe<Deployment> {
    const obj: any = {};
    message.deploymentId !== undefined && (obj.deploymentId = message.deploymentId ? DeploymentID.toJSON(message.deploymentId) : undefined);
    message.state !== undefined && (obj.state = deployment_StateToJSON(message.state));
    message.version !== undefined && (obj.version = base64FromBytes(message.version !== undefined ? message.version : new Uint8Array()));
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<Partial<Deployment>, I>>(object: I): Deployment {
    const message = createBaseDeployment();
    if (object.deploymentId !== undefined && object.deploymentId !== null) {
      message.deploymentId = DeploymentID.fromPartial(object.deploymentId);
    }
    message.state = object.state ?? 0;
    message.version = object.version ?? new Uint8Array();
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = BigInt(object.createdAt.toString());
    }
    return message;
  },
  fromSDK(object: DeploymentSDKType): Deployment {
    return {
      deploymentId: object.deployment_id ? DeploymentID.fromSDK(object.deployment_id) : undefined,
      state: isSet(object.state) ? deployment_StateFromJSON(object.state) : -1,
      version: object?.version,
      createdAt: object?.created_at
    };
  },
  fromSDKJSON(object: any): DeploymentSDKType {
    return {
      deployment_id: isSet(object.deployment_id) ? DeploymentID.fromSDKJSON(object.deployment_id) : undefined,
      state: isSet(object.state) ? deployment_StateFromJSON(object.state) : -1,
      version: isSet(object.version) ? bytesFromBase64(object.version) : new Uint8Array(),
      created_at: isSet(object.created_at) ? BigInt(object.created_at.toString()) : BigInt(0)
    };
  },
  toSDK(message: Deployment): DeploymentSDKType {
    const obj: any = {};
    message.deploymentId !== undefined && (obj.deployment_id = message.deploymentId ? DeploymentID.toSDK(message.deploymentId) : undefined);
    message.state !== undefined && (obj.state = deployment_StateToJSON(message.state));
    obj.version = message.version;
    obj.created_at = message.createdAt;
    return obj;
  },
  fromAmino(object: DeploymentAmino): Deployment {
    const message = createBaseDeployment();
    if (object.deployment_id !== undefined && object.deployment_id !== null) {
      message.deploymentId = DeploymentID.fromAmino(object.deployment_id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = bytesFromBase64(object.version);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    return message;
  },
  toAmino(message: Deployment): DeploymentAmino {
    const obj: any = {};
    obj.deployment_id = message.deploymentId ? DeploymentID.toAmino(message.deploymentId) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    obj.state = message.state ?? 0;
    obj.version = message.version ? base64FromBytes(message.version) : "";
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DeploymentAminoMsg): Deployment {
    return Deployment.fromAmino(object.value);
  },
  toAminoMsg(message: Deployment): DeploymentAminoMsg {
    return {
      type: "akash/deployment/deployment",
      value: Deployment.toAmino(message)
    };
  },
  fromProtoMsg(message: DeploymentProtoMsg): Deployment {
    return Deployment.decode(message.value);
  },
  toProto(message: Deployment): Uint8Array {
    return Deployment.encode(message).finish();
  },
  toProtoMsg(message: Deployment): DeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.Deployment",
      value: Deployment.encode(message).finish()
    };
  },
  registerTypeUrl() {
    DeploymentID.registerTypeUrl();
  }
};
function createBaseDeploymentFilters(): DeploymentFilters {
  return {
    owner: "",
    dseq: BigInt(0),
    state: ""
  };
}
export const DeploymentFilters = {
  typeUrl: "/akash.deployment.v1beta1.DeploymentFilters",
  aminoType: "akash/deployment/deployment-filters",
  is(o: any): o is DeploymentFilters {
    return o && (o.$typeUrl === DeploymentFilters.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint" && typeof o.state === "string");
  },
  isSDK(o: any): o is DeploymentFiltersSDKType {
    return o && (o.$typeUrl === DeploymentFilters.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint" && typeof o.state === "string");
  },
  encode(message: DeploymentFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== undefined) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.state !== undefined) {
      writer.uint32(26).string(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeploymentFilters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeploymentFilters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        case 3:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeploymentFilters {
    const obj = createBaseDeploymentFilters();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.dseq)) obj.dseq = BigInt(object.dseq.toString());
    if (isSet(object.state)) obj.state = String(object.state);
    return obj;
  },
  toJSON(message: DeploymentFilters): JsonSafe<DeploymentFilters> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || BigInt(0)).toString());
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },
  fromPartial<I extends Exact<Partial<DeploymentFilters>, I>>(object: I): DeploymentFilters {
    const message = createBaseDeploymentFilters();
    message.owner = object.owner ?? "";
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq.toString());
    }
    message.state = object.state ?? "";
    return message;
  },
  fromSDK(object: DeploymentFiltersSDKType): DeploymentFilters {
    return {
      owner: object?.owner,
      dseq: object?.dseq,
      state: object?.state
    };
  },
  fromSDKJSON(object: any): DeploymentFiltersSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      state: isSet(object.state) ? String(object.state) : ""
    };
  },
  toSDK(message: DeploymentFilters): DeploymentFiltersSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    obj.state = message.state;
    return obj;
  },
  fromAmino(object: DeploymentFiltersAmino): DeploymentFilters {
    const message = createBaseDeploymentFilters();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: DeploymentFilters): DeploymentFiltersAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    obj.state = message.state ?? "";
    return obj;
  },
  fromAminoMsg(object: DeploymentFiltersAminoMsg): DeploymentFilters {
    return DeploymentFilters.fromAmino(object.value);
  },
  toAminoMsg(message: DeploymentFilters): DeploymentFiltersAminoMsg {
    return {
      type: "akash/deployment/deployment-filters",
      value: DeploymentFilters.toAmino(message)
    };
  },
  fromProtoMsg(message: DeploymentFiltersProtoMsg): DeploymentFilters {
    return DeploymentFilters.decode(message.value);
  },
  toProto(message: DeploymentFilters): Uint8Array {
    return DeploymentFilters.encode(message).finish();
  },
  toProtoMsg(message: DeploymentFilters): DeploymentFiltersProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.DeploymentFilters",
      value: DeploymentFilters.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
/** Msg defines the deployment Msg service. */
export interface Msg {
  /** CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment(signerAddress: string, message: MsgCreateDeployment, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** DepositDeployment deposits more funds into the deployment account */
  depositDeployment(signerAddress: string, message: MsgDepositDeployment, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** UpdateDeployment defines a method to update a deployment given proper inputs. */
  updateDeployment(signerAddress: string, message: MsgUpdateDeployment, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** CloseDeployment defines a method to close a deployment given proper inputs. */
  closeDeployment(signerAddress: string, message: MsgCloseDeployment, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
  closeGroup(signerAddress: string, message: MsgCloseGroup, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
  pauseGroup(signerAddress: string, message: MsgPauseGroup, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  /** StartGroup defines a method to close a group of a deployment given proper inputs. */
  startGroup(signerAddress: string, message: MsgStartGroup, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment = async (signerAddress: string, message: MsgCreateDeployment, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateDeployment.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* DepositDeployment deposits more funds into the deployment account */
  depositDeployment = async (signerAddress: string, message: MsgDepositDeployment, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgDepositDeployment.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateDeployment defines a method to update a deployment given proper inputs. */
  updateDeployment = async (signerAddress: string, message: MsgUpdateDeployment, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateDeployment.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CloseDeployment defines a method to close a deployment given proper inputs. */
  closeDeployment = async (signerAddress: string, message: MsgCloseDeployment, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCloseDeployment.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CloseGroup defines a method to close a group of a deployment given proper inputs. */
  closeGroup = async (signerAddress: string, message: MsgCloseGroup, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCloseGroup.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* PauseGroup defines a method to close a group of a deployment given proper inputs. */
  pauseGroup = async (signerAddress: string, message: MsgPauseGroup, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgPauseGroup.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* StartGroup defines a method to close a group of a deployment given proper inputs. */
  startGroup = async (signerAddress: string, message: MsgStartGroup, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgStartGroup.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};