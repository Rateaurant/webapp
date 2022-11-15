import Head from "../components/Head";
import Base from "../components/Base";
import styles from "../styles/pages/Ratings.module.scss";

export default function Ratings() {
  return (
    <>
      <Base />
      <section className={styles.body}>
        <Head />
      </section>
    </>
  );
}
