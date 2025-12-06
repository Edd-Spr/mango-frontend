import { useState } from "react";

import HeroCarousel from "../components/HeroCarousel";
import ContentRow from "@ui/ContentRow";
import AnimeDetailModal from "@modals/AnimeDetailModal";
import useAnimeModal from "@hooks/useAnimeModal";

export default function HomePage() {
  const { selectedAnime, isOpen, openModal, closeModal } = useAnimeModal();

  return (
    <>
      <HeroCarousel />

      <ContentRow onCardClick={openModal} />

      {isOpen && (
        <AnimeDetailModal
          isOpen={isOpen}
          anime={selectedAnime}
          onClose={closeModal}
        />
      )}
    </>
  );
}
