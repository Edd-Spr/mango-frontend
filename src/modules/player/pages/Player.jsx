import PlayerPortal from "../components/PlayerPortal";
import styles from "./Player.module.css";
import useVideoPlayer from "../hooks/useVideoPlayer";
import { usePlayer } from "@contexts/PlayerContext";
import ChaptersList from "../components/ChaptersList";

export default function Player() {
  const { videoUrl, isOpen, closePlayer } = usePlayer();

  const {
    videoRef,
    isPlaying,
    togglePlay,
    progress,
    handleProgressBar,
    formatTime,
    currentTime,
    duration,
    isChapterListOpen,
    toggleChapterList,
  } = useVideoPlayer(videoUrl);

  if (!isOpen || !videoUrl) return null;

  return (
    <PlayerPortal>
      <div className={styles.playerWrapper}>
        {/* VIDEO */}
        <div className={styles.videoContainer}>
          <video ref={videoRef} src={videoUrl} />
        </div>

        <div className={styles.topControls}>
          <button onClick={closePlayer}>✕</button>
        </div>
        {/* CONTROLES */}
        <div className={styles.bottomControls}>
          <div className={styles.progressBar} onClick={handleProgressBar}>
            <div
              className={styles.progress}
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className={styles.buttons}>
            <div className={styles.leftButtons}>
              <button onClick={togglePlay}>
                {isPlaying ? "Pause" : "Play"}
              </button>

              <span>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            <div className={styles.rightButtons}>
              <button onClick={toggleChapterList}>#</button>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          isChapterListOpen
            ? styles.chaptersListContainerActive
            : styles.chaptersListContainer
        }
      >
        {isChapterListOpen && <ChaptersList />}
      </div>
    </PlayerPortal>
  );
}
