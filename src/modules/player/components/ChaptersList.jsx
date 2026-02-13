import styles from "./ChaptersList.module.css";

export default function ChaptersList() {
  return (
    <div className={styles.chaptersList}>
      <h3>Chapters</h3>
      <ul>
        <li>Chapter 1: Introduction</li>
        <li>Chapter 2: Getting Started</li>
        <li>Chapter 3: Advanced Topics</li>
      </ul>
    </div>
  );
}
