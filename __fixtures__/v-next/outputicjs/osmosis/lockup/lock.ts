import { Duration, DurationAmino } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin, CoinAmino } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp, DeepPartial } from "../../helpers";
/**
 * LockQueryType defines the type of the lock query that can
 * either be by duration or start time of the lock.
 */
export enum LockQueryType {
  ByDuration = 0,
  ByTime = 1,
  UNRECOGNIZED = -1,
}
export const LockQueryTypeAmino = LockQueryType;
export function lockQueryTypeFromJSON(object: any): LockQueryType {
  switch (object) {
    case 0:
    case "ByDuration":
      return LockQueryType.ByDuration;
    case 1:
    case "ByTime":
      return LockQueryType.ByTime;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LockQueryType.UNRECOGNIZED;
  }
}
export function lockQueryTypeToJSON(object: LockQueryType): string {
  switch (object) {
    case LockQueryType.ByDuration:
      return "ByDuration";
    case LockQueryType.ByTime:
      return "ByTime";
    case LockQueryType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 */
export interface PeriodLock {
  /**
   * ID is the unique id of the lock.
   * The ID of the lock is decided upon lock creation, incrementing by 1 for
   * every lock.
   */
  iD: bigint;
  /**
   * Owner is the account address of the lock owner.
   * Only the owner can modify the state of the lock.
   */
  owner: string;
  /**
   * Duration is the time needed for a lock to mature after unlocking has
   * started.
   */
  duration: Duration;
  /**
   * EndTime refers to the time at which the lock would mature and get deleted.
   * This value is first initialized when an unlock has started for the lock,
   * end time being block time + duration.
   */
  endTime: Date;
  /** Coins are the tokens locked within the lock, kept in the module account. */
  coins: Coin[];
}
export interface PeriodLockProtoMsg {
  typeUrl: "/osmosis.lockup.PeriodLock";
  value: Uint8Array;
}
/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 */
export interface PeriodLockAmino {
  /**
   * ID is the unique id of the lock.
   * The ID of the lock is decided upon lock creation, incrementing by 1 for
   * every lock.
   */
  ID: string;
  /**
   * Owner is the account address of the lock owner.
   * Only the owner can modify the state of the lock.
   */
  owner: string;
  /**
   * Duration is the time needed for a lock to mature after unlocking has
   * started.
   */
  duration: DurationAmino;
  /**
   * EndTime refers to the time at which the lock would mature and get deleted.
   * This value is first initialized when an unlock has started for the lock,
   * end time being block time + duration.
   */
  end_time: string;
  /** Coins are the tokens locked within the lock, kept in the module account. */
  coins: CoinAmino[];
}
export interface PeriodLockAminoMsg {
  type: "osmosis/lockup/period-lock";
  value: PeriodLockAmino;
}
/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 */
export interface QueryCondition {
  /** LockQueryType is a type of lock query, ByLockDuration | ByLockTime */
  lockQueryType: LockQueryType;
  /** Denom represents the token denomination we are looking to lock up */
  denom: string;
  /**
   * Duration is used to query locks with longer duration than the specified
   * duration. Duration field must not be nil when the lock query type is
   * `ByLockDuration`.
   */
  duration: Duration;
  /**
   * Timestamp is used by locks started before the specified duration.
   * Timestamp field must not be nil when the lock query type is `ByLockTime`.
   * Querying locks with timestamp is currently not implemented.
   */
  timestamp: Date;
}
export interface QueryConditionProtoMsg {
  typeUrl: "/osmosis.lockup.QueryCondition";
  value: Uint8Array;
}
/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 */
export interface QueryConditionAmino {
  /** LockQueryType is a type of lock query, ByLockDuration | ByLockTime */
  lock_query_type: LockQueryType;
  /** Denom represents the token denomination we are looking to lock up */
  denom: string;
  /**
   * Duration is used to query locks with longer duration than the specified
   * duration. Duration field must not be nil when the lock query type is
   * `ByLockDuration`.
   */
  duration: DurationAmino;
  /**
   * Timestamp is used by locks started before the specified duration.
   * Timestamp field must not be nil when the lock query type is `ByLockTime`.
   * Querying locks with timestamp is currently not implemented.
   */
  timestamp: string;
}
export interface QueryConditionAminoMsg {
  type: "osmosis/lockup/query-condition";
  value: QueryConditionAmino;
}
/**
 * SyntheticLock is creating virtual lockup where new denom is combination of
 * original denom and synthetic suffix. At the time of synthetic lockup creation
 * and deletion, accumulation store is also being updated and on querier side,
 * they can query as freely as native lockup.
 */
export interface SyntheticLock {
  /**
   * Underlying Lock ID is the underlying native lock's id for this synthetic
   * lockup. A synthetic lock MUST have an underlying lock.
   */
  underlyingLockId: bigint;
  /**
   * SynthDenom is the synthetic denom that is a combination of
   * gamm share + bonding status + validator address.
   */
  synthDenom: string;
  /**
   * used for unbonding synthetic lockups, for active synthetic lockups, this
   * value is set to uninitialized value
   */
  endTime: Date;
  /**
   * Duration is the duration for a synthetic lock to mature
   * at the point of unbonding has started.
   */
  duration: Duration;
}
export interface SyntheticLockProtoMsg {
  typeUrl: "/osmosis.lockup.SyntheticLock";
  value: Uint8Array;
}
/**
 * SyntheticLock is creating virtual lockup where new denom is combination of
 * original denom and synthetic suffix. At the time of synthetic lockup creation
 * and deletion, accumulation store is also being updated and on querier side,
 * they can query as freely as native lockup.
 */
export interface SyntheticLockAmino {
  /**
   * Underlying Lock ID is the underlying native lock's id for this synthetic
   * lockup. A synthetic lock MUST have an underlying lock.
   */
  underlying_lock_id: string;
  /**
   * SynthDenom is the synthetic denom that is a combination of
   * gamm share + bonding status + validator address.
   */
  synth_denom: string;
  /**
   * used for unbonding synthetic lockups, for active synthetic lockups, this
   * value is set to uninitialized value
   */
  end_time: string;
  /**
   * Duration is the duration for a synthetic lock to mature
   * at the point of unbonding has started.
   */
  duration: DurationAmino;
}
export interface SyntheticLockAminoMsg {
  type: "osmosis/lockup/synthetic-lock";
  value: SyntheticLockAmino;
}
function createBasePeriodLock(): PeriodLock {
  return {
    iD: BigInt(0),
    owner: "",
    duration: Duration.fromPartial({}),
    endTime: new Date(),
    coins: []
  };
}
export const PeriodLock = {
  typeUrl: "/osmosis.lockup.PeriodLock",
  aminoType: "osmosis/lockup/period-lock",
  encode(message: PeriodLock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iD !== BigInt(0)) {
      writer.uint32(8).uint64(message.iD);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PeriodLock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iD = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PeriodLock>): PeriodLock {
    const message = createBasePeriodLock();
    message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.endTime = object.endTime ?? undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PeriodLockAmino): PeriodLock {
    const message = createBasePeriodLock();
    if (object.ID !== undefined && object.ID !== null) {
      message.iD = BigInt(object.ID);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PeriodLock): PeriodLockAmino {
    const obj: any = {};
    obj.ID = message.iD !== BigInt(0) ? message.iD?.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: PeriodLockAminoMsg): PeriodLock {
    return PeriodLock.fromAmino(object.value);
  },
  toAminoMsg(message: PeriodLock): PeriodLockAminoMsg {
    return {
      type: "osmosis/lockup/period-lock",
      value: PeriodLock.toAmino(message)
    };
  },
  fromProtoMsg(message: PeriodLockProtoMsg): PeriodLock {
    return PeriodLock.decode(message.value);
  },
  toProto(message: PeriodLock): Uint8Array {
    return PeriodLock.encode(message).finish();
  },
  toProtoMsg(message: PeriodLock): PeriodLockProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.PeriodLock",
      value: PeriodLock.encode(message).finish()
    };
  }
};
function createBaseQueryCondition(): QueryCondition {
  return {
    lockQueryType: 0,
    denom: "",
    duration: Duration.fromPartial({}),
    timestamp: new Date()
  };
}
export const QueryCondition = {
  typeUrl: "/osmosis.lockup.QueryCondition",
  aminoType: "osmosis/lockup/query-condition",
  encode(message: QueryCondition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lockQueryType !== 0) {
      writer.uint32(8).int32(message.lockQueryType);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCondition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockQueryType = (reader.int32() as any);
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCondition>): QueryCondition {
    const message = createBaseQueryCondition();
    message.lockQueryType = object.lockQueryType ?? 0;
    message.denom = object.denom ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromAmino(object: QueryConditionAmino): QueryCondition {
    const message = createBaseQueryCondition();
    if (object.lock_query_type !== undefined && object.lock_query_type !== null) {
      message.lockQueryType = object.lock_query_type;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: QueryCondition): QueryConditionAmino {
    const obj: any = {};
    obj.lock_query_type = message.lockQueryType === 0 ? undefined : message.lockQueryType;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConditionAminoMsg): QueryCondition {
    return QueryCondition.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCondition): QueryConditionAminoMsg {
    return {
      type: "osmosis/lockup/query-condition",
      value: QueryCondition.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConditionProtoMsg): QueryCondition {
    return QueryCondition.decode(message.value);
  },
  toProto(message: QueryCondition): Uint8Array {
    return QueryCondition.encode(message).finish();
  },
  toProtoMsg(message: QueryCondition): QueryConditionProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.QueryCondition",
      value: QueryCondition.encode(message).finish()
    };
  }
};
function createBaseSyntheticLock(): SyntheticLock {
  return {
    underlyingLockId: BigInt(0),
    synthDenom: "",
    endTime: new Date(),
    duration: Duration.fromPartial({})
  };
}
export const SyntheticLock = {
  typeUrl: "/osmosis.lockup.SyntheticLock",
  aminoType: "osmosis/lockup/synthetic-lock",
  encode(message: SyntheticLock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.underlyingLockId !== BigInt(0)) {
      writer.uint32(8).uint64(message.underlyingLockId);
    }
    if (message.synthDenom !== "") {
      writer.uint32(18).string(message.synthDenom);
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SyntheticLock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyntheticLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.underlyingLockId = reader.uint64();
          break;
        case 2:
          message.synthDenom = reader.string();
          break;
        case 3:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SyntheticLock>): SyntheticLock {
    const message = createBaseSyntheticLock();
    message.underlyingLockId = object.underlyingLockId !== undefined && object.underlyingLockId !== null ? BigInt(object.underlyingLockId.toString()) : BigInt(0);
    message.synthDenom = object.synthDenom ?? "";
    message.endTime = object.endTime ?? undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },
  fromAmino(object: SyntheticLockAmino): SyntheticLock {
    const message = createBaseSyntheticLock();
    if (object.underlying_lock_id !== undefined && object.underlying_lock_id !== null) {
      message.underlyingLockId = BigInt(object.underlying_lock_id);
    }
    if (object.synth_denom !== undefined && object.synth_denom !== null) {
      message.synthDenom = object.synth_denom;
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    return message;
  },
  toAmino(message: SyntheticLock): SyntheticLockAmino {
    const obj: any = {};
    obj.underlying_lock_id = message.underlyingLockId !== BigInt(0) ? message.underlyingLockId?.toString() : undefined;
    obj.synth_denom = message.synthDenom === "" ? undefined : message.synthDenom;
    obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg(object: SyntheticLockAminoMsg): SyntheticLock {
    return SyntheticLock.fromAmino(object.value);
  },
  toAminoMsg(message: SyntheticLock): SyntheticLockAminoMsg {
    return {
      type: "osmosis/lockup/synthetic-lock",
      value: SyntheticLock.toAmino(message)
    };
  },
  fromProtoMsg(message: SyntheticLockProtoMsg): SyntheticLock {
    return SyntheticLock.decode(message.value);
  },
  toProto(message: SyntheticLock): Uint8Array {
    return SyntheticLock.encode(message).finish();
  },
  toProtoMsg(message: SyntheticLock): SyntheticLockProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.SyntheticLock",
      value: SyntheticLock.encode(message).finish()
    };
  }
};