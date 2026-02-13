import { useRoutes } from "react-router-dom";
import MangoLayout from "../MangoLayout";

// Pages
import HomePage from "@modules/home/pages/HomePage";
import PlayerPage from "@modules/player/pages/Player";

export default function AppRouter() {
  const routes = useRoutes([
    {
      path: "/",
      element: <MangoLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "animes", element: <HomePage /> },
        { path: "movies", element: <HomePage /> },
        { path: "search", element: <HomePage /> },
      ],
    },
    {
      path: "player",
      element: <PlayerPage />,
    },
  ]);

  return routes;
}
