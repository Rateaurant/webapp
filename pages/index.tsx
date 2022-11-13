import Head from "../components/Head";
import styles from "../styles/pages/Home.module.scss";
import Button from "../components/Home/Button";
import Base from "../components/Base";

export default function Index() {
  return (
    <>
      <Base />
      <section className={styles.body}>
        <Head />
        <article className={styles.description}>
          A short description of the restaurant
        </article>
        <section className={styles.buttons}>
          <Button label="Ratings" />
          <Button label="Menu" />
        </section>
      </section>
    </>
  );
}
