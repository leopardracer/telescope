import { Metadata, MetadataAmino, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { isSet, DeepPartial } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "evmos.erc20.v1";
/** Owner enumerates the ownership of a ERC20 contract. */
export enum Owner {
  /** OWNER_UNSPECIFIED - OWNER_UNSPECIFIED defines an invalid/undefined owner. */
  OWNER_UNSPECIFIED = 0,
  /** OWNER_MODULE - OWNER_MODULE erc20 is owned by the erc20 module account. */
  OWNER_MODULE = 1,
  /** OWNER_EXTERNAL - EXTERNAL erc20 is owned by an external account. */
  OWNER_EXTERNAL = 2,
  UNRECOGNIZED = -1,
}
export const OwnerSDKType = Owner;
export const OwnerAmino = Owner;
export function ownerFromJSON(object: any): Owner {
  switch (object) {
    case 0:
    case "OWNER_UNSPECIFIED":
      return Owner.OWNER_UNSPECIFIED;
    case 1:
    case "OWNER_MODULE":
      return Owner.OWNER_MODULE;
    case 2:
    case "OWNER_EXTERNAL":
      return Owner.OWNER_EXTERNAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Owner.UNRECOGNIZED;
  }
}
export function ownerToJSON(object: Owner): string {
  switch (object) {
    case Owner.OWNER_UNSPECIFIED:
      return "OWNER_UNSPECIFIED";
    case Owner.OWNER_MODULE:
      return "OWNER_MODULE";
    case Owner.OWNER_EXTERNAL:
      return "OWNER_EXTERNAL";
    case Owner.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * TokenPair defines an instance that records a pairing consisting of a native
 *  Cosmos Coin and an ERC20 token address.
 */
export interface TokenPair {
  /** address of ERC20 contract token */
  erc20Address: string;
  /** cosmos base denomination to be mapped to */
  denom: string;
  /** shows token mapping enable status */
  enabled: boolean;
  /** ERC20 owner address ENUM (0 invalid, 1 ModuleAccount, 2 external address) */
  contractOwner: Owner;
}
export interface TokenPairProtoMsg {
  typeUrl: "/evmos.erc20.v1.TokenPair";
  value: Uint8Array;
}
/**
 * TokenPair defines an instance that records a pairing consisting of a native
 *  Cosmos Coin and an ERC20 token address.
 */
export interface TokenPairAmino {
  /** address of ERC20 contract token */
  erc20_address?: string;
  /** cosmos base denomination to be mapped to */
  denom?: string;
  /** shows token mapping enable status */
  enabled?: boolean;
  /** ERC20 owner address ENUM (0 invalid, 1 ModuleAccount, 2 external address) */
  contract_owner?: Owner;
}
export interface TokenPairAminoMsg {
  type: "/evmos.erc20.v1.TokenPair";
  value: TokenPairAmino;
}
/**
 * TokenPair defines an instance that records a pairing consisting of a native
 *  Cosmos Coin and an ERC20 token address.
 */
export interface TokenPairSDKType {
  erc20_address: string;
  denom: string;
  enabled: boolean;
  contract_owner: Owner;
}
/**
 * RegisterCoinProposal is a gov Content type to register a token pair for a
 * native Cosmos coin.
 */
export interface RegisterCoinProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** metadata of the native Cosmos coin */
  metadata: Metadata;
}
export interface RegisterCoinProposalProtoMsg {
  typeUrl: "/evmos.erc20.v1.RegisterCoinProposal";
  value: Uint8Array;
}
/**
 * RegisterCoinProposal is a gov Content type to register a token pair for a
 * native Cosmos coin.
 */
export interface RegisterCoinProposalAmino {
  /** title of the proposal */
  title?: string;
  /** proposal description */
  description?: string;
  /** metadata of the native Cosmos coin */
  metadata?: MetadataAmino;
}
export interface RegisterCoinProposalAminoMsg {
  type: "/evmos.erc20.v1.RegisterCoinProposal";
  value: RegisterCoinProposalAmino;
}
/**
 * RegisterCoinProposal is a gov Content type to register a token pair for a
 * native Cosmos coin.
 */
export interface RegisterCoinProposalSDKType {
  title: string;
  description: string;
  metadata: MetadataSDKType;
}
/**
 * RegisterERC20Proposal is a gov Content type to register a token pair for an
 * ERC20 token
 */
export interface RegisterERC20Proposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** contract address of ERC20 token */
  erc20address: string;
}
export interface RegisterERC20ProposalProtoMsg {
  typeUrl: "/evmos.erc20.v1.RegisterERC20Proposal";
  value: Uint8Array;
}
/**
 * RegisterERC20Proposal is a gov Content type to register a token pair for an
 * ERC20 token
 */
export interface RegisterERC20ProposalAmino {
  /** title of the proposal */
  title?: string;
  /** proposal description */
  description?: string;
  /** contract address of ERC20 token */
  erc20address?: string;
}
export interface RegisterERC20ProposalAminoMsg {
  type: "/evmos.erc20.v1.RegisterERC20Proposal";
  value: RegisterERC20ProposalAmino;
}
/**
 * RegisterERC20Proposal is a gov Content type to register a token pair for an
 * ERC20 token
 */
export interface RegisterERC20ProposalSDKType {
  title: string;
  description: string;
  erc20address: string;
}
/**
 * ToggleTokenConversionProposal is a gov Content type to toggle the conversion
 * of a token pair.
 */
export interface ToggleTokenConversionProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token: string;
}
export interface ToggleTokenConversionProposalProtoMsg {
  typeUrl: "/evmos.erc20.v1.ToggleTokenConversionProposal";
  value: Uint8Array;
}
/**
 * ToggleTokenConversionProposal is a gov Content type to toggle the conversion
 * of a token pair.
 */
