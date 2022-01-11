import { ChangeEvent, useCallback, useState } from 'react'

const useInput = <T>(initialState: T) => {
  const [input, setInput] = useState<T>(initialState)

  const ChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const { name, value } = e.target
      setInput({
        ...input,
        [name]: value
      })
    },
    [input]
  )

  return { input, ChangeHandler }
}

export default useInput
