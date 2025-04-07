import { buildUseMutation } from "../../../react-query";
import { MsgCreateCertificate, MsgRevokeCertificate } from "./cert";
import { createCertificate, revokeCertificate } from "./cert.rpc.func";
export const useCreateCertificate = buildUseMutation<MsgCreateCertificate, Error>({
  builderMutationFn: createCertificate
});
export const useRevokeCertificate = buildUseMutation<MsgRevokeCertificate, Error>({
  builderMutationFn: revokeCertificate
});