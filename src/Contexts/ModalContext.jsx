import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState({});
  const [currentPostId, setCurrentPostId] = useState(null);
  const [deletedPostId, setDeletedPostId] = useState(null);
  const [newPost, setNewPost] = useState(null);

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
    <ModalContext.Provider
      value={{
        modals,
        toggleModal,
        setModalState,
        currentPostId,
        setCurrentPostId,
        deletedPostId,
        setDeletedPostId,
        newPost,
        setNewPost,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
