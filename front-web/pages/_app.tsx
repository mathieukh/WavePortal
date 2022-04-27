import { FC } from "react";
import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { DAppProvider, Config, Mainnet } from "@usedapp/core";
import { getDefaultProvider } from "ethers";

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
  },
};

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <MantineProvider>
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  </MantineProvider>
);

export default CustomApp;
