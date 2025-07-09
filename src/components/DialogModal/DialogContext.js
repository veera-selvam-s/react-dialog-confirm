import React, { createContext, useContext, useState, useEffect } from "react";
import "../../style.css";

/**
 * @typedef ModalContextValue
 * @property {boolean} isModalOpen - Indicates whether the modal is currently open.
 * @property {function} openModal - Opens the modal and displays the given content.
 * @property {function} closeModal - Closes the modal.
 * @property {JSX.Element|null} modalContent - The content to be displayed in the modal.
 */

export const ModalContext = createContext({});

/**
 * Provides a modal dialog that can be opened and closed.
 * @param {Object} props - The component props.
 * @param {JSX.Element} props.children - The child components to be wrapped by the provider.
 * @returns {JSX.Element} The component JSX.
 */
export function DialogProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    if (modalContent) {
      setIsModalOpen(true);
    }
  }, [modalContent]);

  useEffect(() => {
    if (isModalOpen === false) {
      setModalContent(null);
    }
  }, [isModalOpen]);

  /**
   * Opens the modal and displays the given content.
   * @param {JSX.Element} content - The content to be displayed in the modal.
   */
  const openModal = (content) => {
    setModalContent(content);
  };

  // Closes the modal.
  const closeModal = () => {
    setIsModalOpen(false);
  };

  /** @type {ModalContextValue} */
  const value = {
    isModalOpen,
    openModal,
    closeModal,
    modalContent,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalContent}
    </ModalContext.Provider>
  );
}

/**
 * A hook that provides access to the modal state and functions.
 * @returns {ModalContextValue} The modal context value.
 */
export function useModal() {
  return useContext(ModalContext);
}
