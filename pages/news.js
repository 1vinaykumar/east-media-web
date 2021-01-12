import Head from "next/head";
import NewsCmp from "../src/components/navs/NewsCmp";

function news() {
  return (
    <>
      <Head>
        <title>News - EastMedia</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <NewsCmp />
    </>
  );
}

export default news;
