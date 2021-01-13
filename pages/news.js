import Head from "next/head";
import NewsCmp from "../src/components/navs/NewsCmp";
import Navbar from "../src/components/navs/NavBar";
import Footer from "../src/components/navs/Footer";

function news() {
  return (
    <>
      <Head>
        <title>News - EastMedia</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <Navbar />
      <NewsCmp />
      <Footer />
    </>
  );
}

export default news;
