import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [modals, setModals] = useState({});

  const openModal = (name, payload = null) => {
    setModals((prev) => ({
      ...prev,
      [name]: { isOpen: true, payload },
    }));
  };

  const closeModal = (name) => {
    setModals((prev) => ({
      ...prev,
      [name]: { isOpen: false, payload: null },
    }));
  };

  const closeAll = () => setModals({});

  const isOpen = (name) => modals[name]?.isOpen || false;

  const getPayload = (name) => modals[name]?.payload || null;

  return (
    <UIContext.Provider
      value={{ openModal, closeModal, closeAll, isOpen, getPayload }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
