import Image from "next/image";
import styles from "../../styles/components/Menu/Item.module.scss";

export default function Item(props: {
  name: string;
  label: string;
  description: string;
  price: number;
  offer:
    | {
        active: false;
      }
    | {
        active: true;
        newPrice: number;
      };
}) {
  const { name, label, description, offer, price } = props;
  const addItemResolution = 50;
  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <div className={styles.text}>
          <div className={styles.title}>{name}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <Image
          src={require("public/menu/Add.svg")}
          alt="Add"
          width={addItemResolution}
          height={addItemResolution}
        />
      </div>
      {offer.active ? (
        <div className={styles.prices}>
          <div className={`${styles.price} ${styles.old_price}`}>${price}</div>
          <div className={`${styles.price} ${styles.new_price}`}>
            ${offer.newPrice}
          </div>
        </div>
      ) : (
        <div className={styles.price}>${price}</div>
      )}
    </div>
  );
}
