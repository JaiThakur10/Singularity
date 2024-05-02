
import styles from "./card.module.css";
import { CircleAlert } from "lucide-react";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <CircleAlert size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>total users</span>
        <span className={styles.number}>10.23</span>
        <span className={styles.detail}>
          <span className={ styles.positive}>
            12%
          </span>{" "}
          more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;