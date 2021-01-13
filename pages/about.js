import Head from "next/head";
import AboutCmp from "../src/components/navs/AboutCmp";

function About() {
  return (
    <>
      <Head>
        <title>About - EastMedia</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <AboutCmp />
    </>
  );
}

export default About;
