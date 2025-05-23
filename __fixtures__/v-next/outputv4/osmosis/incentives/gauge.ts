import { QueryCondition, QueryConditionSDKType } from "../lockup/lock.js";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin.js";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp.js";
import { Duration, DurationSDKType } from "../../google/protobuf/duration.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export const protobufPackage = "osmosis.incentives";
/**
 * Gauge is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently gauges support conditions around the
 * duration for which a given denom is locked.
 */
export interface Gauge {
  /** id is the unique ID of a Gauge */
  id: bigint;
  /**
   * is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge
   * Non-perpetual gauges distribute their tokens equally per epoch while the
   * gauge is in the active period. Perpetual gauges distribute all their tokens
   * at a single time and only distribute their tokens again once the gauge is
   * refilled, Intended for use with incentives that get refilled daily.
   */
  isPerpetual: boolean;
  /**
   * distribute_to is where the gauge rewards are distributed to.
   * This is queried via lock duration or by timestamp
   */
  distributeTo: QueryCondition;
  /**
   * coins is the total amount of coins that have been in the gauge
   * Can distribute multiple coin denoms
   */
  coins: Coin[];
  /** start_time is the distribution start time */
  startTime: Date;
  /**
   * num_epochs_paid_over is the number of total epochs distribution will be
   * completed over
   */
  numEpochsPaidOver: bigint;
  /**
   * filled_epochs is the number of epochs distribution has been completed on
   * already
   */
  filledEpochs: bigint;
  /** distributed_coins are coins that have been distributed already */
  distributedCoins: Coin[];
}
export interface GaugeProtoMsg {
  typeUrl: "/osmosis.incentives.Gauge";
  value: Uint8Array;
}
/**
 * Gauge is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently gauges support conditions around the
 * duration for which a given denom is locked.
 */
