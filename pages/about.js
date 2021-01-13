import Head from "next/head";
import AboutCmp from "../src/components/navs/AboutCmp";
import Navbar from "../src/components/navs/NavBar";
import Footer from "../src/components/navs/Footer";

function About() {
  return (
    <>
      <Head>
        <title>About - EastMedia</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <Navbar />
      <AboutCmp />
      <Footer />
    </>
  );
}

export default About;
