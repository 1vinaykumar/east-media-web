import Head from "next/head";
import HomeCmp from "../src/components/navs/HomeCmp";
import Navbar from "../src/components/navs/NavBar";
import Footer from "../src/components/navs/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - EastMedia</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <main>
        <Navbar />
        <HomeCmp />
        <Footer />
      </main>
    </>
  );
}
