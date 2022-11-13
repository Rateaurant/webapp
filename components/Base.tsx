import Head from "next/head";
import Image from "next/image";
import styles from "../styles/components/Base.module.scss";

export default function Base() {
  return (
    <>
      <Head>
        <title>Restaurant Name</title>
      </Head>
      <Image
        src={require("public/bg.png")}
        alt="Background"
        className={styles.image}
        fill
      />
    </>
  );
}
