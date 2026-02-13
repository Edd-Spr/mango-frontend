import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router";
import "./index.css";

import { UIProvider } from "@contexts/UIContext";
import { PlayerProvider } from "./contexts/PlayerContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UIProvider>
      <PlayerProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </PlayerProvider>
    </UIProvider>
  </React.StrictMode>
);
