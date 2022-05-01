import { FC } from "react";
import { Button } from "@mantine/core";
import { useWave } from "../hooks/use-wave";

const WaveButton: FC = () => {
  const { send, state } = useWave();
  return (
    <Button
      loading={state.status === "Mining"}
      leftIcon={<>👋</>}
      variant="outline"
      onClick={() => send()}
    >
      Wave at Me
    </Button>
  );
};

export default WaveButton;
