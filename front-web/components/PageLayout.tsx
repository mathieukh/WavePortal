import { FC, PropsWithChildren } from "react";
import { AppShell } from "@mantine/core";
import Header from "./Header";

const PageLayout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <AppShell padding="md" header={<Header />}>
    {children}
  </AppShell>
);

export default PageLayout;
