import React from 'react'

export interface ModalProps {
  open?: boolean
  onClose: () => void
  children?: React.ReactNode
}
