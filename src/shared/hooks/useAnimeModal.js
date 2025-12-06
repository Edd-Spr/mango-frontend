import { useState } from "react";

export default function useAnimeModal() {
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (anime) => {
    setSelectedAnime(anime);
    setIsOpen(true);
    console.log("Anime seleccionado:", selectedAnime);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedAnime(null);
  };

  return {
    selectedAnime,
    isOpen,
    openModal,
    closeModal,
  };
}
