import { FC } from "react";
import { ActionIcon, Badge, Button } from "@mantine/core";
import { useEthers } from "@usedapp/core";
import { AlertCircle, Coin } from "tabler-icons-react";
import { contractChainId } from "../config";
import useConnectionState from "../hooks/use-connection-state";

const ConnectWalletButton: FC = () => {
  const { activateBrowserWallet } = useEthers();
  return (
    <Button
      leftIcon={<Coin />}
      variant="outline"
      onClick={activateBrowserWallet}
    >
      Connect Wallet
    </Button>
  );
};

const ConnectionState: FC = () => {
  const { switchNetwork } = useEthers();
  const connectionState = useConnectionState();
  if (!connectionState.connected) return <ConnectWalletButton />;
  if (connectionState.wrongNetwork)
    return (
      <Badge
        size="lg"
        color="red"
        leftSection={
          <ActionIcon onClick={() => switchNetwork(contractChainId)}>
            <AlertCircle color="red" />
          </ActionIcon>
        }
      >
        Wrong network
      </Badge>
    );
  return (
    <Badge size="lg" color="teal">
      Connected
    </Badge>
  );
};

export default ConnectionState;
