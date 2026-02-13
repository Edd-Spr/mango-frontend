import { useState } from "react";

export default function usePlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  function openPlayer(url) {
    setVideoUrl(url);
    setIsOpen(true);
  }

  function closePlayer() {
    setIsOpen(false);
    setVideoUrl(null);
  }

  return { isOpen, videoUrl, openPlayer, closePlayer };
}
