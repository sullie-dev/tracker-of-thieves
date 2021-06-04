import styles from "/styles/Home.module.css";
import Searchbox from "../components/Searchbox";
import Head from "next/head";
import Navbar from "../components/Navbar";

const index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tracker of Thieves</title>
        <meta
          name="description"
          content="Sea of Thieves location finder"
        ></meta>
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>
          <h1>Tracker of Thieves</h1>
          <div className={styles.search}>
            <Searchbox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
