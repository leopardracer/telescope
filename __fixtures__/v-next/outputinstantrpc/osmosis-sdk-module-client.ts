import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { createRpcClient } from "./extern";
import { DeliverTxResponse, EncodeObject, StdFee, TxRpc, SigningClientParams } from "./types";
import * as osmosisGammPoolmodelsBalancerTxTxRegistry from "./osmosis/gamm/pool-models/balancer/tx/tx.registry";
import * as osmosisGammPoolmodelsStableswapTxRegistry from "./osmosis/gamm/pool-models/stableswap/tx.registry";
import * as osmosisGammV1beta1TxRegistry from "./osmosis/gamm/v1beta1/tx.registry";
import * as osmosisIncentivesTxRegistry from "./osmosis/incentives/tx.registry";
import * as osmosisLockupTxRegistry from "./osmosis/lockup/tx.registry";
import * as osmosisSuperfluidTxRegistry from "./osmosis/superfluid/tx.registry";
import * as osmosisTokenfactoryV1beta1TxRegistry from "./osmosis/tokenfactory/v1beta1/tx.registry";
import * as osmosisGammPoolmodelsBalancerTxTxAmino from "./osmosis/gamm/pool-models/balancer/tx/tx.amino";
import * as osmosisGammPoolmodelsStableswapTxAmino from "./osmosis/gamm/pool-models/stableswap/tx.amino";
import * as osmosisGammV1beta1TxAmino from "./osmosis/gamm/v1beta1/tx.amino";
import * as osmosisIncentivesTxAmino from "./osmosis/incentives/tx.amino";
import * as osmosisLockupTxAmino from "./osmosis/lockup/tx.amino";
import * as osmosisSuperfluidTxAmino from "./osmosis/superfluid/tx.amino";
import * as osmosisTokenfactoryV1beta1TxAmino from "./osmosis/tokenfactory/v1beta1/tx.amino";
export const osmosisAminoConverters = {
  ...osmosisGammPoolmodelsBalancerTxTxAmino.AminoConverter,
  ...osmosisGammPoolmodelsStableswapTxAmino.AminoConverter,
  ...osmosisGammV1beta1TxAmino.AminoConverter,
  ...osmosisIncentivesTxAmino.AminoConverter,
  ...osmosisLockupTxAmino.AminoConverter,
  ...osmosisSuperfluidTxAmino.AminoConverter,
  ...osmosisTokenfactoryV1beta1TxAmino.AminoConverter
};
export const osmosisProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...osmosisGammPoolmodelsBalancerTxTxRegistry.registry, ...osmosisGammPoolmodelsStableswapTxRegistry.registry, ...osmosisGammV1beta1TxRegistry.registry, ...osmosisIncentivesTxRegistry.registry, ...osmosisLockupTxRegistry.registry, ...osmosisSuperfluidTxRegistry.registry, ...osmosisTokenfactoryV1beta1TxRegistry.registry];
export const getSigningOsmosisClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...osmosisProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...osmosisAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningOsmosisClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningOsmosisClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};
export const getSigningOsmosisTxRpc = async ({
  rpcEndpoint,
  signer
}: SigningClientParams) => {
  let txRpc = (await createRpcClient(rpcEndpoint) as TxRpc);
  const signingClient = await getSigningOsmosisClient({
    rpcEndpoint,
    signer
  });
  txRpc.signAndBroadcast = (signerAddress: string, messages: EncodeObject[], fee: number | StdFee | "auto", memo?: string) => {
    return (signingClient.signAndBroadcast(signerAddress, messages, fee, memo) as Promise<DeliverTxResponse>);
  };
  return txRpc;
};