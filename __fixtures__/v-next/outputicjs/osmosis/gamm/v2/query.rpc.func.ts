import { buildQuery } from "../../../helper-func-types";
import { QuerySpotPriceRequest, QuerySpotPriceResponse } from "./query";
export const getSpotPrice = buildQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  encode: QuerySpotPriceRequest.encode,
  decode: QuerySpotPriceResponse.decode,
  service: "osmosis.gamm.v2.Query",
  method: "SpotPrice"
});