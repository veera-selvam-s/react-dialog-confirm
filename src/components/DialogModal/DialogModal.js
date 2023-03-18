import React, { useState, useEffect } from 'react';
import { getIcon } from '../../lib/helper';
import Remover from '../Remover';
import { useModal } from './DialogContext';

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
  onCancel
}) => {
  const { isModalOpen, closeModal } = useModal()
  const [out, setOut] = useState(false)

  //Handles closing the dialog.
  const handleClose = () => {
    setOut(true)
  }

  if (out) {
    setTimeout(() => {
      closeModal()
    }, 500)
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <>{isModalOpen &&
        <div className={`dialog--container ${out ? ' dialog--out ' : ''}`}>
          <div className="dialog--layout">
            <div className="dialog--overlay"
              onClick={handleClose}/>
            <span aria-hidden="true">
                            &#8203;
            </span>
            <div className={'dialog--panel'}>
              <div className={'dialog--card'}>
                {children || <>
                  <div className="dialog--card--icon">
                    {getIcon(icon)}
                  </div>
                  <div className={'dialog--card--title'} style={titleStyle}>
                    {title}
                  </div>
                  <div className="dialog--card--description" style={descriptionStyle}>
                    {description}
                  </div>
                  <div className="dialog--card--button-container" style={confirmStyle}>
                    <button className={'dialog--button dialog--button-confirm'}
                      onClick={onConfirm || handleClose}>
                      {confirm || 'OK' }
                    </button>
                    {hasCancel &&
                      <button className={'dialog--button dialog--button-cancel'}
                        onClick={onCancel || handleClose} >
                        {cancel || 'Cancel'}
                      </button>
                    }
                  </div>
                  <Remover close={handleClose} />
                </>
                }
              </div>
            </div>
          </div>
        </div>
    }</>
  )
}
