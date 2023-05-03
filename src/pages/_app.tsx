import type { Liff } from "@line/liff/exports";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import "~/styles/global.scss";

const MyApp = ({ Component, pageProps, router: routerProp }: AppProps): JSX.Element => {
  const [liffObject, setLiffObject] = useState<Liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);

  useEffect(() => {
    // to avoid `window is not defined` error
    import("@line/liff")
      .then((liff) => liff.default)
      .then((liff) => {
        liff
          .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID || "" })
          .then(() => {
            setLiffObject(liff);
          })
          .catch((error: Error) => {
            setLiffError(error.toString());
          });
      });
  }, []);

  // eslint-disable-next-line no-param-reassign
  pageProps.liff = liffObject;
  // eslint-disable-next-line no-param-reassign
  pageProps.liffError = liffError;
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} key={routerProp.asPath} />
      </MantineProvider>
    </>
  );
};

export default MyApp;
