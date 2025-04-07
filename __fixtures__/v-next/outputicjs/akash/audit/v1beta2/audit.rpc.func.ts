import { buildTx } from "../../../helper-func-types";
import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
export const signProviderAttributes = buildTx<MsgSignProviderAttributes>({
  msg: MsgSignProviderAttributes
});
export const deleteProviderAttributes = buildTx<MsgDeleteProviderAttributes>({
  msg: MsgDeleteProviderAttributes
});