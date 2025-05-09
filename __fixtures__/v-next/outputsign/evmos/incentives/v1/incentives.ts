import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
export const protobufPackage = "evmos.incentives.v1";
/**
 * Incentive defines an instance that organizes distribution conditions for a
 * given smart contract
 */
export interface Incentive {
  /** contract address */
  contract: string;
  /** denoms and percentage of rewards to be allocated */
  allocations: DecCoin[];
  /** number of remaining epochs */
  epochs: number;
  /** distribution start time */
  startTime: Date;
  /** cumulative gas spent by all gasmeters of the incentive during the epoch */
  totalGas: bigint;
}
export interface IncentiveProtoMsg {
  typeUrl: "/evmos.incentives.v1.Incentive";
  value: Uint8Array;
}
/**
 * Incentive defines an instance that organizes distribution conditions for a
 * given smart contract
 */
export interface IncentiveAmino {
  /** contract address */
  contract?: string;
  /** denoms and percentage of rewards to be allocated */
  allocations?: DecCoinAmino[];
  /** number of remaining epochs */
  epochs?: number;
  /** distribution start time */
  start_time?: string;
  /** cumulative gas spent by all gasmeters of the incentive during the epoch */
  total_gas?: string;
}
export interface IncentiveAminoMsg {
  type: "/evmos.incentives.v1.Incentive";
  value: IncentiveAmino;
}
/**
 * Incentive defines an instance that organizes distribution conditions for a
 * given smart contract
 */
