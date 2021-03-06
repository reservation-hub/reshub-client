import React from 'react'
import ReactPaginate from 'react-paginate'
import '@styles/paginate.css'
import { ClassesAndChildren } from '../_PropsTypes'

export interface PaginateProps extends ClassesAndChildren {
  totalPage?: number
  page?: string | number | null
  pageChangeHandler?: (selectedItem: { selected: number }) => void
  usePaginate?: boolean
}

const Paginate = ({ totalPage, page, pageChangeHandler }: PaginateProps) => {
  return (
    <ReactPaginate
      marginPagesDisplayed={2}
      pageCount={Math.ceil(Number(totalPage) / 10)}
      pageRangeDisplayed={10}
      breakLabel='...'
      initialPage={Number(page) - 1}
      previousLabel='戻る'
      nextLabel='次へ'
      activeClassName='bg-primary text-secondary-main'
      containerClassName='h-[4rem] w-[4rem] text-center leading-[4rem] flex mt-5'
      pageLinkClassName='w-[4rem] inline-block'
      previousLinkClassName='w-[4rem] inline-block text-primary'
      nextLinkClassName='w-[4rem] inline-block text-primary'
      breakLinkClassName='w-[4rem] inline-block'
      onPageChange={pageChangeHandler}
    />
  )
}

export default Paginate
