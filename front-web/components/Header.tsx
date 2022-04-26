import React, { FC, PropsWithChildren } from "react";
import { Header as MantineHeader, Center, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "center",
    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },
}));

const Header: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { classes } = useStyles();
  return (
    <MantineHeader height={56} mb={10}>
      <Center>{children}</Center>
    </MantineHeader>
  );
};

export default Header;
