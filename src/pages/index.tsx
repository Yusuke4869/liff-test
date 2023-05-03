/* eslint-disable react/prop-types */
import type { Liff } from "@line/liff/exports";
import { Center, Code, Text, Title } from "@mantine/core";
import type { NextPage } from "next";
import Layout from "~/components/layout";

const Home: NextPage<{ liff: Liff | null; liffError: string | null }> = ({ liff, liffError }) => {
  const idToken = liff?.getDecodedIDToken();

  return (
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
      <Center my="xl">
        <Text>こんにちは {idToken?.name} さん！</Text>
      </Center>
    </Layout>
  );
};

export default Home;
