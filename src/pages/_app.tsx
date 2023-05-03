import "destyle.css";
import type { AppProps } from "next/app";
import "~/styles/global.scss";

const MyApp = ({ Component, pageProps, router: routerProp }: AppProps): JSX.Element => (
  <>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} key={routerProp.asPath} />
  </>
);

export default MyApp;
