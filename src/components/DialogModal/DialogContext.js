import React, { createContext, useContext, useState, useEffect } from 'react';
import '../../style.css';

export const ModalContext = createContext({});

export function DialogProvider ({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    if (modalContent) {
      return setIsModalOpen(true);
    }
  }, [modalContent])

  useEffect(() => {
    if (isModalOpen === false) {
      return setModalContent(null);
    }
  }, [!isModalOpen])

  const openModal = (content) => {
    setModalContent(content);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const value = {
    isModalOpen,
    openModal,
    closeModal,
    modalContent
  }

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalContent}
    </ModalContext.Provider>
  )
}

export function useModal () {
  return useContext(ModalContext);
}
