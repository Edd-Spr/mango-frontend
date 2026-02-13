import styles from "./SearchBar.module.css";

// Nota: Asegúrate de recibir o definir 'oSearch', aquí lo puse como prop opcional para que no de error
export default function SearchBar({ isActive, oSearch }) {
  return (
    <div className={`${styles.searchBar} ${isActive ? styles.active : ""}`}>
      <button className={styles.searchButton}>
        {/* Usamos un emoji o icono SVG para centrar mejor que la "S" */}
        🔍
      </button>

      <input
        type="text"
        placeholder="Buscar..."
        // Validamos que oSearch exista antes de llamarlo para evitar crash si no lo pasas
        onChange={(e) => oSearch && oSearch(e.target.value)}
        className={styles.searchInput}
        // Deshabilitar input si está cerrado evita que el usuario escriba sin ver
        disabled={!isActive}
      />
    </div>
  );
}
