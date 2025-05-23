import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "evmos.fees.v1";
/**
 * DevFeeInfo defines an instance that organizes fee distribution conditions
 * for the owner of a given smart contract
 */
export interface DevFeeInfo {
  /** hex address of registered contract */
  contractAddress: string;
  /** bech32 address of contract deployer */
  deployerAddress: string;
  /**
   * bech32 address of account receiving the transaction fees
   * it defaults to deployer_address
   */
  withdrawAddress: string;
}
export interface DevFeeInfoProtoMsg {
  typeUrl: "/evmos.fees.v1.DevFeeInfo";
  value: Uint8Array;
}
/**
 * DevFeeInfo defines an instance that organizes fee distribution conditions
 * for the owner of a given smart contract
 */
export interface DevFeeInfoAmino {
  /** hex address of registered contract */
  contract_address?: string;
  /** bech32 address of contract deployer */
  deployer_address?: string;
  /**
   * bech32 address of account receiving the transaction fees
   * it defaults to deployer_address
   */
  withdraw_address?: string;
}
export interface DevFeeInfoAminoMsg {
  type: "/evmos.fees.v1.DevFeeInfo";
  value: DevFeeInfoAmino;
}
/**
 * DevFeeInfo defines an instance that organizes fee distribution conditions
 * for the owner of a given smart contract
 */
export interface DevFeeInfoSDKType {
  contract_address: string;
  deployer_address: string;
  withdraw_address: string;
}
function createBaseDevFeeInfo(): DevFeeInfo {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawAddress: ""
  };
}
export const DevFeeInfo = {
  typeUrl: "/evmos.fees.v1.DevFeeInfo",
  is(o: any): o is DevFeeInfo {
    return o && (o.$typeUrl === DevFeeInfo.typeUrl || typeof o.contractAddress === "string" && typeof o.deployerAddress === "string" && typeof o.withdrawAddress === "string");
  },
  isSDK(o: any): o is DevFeeInfoSDKType {
    return o && (o.$typeUrl === DevFeeInfo.typeUrl || typeof o.contract_address === "string" && typeof o.deployer_address === "string" && typeof o.withdraw_address === "string");
  },
  isAmino(o: any): o is DevFeeInfoAmino {
    return o && (o.$typeUrl === DevFeeInfo.typeUrl || typeof o.contract_address === "string" && typeof o.deployer_address === "string" && typeof o.withdraw_address === "string");
  },
  encode(message: DevFeeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== undefined) {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== undefined) {
      writer.uint32(18).string(message.deployerAddress);
    }
    if (message.withdrawAddress !== undefined) {
      writer.uint32(26).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DevFeeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDevFeeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.deployerAddress = reader.string();
          break;
        case 3:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DevFeeInfo {
    const obj = createBaseDevFeeInfo();
    if (isSet(object.contractAddress)) obj.contractAddress = String(object.contractAddress);
    if (isSet(object.deployerAddress)) obj.deployerAddress = String(object.deployerAddress);
    if (isSet(object.withdrawAddress)) obj.withdrawAddress = String(object.withdrawAddress);
    return obj;
  },
  toJSON(message: DevFeeInfo): JsonSafe<DevFeeInfo> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<DevFeeInfo>): DevFeeInfo {
    const message = createBaseDevFeeInfo();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromSDK(object: DevFeeInfoSDKType): DevFeeInfo {
    return {
      contractAddress: object?.contract_address,
      deployerAddress: object?.deployer_address,
      withdrawAddress: object?.withdraw_address
    };
  },
  fromSDKJSON(object: any): DevFeeInfoSDKType {
    return {
      contract_address: isSet(object.contract_address) ? String(object.contract_address) : "",
      deployer_address: isSet(object.deployer_address) ? String(object.deployer_address) : "",
      withdraw_address: isSet(object.withdraw_address) ? String(object.withdraw_address) : ""
    };
  },
  toSDK(message: DevFeeInfo): DevFeeInfoSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    obj.withdraw_address = message.withdrawAddress;
    return obj;
  },
  fromAmino(object: DevFeeInfoAmino): DevFeeInfo {
    const message = createBaseDevFeeInfo();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.deployer_address !== undefined && object.deployer_address !== null) {
      message.deployerAddress = object.deployer_address;
    }
    if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
      message.withdrawAddress = object.withdraw_address;
    }
    return message;
  },
  toAmino(message: DevFeeInfo): DevFeeInfoAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.deployer_address = message.deployerAddress === "" ? undefined : message.deployerAddress;
    obj.withdraw_address = message.withdrawAddress === "" ? undefined : message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object: DevFeeInfoAminoMsg): DevFeeInfo {
    return DevFeeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: DevFeeInfoProtoMsg): DevFeeInfo {
    return DevFeeInfo.decode(message.value);
  },
  toProto(message: DevFeeInfo): Uint8Array {
    return DevFeeInfo.encode(message).finish();
  },
  toProtoMsg(message: DevFeeInfo): DevFeeInfoProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.DevFeeInfo",
      value: DevFeeInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};