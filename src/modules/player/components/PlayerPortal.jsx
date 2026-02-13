import { createPortal } from "react-dom";

export default function PlayerPortal({ children }) {
  const container = document.getElementById("player-root");
  if (!container) return null;

  return createPortal(children, container);
}
