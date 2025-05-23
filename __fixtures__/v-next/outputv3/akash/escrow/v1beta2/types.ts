import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.escrow.v1beta2";
/** State stores state for an escrow account */
export enum Account_State {
  /** invalid - AccountStateInvalid is an invalid state */
  invalid = 0,
  /** open - AccountOpen is the state when an account is open */
  open = 1,
  /** closed - AccountClosed is the state when an account is closed */
  closed = 2,
  /** overdrawn - AccountOverdrawn is the state when an account is overdrawn */
  overdrawn = 3,
  UNRECOGNIZED = -1,
}
export const Account_StateSDKType = Account_State;
export const Account_StateAmino = Account_State;
export function account_StateFromJSON(object: any): Account_State {
  switch (object) {
    case 0:
    case "invalid":
      return Account_State.invalid;
    case 1:
    case "open":
      return Account_State.open;
    case 2:
    case "closed":
      return Account_State.closed;
    case 3:
    case "overdrawn":
      return Account_State.overdrawn;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Account_State.UNRECOGNIZED;
  }
}
export function account_StateToJSON(object: Account_State): string {
  switch (object) {
    case Account_State.invalid:
      return "invalid";
    case Account_State.open:
      return "open";
    case Account_State.closed:
      return "closed";
    case Account_State.overdrawn:
      return "overdrawn";
    case Account_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Payment State */
export enum FractionalPayment_State {
  /** invalid - PaymentStateInvalid is the state when the payment is invalid */
  invalid = 0,
  /** open - PaymentStateOpen is the state when the payment is open */
  open = 1,
  /** closed - PaymentStateClosed is the state when the payment is closed */
  closed = 2,
  /** overdrawn - PaymentStateOverdrawn is the state when the payment is overdrawn */
  overdrawn = 3,
  UNRECOGNIZED = -1,
}
export const FractionalPayment_StateSDKType = FractionalPayment_State;
export const FractionalPayment_StateAmino = FractionalPayment_State;
export function fractionalPayment_StateFromJSON(object: any): FractionalPayment_State {
  switch (object) {
    case 0:
    case "invalid":
      return FractionalPayment_State.invalid;
    case 1:
    case "open":
      return FractionalPayment_State.open;
    case 2:
    case "closed":
      return FractionalPayment_State.closed;
    case 3:
    case "overdrawn":
      return FractionalPayment_State.overdrawn;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FractionalPayment_State.UNRECOGNIZED;
  }
}
export function fractionalPayment_StateToJSON(object: FractionalPayment_State): string {
  switch (object) {
    case FractionalPayment_State.invalid:
      return "invalid";
    case FractionalPayment_State.open:
      return "open";
    case FractionalPayment_State.closed:
      return "closed";
    case FractionalPayment_State.overdrawn:
      return "overdrawn";
    case FractionalPayment_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** AccountID is the account identifier */
export interface AccountID {
  scope: string;
  xid: string;
}
export interface AccountIDProtoMsg {
  typeUrl: "/akash.escrow.v1beta2.AccountID";
  value: Uint8Array;
}
/** AccountID is the account identifier */
export interface AccountIDAmino {
  scope: string;
  xid: string;
}
/** AccountID is the account identifier */
export interface AccountIDSDKType {
  scope: string;
  xid: string;
}
/** Account stores state for an escrow account */
export interface Account {
  /** unique identifier for this escrow account */
  id: AccountID;
  /** bech32 encoded account address of the owner of this escrow account */
  owner: string;
  /** current state of this escrow account */
  state: Account_State;
  /** unspent coins received from the owner's wallet */
  balance: DecCoin;
  /** total coins spent by this account */
  transferred: DecCoin;
  /** block height at which this account was last settled */
  settledAt: bigint;
  /**
   * bech32 encoded account address of the depositor.
   * If depositor is same as the owner, then any incoming coins are added to the Balance.
   * If depositor isn't same as the owner, then any incoming coins are added to the Funds.
   */
  depositor: string;
  /**
   * Funds are unspent coins received from the (non-Owner) Depositor's wallet.
   * If there are any funds, they should be spent before spending the Balance.
   */
  funds: DecCoin;
}
export interface AccountProtoMsg {
  typeUrl: "/akash.escrow.v1beta2.Account";
  value: Uint8Array;
}
/** Account stores state for an escrow account */
export interface AccountAmino {
  /** unique identifier for this escrow account */
  id: AccountIDAmino;
  /** bech32 encoded account address of the owner of this escrow account */
  owner: string;
  /** current state of this escrow account */
  state: Account_State;
  /** unspent coins received from the owner's wallet */
  balance: DecCoinAmino;
  /** total coins spent by this account */
  transferred: DecCoinAmino;
  /** block height at which this account was last settled */
  settled_at: string;
  /**
   * bech32 encoded account address of the depositor.
   * If depositor is same as the owner, then any incoming coins are added to the Balance.
   * If depositor isn't same as the owner, then any incoming coins are added to the Funds.
   */
  depositor: string;
  /**
   * Funds are unspent coins received from the (non-Owner) Depositor's wallet.
   * If there are any funds, they should be spent before spending the Balance.
   */
  funds: DecCoinAmino;
}
/** Account stores state for an escrow account */
export interface AccountSDKType {
  id: AccountIDSDKType;
  owner: string;
  state: Account_State;
  balance: DecCoinSDKType;
  transferred: DecCoinSDKType;
  settled_at: bigint;
  depositor: string;
  funds: DecCoinSDKType;
}
/** Payment stores state for a payment */
export interface FractionalPayment {
  accountId: AccountID;
  paymentId: string;
  owner: string;
  state: FractionalPayment_State;
  rate: DecCoin;
  balance: DecCoin;
  withdrawn: Coin;
}
export interface FractionalPaymentProtoMsg {
  typeUrl: "/akash.escrow.v1beta2.FractionalPayment";
  value: Uint8Array;
}
/** Payment stores state for a payment */
export interface FractionalPaymentAmino {
  account_id: AccountIDAmino;
  payment_id: string;
  owner: string;
  state: FractionalPayment_State;
  rate: DecCoinAmino;
  balance: DecCoinAmino;
  withdrawn: CoinAmino;
}
/** Payment stores state for a payment */
export interface FractionalPaymentSDKType {
  account_id: AccountIDSDKType;
  payment_id: string;
  owner: string;
  state: FractionalPayment_State;
  rate: DecCoinSDKType;
  balance: DecCoinSDKType;
  withdrawn: CoinSDKType;
}
function createBaseAccountID(): AccountID {
  return {
    scope: "",
    xid: ""
  };
}
export const AccountID = {
  typeUrl: "/akash.escrow.v1beta2.AccountID",
  encode(message: AccountID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scope !== "") {
      writer.uint32(10).string(message.scope);
    }
    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): AccountID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = reader.string();
          break;
        case 2:
          message.xid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountID {
    const obj = createBaseAccountID();
    if (isSet(object.scope)) obj.scope = String(object.scope);
    if (isSet(object.xid)) obj.xid = String(object.xid);
    return obj;
  },
  fromPartial(object: DeepPartial<AccountID>): AccountID {
    const message = createBaseAccountID();
    message.scope = object.scope ?? "";
    message.xid = object.xid ?? "";
    return message;
  },
  fromSDK(object: AccountIDSDKType): AccountID {
    return {
      scope: object?.scope,
      xid: object?.xid
    };
  },
  toSDK(message: AccountID): AccountIDSDKType {
    const obj: any = {};
    obj.scope = message.scope;
    obj.xid = message.xid;
    return obj;
  },
  fromAmino(object: AccountIDAmino): AccountID {
    const message = createBaseAccountID();
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = object.scope;
    }
    if (object.xid !== undefined && object.xid !== null) {
      message.xid = object.xid;
    }
    return message;
  },
  toAmino(message: AccountID, useInterfaces: boolean = true): AccountIDAmino {
    const obj: any = {};
    obj.scope = message.scope ?? "";
    obj.xid = message.xid ?? "";
    return obj;
  },
  fromProtoMsg(message: AccountIDProtoMsg, useInterfaces: boolean = true): AccountID {
    return AccountID.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AccountID): Uint8Array {
    return AccountID.encode(message).finish();
  },
  toProtoMsg(message: AccountID): AccountIDProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1beta2.AccountID",
      value: AccountID.encode(message).finish()
    };
  }
};
function createBaseAccount(): Account {
  return {
    id: AccountID.fromPartial({}),
    owner: "",
    state: 0,
    balance: DecCoin.fromPartial({}),
    transferred: DecCoin.fromPartial({}),
    settledAt: BigInt(0),
    depositor: "",
    funds: DecCoin.fromPartial({})
  };
}
export const Account = {
  typeUrl: "/akash.escrow.v1beta2.Account",
  encode(message: Account, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      AccountID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.balance !== undefined) {
      DecCoin.encode(message.balance, writer.uint32(34).fork()).ldelim();
    }
    if (message.transferred !== undefined) {
      DecCoin.encode(message.transferred, writer.uint32(42).fork()).ldelim();
    }
    if (message.settledAt !== BigInt(0)) {
      writer.uint32(48).int64(message.settledAt);
    }
    if (message.depositor !== "") {
      writer.uint32(58).string(message.depositor);
    }
    if (message.funds !== undefined) {
      DecCoin.encode(message.funds, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Account {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = AccountID.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.state = (reader.int32() as any);
          break;
        case 4:
          message.balance = DecCoin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.transferred = DecCoin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.settledAt = reader.int64();
          break;
        case 7:
          message.depositor = reader.string();
          break;
        case 8:
          message.funds = DecCoin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Account {
    const obj = createBaseAccount();
    if (isSet(object.id)) obj.id = AccountID.fromJSON(object.id);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.state)) obj.state = account_StateFromJSON(object.state);
    if (isSet(object.balance)) obj.balance = DecCoin.fromJSON(object.balance);
    if (isSet(object.transferred)) obj.transferred = DecCoin.fromJSON(object.transferred);
    if (isSet(object.settledAt)) obj.settledAt = BigInt(object.settledAt.toString());
    if (isSet(object.depositor)) obj.depositor = String(object.depositor);
    if (isSet(object.funds)) obj.funds = DecCoin.fromJSON(object.funds);
    return obj;
  },
  fromPartial(object: DeepPartial<Account>): Account {
    const message = createBaseAccount();
    if (object.id !== undefined && object.id !== null) {
      message.id = AccountID.fromPartial(object.id);
    }
    message.owner = object.owner ?? "";
    message.state = object.state ?? 0;
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = DecCoin.fromPartial(object.balance);
    }
    if (object.transferred !== undefined && object.transferred !== null) {
      message.transferred = DecCoin.fromPartial(object.transferred);
    }
    if (object.settledAt !== undefined && object.settledAt !== null) {
      message.settledAt = BigInt(object.settledAt.toString());
    }
    message.depositor = object.depositor ?? "";
    if (object.funds !== undefined && object.funds !== null) {
      message.funds = DecCoin.fromPartial(object.funds);
    }
    return message;
  },
  fromSDK(object: AccountSDKType): Account {
    return {
      id: object.id ? AccountID.fromSDK(object.id) : undefined,
      owner: object?.owner,
      state: isSet(object.state) ? account_StateFromJSON(object.state) : -1,
      balance: object.balance ? DecCoin.fromSDK(object.balance) : undefined,
      transferred: object.transferred ? DecCoin.fromSDK(object.transferred) : undefined,
      settledAt: object?.settled_at,
      depositor: object?.depositor,
      funds: object.funds ? DecCoin.fromSDK(object.funds) : undefined
    };
  },
  toSDK(message: Account): AccountSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? AccountID.toSDK(message.id) : undefined);
    obj.owner = message.owner;
    message.state !== undefined && (obj.state = account_StateToJSON(message.state));
    message.balance !== undefined && (obj.balance = message.balance ? DecCoin.toSDK(message.balance) : undefined);
    message.transferred !== undefined && (obj.transferred = message.transferred ? DecCoin.toSDK(message.transferred) : undefined);
    obj.settled_at = message.settledAt;
    obj.depositor = message.depositor;
    message.funds !== undefined && (obj.funds = message.funds ? DecCoin.toSDK(message.funds) : undefined);
    return obj;
  },
  fromAmino(object: AccountAmino): Account {
    const message = createBaseAccount();
    if (object.id !== undefined && object.id !== null) {
      message.id = AccountID.fromAmino(object.id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = DecCoin.fromAmino(object.balance);
    }
    if (object.transferred !== undefined && object.transferred !== null) {
      message.transferred = DecCoin.fromAmino(object.transferred);
    }
    if (object.settled_at !== undefined && object.settled_at !== null) {
      message.settledAt = BigInt(object.settled_at);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    if (object.funds !== undefined && object.funds !== null) {
      message.funds = DecCoin.fromAmino(object.funds);
    }
    return message;
  },
  toAmino(message: Account, useInterfaces: boolean = true): AccountAmino {
    const obj: any = {};
    obj.id = message.id ? AccountID.toAmino(message.id, useInterfaces) : AccountID.toAmino(AccountID.fromPartial({}));
    obj.owner = message.owner ?? "";
    obj.state = message.state ?? 0;
    obj.balance = message.balance ? DecCoin.toAmino(message.balance, useInterfaces) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.transferred = message.transferred ? DecCoin.toAmino(message.transferred, useInterfaces) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.settled_at = message.settledAt ? message.settledAt?.toString() : "0";
    obj.depositor = message.depositor ?? "";
    obj.funds = message.funds ? DecCoin.toAmino(message.funds, useInterfaces) : DecCoin.toAmino(DecCoin.fromPartial({}));
    return obj;
  },
  fromProtoMsg(message: AccountProtoMsg, useInterfaces: boolean = true): Account {
    return Account.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Account): Uint8Array {
    return Account.encode(message).finish();
  },
  toProtoMsg(message: Account): AccountProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1beta2.Account",
      value: Account.encode(message).finish()
    };
  }
};
function createBaseFractionalPayment(): FractionalPayment {
  return {
    accountId: AccountID.fromPartial({}),
    paymentId: "",
    owner: "",
    state: 0,
    rate: DecCoin.fromPartial({}),
    balance: DecCoin.fromPartial({}),
    withdrawn: Coin.fromPartial({})
  };
}
export const FractionalPayment = {
  typeUrl: "/akash.escrow.v1beta2.FractionalPayment",
  encode(message: FractionalPayment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountId !== undefined) {
      AccountID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
    }
    if (message.paymentId !== "") {
      writer.uint32(18).string(message.paymentId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.rate !== undefined) {
      DecCoin.encode(message.rate, writer.uint32(42).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      DecCoin.encode(message.balance, writer.uint32(50).fork()).ldelim();
    }
    if (message.withdrawn !== undefined) {
      Coin.encode(message.withdrawn, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): FractionalPayment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFractionalPayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = AccountID.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.paymentId = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.state = (reader.int32() as any);
          break;
        case 5:
          message.rate = DecCoin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.balance = DecCoin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.withdrawn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FractionalPayment {
    const obj = createBaseFractionalPayment();
    if (isSet(object.accountId)) obj.accountId = AccountID.fromJSON(object.accountId);
    if (isSet(object.paymentId)) obj.paymentId = String(object.paymentId);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.state)) obj.state = fractionalPayment_StateFromJSON(object.state);
    if (isSet(object.rate)) obj.rate = DecCoin.fromJSON(object.rate);
    if (isSet(object.balance)) obj.balance = DecCoin.fromJSON(object.balance);
    if (isSet(object.withdrawn)) obj.withdrawn = Coin.fromJSON(object.withdrawn);
    return obj;
  },
  fromPartial(object: DeepPartial<FractionalPayment>): FractionalPayment {
    const message = createBaseFractionalPayment();
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = AccountID.fromPartial(object.accountId);
    }
    message.paymentId = object.paymentId ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? 0;
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = DecCoin.fromPartial(object.rate);
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = DecCoin.fromPartial(object.balance);
    }
    if (object.withdrawn !== undefined && object.withdrawn !== null) {
      message.withdrawn = Coin.fromPartial(object.withdrawn);
    }
    return message;
  },
  fromSDK(object: FractionalPaymentSDKType): FractionalPayment {
    return {
      accountId: object.account_id ? AccountID.fromSDK(object.account_id) : undefined,
      paymentId: object?.payment_id,
      owner: object?.owner,
      state: isSet(object.state) ? fractionalPayment_StateFromJSON(object.state) : -1,
      rate: object.rate ? DecCoin.fromSDK(object.rate) : undefined,
      balance: object.balance ? DecCoin.fromSDK(object.balance) : undefined,
      withdrawn: object.withdrawn ? Coin.fromSDK(object.withdrawn) : undefined
    };
  },
  toSDK(message: FractionalPayment): FractionalPaymentSDKType {
    const obj: any = {};
    message.accountId !== undefined && (obj.account_id = message.accountId ? AccountID.toSDK(message.accountId) : undefined);
    obj.payment_id = message.paymentId;
    obj.owner = message.owner;
    message.state !== undefined && (obj.state = fractionalPayment_StateToJSON(message.state));
    message.rate !== undefined && (obj.rate = message.rate ? DecCoin.toSDK(message.rate) : undefined);
    message.balance !== undefined && (obj.balance = message.balance ? DecCoin.toSDK(message.balance) : undefined);
    message.withdrawn !== undefined && (obj.withdrawn = message.withdrawn ? Coin.toSDK(message.withdrawn) : undefined);
    return obj;
  },
  fromAmino(object: FractionalPaymentAmino): FractionalPayment {
    const message = createBaseFractionalPayment();
    if (object.account_id !== undefined && object.account_id !== null) {
      message.accountId = AccountID.fromAmino(object.account_id);
    }
    if (object.payment_id !== undefined && object.payment_id !== null) {
      message.paymentId = object.payment_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = DecCoin.fromAmino(object.rate);
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = DecCoin.fromAmino(object.balance);
    }
    if (object.withdrawn !== undefined && object.withdrawn !== null) {
      message.withdrawn = Coin.fromAmino(object.withdrawn);
    }
    return message;
  },
  toAmino(message: FractionalPayment, useInterfaces: boolean = true): FractionalPaymentAmino {
    const obj: any = {};
    obj.account_id = message.accountId ? AccountID.toAmino(message.accountId, useInterfaces) : AccountID.toAmino(AccountID.fromPartial({}));
    obj.payment_id = message.paymentId ?? "";
    obj.owner = message.owner ?? "";
    obj.state = message.state ?? 0;
    obj.rate = message.rate ? DecCoin.toAmino(message.rate, useInterfaces) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.balance = message.balance ? DecCoin.toAmino(message.balance, useInterfaces) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.withdrawn = message.withdrawn ? Coin.toAmino(message.withdrawn, useInterfaces) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromProtoMsg(message: FractionalPaymentProtoMsg, useInterfaces: boolean = true): FractionalPayment {
    return FractionalPayment.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: FractionalPayment): Uint8Array {
    return FractionalPayment.encode(message).finish();
  },
  toProtoMsg(message: FractionalPayment): FractionalPaymentProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1beta2.FractionalPayment",
      value: FractionalPayment.encode(message).finish()
    };
  }
};