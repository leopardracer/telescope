import { buildUseQuery } from "../../../react-query";
import { QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse, QueryLeasesRequest, QueryLeasesResponse, QueryLeaseRequest, QueryLeaseResponse } from "./query";
import { getOrders, getOrder, getBids, getBid, getLeases, getLease } from "./query.rpc.func";
export const useGetOrders = buildUseQuery<QueryOrdersRequest, QueryOrdersResponse>({
  builderQueryFn: getOrders,
  queryKeyPrefix: "OrdersQuery"
});
export const useGetOrder = buildUseQuery<QueryOrderRequest, QueryOrderResponse>({
  builderQueryFn: getOrder,
  queryKeyPrefix: "OrderQuery"
});
export const useGetBids = buildUseQuery<QueryBidsRequest, QueryBidsResponse>({
  builderQueryFn: getBids,
  queryKeyPrefix: "BidsQuery"
});
export const useGetBid = buildUseQuery<QueryBidRequest, QueryBidResponse>({
  builderQueryFn: getBid,
  queryKeyPrefix: "BidQuery"
});
export const useGetLeases = buildUseQuery<QueryLeasesRequest, QueryLeasesResponse>({
  builderQueryFn: getLeases,
  queryKeyPrefix: "LeasesQuery"
});
export const useGetLease = buildUseQuery<QueryLeaseRequest, QueryLeaseResponse>({
  builderQueryFn: getLease,
  queryKeyPrefix: "LeaseQuery"
});