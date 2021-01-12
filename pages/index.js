import Head from "next/head";
import HomeCmp from "../src/components/navs/HomeCmp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - EastMedia</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <main>
        <HomeCmp />
      </main>
    </>
  );
}
