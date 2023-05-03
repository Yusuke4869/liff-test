import type { Liff } from "@line/liff/exports";
import { Center, Code, Text, Title } from "@mantine/core";
import type { NextPage } from "next";
import Layout from "~/components/layout";

// eslint-disable-next-line react/prop-types
const Home: NextPage<{ liff: Liff | null; liffError: string | null }> = ({ liff, liffError }) => (
  <Layout>
    <Center>
      <Title order={1}>Hello World!</Title>
    </Center>
    <Center>
      <Text>This is a test app with liff.</Text>
    </Center>
    <Center>{liff && <Text>LIFF init succeeded.</Text>}</Center>
    {liffError && (
      <>
        <Center>
          <Text>LIFF init failed.</Text>
        </Center>
        <Center>
          <Text>
            <Code>{liffError}</Code>
          </Text>
        </Center>
      </>
    )}
  </Layout>
);

export default Home;
