import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.crypto.secp256r1";
/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKey {
  /**
   * Point on secp256r1 curve in a compressed representation as specified in section
   * 4.3.6 of ANSI X9.62: https://webstore.ansi.org/standards/ascx9/ansix9621998
   */
  key: Uint8Array;
}
export interface PubKeyProtoMsg {
  typeUrl: "/cosmos.crypto.secp256r1.PubKey";
  value: Uint8Array;
}
/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKeyAmino {
  /**
   * Point on secp256r1 curve in a compressed representation as specified in section
   * 4.3.6 of ANSI X9.62: https://webstore.ansi.org/standards/ascx9/ansix9621998
   */
  key?: string;
}
export interface PubKeyAminoMsg {
  type: "cosmos-sdk/PubKey";
  value: PubKeyAmino;
}
/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKeySDKType {
  key: Uint8Array;
}
/** PrivKey defines a secp256r1 ECDSA private key. */
export interface PrivKey {
  /** secret number serialized using big-endian encoding */
  secret: Uint8Array;
}
export interface PrivKeyProtoMsg {
  typeUrl: "/cosmos.crypto.secp256r1.PrivKey";
  value: Uint8Array;
}
/** PrivKey defines a secp256r1 ECDSA private key. */
export interface PrivKeyAmino {
  /** secret number serialized using big-endian encoding */
  secret?: string;
}
export interface PrivKeyAminoMsg {
  type: "cosmos-sdk/PrivKey";
  value: PrivKeyAmino;
}
/** PrivKey defines a secp256r1 ECDSA private key. */
export interface PrivKeySDKType {
  secret: Uint8Array;
}
function createBasePubKey(): PubKey {
  return {
    key: new Uint8Array()
  };
}
export const PubKey = {
  typeUrl: "/cosmos.crypto.secp256r1.PubKey",
  aminoType: "cosmos-sdk/PubKey",
  is(o: any): o is PubKey {
    return o && (o.$typeUrl === PubKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  isSDK(o: any): o is PubKeySDKType {
    return o && (o.$typeUrl === PubKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  isAmino(o: any): o is PubKeyAmino {
    return o && (o.$typeUrl === PubKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  encode(message: PubKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PubKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PubKey {
    const obj = createBasePubKey();
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    return obj;
  },
  toJSON(message: PubKey): JsonSafe<PubKey> {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<PubKey>): PubKey {
    const message = createBasePubKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  },
  fromSDK(object: PubKeySDKType): PubKey {
    return {
      key: object?.key
    };
  },
  fromSDKJSON(object: any): PubKeySDKType {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
    };
  },
  toSDK(message: PubKey): PubKeySDKType {
    const obj: any = {};
    obj.key = message.key;
    return obj;
  },
  fromAmino(object: PubKeyAmino): PubKey {
    const message = createBasePubKey();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },
  toAmino(message: PubKey): PubKeyAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    return obj;
  },
  fromAminoMsg(object: PubKeyAminoMsg): PubKey {
    return PubKey.fromAmino(object.value);
  },
  toAminoMsg(message: PubKey): PubKeyAminoMsg {
    return {
      type: "cosmos-sdk/PubKey",
      value: PubKey.toAmino(message)
    };
  },
  fromProtoMsg(message: PubKeyProtoMsg): PubKey {
    return PubKey.decode(message.value);
  },
  toProto(message: PubKey): Uint8Array {
    return PubKey.encode(message).finish();
  },
  toProtoMsg(message: PubKey): PubKeyProtoMsg {
    return {
      typeUrl: "/cosmos.crypto.secp256r1.PubKey",
      value: PubKey.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePrivKey(): PrivKey {
  return {
    secret: new Uint8Array()
  };
}
export const PrivKey = {
  typeUrl: "/cosmos.crypto.secp256r1.PrivKey",
  aminoType: "cosmos-sdk/PrivKey",
  is(o: any): o is PrivKey {
    return o && (o.$typeUrl === PrivKey.typeUrl || o.secret instanceof Uint8Array || typeof o.secret === "string");
  },
  isSDK(o: any): o is PrivKeySDKType {
    return o && (o.$typeUrl === PrivKey.typeUrl || o.secret instanceof Uint8Array || typeof o.secret === "string");
  },
  isAmino(o: any): o is PrivKeyAmino {
    return o && (o.$typeUrl === PrivKey.typeUrl || o.secret instanceof Uint8Array || typeof o.secret === "string");
  },
  encode(message: PrivKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.secret.length !== 0) {
      writer.uint32(10).bytes(message.secret);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrivKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secret = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PrivKey {
    const obj = createBasePrivKey();
    if (isSet(object.secret)) obj.secret = bytesFromBase64(object.secret);
    return obj;
  },
  toJSON(message: PrivKey): JsonSafe<PrivKey> {
    const obj: any = {};
    message.secret !== undefined && (obj.secret = base64FromBytes(message.secret !== undefined ? message.secret : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<PrivKey>): PrivKey {
    const message = createBasePrivKey();
    message.secret = object.secret ?? new Uint8Array();
    return message;
  },
  fromSDK(object: PrivKeySDKType): PrivKey {
    return {
      secret: object?.secret
    };
  },
  fromSDKJSON(object: any): PrivKeySDKType {
    return {
      secret: isSet(object.secret) ? bytesFromBase64(object.secret) : new Uint8Array()
    };
  },
  toSDK(message: PrivKey): PrivKeySDKType {
    const obj: any = {};
    obj.secret = message.secret;
    return obj;
  },
  fromAmino(object: PrivKeyAmino): PrivKey {
    const message = createBasePrivKey();
    if (object.secret !== undefined && object.secret !== null) {
      message.secret = bytesFromBase64(object.secret);
    }
    return message;
  },
  toAmino(message: PrivKey): PrivKeyAmino {
    const obj: any = {};
    obj.secret = message.secret ? base64FromBytes(message.secret) : undefined;
    return obj;
  },
  fromAminoMsg(object: PrivKeyAminoMsg): PrivKey {
    return PrivKey.fromAmino(object.value);
  },
  toAminoMsg(message: PrivKey): PrivKeyAminoMsg {
    return {
      type: "cosmos-sdk/PrivKey",
      value: PrivKey.toAmino(message)
    };
  },
  fromProtoMsg(message: PrivKeyProtoMsg): PrivKey {
    return PrivKey.decode(message.value);
  },
  toProto(message: PrivKey): Uint8Array {
    return PrivKey.encode(message).finish();
  },
  toProtoMsg(message: PrivKey): PrivKeyProtoMsg {
    return {
      typeUrl: "/cosmos.crypto.secp256r1.PrivKey",
      value: PrivKey.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};