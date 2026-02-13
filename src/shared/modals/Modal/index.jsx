import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
