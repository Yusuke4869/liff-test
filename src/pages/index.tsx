import type { Liff } from "@line/liff/exports";
import type { NextPage } from "next";
import Layout from "~/components/layout";

// eslint-disable-next-line react/prop-types
const Home: NextPage<{ liff: Liff | null; liffError: string | null }> = ({ liff, liffError }) => (
  <Layout>
    <h1>Hello World!</h1>
    <p>This is a test app with liff.</p>
    {liff && <p>LIFF init succeeded.</p>}
    {liffError && (
      <>
        <p>LIFF init failed.</p>
        <p>
          <code>{liffError}</code>
        </p>
      </>
    )}
  </Layout>
);

export default Home;
