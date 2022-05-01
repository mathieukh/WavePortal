import React from "react";
import { Button, Title, Stack } from "@mantine/core";
import { NextPage } from "next";
import PageLayout from "../components/PageLayout";
import { useTotalWaves } from "../hooks/use-total-waves";
import { useWave } from "../hooks/use-wave";

const Home: NextPage = () => {
  const totalWaves = useTotalWaves();
  const { send: wave } = useWave();
  return (
    <PageLayout>
      <Stack align="center">
        <Title order={3}>
          Hey there !{" "}
          {totalWaves && `You have ${totalWaves.toNumber()} waves for now !`}
        </Title>
        <Button leftIcon={<>👋</>} variant="outline" onClick={() => wave()}>
          Wave at Me
        </Button>
      </Stack>
    </PageLayout>
  );
};

export default Home;
