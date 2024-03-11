import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

//className={item.change > 0 ? styles.positive : styles.negative}
//{item.change > 0 ? "more" : "less"}

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Card Title</span>
        <span className={styles.number}>20</span>
        <span className={styles.detail}>
          <span className={styles.positive}>
            38%
          </span>{" "}
           more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;