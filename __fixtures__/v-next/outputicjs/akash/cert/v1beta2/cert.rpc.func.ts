import { buildTx } from "../../../helper-func-types";
import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
export const createCertificate = buildTx<MsgCreateCertificate>({
  msg: MsgCreateCertificate
});
export const revokeCertificate = buildTx<MsgRevokeCertificate>({
  msg: MsgRevokeCertificate
});