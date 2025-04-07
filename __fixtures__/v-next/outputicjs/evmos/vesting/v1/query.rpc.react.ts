import { buildUseQuery } from "../../../react-query";
import { QueryBalancesRequest, QueryBalancesResponse } from "./query";
import { getBalances } from "./query.rpc.func";
export const useGetBalances = buildUseQuery<QueryBalancesRequest, QueryBalancesResponse>({
  builderQueryFn: getBalances,
  queryKeyPrefix: "BalancesQuery"
});