import React from "react";
import { Button, Title, Stack } from "@mantine/core";
import { NextPage } from "next";
import { useEthers } from "@usedapp/core";
import PageLayout from "../components/PageLayout";

const Home: NextPage = () => {
  const { account, activateBrowserWallet, deactivate } = useEthers();
  return (
    <PageLayout>
      <Stack align="center">
        <Title order={3}>Hey there !</Title>
        <Button leftIcon={<>👋</>} variant="outline">
          Wave at Me
        </Button>
        {!account ? (
          <Button variant="outline" onClick={activateBrowserWallet}>
            Connect
          </Button>
        ) : (
          <Button variant="outline" onClick={deactivate}>
            Disconnect
          </Button>
        )}
      </Stack>
    </PageLayout>
  );
};

export default Home;