export interface GaugeSDKType {
  id: bigint;
  is_perpetual: boolean;
  distribute_to: QueryConditionSDKType;
  coins: CoinSDKType[];
  start_time: Date;
  num_epochs_paid_over: bigint;
  filled_epochs: bigint;
  distributed_coins: CoinSDKType[];
}
export interface LockableDurationsInfo {
  /** List of incentivised durations that gauges will pay out to */
  lockableDurations: Duration[];
}
export interface LockableDurationsInfoProtoMsg {
  typeUrl: "/osmosis.incentives.LockableDurationsInfo";
  value: Uint8Array;
}
export interface LockableDurationsInfoSDKType {
  lockable_durations: DurationSDKType[];
}
function createBaseGauge(): Gauge {
  return {
    id: BigInt(0),
    isPerpetual: false,
    distributeTo: QueryCondition.fromPartial({}),
    coins: [],
    startTime: new Date(),
    numEpochsPaidOver: BigInt(0),
    filledEpochs: BigInt(0),
    distributedCoins: []
  };
}
export const Gauge = {
  typeUrl: "/osmosis.incentives.Gauge",
  encode(message: Gauge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.isPerpetual !== undefined) {
      writer.uint32(16).bool(message.isPerpetual);
    }
    if (message.distributeTo !== undefined) {
      QueryCondition.encode(message.distributeTo, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.numEpochsPaidOver !== undefined) {
      writer.uint32(48).uint64(message.numEpochsPaidOver);
    }
    if (message.filledEpochs !== undefined) {
      writer.uint32(56).uint64(message.filledEpochs);
    }
    for (const v of message.distributedCoins) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Gauge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.isPerpetual = reader.bool();
          break;
        case 3:
          message.distributeTo = QueryCondition.decode(reader, reader.uint32());
          break;
        case 4:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.numEpochsPaidOver = reader.uint64();
          break;
        case 7:
          message.filledEpochs = reader.uint64();
          break;
        case 8:
          message.distributedCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Gauge {
    const obj = createBaseGauge();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.isPerpetual)) obj.isPerpetual = Boolean(object.isPerpetual);
    if (isSet(object.distributeTo)) obj.distributeTo = QueryCondition.fromJSON(object.distributeTo);
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.startTime)) obj.startTime = new Date(object.startTime);
    if (isSet(object.numEpochsPaidOver)) obj.numEpochsPaidOver = BigInt(object.numEpochsPaidOver.toString());
    if (isSet(object.filledEpochs)) obj.filledEpochs = BigInt(object.filledEpochs.toString());
    if (Array.isArray(object?.distributedCoins)) obj.distributedCoins = object.distributedCoins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: Gauge): JsonSafe<Gauge> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.isPerpetual !== undefined && (obj.isPerpetual = message.isPerpetual);
    message.distributeTo !== undefined && (obj.distributeTo = message.distributeTo ? QueryCondition.toJSON(message.distributeTo) : undefined);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.numEpochsPaidOver !== undefined && (obj.numEpochsPaidOver = (message.numEpochsPaidOver || BigInt(0)).toString());
    message.filledEpochs !== undefined && (obj.filledEpochs = (message.filledEpochs || BigInt(0)).toString());
    if (message.distributedCoins) {
      obj.distributedCoins = message.distributedCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.distributedCoins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Gauge>): Gauge {
    const message = createBaseGauge();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    message.isPerpetual = object.isPerpetual ?? false;
    if (object.distributeTo !== undefined && object.distributeTo !== null) {
      message.distributeTo = QueryCondition.fromPartial(object.distributeTo);
    }
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    if (object.numEpochsPaidOver !== undefined && object.numEpochsPaidOver !== null) {
      message.numEpochsPaidOver = BigInt(object.numEpochsPaidOver.toString());
    }
    if (object.filledEpochs !== undefined && object.filledEpochs !== null) {
      message.filledEpochs = BigInt(object.filledEpochs.toString());
    }
    message.distributedCoins = object.distributedCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GaugeSDKType): Gauge {
    return {
      id: object?.id,
      isPerpetual: object?.is_perpetual,
      distributeTo: object.distribute_to ? QueryCondition.fromSDK(object.distribute_to) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : [],
      startTime: object.start_time ?? undefined,
      numEpochsPaidOver: object?.num_epochs_paid_over,
      filledEpochs: object?.filled_epochs,
      distributedCoins: Array.isArray(object?.distributed_coins) ? object.distributed_coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GaugeSDKType {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      is_perpetual: isSet(object.is_perpetual) ? Boolean(object.is_perpetual) : false,
      distribute_to: isSet(object.distribute_to) ? QueryCondition.fromSDKJSON(object.distribute_to) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDKJSON(e)) : [],
      start_time: isSet(object.start_time) ? new Date(object.start_time) : undefined,
      num_epochs_paid_over: isSet(object.num_epochs_paid_over) ? BigInt(object.num_epochs_paid_over.toString()) : BigInt(0),
      filled_epochs: isSet(object.filled_epochs) ? BigInt(object.filled_epochs.toString()) : BigInt(0),
      distributed_coins: Array.isArray(object?.distributed_coins) ? object.distributed_coins.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Gauge): GaugeSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.is_perpetual = message.isPerpetual;
    message.distributeTo !== undefined && (obj.distribute_to = message.distributeTo ? QueryCondition.toSDK(message.distributeTo) : undefined);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
    obj.num_epochs_paid_over = message.numEpochsPaidOver;
    obj.filled_epochs = message.filledEpochs;
    if (message.distributedCoins) {
      obj.distributed_coins = message.distributedCoins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.distributed_coins = [];
    }
    return obj;
  },
  fromAmino(object: GaugeAmino): Gauge {
    const message = createBaseGauge();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.is_perpetual !== undefined && object.is_perpetual !== null) {
      message.isPerpetual = object.is_perpetual;
    }
    if (object.distribute_to !== undefined && object.distribute_to !== null) {
      message.distributeTo = QueryCondition.fromAmino(object.distribute_to);
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.num_epochs_paid_over !== undefined && object.num_epochs_paid_over !== null) {
      message.numEpochsPaidOver = BigInt(object.num_epochs_paid_over);
    }
    if (object.filled_epochs !== undefined && object.filled_epochs !== null) {
      message.filledEpochs = BigInt(object.filled_epochs);
    }
    message.distributedCoins = object.distributed_coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Gauge): GaugeAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.is_perpetual = message.isPerpetual === false ? undefined : message.isPerpetual;
    obj.distribute_to = message.distributeTo ? QueryCondition.toAmino(message.distributeTo) : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.num_epochs_paid_over = message.numEpochsPaidOver !== BigInt(0) ? message.numEpochsPaidOver?.toString() : undefined;
    obj.filled_epochs = message.filledEpochs !== BigInt(0) ? message.filledEpochs?.toString() : undefined;
    if (message.distributedCoins) {
      obj.distributed_coins = message.distributedCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.distributed_coins = message.distributedCoins;
    }
    return obj;
  },
  fromAminoMsg(object: GaugeAminoMsg): Gauge {
    return Gauge.fromAmino(object.value);
  },
  toAminoMsg(message: Gauge): GaugeAminoMsg {
    return {
      type: "osmosis/incentives/gauge",
      value: Gauge.toAmino(message)
    };
  },
  fromProtoMsg(message: GaugeProtoMsg): Gauge {
    return Gauge.decode(message.value);
  },
  toProto(message: Gauge): Uint8Array {
    return Gauge.encode(message).finish();
  },
  toProtoMsg(message: Gauge): GaugeProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.Gauge",
      value: Gauge.encode(message).finish()
    };
  }
};
function createBaseLockableDurationsInfo(): LockableDurationsInfo {
  return {
    lockableDurations: []
  };
}
export const LockableDurationsInfo = {
  typeUrl: "/osmosis.incentives.LockableDurationsInfo",
  encode(message: LockableDurationsInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LockableDurationsInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockableDurationsInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LockableDurationsInfo {
    const obj = createBaseLockableDurationsInfo();
    if (Array.isArray(object?.lockableDurations)) obj.lockableDurations = object.lockableDurations.map((e: any) => Duration.fromJSON(e));
    return obj;
  },
  toJSON(message: LockableDurationsInfo): JsonSafe<LockableDurationsInfo> {
    const obj: any = {};
    if (message.lockableDurations) {
      obj.lockableDurations = message.lockableDurations.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.lockableDurations = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<LockableDurationsInfo>): LockableDurationsInfo {
    const message = createBaseLockableDurationsInfo();
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: LockableDurationsInfoSDKType): LockableDurationsInfo {
    return {
      lockableDurations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): LockableDurationsInfoSDKType {
    return {
      lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: LockableDurationsInfo): LockableDurationsInfoSDKType {
    const obj: any = {};
    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toSDK(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }
    return obj;
  },
  fromAmino(object: LockableDurationsInfoAmino): LockableDurationsInfo {
    const message = createBaseLockableDurationsInfo();
    message.lockableDurations = object.lockable_durations?.map(e => Duration.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: LockableDurationsInfo): LockableDurationsInfoAmino {
    const obj: any = {};
    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.lockable_durations = message.lockableDurations;
    }
    return obj;
  },
  fromAminoMsg(object: LockableDurationsInfoAminoMsg): LockableDurationsInfo {
    return LockableDurationsInfo.fromAmino(object.value);
  },
  toAminoMsg(message: LockableDurationsInfo): LockableDurationsInfoAminoMsg {
    return {
      type: "osmosis/incentives/lockable-durations-info",
      value: LockableDurationsInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: LockableDurationsInfoProtoMsg): LockableDurationsInfo {
    return LockableDurationsInfo.decode(message.value);
  },
  toProto(message: LockableDurationsInfo): Uint8Array {
    return LockableDurationsInfo.encode(message).finish();
  },
  toProtoMsg(message: LockableDurationsInfo): LockableDurationsInfoProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.LockableDurationsInfo",
      value: LockableDurationsInfo.encode(message).finish()
    };
  }
};