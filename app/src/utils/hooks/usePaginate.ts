import React, { useState } from 'react'

const usePagination = (currentPage: number) => {
  const [page, setPage] = useState<number>(currentPage)

  const pageHandler = (data: Record<string, any>) => {
    const pageNum: number = data['selected']
    setPage(pageNum + 1)
  }

  return { pageHandler, page }
}

export default usePagination