export interface IncentiveSDKType {
  contract: string;
  allocations: DecCoinSDKType[];
  epochs: number;
  start_time: Date;
  total_gas: bigint;
}
/** GasMeter tracks the cumulative gas spent per participant in one epoch */
export interface GasMeter {
  /** hex address of the incentivized contract */
  contract: string;
  /** participant address that interacts with the incentive */
  participant: string;
  /** cumulative gas spent during the epoch */
  cumulativeGas: bigint;
}
export interface GasMeterProtoMsg {
  typeUrl: "/evmos.incentives.v1.GasMeter";
  value: Uint8Array;
}
/** GasMeter tracks the cumulative gas spent per participant in one epoch */
export interface GasMeterAmino {
  /** hex address of the incentivized contract */
  contract?: string;
  /** participant address that interacts with the incentive */
  participant?: string;
  /** cumulative gas spent during the epoch */
  cumulative_gas?: string;
}
export interface GasMeterAminoMsg {
  type: "/evmos.incentives.v1.GasMeter";
  value: GasMeterAmino;
}
/** GasMeter tracks the cumulative gas spent per participant in one epoch */
export interface GasMeterSDKType {
  contract: string;
  participant: string;
  cumulative_gas: bigint;
}
/** RegisterIncentiveProposal is a gov Content type to register an incentive */
export interface RegisterIncentiveProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** contract address */
  contract: string;
  /** denoms and percentage of rewards to be allocated */
  allocations: DecCoin[];
  /** number of remaining epochs */
  epochs: number;
}
export interface RegisterIncentiveProposalProtoMsg {
  typeUrl: "/evmos.incentives.v1.RegisterIncentiveProposal";
  value: Uint8Array;
}
/** RegisterIncentiveProposal is a gov Content type to register an incentive */
export interface RegisterIncentiveProposalAmino {
  /** title of the proposal */
  title?: string;
  /** proposal description */
  description?: string;
  /** contract address */
  contract?: string;
  /** denoms and percentage of rewards to be allocated */
  allocations?: DecCoinAmino[];
  /** number of remaining epochs */
  epochs?: number;
}
export interface RegisterIncentiveProposalAminoMsg {
  type: "/evmos.incentives.v1.RegisterIncentiveProposal";
  value: RegisterIncentiveProposalAmino;
}
/** RegisterIncentiveProposal is a gov Content type to register an incentive */
export interface RegisterIncentiveProposalSDKType {
  title: string;
  description: string;
  contract: string;
  allocations: DecCoinSDKType[];
  epochs: number;
}
/** CancelIncentiveProposal is a gov Content type to cancel an incentive */
export interface CancelIncentiveProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** contract address */
  contract: string;
}
export interface CancelIncentiveProposalProtoMsg {
  typeUrl: "/evmos.incentives.v1.CancelIncentiveProposal";
  value: Uint8Array;
}
/** CancelIncentiveProposal is a gov Content type to cancel an incentive */
export interface CancelIncentiveProposalAmino {
  /** title of the proposal */
  title?: string;
  /** proposal description */
  description?: string;
  /** contract address */
  contract?: string;
}
export interface CancelIncentiveProposalAminoMsg {
  type: "/evmos.incentives.v1.CancelIncentiveProposal";
  value: CancelIncentiveProposalAmino;
}
/** CancelIncentiveProposal is a gov Content type to cancel an incentive */
export interface CancelIncentiveProposalSDKType {
  title: string;
  description: string;
  contract: string;
}
function createBaseIncentive(): Incentive {
  return {
    contract: "",
    allocations: [],
    epochs: 0,
    startTime: new Date(),
    totalGas: BigInt(0)
  };
}
export const Incentive = {
  typeUrl: "/evmos.incentives.v1.Incentive",
  encode(message: Incentive, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    for (const v of message.allocations) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.epochs !== 0) {
      writer.uint32(24).uint32(message.epochs);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.totalGas !== BigInt(0)) {
      writer.uint32(40).uint64(message.totalGas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Incentive {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.allocations.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.epochs = reader.uint32();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.totalGas = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Incentive>): Incentive {
    const message = createBaseIncentive();
    message.contract = object.contract ?? "";
    message.allocations = object.allocations?.map(e => DecCoin.fromPartial(e)) || [];
    message.epochs = object.epochs ?? 0;
    message.startTime = object.startTime ?? undefined;
    if (object.totalGas !== undefined && object.totalGas !== null) {
      message.totalGas = BigInt(object.totalGas.toString());
    }
    return message;
  },
  fromAmino(object: IncentiveAmino): Incentive {
    const message = createBaseIncentive();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    message.allocations = object.allocations?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.epochs !== undefined && object.epochs !== null) {
      message.epochs = object.epochs;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.total_gas !== undefined && object.total_gas !== null) {
      message.totalGas = BigInt(object.total_gas);
    }
    return message;
  },
  toAmino(message: Incentive): IncentiveAmino {
    const obj: any = {};
    obj.contract = message.contract === "" ? undefined : message.contract;
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.allocations = message.allocations;
    }
    obj.epochs = message.epochs === 0 ? undefined : message.epochs;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.total_gas = message.totalGas !== BigInt(0) ? message.totalGas?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IncentiveAminoMsg): Incentive {
    return Incentive.fromAmino(object.value);
  },
  fromProtoMsg(message: IncentiveProtoMsg): Incentive {
    return Incentive.decode(message.value);
  },
  toProto(message: Incentive): Uint8Array {
    return Incentive.encode(message).finish();
  },
  toProtoMsg(message: Incentive): IncentiveProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.Incentive",
      value: Incentive.encode(message).finish()
    };
  }
};
function createBaseGasMeter(): GasMeter {
  return {
    contract: "",
    participant: "",
    cumulativeGas: BigInt(0)
  };
}
export const GasMeter = {
  typeUrl: "/evmos.incentives.v1.GasMeter",
  encode(message: GasMeter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.participant !== "") {
      writer.uint32(18).string(message.participant);
    }
    if (message.cumulativeGas !== BigInt(0)) {
      writer.uint32(24).uint64(message.cumulativeGas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasMeter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasMeter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.participant = reader.string();
          break;
        case 3:
          message.cumulativeGas = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GasMeter>): GasMeter {
    const message = createBaseGasMeter();
    message.contract = object.contract ?? "";
    message.participant = object.participant ?? "";
    if (object.cumulativeGas !== undefined && object.cumulativeGas !== null) {
      message.cumulativeGas = BigInt(object.cumulativeGas.toString());
    }
    return message;
  },
  fromAmino(object: GasMeterAmino): GasMeter {
    const message = createBaseGasMeter();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = object.participant;
    }
    if (object.cumulative_gas !== undefined && object.cumulative_gas !== null) {
      message.cumulativeGas = BigInt(object.cumulative_gas);
    }
    return message;
  },
  toAmino(message: GasMeter): GasMeterAmino {
    const obj: any = {};
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.participant = message.participant === "" ? undefined : message.participant;
    obj.cumulative_gas = message.cumulativeGas !== BigInt(0) ? message.cumulativeGas?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GasMeterAminoMsg): GasMeter {
    return GasMeter.fromAmino(object.value);
  },
  fromProtoMsg(message: GasMeterProtoMsg): GasMeter {
    return GasMeter.decode(message.value);
  },
  toProto(message: GasMeter): Uint8Array {
    return GasMeter.encode(message).finish();
  },
  toProtoMsg(message: GasMeter): GasMeterProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.GasMeter",
      value: GasMeter.encode(message).finish()
    };
  }
};
function createBaseRegisterIncentiveProposal(): RegisterIncentiveProposal {
  return {
    title: "",
    description: "",
    contract: "",
    allocations: [],
    epochs: 0
  };
}
export const RegisterIncentiveProposal = {
  typeUrl: "/evmos.incentives.v1.RegisterIncentiveProposal",
  encode(message: RegisterIncentiveProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    for (const v of message.allocations) {
      DecCoin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.epochs !== 0) {
      writer.uint32(40).uint32(message.epochs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisterIncentiveProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterIncentiveProposal();
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
          message.contract = reader.string();
          break;
        case 4:
          message.allocations.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.epochs = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RegisterIncentiveProposal>): RegisterIncentiveProposal {
    const message = createBaseRegisterIncentiveProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.allocations = object.allocations?.map(e => DecCoin.fromPartial(e)) || [];
    message.epochs = object.epochs ?? 0;
    return message;
  },
  fromAmino(object: RegisterIncentiveProposalAmino): RegisterIncentiveProposal {
    const message = createBaseRegisterIncentiveProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    message.allocations = object.allocations?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.epochs !== undefined && object.epochs !== null) {
      message.epochs = object.epochs;
    }
    return message;
  },
  toAmino(message: RegisterIncentiveProposal): RegisterIncentiveProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.contract = message.contract === "" ? undefined : message.contract;
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.allocations = message.allocations;
    }
    obj.epochs = message.epochs === 0 ? undefined : message.epochs;
    return obj;
  },
  fromAminoMsg(object: RegisterIncentiveProposalAminoMsg): RegisterIncentiveProposal {
    return RegisterIncentiveProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterIncentiveProposalProtoMsg): RegisterIncentiveProposal {
    return RegisterIncentiveProposal.decode(message.value);
  },
  toProto(message: RegisterIncentiveProposal): Uint8Array {
    return RegisterIncentiveProposal.encode(message).finish();
  },
  toProtoMsg(message: RegisterIncentiveProposal): RegisterIncentiveProposalProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.RegisterIncentiveProposal",
      value: RegisterIncentiveProposal.encode(message).finish()
    };
  }
};
function createBaseCancelIncentiveProposal(): CancelIncentiveProposal {
  return {
    title: "",
    description: "",
    contract: ""
  };
}
export const CancelIncentiveProposal = {
  typeUrl: "/evmos.incentives.v1.CancelIncentiveProposal",
  encode(message: CancelIncentiveProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CancelIncentiveProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelIncentiveProposal();
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
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CancelIncentiveProposal>): CancelIncentiveProposal {
    const message = createBaseCancelIncentiveProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object: CancelIncentiveProposalAmino): CancelIncentiveProposal {
    const message = createBaseCancelIncentiveProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    return message;
  },
  toAmino(message: CancelIncentiveProposal): CancelIncentiveProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.contract = message.contract === "" ? undefined : message.contract;
    return obj;
  },
  fromAminoMsg(object: CancelIncentiveProposalAminoMsg): CancelIncentiveProposal {
    return CancelIncentiveProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CancelIncentiveProposalProtoMsg): CancelIncentiveProposal {
    return CancelIncentiveProposal.decode(message.value);
  },
  toProto(message: CancelIncentiveProposal): Uint8Array {
    return CancelIncentiveProposal.encode(message).finish();
  },
  toProtoMsg(message: CancelIncentiveProposal): CancelIncentiveProposalProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.CancelIncentiveProposal",
      value: CancelIncentiveProposal.encode(message).finish()
    };
  }
};