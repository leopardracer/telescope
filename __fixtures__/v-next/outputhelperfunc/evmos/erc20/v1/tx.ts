import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "evmos.erc20.v1";
/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoin {
  /**
   * Cosmos coin which denomination is registered in a token pair. The coin
   * amount defines the amount of coins to convert.
   */
  coin: Coin;
  /** recipient hex address to receive ERC20 token */
  receiver: string;
  /** cosmos bech32 address from the owner of the given Cosmos coins */
  sender: string;
}
export interface MsgConvertCoinProtoMsg {
  typeUrl: "/evmos.erc20.v1.MsgConvertCoin";
  value: Uint8Array;
}
/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoinAmino {
  /**
   * Cosmos coin which denomination is registered in a token pair. The coin
   * amount defines the amount of coins to convert.
   */
  coin?: CoinAmino;
  /** recipient hex address to receive ERC20 token */
  receiver?: string;
  /** cosmos bech32 address from the owner of the given Cosmos coins */
  sender?: string;
}
export interface MsgConvertCoinAminoMsg {
  type: "/evmos.erc20.v1.MsgConvertCoin";
  value: MsgConvertCoinAmino;
}
/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoinSDKType {
  coin: CoinSDKType;
  receiver: string;
  sender: string;
}
/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponse {}
export interface MsgConvertCoinResponseProtoMsg {
  typeUrl: "/evmos.erc20.v1.MsgConvertCoinResponse";
  value: Uint8Array;
}
/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponseAmino {}
export interface MsgConvertCoinResponseAminoMsg {
  type: "/evmos.erc20.v1.MsgConvertCoinResponse";
  value: MsgConvertCoinResponseAmino;
}
/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponseSDKType {}
/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 */
export interface MsgConvertERC20 {
  /** ERC20 token contract address registered in a token pair */
  contractAddress: string;
  /** amount of ERC20 tokens to convert */
  amount: string;
  /** bech32 address to receive native Cosmos coins */
  receiver: string;
  /** sender hex address from the owner of the given ERC20 tokens */
  sender: string;
}
export interface MsgConvertERC20ProtoMsg {
  typeUrl: "/evmos.erc20.v1.MsgConvertERC20";
  value: Uint8Array;
}
/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 */
export interface MsgConvertERC20Amino {
  /** ERC20 token contract address registered in a token pair */
  contract_address?: string;
  /** amount of ERC20 tokens to convert */
  amount?: string;
  /** bech32 address to receive native Cosmos coins */
  receiver?: string;
  /** sender hex address from the owner of the given ERC20 tokens */
  sender?: string;
}
export interface MsgConvertERC20AminoMsg {
  type: "/evmos.erc20.v1.MsgConvertERC20";
  value: MsgConvertERC20Amino;
}
/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 */
export interface MsgConvertERC20SDKType {
  contract_address: string;
  amount: string;
  receiver: string;
  sender: string;
}
/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20Response {}
export interface MsgConvertERC20ResponseProtoMsg {
  typeUrl: "/evmos.erc20.v1.MsgConvertERC20Response";
  value: Uint8Array;
}
/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20ResponseAmino {}
export interface MsgConvertERC20ResponseAminoMsg {
  type: "/evmos.erc20.v1.MsgConvertERC20Response";
  value: MsgConvertERC20ResponseAmino;
}
/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20ResponseSDKType {}
function createBaseMsgConvertCoin(): MsgConvertCoin {
  return {
    coin: Coin.fromPartial({}),
    receiver: "",
    sender: ""
  };
}
export const MsgConvertCoin = {
  typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
  is(o: any): o is MsgConvertCoin {
    return o && (o.$typeUrl === MsgConvertCoin.typeUrl || Coin.is(o.coin) && typeof o.receiver === "string" && typeof o.sender === "string");
  },
  isSDK(o: any): o is MsgConvertCoinSDKType {
    return o && (o.$typeUrl === MsgConvertCoin.typeUrl || Coin.isSDK(o.coin) && typeof o.receiver === "string" && typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgConvertCoinAmino {
    return o && (o.$typeUrl === MsgConvertCoin.typeUrl || Coin.isAmino(o.coin) && typeof o.receiver === "string" && typeof o.sender === "string");
  },
  encode(message: MsgConvertCoin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.receiver !== undefined) {
      writer.uint32(18).string(message.receiver);
    }
    if (message.sender !== undefined) {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCoin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgConvertCoin {
    const obj = createBaseMsgConvertCoin();
    if (isSet(object.coin)) obj.coin = Coin.fromJSON(object.coin);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: MsgConvertCoin): JsonSafe<MsgConvertCoin> {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgConvertCoin>): MsgConvertCoin {
    const message = createBaseMsgConvertCoin();
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromPartial(object.coin);
    }
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgConvertCoinSDKType): MsgConvertCoin {
    return {
      coin: object.coin ? Coin.fromSDK(object.coin) : undefined,
      receiver: object?.receiver,
      sender: object?.sender
    };
  },
  fromSDKJSON(object: any): MsgConvertCoinSDKType {
    return {
      coin: isSet(object.coin) ? Coin.fromSDKJSON(object.coin) : undefined,
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  toSDK(message: MsgConvertCoin): MsgConvertCoinSDKType {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toSDK(message.coin) : undefined);
    obj.receiver = message.receiver;
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: MsgConvertCoinAmino): MsgConvertCoin {
    const message = createBaseMsgConvertCoin();
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgConvertCoin): MsgConvertCoinAmino {
    const obj: any = {};
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgConvertCoinAminoMsg): MsgConvertCoin {
    return MsgConvertCoin.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertCoinProtoMsg): MsgConvertCoin {
    return MsgConvertCoin.decode(message.value);
  },
  toProto(message: MsgConvertCoin): Uint8Array {
    return MsgConvertCoin.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertCoin): MsgConvertCoinProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
      value: MsgConvertCoin.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Coin.registerTypeUrl();
  }
};
function createBaseMsgConvertCoinResponse(): MsgConvertCoinResponse {
  return {};
}
export const MsgConvertCoinResponse = {
  typeUrl: "/evmos.erc20.v1.MsgConvertCoinResponse",
  is(o: any): o is MsgConvertCoinResponse {
    return o && o.$typeUrl === MsgConvertCoinResponse.typeUrl;
  },
  isSDK(o: any): o is MsgConvertCoinResponseSDKType {
    return o && o.$typeUrl === MsgConvertCoinResponse.typeUrl;
  },
  isAmino(o: any): o is MsgConvertCoinResponseAmino {
    return o && o.$typeUrl === MsgConvertCoinResponse.typeUrl;
  },
  encode(_: MsgConvertCoinResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCoinResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoinResponse();
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
  fromJSON(_: any): MsgConvertCoinResponse {
    const obj = createBaseMsgConvertCoinResponse();
    return obj;
  },
  toJSON(_: MsgConvertCoinResponse): JsonSafe<MsgConvertCoinResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgConvertCoinResponse>): MsgConvertCoinResponse {
    const message = createBaseMsgConvertCoinResponse();
    return message;
  },
  fromSDK(_: MsgConvertCoinResponseSDKType): MsgConvertCoinResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgConvertCoinResponseSDKType {
    return {};
  },
  toSDK(_: MsgConvertCoinResponse): MsgConvertCoinResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgConvertCoinResponseAmino): MsgConvertCoinResponse {
    const message = createBaseMsgConvertCoinResponse();
    return message;
  },
  toAmino(_: MsgConvertCoinResponse): MsgConvertCoinResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConvertCoinResponseAminoMsg): MsgConvertCoinResponse {
    return MsgConvertCoinResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertCoinResponseProtoMsg): MsgConvertCoinResponse {
    return MsgConvertCoinResponse.decode(message.value);
  },
  toProto(message: MsgConvertCoinResponse): Uint8Array {
    return MsgConvertCoinResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertCoinResponse): MsgConvertCoinResponseProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.MsgConvertCoinResponse",
      value: MsgConvertCoinResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgConvertERC20(): MsgConvertERC20 {
  return {
    contractAddress: "",
    amount: "",
    receiver: "",
    sender: ""
  };
}
export const MsgConvertERC20 = {
  typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
  is(o: any): o is MsgConvertERC20 {
    return o && (o.$typeUrl === MsgConvertERC20.typeUrl || typeof o.contractAddress === "string" && typeof o.amount === "string" && typeof o.receiver === "string" && typeof o.sender === "string");
  },
  isSDK(o: any): o is MsgConvertERC20SDKType {
    return o && (o.$typeUrl === MsgConvertERC20.typeUrl || typeof o.contract_address === "string" && typeof o.amount === "string" && typeof o.receiver === "string" && typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgConvertERC20Amino {
    return o && (o.$typeUrl === MsgConvertERC20.typeUrl || typeof o.contract_address === "string" && typeof o.amount === "string" && typeof o.receiver === "string" && typeof o.sender === "string");
  },
  encode(message: MsgConvertERC20, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== undefined) {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.amount !== undefined) {
      writer.uint32(18).string(message.amount);
    }
    if (message.receiver !== undefined) {
      writer.uint32(26).string(message.receiver);
    }
    if (message.sender !== undefined) {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertERC20 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgConvertERC20 {
    const obj = createBaseMsgConvertERC20();
    if (isSet(object.contractAddress)) obj.contractAddress = String(object.contractAddress);
    if (isSet(object.amount)) obj.amount = String(object.amount);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: MsgConvertERC20): JsonSafe<MsgConvertERC20> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgConvertERC20>): MsgConvertERC20 {
    const message = createBaseMsgConvertERC20();
    message.contractAddress = object.contractAddress ?? "";
    message.amount = object.amount ?? "";
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgConvertERC20SDKType): MsgConvertERC20 {
    return {
      contractAddress: object?.contract_address,
      amount: object?.amount,
      receiver: object?.receiver,
      sender: object?.sender
    };
  },
  fromSDKJSON(object: any): MsgConvertERC20SDKType {
    return {
      contract_address: isSet(object.contract_address) ? String(object.contract_address) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  toSDK(message: MsgConvertERC20): MsgConvertERC20SDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.amount = message.amount;
    obj.receiver = message.receiver;
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: MsgConvertERC20Amino): MsgConvertERC20 {
    const message = createBaseMsgConvertERC20();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgConvertERC20): MsgConvertERC20Amino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgConvertERC20AminoMsg): MsgConvertERC20 {
    return MsgConvertERC20.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertERC20ProtoMsg): MsgConvertERC20 {
    return MsgConvertERC20.decode(message.value);
  },
  toProto(message: MsgConvertERC20): Uint8Array {
    return MsgConvertERC20.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertERC20): MsgConvertERC20ProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
      value: MsgConvertERC20.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgConvertERC20Response(): MsgConvertERC20Response {
  return {};
}
export const MsgConvertERC20Response = {
  typeUrl: "/evmos.erc20.v1.MsgConvertERC20Response",
  is(o: any): o is MsgConvertERC20Response {
    return o && o.$typeUrl === MsgConvertERC20Response.typeUrl;
  },
  isSDK(o: any): o is MsgConvertERC20ResponseSDKType {
    return o && o.$typeUrl === MsgConvertERC20Response.typeUrl;
  },
  isAmino(o: any): o is MsgConvertERC20ResponseAmino {
    return o && o.$typeUrl === MsgConvertERC20Response.typeUrl;
  },
  encode(_: MsgConvertERC20Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertERC20Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20Response();
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
  fromJSON(_: any): MsgConvertERC20Response {
    const obj = createBaseMsgConvertERC20Response();
    return obj;
  },
  toJSON(_: MsgConvertERC20Response): JsonSafe<MsgConvertERC20Response> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgConvertERC20Response>): MsgConvertERC20Response {
    const message = createBaseMsgConvertERC20Response();
    return message;
  },
  fromSDK(_: MsgConvertERC20ResponseSDKType): MsgConvertERC20Response {
    return {};
  },
  fromSDKJSON(_: any): MsgConvertERC20ResponseSDKType {
    return {};
  },
  toSDK(_: MsgConvertERC20Response): MsgConvertERC20ResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgConvertERC20ResponseAmino): MsgConvertERC20Response {
    const message = createBaseMsgConvertERC20Response();
    return message;
  },
  toAmino(_: MsgConvertERC20Response): MsgConvertERC20ResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConvertERC20ResponseAminoMsg): MsgConvertERC20Response {
    return MsgConvertERC20Response.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertERC20ResponseProtoMsg): MsgConvertERC20Response {
    return MsgConvertERC20Response.decode(message.value);
  },
  toProto(message: MsgConvertERC20Response): Uint8Array {
    return MsgConvertERC20Response.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertERC20Response): MsgConvertERC20ResponseProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.MsgConvertERC20Response",
      value: MsgConvertERC20Response.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};