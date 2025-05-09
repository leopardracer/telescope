import { OrderFilters, OrderFiltersAmino, OrderFiltersSDKType, OrderID, OrderIDAmino, OrderIDSDKType, Order, OrderAmino, OrderSDKType } from "./order";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersAmino, BidFiltersSDKType, BidID, BidIDAmino, BidIDSDKType, Bid, BidAmino, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersAmino, LeaseFiltersSDKType, LeaseID, LeaseIDAmino, LeaseIDSDKType, Lease, LeaseAmino, LeaseSDKType } from "./lease";
import { Account, AccountAmino, AccountSDKType, FractionalPayment, FractionalPaymentAmino, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "akash.market.v1beta2";
/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequest {
  filters: OrderFilters;
  pagination?: PageRequest;
}
export interface QueryOrdersRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryOrdersRequest";
  value: Uint8Array;
}
/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequestAmino {
  filters?: OrderFiltersAmino;
  pagination?: PageRequestAmino;
}
export interface QueryOrdersRequestAminoMsg {
  type: "akash/market/v1beta2/query-orders-request";
  value: QueryOrdersRequestAmino;
}
/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequestSDKType {
  filters: OrderFiltersSDKType;
  pagination?: PageRequestSDKType;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponse {
  orders: Order[];
  pagination?: PageResponse;
}
export interface QueryOrdersResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryOrdersResponse";
  value: Uint8Array;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponseAmino {
  orders?: OrderAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryOrdersResponseAminoMsg {
  type: "akash/market/v1beta2/query-orders-response";
  value: QueryOrdersResponseAmino;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponseSDKType {
  orders: OrderSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequest {
  id: OrderID;
}
export interface QueryOrderRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryOrderRequest";
  value: Uint8Array;
}
/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequestAmino {
  id?: OrderIDAmino;
}
export interface QueryOrderRequestAminoMsg {
  type: "akash/market/v1beta2/query-order-request";
  value: QueryOrderRequestAmino;
}
/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequestSDKType {
  id: OrderIDSDKType;
}
/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponse {
  order: Order;
}
export interface QueryOrderResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryOrderResponse";
  value: Uint8Array;
}
/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponseAmino {
  order?: OrderAmino;
}
export interface QueryOrderResponseAminoMsg {
  type: "akash/market/v1beta2/query-order-response";
  value: QueryOrderResponseAmino;
}
/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponseSDKType {
  order: OrderSDKType;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequest {
  filters: BidFilters;
  pagination?: PageRequest;
}
export interface QueryBidsRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryBidsRequest";
  value: Uint8Array;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequestAmino {
  filters?: BidFiltersAmino;
  pagination?: PageRequestAmino;
}
export interface QueryBidsRequestAminoMsg {
  type: "akash/market/v1beta2/query-bids-request";
  value: QueryBidsRequestAmino;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequestSDKType {
  filters: BidFiltersSDKType;
  pagination?: PageRequestSDKType;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponse {
  bids: QueryBidResponse[];
  pagination?: PageResponse;
}
export interface QueryBidsResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryBidsResponse";
  value: Uint8Array;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponseAmino {
  bids?: QueryBidResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryBidsResponseAminoMsg {
  type: "akash/market/v1beta2/query-bids-response";
  value: QueryBidsResponseAmino;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponseSDKType {
  bids: QueryBidResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequest {
  id: BidID;
}
export interface QueryBidRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryBidRequest";
  value: Uint8Array;
}
/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequestAmino {
  id?: BidIDAmino;
}
export interface QueryBidRequestAminoMsg {
  type: "akash/market/v1beta2/query-bid-request";
  value: QueryBidRequestAmino;
}
/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequestSDKType {
  id: BidIDSDKType;
}
/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponse {
  bid: Bid;
  escrowAccount: Account;
}
export interface QueryBidResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryBidResponse";
  value: Uint8Array;
}
/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponseAmino {
  bid?: BidAmino;
  escrow_account?: AccountAmino;
}
export interface QueryBidResponseAminoMsg {
  type: "akash/market/v1beta2/query-bid-response";
  value: QueryBidResponseAmino;
}
/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponseSDKType {
  bid: BidSDKType;
  escrow_account: AccountSDKType;
}
/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequest {
  filters: LeaseFilters;
  pagination?: PageRequest;
}
export interface QueryLeasesRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryLeasesRequest";
  value: Uint8Array;
}
/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequestAmino {
  filters?: LeaseFiltersAmino;
  pagination?: PageRequestAmino;
}
export interface QueryLeasesRequestAminoMsg {
  type: "akash/market/v1beta2/query-leases-request";
  value: QueryLeasesRequestAmino;
}
/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequestSDKType {
  filters: LeaseFiltersSDKType;
  pagination?: PageRequestSDKType;
}
/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponse {
  leases: QueryLeaseResponse[];
  pagination?: PageResponse;
}
export interface QueryLeasesResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryLeasesResponse";
  value: Uint8Array;
}
/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponseAmino {
  leases?: QueryLeaseResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryLeasesResponseAminoMsg {
  type: "akash/market/v1beta2/query-leases-response";
  value: QueryLeasesResponseAmino;
}
/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponseSDKType {
  leases: QueryLeaseResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequest {
  id: LeaseID;
}
export interface QueryLeaseRequestProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryLeaseRequest";
  value: Uint8Array;
}
/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequestAmino {
  id?: LeaseIDAmino;
}
export interface QueryLeaseRequestAminoMsg {
  type: "akash/market/v1beta2/query-lease-request";
  value: QueryLeaseRequestAmino;
}
/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequestSDKType {
  id: LeaseIDSDKType;
}
/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponse {
  lease: Lease;
  escrowPayment: FractionalPayment;
}
export interface QueryLeaseResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.QueryLeaseResponse";
  value: Uint8Array;
}
/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponseAmino {
  lease?: LeaseAmino;
  escrow_payment?: FractionalPaymentAmino;
}
export interface QueryLeaseResponseAminoMsg {
  type: "akash/market/v1beta2/query-lease-response";
  value: QueryLeaseResponseAmino;
}
/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponseSDKType {
  lease: LeaseSDKType;
  escrow_payment: FractionalPaymentSDKType;
}
function createBaseQueryOrdersRequest(): QueryOrdersRequest {
  return {
    filters: OrderFilters.fromPartial({}),
    pagination: undefined
  };
}
export const QueryOrdersRequest = {
  typeUrl: "/akash.market.v1beta2.QueryOrdersRequest",
  aminoType: "akash/market/v1beta2/query-orders-request",
  is(o: any): o is QueryOrdersRequest {
    return o && (o.$typeUrl === QueryOrdersRequest.typeUrl || OrderFilters.is(o.filters));
  },
  isSDK(o: any): o is QueryOrdersRequestSDKType {
    return o && (o.$typeUrl === QueryOrdersRequest.typeUrl || OrderFilters.isSDK(o.filters));
  },
  isAmino(o: any): o is QueryOrdersRequestAmino {
    return o && (o.$typeUrl === QueryOrdersRequest.typeUrl || OrderFilters.isAmino(o.filters));
  },
  encode(message: QueryOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filters !== undefined) {
      OrderFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = OrderFilters.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrdersRequest {
    const obj = createBaseQueryOrdersRequest();
    if (isSet(object.filters)) obj.filters = OrderFilters.fromJSON(object.filters);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryOrdersRequest): JsonSafe<QueryOrdersRequest> {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? OrderFilters.toJSON(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryOrdersRequest>, I>>(object: I): QueryOrdersRequest {
    const message = createBaseQueryOrdersRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = OrderFilters.fromPartial(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryOrdersRequestSDKType): QueryOrdersRequest {
    return {
      filters: object.filters ? OrderFilters.fromSDK(object.filters) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryOrdersRequestSDKType {
    return {
      filters: isSet(object.filters) ? OrderFilters.fromSDKJSON(object.filters) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryOrdersRequest): QueryOrdersRequestSDKType {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? OrderFilters.toSDK(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryOrdersRequestAmino): QueryOrdersRequest {
    const message = createBaseQueryOrdersRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = OrderFilters.fromAmino(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOrdersRequest): QueryOrdersRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? OrderFilters.toAmino(message.filters) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrdersRequestAminoMsg): QueryOrdersRequest {
    return QueryOrdersRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryOrdersRequest): QueryOrdersRequestAminoMsg {
    return {
      type: "akash/market/v1beta2/query-orders-request",
      value: QueryOrdersRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryOrdersRequestProtoMsg): QueryOrdersRequest {
    return QueryOrdersRequest.decode(message.value);
  },
  toProto(message: QueryOrdersRequest): Uint8Array {
    return QueryOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrdersRequest): QueryOrdersRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryOrdersRequest",
      value: QueryOrdersRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    OrderFilters.registerTypeUrl();
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryOrdersResponse(): QueryOrdersResponse {
  return {
    orders: [],
    pagination: undefined
  };
}
export const QueryOrdersResponse = {
  typeUrl: "/akash.market.v1beta2.QueryOrdersResponse",
  aminoType: "akash/market/v1beta2/query-orders-response",
  is(o: any): o is QueryOrdersResponse {
    return o && (o.$typeUrl === QueryOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || Order.is(o.orders[0])));
  },
  isSDK(o: any): o is QueryOrdersResponseSDKType {
    return o && (o.$typeUrl === QueryOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || Order.isSDK(o.orders[0])));
  },
  isAmino(o: any): o is QueryOrdersResponseAmino {
    return o && (o.$typeUrl === QueryOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || Order.isAmino(o.orders[0])));
  },
  encode(message: QueryOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryOrdersResponse {
    const obj = createBaseQueryOrdersResponse();
    if (Array.isArray(object?.orders)) obj.orders = object.orders.map((e: any) => Order.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryOrdersResponse): JsonSafe<QueryOrdersResponse> {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryOrdersResponse>, I>>(object: I): QueryOrdersResponse {
    const message = createBaseQueryOrdersResponse();
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryOrdersResponseSDKType): QueryOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryOrdersResponseSDKType {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryOrdersResponse): QueryOrdersResponseSDKType {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toSDK(e) : undefined);
    } else {
      obj.orders = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryOrdersResponseAmino): QueryOrdersResponse {
    const message = createBaseQueryOrdersResponse();
    message.orders = object.orders?.map(e => Order.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOrdersResponse): QueryOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrdersResponseAminoMsg): QueryOrdersResponse {
    return QueryOrdersResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryOrdersResponse): QueryOrdersResponseAminoMsg {
    return {
      type: "akash/market/v1beta2/query-orders-response",
      value: QueryOrdersResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryOrdersResponseProtoMsg): QueryOrdersResponse {
    return QueryOrdersResponse.decode(message.value);
  },
  toProto(message: QueryOrdersResponse): Uint8Array {
    return QueryOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrdersResponse): QueryOrdersResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryOrdersResponse",
      value: QueryOrdersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Order.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryOrderRequest(): QueryOrderRequest {
  return {
    id: OrderID.fromPartial({})
  };
}
export const QueryOrderRequest = {
  typeUrl: "/akash.market.v1beta2.QueryOrderRequest",
  aminoType: "akash/market/v1beta2/query-order-request",
  is(o: any): o is QueryOrderRequest {
    return o && (o.$typeUrl === QueryOrderRequest.typeUrl || OrderID.is(o.id));
  },
  isSDK(o: any): o is QueryOrderRequestSDKType {
    return o && (o.$typeUrl === QueryOrderRequest.typeUrl || OrderID.isSDK(o.id));
  },
  isAmino(o: any): o is QueryOrderRequestAmino {
    return o && (o.$typeUrl === QueryOrderRequest.typeUrl || OrderID.isAmino(o.id));
  },
  encode(message: QueryOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      OrderID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = OrderID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderRequest {
    const obj = createBaseQueryOrderRequest();
    if (isSet(object.id)) obj.id = OrderID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: QueryOrderRequest): JsonSafe<QueryOrderRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? OrderID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryOrderRequest>, I>>(object: I): QueryOrderRequest {
    const message = createBaseQueryOrderRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = OrderID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: QueryOrderRequestSDKType): QueryOrderRequest {
    return {
      id: object.id ? OrderID.fromSDK(object.id) : undefined
    };
  },
  fromSDKJSON(object: any): QueryOrderRequestSDKType {
    return {
      id: isSet(object.id) ? OrderID.fromSDKJSON(object.id) : undefined
    };
  },
  toSDK(message: QueryOrderRequest): QueryOrderRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? OrderID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: QueryOrderRequestAmino): QueryOrderRequest {
    const message = createBaseQueryOrderRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = OrderID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: QueryOrderRequest): QueryOrderRequestAmino {
    const obj: any = {};
    obj.id = message.id ? OrderID.toAmino(message.id) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderRequestAminoMsg): QueryOrderRequest {
    return QueryOrderRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryOrderRequest): QueryOrderRequestAminoMsg {
    return {
      type: "akash/market/v1beta2/query-order-request",
      value: QueryOrderRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryOrderRequestProtoMsg): QueryOrderRequest {
    return QueryOrderRequest.decode(message.value);
  },
  toProto(message: QueryOrderRequest): Uint8Array {
    return QueryOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderRequest): QueryOrderRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryOrderRequest",
      value: QueryOrderRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    OrderID.registerTypeUrl();
  }
};
function createBaseQueryOrderResponse(): QueryOrderResponse {
  return {
    order: Order.fromPartial({})
  };
}
export const QueryOrderResponse = {
  typeUrl: "/akash.market.v1beta2.QueryOrderResponse",
  aminoType: "akash/market/v1beta2/query-order-response",
  is(o: any): o is QueryOrderResponse {
    return o && (o.$typeUrl === QueryOrderResponse.typeUrl || Order.is(o.order));
  },
  isSDK(o: any): o is QueryOrderResponseSDKType {
    return o && (o.$typeUrl === QueryOrderResponse.typeUrl || Order.isSDK(o.order));
  },
  isAmino(o: any): o is QueryOrderResponseAmino {
    return o && (o.$typeUrl === QueryOrderResponse.typeUrl || Order.isAmino(o.order));
  },
  encode(message: QueryOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderResponse {
    const obj = createBaseQueryOrderResponse();
    if (isSet(object.order)) obj.order = Order.fromJSON(object.order);
    return obj;
  },
  toJSON(message: QueryOrderResponse): JsonSafe<QueryOrderResponse> {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryOrderResponse>, I>>(object: I): QueryOrderResponse {
    const message = createBaseQueryOrderResponse();
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromPartial(object.order);
    }
    return message;
  },
  fromSDK(object: QueryOrderResponseSDKType): QueryOrderResponse {
    return {
      order: object.order ? Order.fromSDK(object.order) : undefined
    };
  },
  fromSDKJSON(object: any): QueryOrderResponseSDKType {
    return {
      order: isSet(object.order) ? Order.fromSDKJSON(object.order) : undefined
    };
  },
  toSDK(message: QueryOrderResponse): QueryOrderResponseSDKType {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toSDK(message.order) : undefined);
    return obj;
  },
  fromAmino(object: QueryOrderResponseAmino): QueryOrderResponse {
    const message = createBaseQueryOrderResponse();
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: QueryOrderResponse): QueryOrderResponseAmino {
    const obj: any = {};
    obj.order = message.order ? Order.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderResponseAminoMsg): QueryOrderResponse {
    return QueryOrderResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryOrderResponse): QueryOrderResponseAminoMsg {
    return {
      type: "akash/market/v1beta2/query-order-response",
      value: QueryOrderResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryOrderResponseProtoMsg): QueryOrderResponse {
    return QueryOrderResponse.decode(message.value);
  },
  toProto(message: QueryOrderResponse): Uint8Array {
    return QueryOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderResponse): QueryOrderResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryOrderResponse",
      value: QueryOrderResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Order.registerTypeUrl();
  }
};
function createBaseQueryBidsRequest(): QueryBidsRequest {
  return {
    filters: BidFilters.fromPartial({}),
    pagination: undefined
  };
}
export const QueryBidsRequest = {
  typeUrl: "/akash.market.v1beta2.QueryBidsRequest",
  aminoType: "akash/market/v1beta2/query-bids-request",
  is(o: any): o is QueryBidsRequest {
    return o && (o.$typeUrl === QueryBidsRequest.typeUrl || BidFilters.is(o.filters));
  },
  isSDK(o: any): o is QueryBidsRequestSDKType {
    return o && (o.$typeUrl === QueryBidsRequest.typeUrl || BidFilters.isSDK(o.filters));
  },
  isAmino(o: any): o is QueryBidsRequestAmino {
    return o && (o.$typeUrl === QueryBidsRequest.typeUrl || BidFilters.isAmino(o.filters));
  },
  encode(message: QueryBidsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filters !== undefined) {
      BidFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBidsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = BidFilters.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBidsRequest {
    const obj = createBaseQueryBidsRequest();
    if (isSet(object.filters)) obj.filters = BidFilters.fromJSON(object.filters);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryBidsRequest): JsonSafe<QueryBidsRequest> {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? BidFilters.toJSON(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBidsRequest>, I>>(object: I): QueryBidsRequest {
    const message = createBaseQueryBidsRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = BidFilters.fromPartial(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryBidsRequestSDKType): QueryBidsRequest {
    return {
      filters: object.filters ? BidFilters.fromSDK(object.filters) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryBidsRequestSDKType {
    return {
      filters: isSet(object.filters) ? BidFilters.fromSDKJSON(object.filters) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryBidsRequest): QueryBidsRequestSDKType {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? BidFilters.toSDK(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryBidsRequestAmino): QueryBidsRequest {
    const message = createBaseQueryBidsRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = BidFilters.fromAmino(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBidsRequest): QueryBidsRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? BidFilters.toAmino(message.filters) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidsRequestAminoMsg): QueryBidsRequest {
    return QueryBidsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBidsRequest): QueryBidsRequestAminoMsg {
    return {
      type: "akash/market/v1beta2/query-bids-request",
      value: QueryBidsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryBidsRequestProtoMsg): QueryBidsRequest {
    return QueryBidsRequest.decode(message.value);
  },
  toProto(message: QueryBidsRequest): Uint8Array {
    return QueryBidsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBidsRequest): QueryBidsRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryBidsRequest",
      value: QueryBidsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    BidFilters.registerTypeUrl();
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryBidsResponse(): QueryBidsResponse {
  return {
    bids: [],
    pagination: undefined
  };
}
export const QueryBidsResponse = {
  typeUrl: "/akash.market.v1beta2.QueryBidsResponse",
  aminoType: "akash/market/v1beta2/query-bids-response",
  is(o: any): o is QueryBidsResponse {
    return o && (o.$typeUrl === QueryBidsResponse.typeUrl || Array.isArray(o.bids) && (!o.bids.length || QueryBidResponse.is(o.bids[0])));
  },
  isSDK(o: any): o is QueryBidsResponseSDKType {
    return o && (o.$typeUrl === QueryBidsResponse.typeUrl || Array.isArray(o.bids) && (!o.bids.length || QueryBidResponse.isSDK(o.bids[0])));
  },
  isAmino(o: any): o is QueryBidsResponseAmino {
    return o && (o.$typeUrl === QueryBidsResponse.typeUrl || Array.isArray(o.bids) && (!o.bids.length || QueryBidResponse.isAmino(o.bids[0])));
  },
  encode(message: QueryBidsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.bids) {
      QueryBidResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBidsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bids.push(QueryBidResponse.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryBidsResponse {
    const obj = createBaseQueryBidsResponse();
    if (Array.isArray(object?.bids)) obj.bids = object.bids.map((e: any) => QueryBidResponse.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryBidsResponse): JsonSafe<QueryBidsResponse> {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map(e => e ? QueryBidResponse.toJSON(e) : undefined);
    } else {
      obj.bids = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBidsResponse>, I>>(object: I): QueryBidsResponse {
    const message = createBaseQueryBidsResponse();
    message.bids = object.bids?.map(e => QueryBidResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryBidsResponseSDKType): QueryBidsResponse {
    return {
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => QueryBidResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryBidsResponseSDKType {
    return {
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => QueryBidResponse.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryBidsResponse): QueryBidsResponseSDKType {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map(e => e ? QueryBidResponse.toSDK(e) : undefined);
    } else {
      obj.bids = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryBidsResponseAmino): QueryBidsResponse {
    const message = createBaseQueryBidsResponse();
    message.bids = object.bids?.map(e => QueryBidResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBidsResponse): QueryBidsResponseAmino {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map(e => e ? QueryBidResponse.toAmino(e) : undefined);
    } else {
      obj.bids = message.bids;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidsResponseAminoMsg): QueryBidsResponse {
    return QueryBidsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBidsResponse): QueryBidsResponseAminoMsg {
    return {
      type: "akash/market/v1beta2/query-bids-response",
      value: QueryBidsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryBidsResponseProtoMsg): QueryBidsResponse {
    return QueryBidsResponse.decode(message.value);
  },
  toProto(message: QueryBidsResponse): Uint8Array {
    return QueryBidsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBidsResponse): QueryBidsResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryBidsResponse",
      value: QueryBidsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    QueryBidResponse.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryBidRequest(): QueryBidRequest {
  return {
    id: BidID.fromPartial({})
  };
}
export const QueryBidRequest = {
  typeUrl: "/akash.market.v1beta2.QueryBidRequest",
  aminoType: "akash/market/v1beta2/query-bid-request",
  is(o: any): o is QueryBidRequest {
    return o && (o.$typeUrl === QueryBidRequest.typeUrl || BidID.is(o.id));
  },
  isSDK(o: any): o is QueryBidRequestSDKType {
    return o && (o.$typeUrl === QueryBidRequest.typeUrl || BidID.isSDK(o.id));
  },
  isAmino(o: any): o is QueryBidRequestAmino {
    return o && (o.$typeUrl === QueryBidRequest.typeUrl || BidID.isAmino(o.id));
  },
  encode(message: QueryBidRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBidRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BidID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBidRequest {
    const obj = createBaseQueryBidRequest();
    if (isSet(object.id)) obj.id = BidID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: QueryBidRequest): JsonSafe<QueryBidRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? BidID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBidRequest>, I>>(object: I): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BidID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: QueryBidRequestSDKType): QueryBidRequest {
    return {
      id: object.id ? BidID.fromSDK(object.id) : undefined
    };
  },
  fromSDKJSON(object: any): QueryBidRequestSDKType {
    return {
      id: isSet(object.id) ? BidID.fromSDKJSON(object.id) : undefined
    };
  },
  toSDK(message: QueryBidRequest): QueryBidRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? BidID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: QueryBidRequestAmino): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BidID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: QueryBidRequest): QueryBidRequestAmino {
    const obj: any = {};
    obj.id = message.id ? BidID.toAmino(message.id) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidRequestAminoMsg): QueryBidRequest {
    return QueryBidRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBidRequest): QueryBidRequestAminoMsg {
    return {
      type: "akash/market/v1beta2/query-bid-request",
      value: QueryBidRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryBidRequestProtoMsg): QueryBidRequest {
    return QueryBidRequest.decode(message.value);
  },
  toProto(message: QueryBidRequest): Uint8Array {
    return QueryBidRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBidRequest): QueryBidRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryBidRequest",
      value: QueryBidRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    BidID.registerTypeUrl();
  }
};
function createBaseQueryBidResponse(): QueryBidResponse {
  return {
    bid: Bid.fromPartial({}),
    escrowAccount: Account.fromPartial({})
  };
}
export const QueryBidResponse = {
  typeUrl: "/akash.market.v1beta2.QueryBidResponse",
  aminoType: "akash/market/v1beta2/query-bid-response",
  is(o: any): o is QueryBidResponse {
    return o && (o.$typeUrl === QueryBidResponse.typeUrl || Bid.is(o.bid) && Account.is(o.escrowAccount));
  },
  isSDK(o: any): o is QueryBidResponseSDKType {
    return o && (o.$typeUrl === QueryBidResponse.typeUrl || Bid.isSDK(o.bid) && Account.isSDK(o.escrow_account));
  },
  isAmino(o: any): o is QueryBidResponseAmino {
    return o && (o.$typeUrl === QueryBidResponse.typeUrl || Bid.isAmino(o.bid) && Account.isAmino(o.escrow_account));
  },
  encode(message: QueryBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bid !== undefined) {
      Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
    }
    if (message.escrowAccount !== undefined) {
      Account.encode(message.escrowAccount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bid = Bid.decode(reader, reader.uint32());
          break;
        case 2:
          message.escrowAccount = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBidResponse {
    const obj = createBaseQueryBidResponse();
    if (isSet(object.bid)) obj.bid = Bid.fromJSON(object.bid);
    if (isSet(object.escrowAccount)) obj.escrowAccount = Account.fromJSON(object.escrowAccount);
    return obj;
  },
  toJSON(message: QueryBidResponse): JsonSafe<QueryBidResponse> {
    const obj: any = {};
    message.bid !== undefined && (obj.bid = message.bid ? Bid.toJSON(message.bid) : undefined);
    message.escrowAccount !== undefined && (obj.escrowAccount = message.escrowAccount ? Account.toJSON(message.escrowAccount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBidResponse>, I>>(object: I): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Bid.fromPartial(object.bid);
    }
    if (object.escrowAccount !== undefined && object.escrowAccount !== null) {
      message.escrowAccount = Account.fromPartial(object.escrowAccount);
    }
    return message;
  },
  fromSDK(object: QueryBidResponseSDKType): QueryBidResponse {
    return {
      bid: object.bid ? Bid.fromSDK(object.bid) : undefined,
      escrowAccount: object.escrow_account ? Account.fromSDK(object.escrow_account) : undefined
    };
  },
  fromSDKJSON(object: any): QueryBidResponseSDKType {
    return {
      bid: isSet(object.bid) ? Bid.fromSDKJSON(object.bid) : undefined,
      escrow_account: isSet(object.escrow_account) ? Account.fromSDKJSON(object.escrow_account) : undefined
    };
  },
  toSDK(message: QueryBidResponse): QueryBidResponseSDKType {
    const obj: any = {};
    message.bid !== undefined && (obj.bid = message.bid ? Bid.toSDK(message.bid) : undefined);
    message.escrowAccount !== undefined && (obj.escrow_account = message.escrowAccount ? Account.toSDK(message.escrowAccount) : undefined);
    return obj;
  },
  fromAmino(object: QueryBidResponseAmino): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Bid.fromAmino(object.bid);
    }
    if (object.escrow_account !== undefined && object.escrow_account !== null) {
      message.escrowAccount = Account.fromAmino(object.escrow_account);
    }
    return message;
  },
  toAmino(message: QueryBidResponse): QueryBidResponseAmino {
    const obj: any = {};
    obj.bid = message.bid ? Bid.toAmino(message.bid) : undefined;
    obj.escrow_account = message.escrowAccount ? Account.toAmino(message.escrowAccount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBidResponseAminoMsg): QueryBidResponse {
    return QueryBidResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBidResponse): QueryBidResponseAminoMsg {
    return {
      type: "akash/market/v1beta2/query-bid-response",
      value: QueryBidResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryBidResponseProtoMsg): QueryBidResponse {
    return QueryBidResponse.decode(message.value);
  },
  toProto(message: QueryBidResponse): Uint8Array {
    return QueryBidResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBidResponse): QueryBidResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryBidResponse",
      value: QueryBidResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Bid.registerTypeUrl();
    Account.registerTypeUrl();
  }
};
function createBaseQueryLeasesRequest(): QueryLeasesRequest {
  return {
    filters: LeaseFilters.fromPartial({}),
    pagination: undefined
  };
}
export const QueryLeasesRequest = {
  typeUrl: "/akash.market.v1beta2.QueryLeasesRequest",
  aminoType: "akash/market/v1beta2/query-leases-request",
  is(o: any): o is QueryLeasesRequest {
    return o && (o.$typeUrl === QueryLeasesRequest.typeUrl || LeaseFilters.is(o.filters));
  },
  isSDK(o: any): o is QueryLeasesRequestSDKType {
    return o && (o.$typeUrl === QueryLeasesRequest.typeUrl || LeaseFilters.isSDK(o.filters));
  },
  isAmino(o: any): o is QueryLeasesRequestAmino {
    return o && (o.$typeUrl === QueryLeasesRequest.typeUrl || LeaseFilters.isAmino(o.filters));
  },
  encode(message: QueryLeasesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filters !== undefined) {
      LeaseFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLeasesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = LeaseFilters.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLeasesRequest {
    const obj = createBaseQueryLeasesRequest();
    if (isSet(object.filters)) obj.filters = LeaseFilters.fromJSON(object.filters);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryLeasesRequest): JsonSafe<QueryLeasesRequest> {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? LeaseFilters.toJSON(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryLeasesRequest>, I>>(object: I): QueryLeasesRequest {
    const message = createBaseQueryLeasesRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = LeaseFilters.fromPartial(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryLeasesRequestSDKType): QueryLeasesRequest {
    return {
      filters: object.filters ? LeaseFilters.fromSDK(object.filters) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryLeasesRequestSDKType {
    return {
      filters: isSet(object.filters) ? LeaseFilters.fromSDKJSON(object.filters) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryLeasesRequest): QueryLeasesRequestSDKType {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? LeaseFilters.toSDK(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryLeasesRequestAmino): QueryLeasesRequest {
    const message = createBaseQueryLeasesRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = LeaseFilters.fromAmino(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLeasesRequest): QueryLeasesRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? LeaseFilters.toAmino(message.filters) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLeasesRequestAminoMsg): QueryLeasesRequest {
    return QueryLeasesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLeasesRequest): QueryLeasesRequestAminoMsg {
    return {
      type: "akash/market/v1beta2/query-leases-request",
      value: QueryLeasesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLeasesRequestProtoMsg): QueryLeasesRequest {
    return QueryLeasesRequest.decode(message.value);
  },
  toProto(message: QueryLeasesRequest): Uint8Array {
    return QueryLeasesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLeasesRequest): QueryLeasesRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryLeasesRequest",
      value: QueryLeasesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    LeaseFilters.registerTypeUrl();
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryLeasesResponse(): QueryLeasesResponse {
  return {
    leases: [],
    pagination: undefined
  };
}
export const QueryLeasesResponse = {
  typeUrl: "/akash.market.v1beta2.QueryLeasesResponse",
  aminoType: "akash/market/v1beta2/query-leases-response",
  is(o: any): o is QueryLeasesResponse {
    return o && (o.$typeUrl === QueryLeasesResponse.typeUrl || Array.isArray(o.leases) && (!o.leases.length || QueryLeaseResponse.is(o.leases[0])));
  },
  isSDK(o: any): o is QueryLeasesResponseSDKType {
    return o && (o.$typeUrl === QueryLeasesResponse.typeUrl || Array.isArray(o.leases) && (!o.leases.length || QueryLeaseResponse.isSDK(o.leases[0])));
  },
  isAmino(o: any): o is QueryLeasesResponseAmino {
    return o && (o.$typeUrl === QueryLeasesResponse.typeUrl || Array.isArray(o.leases) && (!o.leases.length || QueryLeaseResponse.isAmino(o.leases[0])));
  },
  encode(message: QueryLeasesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.leases) {
      QueryLeaseResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLeasesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeasesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leases.push(QueryLeaseResponse.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryLeasesResponse {
    const obj = createBaseQueryLeasesResponse();
    if (Array.isArray(object?.leases)) obj.leases = object.leases.map((e: any) => QueryLeaseResponse.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryLeasesResponse): JsonSafe<QueryLeasesResponse> {
    const obj: any = {};
    if (message.leases) {
      obj.leases = message.leases.map(e => e ? QueryLeaseResponse.toJSON(e) : undefined);
    } else {
      obj.leases = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryLeasesResponse>, I>>(object: I): QueryLeasesResponse {
    const message = createBaseQueryLeasesResponse();
    message.leases = object.leases?.map(e => QueryLeaseResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryLeasesResponseSDKType): QueryLeasesResponse {
    return {
      leases: Array.isArray(object?.leases) ? object.leases.map((e: any) => QueryLeaseResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryLeasesResponseSDKType {
    return {
      leases: Array.isArray(object?.leases) ? object.leases.map((e: any) => QueryLeaseResponse.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryLeasesResponse): QueryLeasesResponseSDKType {
    const obj: any = {};
    if (message.leases) {
      obj.leases = message.leases.map(e => e ? QueryLeaseResponse.toSDK(e) : undefined);
    } else {
      obj.leases = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryLeasesResponseAmino): QueryLeasesResponse {
    const message = createBaseQueryLeasesResponse();
    message.leases = object.leases?.map(e => QueryLeaseResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLeasesResponse): QueryLeasesResponseAmino {
    const obj: any = {};
    if (message.leases) {
      obj.leases = message.leases.map(e => e ? QueryLeaseResponse.toAmino(e) : undefined);
    } else {
      obj.leases = message.leases;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLeasesResponseAminoMsg): QueryLeasesResponse {
    return QueryLeasesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLeasesResponse): QueryLeasesResponseAminoMsg {
    return {
      type: "akash/market/v1beta2/query-leases-response",
      value: QueryLeasesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLeasesResponseProtoMsg): QueryLeasesResponse {
    return QueryLeasesResponse.decode(message.value);
  },
  toProto(message: QueryLeasesResponse): Uint8Array {
    return QueryLeasesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLeasesResponse): QueryLeasesResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryLeasesResponse",
      value: QueryLeasesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    QueryLeaseResponse.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryLeaseRequest(): QueryLeaseRequest {
  return {
    id: LeaseID.fromPartial({})
  };
}
export const QueryLeaseRequest = {
  typeUrl: "/akash.market.v1beta2.QueryLeaseRequest",
  aminoType: "akash/market/v1beta2/query-lease-request",
  is(o: any): o is QueryLeaseRequest {
    return o && (o.$typeUrl === QueryLeaseRequest.typeUrl || LeaseID.is(o.id));
  },
  isSDK(o: any): o is QueryLeaseRequestSDKType {
    return o && (o.$typeUrl === QueryLeaseRequest.typeUrl || LeaseID.isSDK(o.id));
  },
  isAmino(o: any): o is QueryLeaseRequestAmino {
    return o && (o.$typeUrl === QueryLeaseRequest.typeUrl || LeaseID.isAmino(o.id));
  },
  encode(message: QueryLeaseRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLeaseRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LeaseID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLeaseRequest {
    const obj = createBaseQueryLeaseRequest();
    if (isSet(object.id)) obj.id = LeaseID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: QueryLeaseRequest): JsonSafe<QueryLeaseRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? LeaseID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryLeaseRequest>, I>>(object: I): QueryLeaseRequest {
    const message = createBaseQueryLeaseRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = LeaseID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: QueryLeaseRequestSDKType): QueryLeaseRequest {
    return {
      id: object.id ? LeaseID.fromSDK(object.id) : undefined
    };
  },
  fromSDKJSON(object: any): QueryLeaseRequestSDKType {
    return {
      id: isSet(object.id) ? LeaseID.fromSDKJSON(object.id) : undefined
    };
  },
  toSDK(message: QueryLeaseRequest): QueryLeaseRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? LeaseID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: QueryLeaseRequestAmino): QueryLeaseRequest {
    const message = createBaseQueryLeaseRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = LeaseID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: QueryLeaseRequest): QueryLeaseRequestAmino {
    const obj: any = {};
    obj.id = message.id ? LeaseID.toAmino(message.id) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLeaseRequestAminoMsg): QueryLeaseRequest {
    return QueryLeaseRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLeaseRequest): QueryLeaseRequestAminoMsg {
    return {
      type: "akash/market/v1beta2/query-lease-request",
      value: QueryLeaseRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLeaseRequestProtoMsg): QueryLeaseRequest {
    return QueryLeaseRequest.decode(message.value);
  },
  toProto(message: QueryLeaseRequest): Uint8Array {
    return QueryLeaseRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLeaseRequest): QueryLeaseRequestProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryLeaseRequest",
      value: QueryLeaseRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    LeaseID.registerTypeUrl();
  }
};
function createBaseQueryLeaseResponse(): QueryLeaseResponse {
  return {
    lease: Lease.fromPartial({}),
    escrowPayment: FractionalPayment.fromPartial({})
  };
}
export const QueryLeaseResponse = {
  typeUrl: "/akash.market.v1beta2.QueryLeaseResponse",
  aminoType: "akash/market/v1beta2/query-lease-response",
  is(o: any): o is QueryLeaseResponse {
    return o && (o.$typeUrl === QueryLeaseResponse.typeUrl || Lease.is(o.lease) && FractionalPayment.is(o.escrowPayment));
  },
  isSDK(o: any): o is QueryLeaseResponseSDKType {
    return o && (o.$typeUrl === QueryLeaseResponse.typeUrl || Lease.isSDK(o.lease) && FractionalPayment.isSDK(o.escrow_payment));
  },
  isAmino(o: any): o is QueryLeaseResponseAmino {
    return o && (o.$typeUrl === QueryLeaseResponse.typeUrl || Lease.isAmino(o.lease) && FractionalPayment.isAmino(o.escrow_payment));
  },
  encode(message: QueryLeaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lease !== undefined) {
      Lease.encode(message.lease, writer.uint32(10).fork()).ldelim();
    }
    if (message.escrowPayment !== undefined) {
      FractionalPayment.encode(message.escrowPayment, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLeaseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLeaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lease = Lease.decode(reader, reader.uint32());
          break;
        case 2:
          message.escrowPayment = FractionalPayment.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLeaseResponse {
    const obj = createBaseQueryLeaseResponse();
    if (isSet(object.lease)) obj.lease = Lease.fromJSON(object.lease);
    if (isSet(object.escrowPayment)) obj.escrowPayment = FractionalPayment.fromJSON(object.escrowPayment);
    return obj;
  },
  toJSON(message: QueryLeaseResponse): JsonSafe<QueryLeaseResponse> {
    const obj: any = {};
    message.lease !== undefined && (obj.lease = message.lease ? Lease.toJSON(message.lease) : undefined);
    message.escrowPayment !== undefined && (obj.escrowPayment = message.escrowPayment ? FractionalPayment.toJSON(message.escrowPayment) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryLeaseResponse>, I>>(object: I): QueryLeaseResponse {
    const message = createBaseQueryLeaseResponse();
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromPartial(object.lease);
    }
    if (object.escrowPayment !== undefined && object.escrowPayment !== null) {
      message.escrowPayment = FractionalPayment.fromPartial(object.escrowPayment);
    }
    return message;
  },
  fromSDK(object: QueryLeaseResponseSDKType): QueryLeaseResponse {
    return {
      lease: object.lease ? Lease.fromSDK(object.lease) : undefined,
      escrowPayment: object.escrow_payment ? FractionalPayment.fromSDK(object.escrow_payment) : undefined
    };
  },
  fromSDKJSON(object: any): QueryLeaseResponseSDKType {
    return {
      lease: isSet(object.lease) ? Lease.fromSDKJSON(object.lease) : undefined,
      escrow_payment: isSet(object.escrow_payment) ? FractionalPayment.fromSDKJSON(object.escrow_payment) : undefined
    };
  },
  toSDK(message: QueryLeaseResponse): QueryLeaseResponseSDKType {
    const obj: any = {};
    message.lease !== undefined && (obj.lease = message.lease ? Lease.toSDK(message.lease) : undefined);
    message.escrowPayment !== undefined && (obj.escrow_payment = message.escrowPayment ? FractionalPayment.toSDK(message.escrowPayment) : undefined);
    return obj;
  },
  fromAmino(object: QueryLeaseResponseAmino): QueryLeaseResponse {
    const message = createBaseQueryLeaseResponse();
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromAmino(object.lease);
    }
    if (object.escrow_payment !== undefined && object.escrow_payment !== null) {
      message.escrowPayment = FractionalPayment.fromAmino(object.escrow_payment);
    }
    return message;
  },
  toAmino(message: QueryLeaseResponse): QueryLeaseResponseAmino {
    const obj: any = {};
    obj.lease = message.lease ? Lease.toAmino(message.lease) : undefined;
    obj.escrow_payment = message.escrowPayment ? FractionalPayment.toAmino(message.escrowPayment) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLeaseResponseAminoMsg): QueryLeaseResponse {
    return QueryLeaseResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLeaseResponse): QueryLeaseResponseAminoMsg {
    return {
      type: "akash/market/v1beta2/query-lease-response",
      value: QueryLeaseResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLeaseResponseProtoMsg): QueryLeaseResponse {
    return QueryLeaseResponse.decode(message.value);
  },
  toProto(message: QueryLeaseResponse): Uint8Array {
    return QueryLeaseResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLeaseResponse): QueryLeaseResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.QueryLeaseResponse",
      value: QueryLeaseResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Lease.registerTypeUrl();
    FractionalPayment.registerTypeUrl();
  }
};