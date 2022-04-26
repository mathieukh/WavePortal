import { FC } from "react";
import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <MantineProvider>
    <Component {...pageProps} />
  </MantineProvider>
);

export default CustomApp;
