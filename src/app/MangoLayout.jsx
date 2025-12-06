import { Outlet } from "react-router-dom";
import "./MangoLayout.css";
import Header from "./components/Header";

export default function MangoLayout() {
  return (
    <div className="layout">
      <Header />

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
