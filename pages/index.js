import styles from "../styles/Home.module.css";
import Searchbox from "../components/Searchbox";

const index = () => {
  return (
    <div className={styles.containerMain}>
      <h1>Tracker of Thieves</h1>
      <div className={styles.search}>
        <Searchbox />
      </div>
    </div>
  );
};

export default index;
