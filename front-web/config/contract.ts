import { Contract, getDefaultProvider, utils } from "ethers";
import { WavePortal } from "../../contract/typechain-types";
import WavePortalContract from "../../contract/artifacts/contracts/WavePortal.sol/WavePortal.json";
import { Config } from "@usedapp/core";

const wavePortalInterface = new utils.Interface(WavePortalContract.abi);

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;
const chainId = process.env.NEXT_PUBLIC_CHAIN_ID!;

export const contract = new Contract(
  contractAddress,
  wavePortalInterface
) as WavePortal;

export const contractChainId = Number.parseInt(chainId);

export const dappProviderConfig: Config = {
  readOnlyChainId: contractChainId,
  readOnlyUrls: {
    [contractChainId]: getDefaultProvider(contractChainId),
  },
};
