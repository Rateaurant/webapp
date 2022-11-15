import Head from "../components/Head";
import Base from "../components/Base";
import styles from "../styles/pages/Menu.module.scss";
import Item from "../components/Menu/Item";

export default function Menu() {
  return (
    <>
      <Base />
      <section className={styles.body}>
        <Head />
      </section>
      <section className={styles.items}>
        <Item
          name="Burger with fries"
          label="1"
          description="food description for some weird chinese food no one knows about or something"
          price={19.99}
          offer={{
            active: true,
            newPrice: 14.99,
          }}
        />
        <Item
          name="Noodles"
          label="2"
          description="it's fucking noodles, you know what it is"
          price={13.99}
          offer={{
            active: false,
          }}
        />
      </section>
    </>
  );
}
