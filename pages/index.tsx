import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/pages/Home.module.scss";

export default function Index() {
  return (
    <>
      <Head>
        <title>Restaurant Name</title>
      </Head>
      <Image
        src={require("public/bg.svg")}
        alt="Background"
        className={styles.image}
        fill
      />
      <section className={styles.body}>
        <div>
          <div>
            <h1>Name of the restaurant</h1>
            <h2>powered by Rateaurant</h2>
          </div>
        </div>
        <article className={styles.description}>
          A short description of the restaurant
        </article>
        <article className={styles.buttons}>
          <div>
            Rating and Reviews
            <Link href="/review">view now!</Link>
          </div>
          <div>
            Order Now!
            <Link href="/order">
              <Image
                src={require("public/next.svg")}
                alt="Go"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
