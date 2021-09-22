import React from 'react'
import { IModalProps } from '@components/modal/_PropsType'
import '@styles/modal.css'

const ModalOverlay = ({ open, onClose, children }: IModalProps) => {
  return (
    <>
      {open && (
        <div className='modal-overlay' onClick={onClose}>
          <div className='modal-container transform translate-x-[-50%] translate-y-[-50%]'>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default ModalOverlay
