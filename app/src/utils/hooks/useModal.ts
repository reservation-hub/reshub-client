import { useCallback, useState } from 'react'

export const useModal = (initialState: boolean, type?: string | undefined) => {
  const [open, setModalState] = useState<boolean>(initialState)
  const [modalType, setModalType] = useState<string | undefined>(type)

  const openModal = useCallback(() => {
    setModalType(type)
    setModalState(true)
  }, [type])

  const closeModal = useCallback((): void => {
    setModalType('')
    setModalState(false)
  }, [])

  return { open, openModal, closeModal, modalType }
}
