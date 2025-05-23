import { Certificate, CertificateAmino, CertificateSDKType } from "./cert";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "akash.cert.v1beta2";
/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificate {
  owner: string;
  certificate: Certificate;
}
export interface GenesisCertificateProtoMsg {
  typeUrl: "/akash.cert.v1beta2.GenesisCertificate";
  value: Uint8Array;
}
/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificateAmino {
  owner: string;
  certificate: CertificateAmino;
}
export interface GenesisCertificateAminoMsg {
  type: "akash/cert/v1beta2/genesis-certificate";
  value: GenesisCertificateAmino;
}
/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificateSDKType {
  owner: string;
  certificate: CertificateSDKType;
}
/** GenesisState defines the basic genesis state used by cert module */
export interface GenesisState {
  certificates: GenesisCertificate[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.cert.v1beta2.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the basic genesis state used by cert module */
export interface GenesisStateAmino {
  certificates: GenesisCertificateAmino[];
}
export interface GenesisStateAminoMsg {
  type: "akash/cert/v1beta2/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the basic genesis state used by cert module */
export interface GenesisStateSDKType {
  certificates: GenesisCertificateSDKType[];
}
function createBaseGenesisCertificate(): GenesisCertificate {
  return {
    owner: "",
    certificate: Certificate.fromPartial({})
  };
}
export const GenesisCertificate = {
  typeUrl: "/akash.cert.v1beta2.GenesisCertificate",
  aminoType: "akash/cert/v1beta2/genesis-certificate",
  is(o: any): o is GenesisCertificate {
    return o && (o.$typeUrl === GenesisCertificate.typeUrl || typeof o.owner === "string" && Certificate.is(o.certificate));
  },
  isSDK(o: any): o is GenesisCertificateSDKType {
    return o && (o.$typeUrl === GenesisCertificate.typeUrl || typeof o.owner === "string" && Certificate.isSDK(o.certificate));
  },
  isAmino(o: any): o is GenesisCertificateAmino {
    return o && (o.$typeUrl === GenesisCertificate.typeUrl || typeof o.owner === "string" && Certificate.isAmino(o.certificate));
  },
  encode(message: GenesisCertificate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    if (message.certificate !== undefined) {
      Certificate.encode(message.certificate, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisCertificate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.certificate = Certificate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisCertificate {
    const obj = createBaseGenesisCertificate();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.certificate)) obj.certificate = Certificate.fromJSON(object.certificate);
    return obj;
  },
  toJSON(message: GenesisCertificate): JsonSafe<GenesisCertificate> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.certificate !== undefined && (obj.certificate = message.certificate ? Certificate.toJSON(message.certificate) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisCertificate>, I>>(object: I): GenesisCertificate {
    const message = createBaseGenesisCertificate();
    message.owner = object.owner ?? "";
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromPartial(object.certificate);
    }
    return message;
  },
  fromSDK(object: GenesisCertificateSDKType): GenesisCertificate {
    return {
      owner: object?.owner,
      certificate: object.certificate ? Certificate.fromSDK(object.certificate) : undefined
    };
  },
  fromSDKJSON(object: any): GenesisCertificateSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      certificate: isSet(object.certificate) ? Certificate.fromSDKJSON(object.certificate) : undefined
    };
  },
  toSDK(message: GenesisCertificate): GenesisCertificateSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    message.certificate !== undefined && (obj.certificate = message.certificate ? Certificate.toSDK(message.certificate) : undefined);
    return obj;
  },
  fromAmino(object: GenesisCertificateAmino): GenesisCertificate {
    const message = createBaseGenesisCertificate();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromAmino(object.certificate);
    }
    return message;
  },
  toAmino(message: GenesisCertificate): GenesisCertificateAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.certificate = message.certificate ? Certificate.toAmino(message.certificate) : Certificate.toAmino(Certificate.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: GenesisCertificateAminoMsg): GenesisCertificate {
    return GenesisCertificate.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisCertificate): GenesisCertificateAminoMsg {
    return {
      type: "akash/cert/v1beta2/genesis-certificate",
      value: GenesisCertificate.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisCertificateProtoMsg): GenesisCertificate {
    return GenesisCertificate.decode(message.value);
  },
  toProto(message: GenesisCertificate): Uint8Array {
    return GenesisCertificate.encode(message).finish();
  },
  toProtoMsg(message: GenesisCertificate): GenesisCertificateProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta2.GenesisCertificate",
      value: GenesisCertificate.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Certificate.registerTypeUrl();
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    certificates: []
  };
}
export const GenesisState = {
  typeUrl: "/akash.cert.v1beta2.GenesisState",
  aminoType: "akash/cert/v1beta2/genesis-state",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.certificates) && (!o.certificates.length || GenesisCertificate.is(o.certificates[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.certificates) && (!o.certificates.length || GenesisCertificate.isSDK(o.certificates[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.certificates) && (!o.certificates.length || GenesisCertificate.isAmino(o.certificates[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.certificates) {
      GenesisCertificate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificates.push(GenesisCertificate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (Array.isArray(object?.certificates)) obj.certificates = object.certificates.map((e: any) => GenesisCertificate.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map(e => e ? GenesisCertificate.toJSON(e) : undefined);
    } else {
      obj.certificates = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.certificates = object.certificates?.map(e => GenesisCertificate.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      certificates: Array.isArray(object?.certificates) ? object.certificates.map((e: any) => GenesisCertificate.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      certificates: Array.isArray(object?.certificates) ? object.certificates.map((e: any) => GenesisCertificate.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map(e => e ? GenesisCertificate.toSDK(e) : undefined);
    } else {
      obj.certificates = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.certificates = object.certificates?.map(e => GenesisCertificate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map(e => e ? GenesisCertificate.toAmino(e) : undefined);
    } else {
      obj.certificates = message.certificates;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "akash/cert/v1beta2/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    GenesisCertificate.registerTypeUrl();
  }
};