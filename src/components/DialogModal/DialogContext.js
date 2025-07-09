import React, { createContext, useContext, useState } from "react";
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

  /**
   * Opens the modal and displays the given content.
   * @param {JSX.Element} content - The content to be displayed in the modal.
   */
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Closes the modal.
  const closeModal = () => {
    setIsModalOpen(false);
    // Clear content after animation
    setTimeout(() => {
      setModalContent(null);
    }, 300);
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
