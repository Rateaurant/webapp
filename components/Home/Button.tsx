import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/Home/Button.module.scss";

export default function Button(props: { label: string }): JSX.Element {
  const buttonIconResolution = 25;
  const buttonBGResolution = 200;
  const { label } = props;
  const iconSrc = label.toLowerCase();
  return (
    <Link href={`/${iconSrc}`} className={styles.button}>
      <div className={styles.content}>
        <Image
          src={require(`public/Home/${iconSrc}.svg`)}
          alt="Rating"
          width={buttonIconResolution}
          height={buttonIconResolution}
          className={styles.icon}
        />
        <div className={styles.text}>{label}</div>
      </div>
      <div className={styles.cover}></div>
      <Image
        src={require(`public/Home/${iconSrc}.png`)}
        alt="Rating"
        width={buttonBGResolution}
        height={buttonBGResolution}
        className={styles.img}
      />
    </Link>
  );
}