export interface ToggleTokenConversionProposalAmino {
  /** title of the proposal */
  title?: string;
  /** proposal description */
  description?: string;
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token?: string;
}
export interface ToggleTokenConversionProposalAminoMsg {
  type: "/evmos.erc20.v1.ToggleTokenConversionProposal";
  value: ToggleTokenConversionProposalAmino;
}
/**
 * ToggleTokenConversionProposal is a gov Content type to toggle the conversion
 * of a token pair.
 */
export interface ToggleTokenConversionProposalSDKType {
  title: string;
  description: string;
  token: string;
}
function createBaseTokenPair(): TokenPair {
  return {
    erc20Address: "",
    denom: "",
    enabled: false,
    contractOwner: 0
  };
}
export const TokenPair = {
  typeUrl: "/evmos.erc20.v1.TokenPair",
  is(o: any): o is TokenPair {
    return o && (o.$typeUrl === TokenPair.typeUrl || typeof o.erc20Address === "string" && typeof o.denom === "string" && typeof o.enabled === "boolean" && isSet(o.contractOwner));
  },
  isSDK(o: any): o is TokenPairSDKType {
    return o && (o.$typeUrl === TokenPair.typeUrl || typeof o.erc20_address === "string" && typeof o.denom === "string" && typeof o.enabled === "boolean" && isSet(o.contract_owner));
  },
  isAmino(o: any): o is TokenPairAmino {
    return o && (o.$typeUrl === TokenPair.typeUrl || typeof o.erc20_address === "string" && typeof o.denom === "string" && typeof o.enabled === "boolean" && isSet(o.contract_owner));
  },
  encode(message: TokenPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.erc20Address !== undefined) {
      writer.uint32(10).string(message.erc20Address);
    }
    if (message.denom !== undefined) {
      writer.uint32(18).string(message.denom);
    }
    if (message.enabled !== undefined) {
      writer.uint32(24).bool(message.enabled);
    }
    if (message.contractOwner !== 0) {
      writer.uint32(32).int32(message.contractOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20Address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        case 4:
          message.contractOwner = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenPair {
    const obj = createBaseTokenPair();
    if (isSet(object.erc20Address)) obj.erc20Address = String(object.erc20Address);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.enabled)) obj.enabled = Boolean(object.enabled);
    if (isSet(object.contractOwner)) obj.contractOwner = ownerFromJSON(object.contractOwner);
    return obj;
  },
  toJSON(message: TokenPair): JsonSafe<TokenPair> {
    const obj: any = {};
    message.erc20Address !== undefined && (obj.erc20Address = message.erc20Address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.contractOwner !== undefined && (obj.contractOwner = ownerToJSON(message.contractOwner));
    return obj;
  },
  fromPartial(object: DeepPartial<TokenPair>): TokenPair {
    const message = createBaseTokenPair();
    message.erc20Address = object.erc20Address ?? "";
    message.denom = object.denom ?? "";
    message.enabled = object.enabled ?? false;
    message.contractOwner = object.contractOwner ?? 0;
    return message;
  },
  fromSDK(object: TokenPairSDKType): TokenPair {
    return {
      erc20Address: object?.erc20_address,
      denom: object?.denom,
      enabled: object?.enabled,
      contractOwner: isSet(object.contract_owner) ? ownerFromJSON(object.contract_owner) : -1
    };
  },
  fromSDKJSON(object: any): TokenPairSDKType {
    return {
      erc20_address: isSet(object.erc20_address) ? String(object.erc20_address) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      contract_owner: isSet(object.contract_owner) ? ownerFromJSON(object.contract_owner) : -1
    };
  },
  toSDK(message: TokenPair): TokenPairSDKType {
    const obj: any = {};
    obj.erc20_address = message.erc20Address;
    obj.denom = message.denom;
    obj.enabled = message.enabled;
    message.contractOwner !== undefined && (obj.contract_owner = ownerToJSON(message.contractOwner));
    return obj;
  },
  fromAmino(object: TokenPairAmino): TokenPair {
    const message = createBaseTokenPair();
    if (object.erc20_address !== undefined && object.erc20_address !== null) {
      message.erc20Address = object.erc20_address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.contract_owner !== undefined && object.contract_owner !== null) {
      message.contractOwner = object.contract_owner;
    }
    return message;
  },
  toAmino(message: TokenPair): TokenPairAmino {
    const obj: any = {};
    obj.erc20_address = message.erc20Address === "" ? undefined : message.erc20Address;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    obj.contract_owner = message.contractOwner === 0 ? undefined : message.contractOwner;
    return obj;
  },
  fromAminoMsg(object: TokenPairAminoMsg): TokenPair {
    return TokenPair.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenPairProtoMsg): TokenPair {
    return TokenPair.decode(message.value);
  },
  toProto(message: TokenPair): Uint8Array {
    return TokenPair.encode(message).finish();
  },
  toProtoMsg(message: TokenPair): TokenPairProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.TokenPair",
      value: TokenPair.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRegisterCoinProposal(): RegisterCoinProposal {
  return {
    title: "",
    description: "",
    metadata: Metadata.fromPartial({})
  };
}
export const RegisterCoinProposal = {
  typeUrl: "/evmos.erc20.v1.RegisterCoinProposal",
  is(o: any): o is RegisterCoinProposal {
    return o && (o.$typeUrl === RegisterCoinProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Metadata.is(o.metadata));
  },
  isSDK(o: any): o is RegisterCoinProposalSDKType {
    return o && (o.$typeUrl === RegisterCoinProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Metadata.isSDK(o.metadata));
  },
  isAmino(o: any): o is RegisterCoinProposalAmino {
    return o && (o.$typeUrl === RegisterCoinProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Metadata.isAmino(o.metadata));
  },
  encode(message: RegisterCoinProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== undefined) {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisterCoinProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterCoinProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisterCoinProposal {
    const obj = createBaseRegisterCoinProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.metadata)) obj.metadata = Metadata.fromJSON(object.metadata);
    return obj;
  },
  toJSON(message: RegisterCoinProposal): JsonSafe<RegisterCoinProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<RegisterCoinProposal>): RegisterCoinProposal {
    const message = createBaseRegisterCoinProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromPartial(object.metadata);
    }
    return message;
  },
  fromSDK(object: RegisterCoinProposalSDKType): RegisterCoinProposal {
    return {
      title: object?.title,
      description: object?.description,
      metadata: object.metadata ? Metadata.fromSDK(object.metadata) : undefined
    };
  },
  fromSDKJSON(object: any): RegisterCoinProposalSDKType {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      metadata: isSet(object.metadata) ? Metadata.fromSDKJSON(object.metadata) : undefined
    };
  },
  toSDK(message: RegisterCoinProposal): RegisterCoinProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toSDK(message.metadata) : undefined);
    return obj;
  },
  fromAmino(object: RegisterCoinProposalAmino): RegisterCoinProposal {
    const message = createBaseRegisterCoinProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: RegisterCoinProposal): RegisterCoinProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: RegisterCoinProposalAminoMsg): RegisterCoinProposal {
    return RegisterCoinProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterCoinProposalProtoMsg): RegisterCoinProposal {
    return RegisterCoinProposal.decode(message.value);
  },
  toProto(message: RegisterCoinProposal): Uint8Array {
    return RegisterCoinProposal.encode(message).finish();
  },
  toProtoMsg(message: RegisterCoinProposal): RegisterCoinProposalProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.RegisterCoinProposal",
      value: RegisterCoinProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Metadata.registerTypeUrl();
  }
};
function createBaseRegisterERC20Proposal(): RegisterERC20Proposal {
  return {
    title: "",
    description: "",
    erc20address: ""
  };
}
export const RegisterERC20Proposal = {
  typeUrl: "/evmos.erc20.v1.RegisterERC20Proposal",
  is(o: any): o is RegisterERC20Proposal {
    return o && (o.$typeUrl === RegisterERC20Proposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.erc20address === "string");
  },
  isSDK(o: any): o is RegisterERC20ProposalSDKType {
    return o && (o.$typeUrl === RegisterERC20Proposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.erc20address === "string");
  },
  isAmino(o: any): o is RegisterERC20ProposalAmino {
    return o && (o.$typeUrl === RegisterERC20Proposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.erc20address === "string");
  },
  encode(message: RegisterERC20Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== undefined) {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.erc20address !== undefined) {
      writer.uint32(26).string(message.erc20address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisterERC20Proposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterERC20Proposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.erc20address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisterERC20Proposal {
    const obj = createBaseRegisterERC20Proposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.erc20address)) obj.erc20address = String(object.erc20address);
    return obj;
  },
  toJSON(message: RegisterERC20Proposal): JsonSafe<RegisterERC20Proposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.erc20address !== undefined && (obj.erc20address = message.erc20address);
    return obj;
  },
  fromPartial(object: DeepPartial<RegisterERC20Proposal>): RegisterERC20Proposal {
    const message = createBaseRegisterERC20Proposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.erc20address = object.erc20address ?? "";
    return message;
  },
  fromSDK(object: RegisterERC20ProposalSDKType): RegisterERC20Proposal {
    return {
      title: object?.title,
      description: object?.description,
      erc20address: object?.erc20address
    };
  },
  fromSDKJSON(object: any): RegisterERC20ProposalSDKType {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      erc20address: isSet(object.erc20address) ? String(object.erc20address) : ""
    };
  },
  toSDK(message: RegisterERC20Proposal): RegisterERC20ProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.erc20address = message.erc20address;
    return obj;
  },
  fromAmino(object: RegisterERC20ProposalAmino): RegisterERC20Proposal {
    const message = createBaseRegisterERC20Proposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.erc20address !== undefined && object.erc20address !== null) {
      message.erc20address = object.erc20address;
    }
    return message;
  },
  toAmino(message: RegisterERC20Proposal): RegisterERC20ProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.erc20address = message.erc20address === "" ? undefined : message.erc20address;
    return obj;
  },
  fromAminoMsg(object: RegisterERC20ProposalAminoMsg): RegisterERC20Proposal {
    return RegisterERC20Proposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterERC20ProposalProtoMsg): RegisterERC20Proposal {
    return RegisterERC20Proposal.decode(message.value);
  },
  toProto(message: RegisterERC20Proposal): Uint8Array {
    return RegisterERC20Proposal.encode(message).finish();
  },
  toProtoMsg(message: RegisterERC20Proposal): RegisterERC20ProposalProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.RegisterERC20Proposal",
      value: RegisterERC20Proposal.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseToggleTokenConversionProposal(): ToggleTokenConversionProposal {
  return {
    title: "",
    description: "",
    token: ""
  };
}
export const ToggleTokenConversionProposal = {
  typeUrl: "/evmos.erc20.v1.ToggleTokenConversionProposal",
  is(o: any): o is ToggleTokenConversionProposal {
    return o && (o.$typeUrl === ToggleTokenConversionProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.token === "string");
  },
  isSDK(o: any): o is ToggleTokenConversionProposalSDKType {
    return o && (o.$typeUrl === ToggleTokenConversionProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.token === "string");
  },
  isAmino(o: any): o is ToggleTokenConversionProposalAmino {
    return o && (o.$typeUrl === ToggleTokenConversionProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.token === "string");
  },
  encode(message: ToggleTokenConversionProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== undefined) {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    if (message.token !== undefined) {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ToggleTokenConversionProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToggleTokenConversionProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ToggleTokenConversionProposal {
    const obj = createBaseToggleTokenConversionProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.token)) obj.token = String(object.token);
    return obj;
  },
  toJSON(message: ToggleTokenConversionProposal): JsonSafe<ToggleTokenConversionProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },
  fromPartial(object: DeepPartial<ToggleTokenConversionProposal>): ToggleTokenConversionProposal {
    const message = createBaseToggleTokenConversionProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.token = object.token ?? "";
    return message;
  },
  fromSDK(object: ToggleTokenConversionProposalSDKType): ToggleTokenConversionProposal {
    return {
      title: object?.title,
      description: object?.description,
      token: object?.token
    };
  },
  fromSDKJSON(object: any): ToggleTokenConversionProposalSDKType {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      token: isSet(object.token) ? String(object.token) : ""
    };
  },
  toSDK(message: ToggleTokenConversionProposal): ToggleTokenConversionProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.token = message.token;
    return obj;
  },
  fromAmino(object: ToggleTokenConversionProposalAmino): ToggleTokenConversionProposal {
    const message = createBaseToggleTokenConversionProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    return message;
  },
  toAmino(message: ToggleTokenConversionProposal): ToggleTokenConversionProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.token = message.token === "" ? undefined : message.token;
    return obj;
  },
  fromAminoMsg(object: ToggleTokenConversionProposalAminoMsg): ToggleTokenConversionProposal {
    return ToggleTokenConversionProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ToggleTokenConversionProposalProtoMsg): ToggleTokenConversionProposal {
    return ToggleTokenConversionProposal.decode(message.value);
  },
  toProto(message: ToggleTokenConversionProposal): Uint8Array {
    return ToggleTokenConversionProposal.encode(message).finish();
  },
  toProtoMsg(message: ToggleTokenConversionProposal): ToggleTokenConversionProposalProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.ToggleTokenConversionProposal",
      value: ToggleTokenConversionProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};