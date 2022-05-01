import React, { FC, PropsWithChildren } from "react";
import { Header as MantineHeader, Title } from "@mantine/core";
import ConnectionState from "./ConnectionState";
import { ThreeDCubeSphere } from "tabler-icons-react";

const Logo: FC = () => (
  <Title>
    Wave
    <ThreeDCubeSphere />
    Portal
  </Title>
);

const Header: FC<PropsWithChildren<{}>> = ({ children }) => (
  <MantineHeader
    height={56}
    mb={10}
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Logo />
    <ConnectionState />
  </MantineHeader>
);

export default Header;
