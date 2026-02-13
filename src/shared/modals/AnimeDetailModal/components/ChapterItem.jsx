import styles from "./ChapterItem.module.css";
import { usePlayer } from "@contexts/PlayerContext";

export default function ChapterItem({ chapter }) {
  const { openPlayer } = usePlayer();

  // Abrir el reproductor con la lista de servidores del capítulo
  const handleOpenPlayer = () => {
    openPlayer(chapter.servers, 0); // Abrir en el primer servidor
  };

  return (
    <button className={styles.chapterItem} onClick={handleOpenPlayer}>
      <div className={styles.chapterPreview}>
        <img
          src={chapter.imagePreview}
          alt={chapter.title}
          className={styles.chapterPreviewImage}
        />
      </div>

      <div className={styles.chapterText}>
        <h3>{chapter.title}</h3>
        <p>{chapter.description}</p>
      </div>
    </button>
  );
}
