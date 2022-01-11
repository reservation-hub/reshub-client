import React, { SetStateAction } from 'react'
import history from '@utils/routes/history'

const usePagination = (
  pageType: string,
  page: number,
  setPage: React.Dispatch<SetStateAction<number>>
) => {
  return (data: Record<string, any>) => {
    const pageNum: number = data['selected']
    setPage(pageNum + 1)
    history.push(`/${pageType}?p=${page}`, { currentPage: pageNum + 1 })
  }
}

export default usePagination
