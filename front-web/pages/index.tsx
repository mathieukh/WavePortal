import React from "react";
import { Title, Stack } from "@mantine/core";
import { NextPage } from "next";
import PageLayout from "../components/PageLayout";
import { useTotalWaves } from "../hooks/use-total-waves";
import WaveButton from "../components/WaveButton";

const Home: NextPage = () => {
  const totalWaves = useTotalWaves();
  return (
    <PageLayout>
      <Stack align="center">
        <Title order={3}>
          Hey there !{" "}
          {totalWaves && `You have ${totalWaves.toNumber()} waves for now !`}
        </Title>
        <WaveButton />
      </Stack>
    </PageLayout>
  );
};

export default Home;
