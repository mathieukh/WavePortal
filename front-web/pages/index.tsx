import React from "react";
import { Center, Button, Title, Container } from "@mantine/core";
import { NextPage } from "next";
import PageLayout from "../components/PageLayout";

const Home: NextPage = () => {
  const wave = () => {};
  return (
    <PageLayout>
      <Container mb="sm">
        <Center>
          <Title order={3}>Hey there !</Title>
        </Center>
      </Container>
      <Container>
        <Center>
          <Button leftIcon={<>👋</>} variant="outline" onClick={wave}>
            Wave at Me
          </Button>
        </Center>
      </Container>
    </PageLayout>
  );
};

export default Home;
