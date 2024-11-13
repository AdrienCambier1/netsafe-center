import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState({
    createPost: false,
    postError: false,
  });

  const toggleModal = (modalName) => {
    setModals((prev) => ({
      ...prev,
      [modalName]: !prev[modalName],
    }));
  };

  const setModalState = (modalName, state) => {
    setModals((prev) => ({
      ...prev,
      [modalName]: state,
    }));
  };

  return (
    <ModalContext.Provider value={{ modals, toggleModal, setModalState }}>
      {children}
    </ModalContext.Provider>
  );
};
