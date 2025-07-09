import React, { useState, useEffect, useCallback } from "react";
import { getIcon } from "../../lib/helper";
import Remover from "../Remover";
import { useModal } from "./DialogContext";

export const DialogModal = ({
  children,
  icon,
  title,
  titleStyle,
  description,
  descriptionStyle,
  confirm,
  confirmStyle,
  onConfirm,
  hasCancel,
  cancel,
  onCancel,
  // Enhanced features
  size = "md", // 'sm', 'md', 'lg', 'xl', 'full'
  position = "center", // 'center', 'top', 'bottom', 'left', 'right'
  backdrop = "blur", // 'blur', 'transparent', 'solid'
  backdropOpacity = 0.5,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  loading = false,
  disabled = false,
  customHeader,
  customFooter,
  className,
  style,
}) => {
  const { isModalOpen, closeModal } = useModal();
  const [out, setOut] = useState(false);

  // Handles closing the dialog.
  const handleClose = useCallback(() => {
    if (disabled || loading) return;
    setOut(true);
  }, [disabled, loading]);

  // Handle backdrop click
  const handleBackdropClick = useCallback(
    (e) => {
      if (!closeOnBackdropClick || disabled || loading) return;
      if (e.target === e.currentTarget) {
        handleClose();
      }
    },
    [closeOnBackdropClick, disabled, loading, handleClose]
  );

  // Handle escape key
  const handleEscape = useCallback(
    (e) => {
      if (!closeOnEscape || disabled || loading) return;
      if (e.key === "Escape") {
        handleClose();
      }
    },
    [closeOnEscape, disabled, loading, handleClose]
  );

  useEffect(() => {
    if (closeOnEscape) {
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [handleEscape, closeOnEscape]);

  // Close modal after animation
  if (out) {
    setTimeout(() => {
      closeModal();
    }, 300);
  }

  // Handle confirm action
  const handleConfirm = useCallback(async () => {
    if (disabled || loading) return;

    if (onConfirm) {
      try {
        await onConfirm();
      } catch (error) {
        console.error("Modal confirm error:", error);
      }
    } else {
      handleClose();
    }
  }, [onConfirm, disabled, loading, handleClose]);

  // Handle cancel action
  const handleCancel = useCallback(() => {
    if (disabled || loading) return;

    if (onCancel) {
      onCancel();
    } else {
      handleClose();
    }
  }, [onCancel, disabled, loading, handleClose]);

  if (!isModalOpen) return null;

  return (
    <div
      className={`dialog--container dialog--${size} dialog--${position} dialog--${backdrop}${
        out ? " dialog--out" : ""
      }${className ? ` ${className}` : ""}`}
      style={style}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="dialog--layout">
        <div className="dialog--overlay" style={{ opacity: backdropOpacity }} />
        <div className="dialog--panel">
          <div className="dialog--card">
            {/* Custom Header */}
            {customHeader ? (
              customHeader
            ) : (
              <>
                {/* Close Button */}
                {showCloseButton && (
                  <Remover close={handleClose} disabled={disabled || loading} />
                )}

                {/* Icon */}
                {icon && (
                  <div className="dialog--card--icon">{getIcon(icon)}</div>
                )}

                {/* Title */}
                {title && (
                  <div className="dialog--card--title" style={titleStyle}>
                    {title}
                  </div>
                )}

                {/* Description */}
                {description && (
                  <div
                    className="dialog--card--description"
                    style={descriptionStyle}
                  >
                    {description}
                  </div>
                )}
              </>
            )}

            {/* Custom Content */}
            {children}

            {/* Custom Footer */}
            {customFooter ? (
              customFooter
            ) : (
              <div
                className="dialog--card--button-container"
                style={confirmStyle}
              >
                {/* Loading Spinner */}
                {loading && (
                  <div className="dialog--loading">
                    <div className="dialog--spinner"></div>
                  </div>
                )}

                {/* Confirm Button */}
                <button
                  className="dialog--button dialog--button-confirm"
                  onClick={handleConfirm}
                  disabled={disabled || loading}
                >
                  {loading ? "Loading..." : confirm || "OK"}
                </button>

                {/* Cancel Button */}
                {hasCancel && (
                  <button
                    className="dialog--button dialog--button-cancel"
                    onClick={handleCancel}
                    disabled={disabled || loading}
                  >
                    {cancel || "Cancel"}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
