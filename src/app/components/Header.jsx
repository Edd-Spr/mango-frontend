import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";
import SearchBar from "./SearchBar";
const logo = "mango-logo.png";

export default function Header() {
  return (
    <header className={styles.mangoheader}>
      <img src={logo} alt="Mango Logo" className={styles.logo} />
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.inactiveLink
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/animes"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.inactiveLink
          }
        >
          Animes
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.inactiveLink
          }
        >
          Peliculas
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.inactiveLink
          }
        >
          {({ isActive }) => <SearchBar isActive={isActive} />}
        </NavLink>
      </nav>
    </header>
  );
}
