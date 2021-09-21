import React from 'react'
import { ModalProps } from '@components/modal/_PropsType'
import '@styles/modal.css'

const ModalOverlay = ({ open, children }: ModalProps) => {
  return (
    <>
      {open && (
        <div className='modal-overlay'>
          <div className='modal-container transform translate-x-[-50%] translate-y-[-50%]'>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default ModalOverlay
