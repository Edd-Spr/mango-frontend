import { useState } from "react";

import HeroCarousel from "../components/HeroCarousel";
import FriendsStoryList from "../components/FriendsStoryList";
import ContentRow from "@ui/ContentRow";
import useAnimeModal from "@hooks/useAnimeModal";

export default function HomePage() {
  const { openModal } = useAnimeModal();

  return (
    <>
      <HeroCarousel />
      <FriendsStoryList onCardClick={openModal} />
      <ContentRow onCardClick={openModal} />
    </>
  );
}
