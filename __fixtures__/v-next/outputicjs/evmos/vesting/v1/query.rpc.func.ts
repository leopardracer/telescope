import { buildQuery } from "../../../helper-func-types";
import { QueryBalancesRequest, QueryBalancesResponse } from "./query";
export const getBalances = buildQuery<QueryBalancesRequest, QueryBalancesResponse>({
  encode: QueryBalancesRequest.encode,
  decode: QueryBalancesResponse.decode,
  service: "evmos.vesting.v1.Query",
  method: "Balances"
});