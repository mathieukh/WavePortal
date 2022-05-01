import { useEthers } from "@usedapp/core";
import { contractChainId } from "../config";

const useConnectionState = ():
  | { connected: false }
  | { connected: true; wrongNetwork: boolean } => {
  const { account, chainId } = useEthers();
  if (!account) return { connected: false };
  return {
    connected: true,
    wrongNetwork: chainId !== contractChainId,
  };
};

export default useConnectionState;
