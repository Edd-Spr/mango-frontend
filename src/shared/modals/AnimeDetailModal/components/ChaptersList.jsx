import React from "react";
import styles from "./ChaptersList.module.css";
import ChapterItem from "./ChapterItem.jsx";

export default function ChaptersList({ chapters }) {
  return (
    <div className={styles.chapterList}>
      {chapters.map((chapter) => (
        <ChapterItem key={chapter.id} chapter={chapter} />
      ))}
    </div>
  );
}
