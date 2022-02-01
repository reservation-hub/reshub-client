import React from 'react'
import TableRow from './TableRow'
import history from '@utils/routers/history'
import Paginate from './Paginate'
import { IListDetailProps } from '../_PropsTypes'

interface ITableProps<T> extends IListDetailProps<T> {
  url?: string
  subParams?: boolean
}

const Table = <T extends Record<string, any>>({
  cell,
  items,
  url,
  subParams,
  totalPage,
  page,
  pageChangeHandler,
  usePaginate,
  classes
}: ITableProps<T>): React.ReactElement => {
  const styled = 'w-full bg-secondary-main rounded p-[10rem] mb-5'

  return (
    <>
      <table className={`${styled} ${classes}`}>
        <thead className='bg-table-header text-table-headerFont h-[5rem]'>
          <tr className='text-[1.8rem]'>
            {cell.map((header, index) => (
              <th key={index} className='p-4'>
                {header.column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='text-[1.6rem] text-center'>
          {items?.map((item, index) => (
            <TableRow key={index}>
              {cell.map((field, index) => (
                <td
                  className='p-4'
                  key={index}
                  onClick={() =>
                    history.push(
                      `/${url}/${item['id']}`,
                      subParams ? { shopId: item['shopId'] } : null
                    )
                  }
                >
                  {item[field.key] || '-'}
                </td>
              ))}
            </TableRow>
          ))}
        </tbody>
      </table>
      {usePaginate && (
        <Paginate
          totalPage={totalPage}
          page={page}
          pageChangeHandler={pageChangeHandler}
        />
      )}
    </>
  )
}

export default React.memo(Table)
