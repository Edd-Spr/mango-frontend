import styles from "./ContentCard.module.css";

export default function ContentCard({ image, title, onCardClick }) {
  return (
    <button className={styles.card} onClick={onCardClick}>
      <img src={image} alt={title} className={styles.image} />
    </button>
  );
}
