import React from "react";
import styles from "./AnimeDetailModal.module.css";
import { chapters } from "@data/chapters";

const AnimeDetailModal = ({ isOpen, onClose, anime }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.infoContainer}>
          {" "}
          <section className={styles.bannerSection}>
            <img
              src={anime?.banner}
              alt={anime?.title}
              className={styles.bannerImage}
            />
            <div className={styles.bottomFade} />
            <div className={styles.coverContainer}>
              <img
                src={anime?.image}
                alt={anime?.title}
                className={styles.coverImage}
              />
            </div>
          </section>
          <div className={styles.modalBody}>
            <h2>{anime?.title}</h2>
            <p>
              <strong>Año:</strong> {anime?.year}
            </p>
            <p>
              <strong>Género:</strong> {anime?.genre}
            </p>
            <p>
              <strong>Descripción:</strong> {anime?.description}
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.navButtonsContainer}></div>
          <div className={styles.content}>
            <ChaptersList chapters={chapters} />
          </div>
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
};

function ChaptersList({ chapters }) {
  return chapters.map((chapter) => (
    <button key={chapter.id} className={styles.chapterItem}>
      <div className={styles.chapterPreview}>
        <img
          src={chapter.imagePreview}
          alt=""
          className={styles.chapterPreviewImage}
        />
      </div>
      <h3>{chapter.title}</h3>
      <p>{chapter.description}</p>
    </button>
  ));
}

export default AnimeDetailModal;
