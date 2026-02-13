import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function useVideoPlayer() {
  const videoRef = useRef(null);
  const [searchParams] = useSearchParams();
  const videoUrl = searchParams.get("video");

  const [isPlaying, setIsPlaying] = useState(true);
  const [isChapterListOpen, setIsChapterListOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleChapterList = () => {
    setIsChapterListOpen((prev) => !prev);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    setCurrentTime(video.currentTime);
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleProgressBar = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    const newTime = (clickX / width) * video.duration;
    video.currentTime = newTime;
  };

  const formatTime = (time) => {
    if (!time) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}`;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setData = () => setDuration(video.duration);
    video.addEventListener("loadedmetadata", setData);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("loadedmetadata", setData);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return {
    videoRef,
    videoUrl,
    isPlaying,
    togglePlay,
    isChapterListOpen,
    toggleChapterList,
    progress,
    handleProgressBar,
    formatTime,
    currentTime,
    duration,
  };
}
