import { FC, PropsWithChildren } from "react";
import { AppShell, Title } from "@mantine/core";
import Header from "./Header";
import { ThreeDCubeSphere } from "tabler-icons-react";

const Logo: FC = () => (
  <Title>
    Wave
    <ThreeDCubeSphere />
    Portal
  </Title>
);

const PageLayout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <AppShell
    padding="md"
    header={
      <Header>
        <Logo />
      </Header>
    }
  >
    {children}
  </AppShell>
);

export default PageLayout;
