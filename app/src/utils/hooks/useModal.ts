import { useCallback, useState } from 'react'

export const useModal = (initialState: boolean) => {
  const [open, setModalState] = useState<boolean>(initialState)

  const modalHandler = useCallback(() => {
    setModalState((open) => !open)
  }, [])

  return { open, modalHandler }
}
