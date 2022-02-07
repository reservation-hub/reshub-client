import { useCallback, useState } from 'react'

export const useModal = (initialState: boolean) => {
  const [open, setModalState] = useState<boolean>(initialState)

  const modalHandler = useCallback(() => {
    if (open) {
      setModalState(false)
      localStorage.setItem('useModal', 'close')
    } else {
      setModalState(true)
      localStorage.setItem('useModal', 'open')
    }
  }, [open])

  return { open, modalHandler }
}
