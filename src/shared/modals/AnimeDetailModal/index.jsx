import React, { useState } from "react";
import styles from "./AnimeDetailModal.module.css";
import { chapters } from "@data/chapters";
import Modal from "@shared/modals/Modal";
import ChaptersList from "./components/ChaptersList";

const TABS = {
  CHAPTERS: "chapters",
  CATALOG: "catalog",
  RELATED: "related",
};

export default function AnimeDetailModal({ isOpen, onClose, anime }) {
  const [contentSelected, setContentSelected] = useState(TABS.CHAPTERS);

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <HeaderSection anime={anime} />

        <ContentNavigation
          contentSelected={contentSelected}
          setContentSelected={setContentSelected}
        />

        <div className={styles.content}>
          {contentSelected === TABS.CHAPTERS && (
            <ChaptersList chapters={chapters} />
          )}
          {contentSelected === TABS.CATALOG && (
            <Placeholder text="Catálogo en desarrollo..." />
          )}
          {contentSelected === TABS.RELATED && (
            <Placeholder text="Similares en desarrollo..." />
          )}
        </div>

        {/* --- CLOSE BUTTON --- */}
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
      </div>
    </Modal>
  );
}

/* ------------------------------------------------------ */
/* -------------------- SUBCOMPONENTS ------------------- */
/* ------------------------------------------------------ */

function HeaderSection({ anime }) {
  return (
    <div className={styles.infoContainer}>
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

        {anime?.year && (
          <p>
            <strong>Año:</strong> {anime.year}
          </p>
        )}

        {anime?.genre && (
          <p>
            <strong>Género:</strong> {anime.genre}
          </p>
        )}

        {anime?.description && (
          <p>
            <strong>Descripción:</strong> {anime.description}
          </p>
        )}
      </div>
    </div>
  );
}

function ContentNavigation({ contentSelected, setContentSelected }) {
  return (
    <div className={styles.navButtonsContainer}>
      <NavButton
        active={contentSelected === "chapters"}
        onClick={() => setContentSelected("chapters")}
        label="Capítulos"
      />

      <NavButton
        active={contentSelected === "catalog"}
        onClick={() => setContentSelected("catalog")}
        label="Catálogo"
      />

      <NavButton
        active={contentSelected === "related"}
        onClick={() => setContentSelected("related")}
        label="Similares"
      />
    </div>
  );
}

function NavButton({ active, label, onClick }) {
  return (
    <button
      className={`${styles.navButton} ${active ? styles.activeNav : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function Placeholder({ text }) {
  return <p className={styles.placeholder}>{text}</p>;
}
