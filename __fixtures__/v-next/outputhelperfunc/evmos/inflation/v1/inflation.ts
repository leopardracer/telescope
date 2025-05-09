import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "evmos.inflation.v1";
/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, incentives, community). It
 * excludes the team vesting distribution, as this is minted once at genesis.
 * The initial InflationDistribution can be calculated from the Evmos Token
 * Model like this:
 * mintDistribution1 = distribution1 / (1 - teamVestingDistribution)
 * 0.5333333         = 40%           / (1 - 25%)
 */
export interface InflationDistribution {
  /**
   * staking_rewards defines the proportion of the minted minted_denom that is
   * to be allocated as staking rewards
   */
  stakingRewards: string;
  /**
   * usage_incentives defines the proportion of the minted minted_denom that is
   * to be allocated to the incentives module address
   */
  usageIncentives: string;
  /**
   * community_pool defines the proportion of the minted minted_denom that is to
   * be allocated to the community pool
   */
  communityPool: string;
}
export interface InflationDistributionProtoMsg {
  typeUrl: "/evmos.inflation.v1.InflationDistribution";
  value: Uint8Array;
}
/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, incentives, community). It
 * excludes the team vesting distribution, as this is minted once at genesis.
 * The initial InflationDistribution can be calculated from the Evmos Token
 * Model like this:
 * mintDistribution1 = distribution1 / (1 - teamVestingDistribution)
 * 0.5333333         = 40%           / (1 - 25%)
 */
export interface InflationDistributionAmino {
  /**
   * staking_rewards defines the proportion of the minted minted_denom that is
   * to be allocated as staking rewards
   */
  staking_rewards?: string;
  /**
   * usage_incentives defines the proportion of the minted minted_denom that is
   * to be allocated to the incentives module address
   */
  usage_incentives?: string;
  /**
   * community_pool defines the proportion of the minted minted_denom that is to
   * be allocated to the community pool
   */
  community_pool?: string;
}
export interface InflationDistributionAminoMsg {
  type: "/evmos.inflation.v1.InflationDistribution";
  value: InflationDistributionAmino;
}
/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, incentives, community). It
 * excludes the team vesting distribution, as this is minted once at genesis.
 * The initial InflationDistribution can be calculated from the Evmos Token
 * Model like this:
 * mintDistribution1 = distribution1 / (1 - teamVestingDistribution)
 * 0.5333333         = 40%           / (1 - 25%)
 */
export interface InflationDistributionSDKType {
  staking_rewards: string;
  usage_incentives: string;
  community_pool: string;
}
/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay       *  bondingIncentive
 * f(x)            = (a * (1 - r) ^ x + c)  *  (1 + max_variance - bondedRatio *
 * (max_variance / bonding_target))
 */
export interface ExponentialCalculation {
  /** initial value */
  a: string;
  /** reduction factor */
  r: string;
  /** long term inflation */
  c: string;
  /** bonding target */
  bondingTarget: string;
  /** max variance */
  maxVariance: string;
}
export interface ExponentialCalculationProtoMsg {
  typeUrl: "/evmos.inflation.v1.ExponentialCalculation";
  value: Uint8Array;
}
/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay       *  bondingIncentive
 * f(x)            = (a * (1 - r) ^ x + c)  *  (1 + max_variance - bondedRatio *
 * (max_variance / bonding_target))
 */
export interface ExponentialCalculationAmino {
  /** initial value */
  a?: string;
  /** reduction factor */
  r?: string;
  /** long term inflation */
  c?: string;
  /** bonding target */
  bonding_target?: string;
  /** max variance */
  max_variance?: string;
}
export interface ExponentialCalculationAminoMsg {
  type: "/evmos.inflation.v1.ExponentialCalculation";
  value: ExponentialCalculationAmino;
}
/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay       *  bondingIncentive
 * f(x)            = (a * (1 - r) ^ x + c)  *  (1 + max_variance - bondedRatio *
 * (max_variance / bonding_target))
 */
