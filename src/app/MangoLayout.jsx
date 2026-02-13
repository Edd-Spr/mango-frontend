import { Outlet } from "react-router-dom";
import "./MangoLayout.css";
import Header from "./components/Header";

import ModalManager from "@modals/ModalManager";
import Player from "@modules/player/pages/Player";
import { usePlayer } from "@contexts/PlayerContext";

export default function MangoLayout() {
  const { isOpen } = usePlayer();

  return (
    <>
      <div className={`layout ${isOpen ? "layout--blurred" : ""}`}>
        <Header />

        <main className="content">
          <Outlet />
        </main>

        <ModalManager />
      </div>

      {isOpen && <Player />}
    </>
  );
}
