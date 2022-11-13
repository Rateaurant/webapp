import Image from "next/image";
import styles from "../styles/components/Head.module.scss";

export default function Head() {
  const logoResolution = 30;
  return (
    <div className={styles.head}>
      <div>
        <h1>Name of the restaurant</h1>
        <h2>
          <div className={styles.pre}>powered by</div>
          <Image
            src={require("public/Logo.png")}
            alt=""
            width={logoResolution}
            height={logoResolution}
          />
          <div className={styles.post}>Rateaurant</div>
        </h2>
      </div>
    </div>
  );
}
