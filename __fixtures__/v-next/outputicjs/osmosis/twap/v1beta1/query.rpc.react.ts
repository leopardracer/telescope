import { buildUseQuery } from "../../../react-query";
import { ParamsRequest, ParamsResponse, ArithmeticTwapRequest, ArithmeticTwapResponse, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse } from "./query";
import { getParams, getArithmeticTwap, getArithmeticTwapToNow } from "./query.rpc.func";
export const useGetParams = buildUseQuery<ParamsRequest, ParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetArithmeticTwap = buildUseQuery<ArithmeticTwapRequest, ArithmeticTwapResponse>({
  builderQueryFn: getArithmeticTwap,
  queryKeyPrefix: "ArithmeticTwapQuery"
});
export const useGetArithmeticTwapToNow = buildUseQuery<ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse>({
  builderQueryFn: getArithmeticTwapToNow,
  queryKeyPrefix: "ArithmeticTwapToNowQuery"
});