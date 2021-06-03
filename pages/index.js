import styles from "../styles/Home.module.css";
import Searchbox from "../components/Searchbox";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>Tracker of Thieves</title>
        <meta
          name="description"
          content="Sea of Thieves location finder"
        ></meta>
        <meta charset="utf-8"></meta>
      </Head>
      <div className={styles.containerMain}>
        <h1>Tracker of Thieves</h1>
        <div className={styles.search}>
          <Searchbox />
        </div>
      </div>
    </div>
  );
};

export default index;
