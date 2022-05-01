import { FC } from "react";
import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { DAppProvider } from "@usedapp/core";
import { dappProviderConfig } from "../config";

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <MantineProvider>
    <NotificationsProvider>
      <DAppProvider config={dappProviderConfig}>
        <Component {...pageProps} />
      </DAppProvider>
    </NotificationsProvider>
  </MantineProvider>
);

export default CustomApp;
