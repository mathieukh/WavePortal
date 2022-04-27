import React, { FC, PropsWithChildren } from "react";
import { Header as MantineHeader, Center, createStyles } from "@mantine/core";

const Header: FC<PropsWithChildren<{}>> = ({ children }) => (
  <MantineHeader height={56} mb={10}>
    <Center>{children}</Center>
  </MantineHeader>
);

export default Header;
