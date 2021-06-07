import styles from "/styles/Home.module.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import HomepageHeading from "../components/HomepageHeading";
import { Segment } from "semantic-ui-react";
import Footer from "../components/Footer";

const index = () => {
  return (
    <div>
      <Head>
        <title>Tracker of Thieves</title>
        <meta
          name="description"
          content="Sea of Thieves location finder"
        ></meta>
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomepageHeading />
      <Footer />
    </div>
  );
};

export default index;
