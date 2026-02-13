import React from "react";
import { useUI } from "@contexts/UIContext";
import AnimeInfoModal from "@modals/AnimeDetailModal";

export default function ModalManager() {
  const { isOpen, getPayload, closeModal } = useUI();

  return (
    <>
      {isOpen("animeDetail") && (
        <AnimeInfoModal
          isOpen={true}
          anime={getPayload("animeDetail")}
          onClose={() => closeModal("animeDetail")}
        />
      )}
    </>
  );
}
