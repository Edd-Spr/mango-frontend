import styles from "./CircleProfile.module.css";

export default function CircleProfile({ avatar, title, onCardClick, color }) {
  return (
    <button
      className={styles.card}
      onClick={onCardClick}
      style={{ backgroundColor: color }}
    >
      <img src={avatar} alt={title} className={styles.image} />
    </button>
  );
}
