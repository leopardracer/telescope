import { CompactBitArray, CompactBitArrayAmino, CompactBitArraySDKType } from "../../../crypto/multisig/v1beta1/multisig";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "cosmos.tx.signing.v1beta1";
/**
 * SignMode represents a signing mode with its own security guarantees.
 * 
 * This enum should be considered a registry of all known sign modes
 * in the Cosmos ecosystem. Apps are not expected to support all known
 * sign modes. Apps that would like to support custom  sign modes are
 * encouraged to open a small PR against this file to add a new case
 * to this SignMode enum describing their sign mode so that different
 * apps have a consistent version of this enum.
 */
export enum SignMode {
  /**
   * SIGN_MODE_UNSPECIFIED - SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
   * rejected.
   */
  SIGN_MODE_UNSPECIFIED = 0,
  /**
   * SIGN_MODE_DIRECT - SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
   * verified with raw bytes from Tx.
   */
  SIGN_MODE_DIRECT = 1,
  /**
   * SIGN_MODE_TEXTUAL - SIGN_MODE_TEXTUAL is a future signing mode that will verify some
   * human-readable textual representation on top of the binary representation
   * from SIGN_MODE_DIRECT. It is currently not supported.
   */
  SIGN_MODE_TEXTUAL = 2,
  /**
   * SIGN_MODE_DIRECT_AUX - SIGN_MODE_DIRECT_AUX specifies a signing mode which uses
   * SignDocDirectAux. As opposed to SIGN_MODE_DIRECT, this sign mode does not
   * require signers signing over other signers' `signer_info`. It also allows
   * for adding Tips in transactions.
   * 
   * Since: cosmos-sdk 0.46
   */
  SIGN_MODE_DIRECT_AUX = 3,
  /**
   * SIGN_MODE_LEGACY_AMINO_JSON - SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
   * Amino JSON and will be removed in the future.
   */
  SIGN_MODE_LEGACY_AMINO_JSON = 127,
  UNRECOGNIZED = -1,
}
export const SignModeSDKType = SignMode;
export const SignModeAmino = SignMode;
export function signModeFromJSON(object: any): SignMode {
  switch (object) {
    case 0:
    case "SIGN_MODE_UNSPECIFIED":
      return SignMode.SIGN_MODE_UNSPECIFIED;
    case 1:
    case "SIGN_MODE_DIRECT":
      return SignMode.SIGN_MODE_DIRECT;
    case 2:
    case "SIGN_MODE_TEXTUAL":
      return SignMode.SIGN_MODE_TEXTUAL;
    case 3:
    case "SIGN_MODE_DIRECT_AUX":
      return SignMode.SIGN_MODE_DIRECT_AUX;
    case 127:
    case "SIGN_MODE_LEGACY_AMINO_JSON":
      return SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SignMode.UNRECOGNIZED;
  }
}
export function signModeToJSON(object: SignMode): string {
  switch (object) {
    case SignMode.SIGN_MODE_UNSPECIFIED:
      return "SIGN_MODE_UNSPECIFIED";
    case SignMode.SIGN_MODE_DIRECT:
      return "SIGN_MODE_DIRECT";
    case SignMode.SIGN_MODE_TEXTUAL:
      return "SIGN_MODE_TEXTUAL";
    case SignMode.SIGN_MODE_DIRECT_AUX:
      return "SIGN_MODE_DIRECT_AUX";
    case SignMode.SIGN_MODE_LEGACY_AMINO_JSON:
      return "SIGN_MODE_LEGACY_AMINO_JSON";
    case SignMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SignatureDescriptors wraps multiple SignatureDescriptor's. */
export interface SignatureDescriptors {
  /** signatures are the signature descriptors */
  signatures: SignatureDescriptor[];
}
export interface SignatureDescriptorsProtoMsg {
  typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptors";
  value: Uint8Array;
}
/** SignatureDescriptors wraps multiple SignatureDescriptor's. */
export interface SignatureDescriptorsAmino {
  /** signatures are the signature descriptors */
  signatures?: SignatureDescriptorAmino[];
}
/** SignatureDescriptors wraps multiple SignatureDescriptor's. */
export interface SignatureDescriptorsSDKType {
  signatures: SignatureDescriptorSDKType[];
}
/**
 * SignatureDescriptor is a convenience type which represents the full data for
 * a signature including the public key of the signer, signing modes and the
 * signature itself. It is primarily used for coordinating signatures between
 * clients.
 */
export interface SignatureDescriptor {
  /** public_key is the public key of the signer */
  publicKey?: Any;
  data?: SignatureDescriptor_Data;
  /**
   * sequence is the sequence of the account, which describes the
   * number of committed transactions signed by a given address. It is used to prevent
   * replay attacks.
   */
  sequence: bigint;
}
export interface SignatureDescriptorProtoMsg {
  typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptor";
  value: Uint8Array;
}
/**
 * SignatureDescriptor is a convenience type which represents the full data for
 * a signature including the public key of the signer, signing modes and the
 * signature itself. It is primarily used for coordinating signatures between
 * clients.
 */
export interface SignatureDescriptorAmino {
  /** public_key is the public key of the signer */
  public_key?: AnyAmino;
  data?: SignatureDescriptor_DataAmino;
  /**
   * sequence is the sequence of the account, which describes the
   * number of committed transactions signed by a given address. It is used to prevent
   * replay attacks.
   */
  sequence?: string;
}
/**
 * SignatureDescriptor is a convenience type which represents the full data for
 * a signature including the public key of the signer, signing modes and the
 * signature itself. It is primarily used for coordinating signatures between
 * clients.
 */
export interface SignatureDescriptorSDKType {
  public_key?: AnySDKType;
  data?: SignatureDescriptor_DataSDKType;
  sequence: bigint;
}
/** Data represents signature data */
export interface SignatureDescriptor_Data {
  /** single represents a single signer */
  single?: SignatureDescriptor_Data_Single;
  /** multi represents a multisig signer */
  multi?: SignatureDescriptor_Data_Multi;
}
export interface SignatureDescriptor_DataProtoMsg {
  typeUrl: "/cosmos.tx.signing.v1beta1.Data";
  value: Uint8Array;
}
/** Data represents signature data */
export interface SignatureDescriptor_DataAmino {
  /** single represents a single signer */
  single?: SignatureDescriptor_Data_SingleAmino;
  /** multi represents a multisig signer */
  multi?: SignatureDescriptor_Data_MultiAmino;
}
/** Data represents signature data */
export interface SignatureDescriptor_DataSDKType {
  single?: SignatureDescriptor_Data_SingleSDKType;
  multi?: SignatureDescriptor_Data_MultiSDKType;
}
/** Single is the signature data for a single signer */
export interface SignatureDescriptor_Data_Single {
  /** mode is the signing mode of the single signer */
  mode: SignMode;
  /** signature is the raw signature bytes */
  signature: Uint8Array;
}
export interface SignatureDescriptor_Data_SingleProtoMsg {
  typeUrl: "/cosmos.tx.signing.v1beta1.Single";
  value: Uint8Array;
}
/** Single is the signature data for a single signer */
export interface SignatureDescriptor_Data_SingleAmino {
  /** mode is the signing mode of the single signer */
  mode?: SignMode;
  /** signature is the raw signature bytes */
  signature?: string;
}
/** Single is the signature data for a single signer */
export interface SignatureDescriptor_Data_SingleSDKType {
  mode: SignMode;
  signature: Uint8Array;
}
/** Multi is the signature data for a multisig public key */
export interface SignatureDescriptor_Data_Multi {
  /** bitarray specifies which keys within the multisig are signing */
  bitarray?: CompactBitArray;
  /** signatures is the signatures of the multi-signature */
  signatures: SignatureDescriptor_Data[];
}
export interface SignatureDescriptor_Data_MultiProtoMsg {
  typeUrl: "/cosmos.tx.signing.v1beta1.Multi";
  value: Uint8Array;
}
/** Multi is the signature data for a multisig public key */
export interface SignatureDescriptor_Data_MultiAmino {
  /** bitarray specifies which keys within the multisig are signing */
  bitarray?: CompactBitArrayAmino;
  /** signatures is the signatures of the multi-signature */
  signatures?: SignatureDescriptor_DataAmino[];
}
/** Multi is the signature data for a multisig public key */
export interface SignatureDescriptor_Data_MultiSDKType {
  bitarray?: CompactBitArraySDKType;
  signatures: SignatureDescriptor_DataSDKType[];
}
function createBaseSignatureDescriptors(): SignatureDescriptors {
  return {
    signatures: []
  };
}
export const SignatureDescriptors = {
  typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptors",
  aminoType: "cosmos-sdk/SignatureDescriptors",
  encode(message: SignatureDescriptors, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.signatures) {
      SignatureDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SignatureDescriptors {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatures.push(SignatureDescriptor.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignatureDescriptors {
    const obj = createBaseSignatureDescriptors();
    if (Array.isArray(object?.signatures)) obj.signatures = object.signatures.map((e: any) => SignatureDescriptor.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<SignatureDescriptors>): SignatureDescriptors {
    const message = createBaseSignatureDescriptors();
    message.signatures = object.signatures?.map(e => SignatureDescriptor.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: SignatureDescriptorsSDKType): SignatureDescriptors {
    return {
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => SignatureDescriptor.fromSDK(e)) : []
    };
  },
  toSDK(message: SignatureDescriptors): SignatureDescriptorsSDKType {
    const obj: any = {};
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e ? SignatureDescriptor.toSDK(e) : undefined);
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromAmino(object: SignatureDescriptorsAmino): SignatureDescriptors {
    const message = createBaseSignatureDescriptors();
    message.signatures = object.signatures?.map(e => SignatureDescriptor.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SignatureDescriptors, useInterfaces: boolean = true): SignatureDescriptorsAmino {
    const obj: any = {};
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e ? SignatureDescriptor.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.signatures = message.signatures;
    }
    return obj;
  },
  fromProtoMsg(message: SignatureDescriptorsProtoMsg, useInterfaces: boolean = true): SignatureDescriptors {
    return SignatureDescriptors.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SignatureDescriptors): Uint8Array {
    return SignatureDescriptors.encode(message).finish();
  },
  toProtoMsg(message: SignatureDescriptors): SignatureDescriptorsProtoMsg {
    return {
      typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptors",
      value: SignatureDescriptors.encode(message).finish()
    };
  }
};
function createBaseSignatureDescriptor(): SignatureDescriptor {
  return {
    publicKey: undefined,
    data: undefined,
    sequence: BigInt(0)
  };
}
export const SignatureDescriptor = {
  typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptor",
  aminoType: "cosmos-sdk/SignatureDescriptor",
  encode(message: SignatureDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      SignatureDescriptor_Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SignatureDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.data = SignatureDescriptor_Data.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignatureDescriptor {
    const obj = createBaseSignatureDescriptor();
    if (isSet(object.publicKey)) obj.publicKey = Any.fromJSON(object.publicKey);
    if (isSet(object.data)) obj.data = SignatureDescriptor_Data.fromJSON(object.data);
    if (isSet(object.sequence)) obj.sequence = BigInt(object.sequence.toString());
    return obj;
  },
  fromPartial(object: DeepPartial<SignatureDescriptor>): SignatureDescriptor {
    const message = createBaseSignatureDescriptor();
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = Any.fromPartial(object.publicKey);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = SignatureDescriptor_Data.fromPartial(object.data);
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    return message;
  },
  fromSDK(object: SignatureDescriptorSDKType): SignatureDescriptor {
    return {
      publicKey: object.public_key ? Any.fromSDK(object.public_key) : undefined,
      data: object.data ? SignatureDescriptor_Data.fromSDK(object.data) : undefined,
      sequence: object?.sequence
    };
  },
  toSDK(message: SignatureDescriptor): SignatureDescriptorSDKType {
    const obj: any = {};
    message.publicKey !== undefined && (obj.public_key = message.publicKey ? Any.toSDK(message.publicKey) : undefined);
    message.data !== undefined && (obj.data = message.data ? SignatureDescriptor_Data.toSDK(message.data) : undefined);
    obj.sequence = message.sequence;
    return obj;
  },
  fromAmino(object: SignatureDescriptorAmino): SignatureDescriptor {
    const message = createBaseSignatureDescriptor();
    if (object.public_key !== undefined && object.public_key !== null) {
      message.publicKey = Any.fromAmino(object.public_key);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = SignatureDescriptor_Data.fromAmino(object.data);
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: SignatureDescriptor, useInterfaces: boolean = true): SignatureDescriptorAmino {
    const obj: any = {};
    obj.public_key = message.publicKey ? Any.toAmino(message.publicKey, useInterfaces) : undefined;
    obj.data = message.data ? SignatureDescriptor_Data.toAmino(message.data, useInterfaces) : undefined;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: SignatureDescriptorProtoMsg, useInterfaces: boolean = true): SignatureDescriptor {
    return SignatureDescriptor.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SignatureDescriptor): Uint8Array {
    return SignatureDescriptor.encode(message).finish();
  },
  toProtoMsg(message: SignatureDescriptor): SignatureDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptor",
      value: SignatureDescriptor.encode(message).finish()
    };
  }
};
function createBaseSignatureDescriptor_Data(): SignatureDescriptor_Data {
  return {
    single: undefined,
    multi: undefined
  };
}
export const SignatureDescriptor_Data = {
  typeUrl: "/cosmos.tx.signing.v1beta1.Data",
  aminoType: "cosmos-sdk/Data",
  encode(message: SignatureDescriptor_Data, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.single !== undefined) {
      SignatureDescriptor_Data_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      SignatureDescriptor_Data_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SignatureDescriptor_Data {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.single = SignatureDescriptor_Data_Single.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.multi = SignatureDescriptor_Data_Multi.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignatureDescriptor_Data {
    const obj = createBaseSignatureDescriptor_Data();
    if (isSet(object.single)) obj.single = SignatureDescriptor_Data_Single.fromJSON(object.single);
    if (isSet(object.multi)) obj.multi = SignatureDescriptor_Data_Multi.fromJSON(object.multi);
    return obj;
  },
  fromPartial(object: DeepPartial<SignatureDescriptor_Data>): SignatureDescriptor_Data {
    const message = createBaseSignatureDescriptor_Data();
    if (object.single !== undefined && object.single !== null) {
      message.single = SignatureDescriptor_Data_Single.fromPartial(object.single);
    }
    if (object.multi !== undefined && object.multi !== null) {
      message.multi = SignatureDescriptor_Data_Multi.fromPartial(object.multi);
    }
    return message;
  },
  fromSDK(object: SignatureDescriptor_DataSDKType): SignatureDescriptor_Data {
    return {
      single: object.single ? SignatureDescriptor_Data_Single.fromSDK(object.single) : undefined,
      multi: object.multi ? SignatureDescriptor_Data_Multi.fromSDK(object.multi) : undefined
    };
  },
  toSDK(message: SignatureDescriptor_Data): SignatureDescriptor_DataSDKType {
    const obj: any = {};
    message.single !== undefined && (obj.single = message.single ? SignatureDescriptor_Data_Single.toSDK(message.single) : undefined);
    message.multi !== undefined && (obj.multi = message.multi ? SignatureDescriptor_Data_Multi.toSDK(message.multi) : undefined);
    return obj;
  },
  fromAmino(object: SignatureDescriptor_DataAmino): SignatureDescriptor_Data {
    const message = createBaseSignatureDescriptor_Data();
    if (object.single !== undefined && object.single !== null) {
      message.single = SignatureDescriptor_Data_Single.fromAmino(object.single);
    }
    if (object.multi !== undefined && object.multi !== null) {
      message.multi = SignatureDescriptor_Data_Multi.fromAmino(object.multi);
    }
    return message;
  },
  toAmino(message: SignatureDescriptor_Data, useInterfaces: boolean = true): SignatureDescriptor_DataAmino {
    const obj: any = {};
    obj.single = message.single ? SignatureDescriptor_Data_Single.toAmino(message.single, useInterfaces) : undefined;
    obj.multi = message.multi ? SignatureDescriptor_Data_Multi.toAmino(message.multi, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: SignatureDescriptor_DataProtoMsg, useInterfaces: boolean = true): SignatureDescriptor_Data {
    return SignatureDescriptor_Data.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SignatureDescriptor_Data): Uint8Array {
    return SignatureDescriptor_Data.encode(message).finish();
  },
  toProtoMsg(message: SignatureDescriptor_Data): SignatureDescriptor_DataProtoMsg {
    return {
      typeUrl: "/cosmos.tx.signing.v1beta1.Data",
      value: SignatureDescriptor_Data.encode(message).finish()
    };
  }
};
function createBaseSignatureDescriptor_Data_Single(): SignatureDescriptor_Data_Single {
  return {
    mode: 0,
    signature: new Uint8Array()
  };
}
export const SignatureDescriptor_Data_Single = {
  typeUrl: "/cosmos.tx.signing.v1beta1.Single",
  aminoType: "cosmos-sdk/Single",
  encode(message: SignatureDescriptor_Data_Single, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SignatureDescriptor_Data_Single {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor_Data_Single();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = (reader.int32() as any);
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignatureDescriptor_Data_Single {
    const obj = createBaseSignatureDescriptor_Data_Single();
    if (isSet(object.mode)) obj.mode = signModeFromJSON(object.mode);
    if (isSet(object.signature)) obj.signature = bytesFromBase64(object.signature);
    return obj;
  },
  fromPartial(object: DeepPartial<SignatureDescriptor_Data_Single>): SignatureDescriptor_Data_Single {
    const message = createBaseSignatureDescriptor_Data_Single();
    message.mode = object.mode ?? 0;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
  fromSDK(object: SignatureDescriptor_Data_SingleSDKType): SignatureDescriptor_Data_Single {
    return {
      mode: isSet(object.mode) ? signModeFromJSON(object.mode) : -1,
      signature: object?.signature
    };
  },
  toSDK(message: SignatureDescriptor_Data_Single): SignatureDescriptor_Data_SingleSDKType {
    const obj: any = {};
    message.mode !== undefined && (obj.mode = signModeToJSON(message.mode));
    obj.signature = message.signature;
    return obj;
  },
  fromAmino(object: SignatureDescriptor_Data_SingleAmino): SignatureDescriptor_Data_Single {
    const message = createBaseSignatureDescriptor_Data_Single();
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = object.mode;
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    return message;
  },
  toAmino(message: SignatureDescriptor_Data_Single, useInterfaces: boolean = true): SignatureDescriptor_Data_SingleAmino {
    const obj: any = {};
    obj.mode = message.mode === 0 ? undefined : message.mode;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    return obj;
  },
  fromProtoMsg(message: SignatureDescriptor_Data_SingleProtoMsg, useInterfaces: boolean = true): SignatureDescriptor_Data_Single {
    return SignatureDescriptor_Data_Single.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SignatureDescriptor_Data_Single): Uint8Array {
    return SignatureDescriptor_Data_Single.encode(message).finish();
  },
  toProtoMsg(message: SignatureDescriptor_Data_Single): SignatureDescriptor_Data_SingleProtoMsg {
    return {
      typeUrl: "/cosmos.tx.signing.v1beta1.Single",
      value: SignatureDescriptor_Data_Single.encode(message).finish()
    };
  }
};
function createBaseSignatureDescriptor_Data_Multi(): SignatureDescriptor_Data_Multi {
  return {
    bitarray: undefined,
    signatures: []
  };
}
export const SignatureDescriptor_Data_Multi = {
  typeUrl: "/cosmos.tx.signing.v1beta1.Multi",
  aminoType: "cosmos-sdk/Multi",
  encode(message: SignatureDescriptor_Data_Multi, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bitarray !== undefined) {
      CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signatures) {
      SignatureDescriptor_Data.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SignatureDescriptor_Data_Multi {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor_Data_Multi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitarray = CompactBitArray.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.signatures.push(SignatureDescriptor_Data.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignatureDescriptor_Data_Multi {
    const obj = createBaseSignatureDescriptor_Data_Multi();
    if (isSet(object.bitarray)) obj.bitarray = CompactBitArray.fromJSON(object.bitarray);
    if (Array.isArray(object?.signatures)) obj.signatures = object.signatures.map((e: any) => SignatureDescriptor_Data.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<SignatureDescriptor_Data_Multi>): SignatureDescriptor_Data_Multi {
    const message = createBaseSignatureDescriptor_Data_Multi();
    if (object.bitarray !== undefined && object.bitarray !== null) {
      message.bitarray = CompactBitArray.fromPartial(object.bitarray);
    }
    message.signatures = object.signatures?.map(e => SignatureDescriptor_Data.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: SignatureDescriptor_Data_MultiSDKType): SignatureDescriptor_Data_Multi {
    return {
      bitarray: object.bitarray ? CompactBitArray.fromSDK(object.bitarray) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => SignatureDescriptor_Data.fromSDK(e)) : []
    };
  },
  toSDK(message: SignatureDescriptor_Data_Multi): SignatureDescriptor_Data_MultiSDKType {
    const obj: any = {};
    message.bitarray !== undefined && (obj.bitarray = message.bitarray ? CompactBitArray.toSDK(message.bitarray) : undefined);
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e ? SignatureDescriptor_Data.toSDK(e) : undefined);
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromAmino(object: SignatureDescriptor_Data_MultiAmino): SignatureDescriptor_Data_Multi {
    const message = createBaseSignatureDescriptor_Data_Multi();
    if (object.bitarray !== undefined && object.bitarray !== null) {
      message.bitarray = CompactBitArray.fromAmino(object.bitarray);
    }
    message.signatures = object.signatures?.map(e => SignatureDescriptor_Data.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SignatureDescriptor_Data_Multi, useInterfaces: boolean = true): SignatureDescriptor_Data_MultiAmino {
    const obj: any = {};
    obj.bitarray = message.bitarray ? CompactBitArray.toAmino(message.bitarray, useInterfaces) : undefined;
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e ? SignatureDescriptor_Data.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.signatures = message.signatures;
    }
    return obj;
  },
  fromProtoMsg(message: SignatureDescriptor_Data_MultiProtoMsg, useInterfaces: boolean = true): SignatureDescriptor_Data_Multi {
    return SignatureDescriptor_Data_Multi.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SignatureDescriptor_Data_Multi): Uint8Array {
    return SignatureDescriptor_Data_Multi.encode(message).finish();
  },
  toProtoMsg(message: SignatureDescriptor_Data_Multi): SignatureDescriptor_Data_MultiProtoMsg {
    return {
      typeUrl: "/cosmos.tx.signing.v1beta1.Multi",
      value: SignatureDescriptor_Data_Multi.encode(message).finish()
    };
  }
};