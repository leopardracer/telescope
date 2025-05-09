import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino } from "./genesis";
import { ClaimsRecordAddress, ClaimsRecordAddressAmino, Claim, ClaimAmino } from "./claims";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryTotalUnclaimedRequest is the request type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedRequest {}
export interface QueryTotalUnclaimedRequestProtoMsg {
  typeUrl: "/evmos.claims.v1.QueryTotalUnclaimedRequest";
  value: Uint8Array;
}
/**
 * QueryTotalUnclaimedRequest is the request type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedRequestAmino {}
export interface QueryTotalUnclaimedRequestAminoMsg {
  type: "/evmos.claims.v1.QueryTotalUnclaimedRequest";
  value: QueryTotalUnclaimedRequestAmino;
}
/**
 * QueryTotalUnclaimedResponse is the response type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedResponse {
  /** coins defines the unclaimed coins */
  coins: Coin[];
}
export interface QueryTotalUnclaimedResponseProtoMsg {
  typeUrl: "/evmos.claims.v1.QueryTotalUnclaimedResponse";
  value: Uint8Array;
}
/**
 * QueryTotalUnclaimedResponse is the response type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedResponseAmino {
  /** coins defines the unclaimed coins */
  coins: CoinAmino[];
}
export interface QueryTotalUnclaimedResponseAminoMsg {
  type: "/evmos.claims.v1.QueryTotalUnclaimedResponse";
  value: QueryTotalUnclaimedResponseAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/evmos.claims.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/evmos.claims.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/evmos.claims.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/evmos.claims.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryClaimsRecordsRequest is the request type for the Query/ClaimsRecords RPC
 * method.
 */
export interface QueryClaimsRecordsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryClaimsRecordsRequestProtoMsg {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordsRequest";
  value: Uint8Array;
}
/**
 * QueryClaimsRecordsRequest is the request type for the Query/ClaimsRecords RPC
 * method.
 */
export interface QueryClaimsRecordsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryClaimsRecordsRequestAminoMsg {
  type: "/evmos.claims.v1.QueryClaimsRecordsRequest";
  value: QueryClaimsRecordsRequestAmino;
}
/**
 * QueryClaimsRecordsResponse is the response type for the Query/ClaimsRecords
 * RPC method.
 */
export interface QueryClaimsRecordsResponse {
  /** claims defines all claims records */
  claims: ClaimsRecordAddress[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryClaimsRecordsResponseProtoMsg {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordsResponse";
  value: Uint8Array;
}
/**
 * QueryClaimsRecordsResponse is the response type for the Query/ClaimsRecords
 * RPC method.
 */
export interface QueryClaimsRecordsResponseAmino {
  /** claims defines all claims records */
  claims: ClaimsRecordAddressAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryClaimsRecordsResponseAminoMsg {
  type: "/evmos.claims.v1.QueryClaimsRecordsResponse";
  value: QueryClaimsRecordsResponseAmino;
}
/**
 * QueryClaimsRecordRequest is the request type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordRequest {
  /** address defines the user to query claims record for */
  address: string;
}
export interface QueryClaimsRecordRequestProtoMsg {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordRequest";
  value: Uint8Array;
}
/**
 * QueryClaimsRecordRequest is the request type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordRequestAmino {
  /** address defines the user to query claims record for */
  address: string;
}
export interface QueryClaimsRecordRequestAminoMsg {
  type: "/evmos.claims.v1.QueryClaimsRecordRequest";
  value: QueryClaimsRecordRequestAmino;
}
/**
 * QueryClaimsRecordResponse is the response type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordResponse {
  /** total initial claimable amount for the user */
  initialClaimableAmount: string;
  /** the claims of the user */
  claims: Claim[];
}
export interface QueryClaimsRecordResponseProtoMsg {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordResponse";
  value: Uint8Array;
}
/**
 * QueryClaimsRecordResponse is the response type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordResponseAmino {
  /** total initial claimable amount for the user */
  initial_claimable_amount: string;
  /** the claims of the user */
  claims: ClaimAmino[];
}
export interface QueryClaimsRecordResponseAminoMsg {
  type: "/evmos.claims.v1.QueryClaimsRecordResponse";
  value: QueryClaimsRecordResponseAmino;
}
function createBaseQueryTotalUnclaimedRequest(): QueryTotalUnclaimedRequest {
  return {};
}
export const QueryTotalUnclaimedRequest = {
  typeUrl: "/evmos.claims.v1.QueryTotalUnclaimedRequest",
  encode(_: QueryTotalUnclaimedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalUnclaimedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalUnclaimedRequest();
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
  fromPartial(_: DeepPartial<QueryTotalUnclaimedRequest>): QueryTotalUnclaimedRequest {
    const message = createBaseQueryTotalUnclaimedRequest();
    return message;
  },
  fromAmino(_: QueryTotalUnclaimedRequestAmino): QueryTotalUnclaimedRequest {
    const message = createBaseQueryTotalUnclaimedRequest();
    return message;
  },
  toAmino(_: QueryTotalUnclaimedRequest): QueryTotalUnclaimedRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalUnclaimedRequestAminoMsg): QueryTotalUnclaimedRequest {
    return QueryTotalUnclaimedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalUnclaimedRequestProtoMsg): QueryTotalUnclaimedRequest {
    return QueryTotalUnclaimedRequest.decode(message.value);
  },
  toProto(message: QueryTotalUnclaimedRequest): Uint8Array {
    return QueryTotalUnclaimedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalUnclaimedRequest): QueryTotalUnclaimedRequestProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryTotalUnclaimedRequest",
      value: QueryTotalUnclaimedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalUnclaimedResponse(): QueryTotalUnclaimedResponse {
  return {
    coins: []
  };
}
export const QueryTotalUnclaimedResponse = {
  typeUrl: "/evmos.claims.v1.QueryTotalUnclaimedResponse",
  encode(message: QueryTotalUnclaimedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalUnclaimedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalUnclaimedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTotalUnclaimedResponse>): QueryTotalUnclaimedResponse {
    const message = createBaseQueryTotalUnclaimedResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalUnclaimedResponseAmino): QueryTotalUnclaimedResponse {
    const message = createBaseQueryTotalUnclaimedResponse();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalUnclaimedResponse): QueryTotalUnclaimedResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalUnclaimedResponseAminoMsg): QueryTotalUnclaimedResponse {
    return QueryTotalUnclaimedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalUnclaimedResponseProtoMsg): QueryTotalUnclaimedResponse {
    return QueryTotalUnclaimedResponse.decode(message.value);
  },
  toProto(message: QueryTotalUnclaimedResponse): Uint8Array {
    return QueryTotalUnclaimedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalUnclaimedResponse): QueryTotalUnclaimedResponseProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryTotalUnclaimedResponse",
      value: QueryTotalUnclaimedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/evmos.claims.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/evmos.claims.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimsRecordsRequest(): QueryClaimsRecordsRequest {
  return {
    pagination: undefined
  };
}
export const QueryClaimsRecordsRequest = {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordsRequest",
  encode(message: QueryClaimsRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimsRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClaimsRecordsRequest>): QueryClaimsRecordsRequest {
    const message = createBaseQueryClaimsRecordsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClaimsRecordsRequestAmino): QueryClaimsRecordsRequest {
    const message = createBaseQueryClaimsRecordsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClaimsRecordsRequest): QueryClaimsRecordsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimsRecordsRequestAminoMsg): QueryClaimsRecordsRequest {
    return QueryClaimsRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsRecordsRequestProtoMsg): QueryClaimsRecordsRequest {
    return QueryClaimsRecordsRequest.decode(message.value);
  },
  toProto(message: QueryClaimsRecordsRequest): Uint8Array {
    return QueryClaimsRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsRecordsRequest): QueryClaimsRecordsRequestProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryClaimsRecordsRequest",
      value: QueryClaimsRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimsRecordsResponse(): QueryClaimsRecordsResponse {
  return {
    claims: [],
    pagination: undefined
  };
}
export const QueryClaimsRecordsResponse = {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordsResponse",
  encode(message: QueryClaimsRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claims) {
      ClaimsRecordAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimsRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claims.push(ClaimsRecordAddress.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClaimsRecordsResponse>): QueryClaimsRecordsResponse {
    const message = createBaseQueryClaimsRecordsResponse();
    message.claims = object.claims?.map(e => ClaimsRecordAddress.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClaimsRecordsResponseAmino): QueryClaimsRecordsResponse {
    const message = createBaseQueryClaimsRecordsResponse();
    message.claims = object.claims?.map(e => ClaimsRecordAddress.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClaimsRecordsResponse): QueryClaimsRecordsResponseAmino {
    const obj: any = {};
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? ClaimsRecordAddress.toAmino(e) : undefined);
    } else {
      obj.claims = message.claims;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimsRecordsResponseAminoMsg): QueryClaimsRecordsResponse {
    return QueryClaimsRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsRecordsResponseProtoMsg): QueryClaimsRecordsResponse {
    return QueryClaimsRecordsResponse.decode(message.value);
  },
  toProto(message: QueryClaimsRecordsResponse): Uint8Array {
    return QueryClaimsRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsRecordsResponse): QueryClaimsRecordsResponseProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryClaimsRecordsResponse",
      value: QueryClaimsRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimsRecordRequest(): QueryClaimsRecordRequest {
  return {
    address: ""
  };
}
export const QueryClaimsRecordRequest = {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordRequest",
  encode(message: QueryClaimsRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimsRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClaimsRecordRequest>): QueryClaimsRecordRequest {
    const message = createBaseQueryClaimsRecordRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryClaimsRecordRequestAmino): QueryClaimsRecordRequest {
    const message = createBaseQueryClaimsRecordRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryClaimsRecordRequest): QueryClaimsRecordRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryClaimsRecordRequestAminoMsg): QueryClaimsRecordRequest {
    return QueryClaimsRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsRecordRequestProtoMsg): QueryClaimsRecordRequest {
    return QueryClaimsRecordRequest.decode(message.value);
  },
  toProto(message: QueryClaimsRecordRequest): Uint8Array {
    return QueryClaimsRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsRecordRequest): QueryClaimsRecordRequestProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryClaimsRecordRequest",
      value: QueryClaimsRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimsRecordResponse(): QueryClaimsRecordResponse {
  return {
    initialClaimableAmount: "",
    claims: []
  };
}
export const QueryClaimsRecordResponse = {
  typeUrl: "/evmos.claims.v1.QueryClaimsRecordResponse",
  encode(message: QueryClaimsRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initialClaimableAmount !== "") {
      writer.uint32(10).string(message.initialClaimableAmount);
    }
    for (const v of message.claims) {
      Claim.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimsRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initialClaimableAmount = reader.string();
          break;
        case 2:
          message.claims.push(Claim.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClaimsRecordResponse>): QueryClaimsRecordResponse {
    const message = createBaseQueryClaimsRecordResponse();
    message.initialClaimableAmount = object.initialClaimableAmount ?? "";
    message.claims = object.claims?.map(e => Claim.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryClaimsRecordResponseAmino): QueryClaimsRecordResponse {
    const message = createBaseQueryClaimsRecordResponse();
    if (object.initial_claimable_amount !== undefined && object.initial_claimable_amount !== null) {
      message.initialClaimableAmount = object.initial_claimable_amount;
    }
    message.claims = object.claims?.map(e => Claim.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryClaimsRecordResponse): QueryClaimsRecordResponseAmino {
    const obj: any = {};
    obj.initial_claimable_amount = message.initialClaimableAmount === "" ? undefined : message.initialClaimableAmount;
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? Claim.toAmino(e) : undefined);
    } else {
      obj.claims = message.claims;
    }
    return obj;
  },
  fromAminoMsg(object: QueryClaimsRecordResponseAminoMsg): QueryClaimsRecordResponse {
    return QueryClaimsRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimsRecordResponseProtoMsg): QueryClaimsRecordResponse {
    return QueryClaimsRecordResponse.decode(message.value);
  },
  toProto(message: QueryClaimsRecordResponse): Uint8Array {
    return QueryClaimsRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimsRecordResponse): QueryClaimsRecordResponseProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.QueryClaimsRecordResponse",
      value: QueryClaimsRecordResponse.encode(message).finish()
    };
  }
};