export interface ExponentialCalculationSDKType {
  a: string;
  r: string;
  c: string;
  bonding_target: string;
  max_variance: string;
}
function createBaseInflationDistribution(): InflationDistribution {
  return {
    stakingRewards: "",
    usageIncentives: "",
    communityPool: ""
  };
}
export const InflationDistribution = {
  typeUrl: "/evmos.inflation.v1.InflationDistribution",
  is(o: any): o is InflationDistribution {
    return o && (o.$typeUrl === InflationDistribution.typeUrl || typeof o.stakingRewards === "string" && typeof o.usageIncentives === "string" && typeof o.communityPool === "string");
  },
  isSDK(o: any): o is InflationDistributionSDKType {
    return o && (o.$typeUrl === InflationDistribution.typeUrl || typeof o.staking_rewards === "string" && typeof o.usage_incentives === "string" && typeof o.community_pool === "string");
  },
  isAmino(o: any): o is InflationDistributionAmino {
    return o && (o.$typeUrl === InflationDistribution.typeUrl || typeof o.staking_rewards === "string" && typeof o.usage_incentives === "string" && typeof o.community_pool === "string");
  },
  encode(message: InflationDistribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakingRewards !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.stakingRewards, 18).atomics);
    }
    if (message.usageIncentives !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.usageIncentives, 18).atomics);
    }
    if (message.communityPool !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.communityPool, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InflationDistribution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInflationDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingRewards = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.usageIncentives = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.communityPool = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InflationDistribution {
    const obj = createBaseInflationDistribution();
    if (isSet(object.stakingRewards)) obj.stakingRewards = String(object.stakingRewards);
    if (isSet(object.usageIncentives)) obj.usageIncentives = String(object.usageIncentives);
    if (isSet(object.communityPool)) obj.communityPool = String(object.communityPool);
    return obj;
  },
  toJSON(message: InflationDistribution): JsonSafe<InflationDistribution> {
    const obj: any = {};
    message.stakingRewards !== undefined && (obj.stakingRewards = message.stakingRewards);
    message.usageIncentives !== undefined && (obj.usageIncentives = message.usageIncentives);
    message.communityPool !== undefined && (obj.communityPool = message.communityPool);
    return obj;
  },
  fromPartial(object: DeepPartial<InflationDistribution>): InflationDistribution {
    const message = createBaseInflationDistribution();
    message.stakingRewards = object.stakingRewards ?? "";
    message.usageIncentives = object.usageIncentives ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  },
  fromSDK(object: InflationDistributionSDKType): InflationDistribution {
    return {
      stakingRewards: object?.staking_rewards,
      usageIncentives: object?.usage_incentives,
      communityPool: object?.community_pool
    };
  },
  fromSDKJSON(object: any): InflationDistributionSDKType {
    return {
      staking_rewards: isSet(object.staking_rewards) ? String(object.staking_rewards) : "",
      usage_incentives: isSet(object.usage_incentives) ? String(object.usage_incentives) : "",
      community_pool: isSet(object.community_pool) ? String(object.community_pool) : ""
    };
  },
  toSDK(message: InflationDistribution): InflationDistributionSDKType {
    const obj: any = {};
    obj.staking_rewards = message.stakingRewards;
    obj.usage_incentives = message.usageIncentives;
    obj.community_pool = message.communityPool;
    return obj;
  },
  fromAmino(object: InflationDistributionAmino): InflationDistribution {
    const message = createBaseInflationDistribution();
    if (object.staking_rewards !== undefined && object.staking_rewards !== null) {
      message.stakingRewards = object.staking_rewards;
    }
    if (object.usage_incentives !== undefined && object.usage_incentives !== null) {
      message.usageIncentives = object.usage_incentives;
    }
    if (object.community_pool !== undefined && object.community_pool !== null) {
      message.communityPool = object.community_pool;
    }
    return message;
  },
  toAmino(message: InflationDistribution): InflationDistributionAmino {
    const obj: any = {};
    obj.staking_rewards = message.stakingRewards === "" ? undefined : message.stakingRewards;
    obj.usage_incentives = message.usageIncentives === "" ? undefined : message.usageIncentives;
    obj.community_pool = message.communityPool === "" ? undefined : message.communityPool;
    return obj;
  },
  fromAminoMsg(object: InflationDistributionAminoMsg): InflationDistribution {
    return InflationDistribution.fromAmino(object.value);
  },
  fromProtoMsg(message: InflationDistributionProtoMsg): InflationDistribution {
    return InflationDistribution.decode(message.value);
  },
  toProto(message: InflationDistribution): Uint8Array {
    return InflationDistribution.encode(message).finish();
  },
  toProtoMsg(message: InflationDistribution): InflationDistributionProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.InflationDistribution",
      value: InflationDistribution.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseExponentialCalculation(): ExponentialCalculation {
  return {
    a: "",
    r: "",
    c: "",
    bondingTarget: "",
    maxVariance: ""
  };
}
export const ExponentialCalculation = {
  typeUrl: "/evmos.inflation.v1.ExponentialCalculation",
  is(o: any): o is ExponentialCalculation {
    return o && (o.$typeUrl === ExponentialCalculation.typeUrl || typeof o.a === "string" && typeof o.r === "string" && typeof o.c === "string" && typeof o.bondingTarget === "string" && typeof o.maxVariance === "string");
  },
  isSDK(o: any): o is ExponentialCalculationSDKType {
    return o && (o.$typeUrl === ExponentialCalculation.typeUrl || typeof o.a === "string" && typeof o.r === "string" && typeof o.c === "string" && typeof o.bonding_target === "string" && typeof o.max_variance === "string");
  },
  isAmino(o: any): o is ExponentialCalculationAmino {
    return o && (o.$typeUrl === ExponentialCalculation.typeUrl || typeof o.a === "string" && typeof o.r === "string" && typeof o.c === "string" && typeof o.bonding_target === "string" && typeof o.max_variance === "string");
  },
  encode(message: ExponentialCalculation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.a !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.a, 18).atomics);
    }
    if (message.r !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.r, 18).atomics);
    }
    if (message.c !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.c, 18).atomics);
    }
    if (message.bondingTarget !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.bondingTarget, 18).atomics);
    }
    if (message.maxVariance !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.maxVariance, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExponentialCalculation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExponentialCalculation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.a = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.r = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.c = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.bondingTarget = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.maxVariance = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExponentialCalculation {
    const obj = createBaseExponentialCalculation();
    if (isSet(object.a)) obj.a = String(object.a);
    if (isSet(object.r)) obj.r = String(object.r);
    if (isSet(object.c)) obj.c = String(object.c);
    if (isSet(object.bondingTarget)) obj.bondingTarget = String(object.bondingTarget);
    if (isSet(object.maxVariance)) obj.maxVariance = String(object.maxVariance);
    return obj;
  },
  toJSON(message: ExponentialCalculation): JsonSafe<ExponentialCalculation> {
    const obj: any = {};
    message.a !== undefined && (obj.a = message.a);
    message.r !== undefined && (obj.r = message.r);
    message.c !== undefined && (obj.c = message.c);
    message.bondingTarget !== undefined && (obj.bondingTarget = message.bondingTarget);
    message.maxVariance !== undefined && (obj.maxVariance = message.maxVariance);
    return obj;
  },
  fromPartial(object: DeepPartial<ExponentialCalculation>): ExponentialCalculation {
    const message = createBaseExponentialCalculation();
    message.a = object.a ?? "";
    message.r = object.r ?? "";
    message.c = object.c ?? "";
    message.bondingTarget = object.bondingTarget ?? "";
    message.maxVariance = object.maxVariance ?? "";
    return message;
  },
  fromSDK(object: ExponentialCalculationSDKType): ExponentialCalculation {
    return {
      a: object?.a,
      r: object?.r,
      c: object?.c,
      bondingTarget: object?.bonding_target,
      maxVariance: object?.max_variance
    };
  },
  fromSDKJSON(object: any): ExponentialCalculationSDKType {
    return {
      a: isSet(object.a) ? String(object.a) : "",
      r: isSet(object.r) ? String(object.r) : "",
      c: isSet(object.c) ? String(object.c) : "",
      bonding_target: isSet(object.bonding_target) ? String(object.bonding_target) : "",
      max_variance: isSet(object.max_variance) ? String(object.max_variance) : ""
    };
  },
  toSDK(message: ExponentialCalculation): ExponentialCalculationSDKType {
    const obj: any = {};
    obj.a = message.a;
    obj.r = message.r;
    obj.c = message.c;
    obj.bonding_target = message.bondingTarget;
    obj.max_variance = message.maxVariance;
    return obj;
  },
  fromAmino(object: ExponentialCalculationAmino): ExponentialCalculation {
    const message = createBaseExponentialCalculation();
    if (object.a !== undefined && object.a !== null) {
      message.a = object.a;
    }
    if (object.r !== undefined && object.r !== null) {
      message.r = object.r;
    }
    if (object.c !== undefined && object.c !== null) {
      message.c = object.c;
    }
    if (object.bonding_target !== undefined && object.bonding_target !== null) {
      message.bondingTarget = object.bonding_target;
    }
    if (object.max_variance !== undefined && object.max_variance !== null) {
      message.maxVariance = object.max_variance;
    }
    return message;
  },
  toAmino(message: ExponentialCalculation): ExponentialCalculationAmino {
    const obj: any = {};
    obj.a = message.a === "" ? undefined : message.a;
    obj.r = message.r === "" ? undefined : message.r;
    obj.c = message.c === "" ? undefined : message.c;
    obj.bonding_target = message.bondingTarget === "" ? undefined : message.bondingTarget;
    obj.max_variance = message.maxVariance === "" ? undefined : message.maxVariance;
    return obj;
  },
  fromAminoMsg(object: ExponentialCalculationAminoMsg): ExponentialCalculation {
    return ExponentialCalculation.fromAmino(object.value);
  },
  fromProtoMsg(message: ExponentialCalculationProtoMsg): ExponentialCalculation {
    return ExponentialCalculation.decode(message.value);
  },
  toProto(message: ExponentialCalculation): Uint8Array {
    return ExponentialCalculation.encode(message).finish();
  },
  toProtoMsg(message: ExponentialCalculation): ExponentialCalculationProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.ExponentialCalculation",
      value: ExponentialCalculation.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};