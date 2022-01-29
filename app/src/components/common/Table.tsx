import React from 'react'
import TableRow from './TableRow'
import history from '@utils/routers/history'
import Paginate, { IPaginateProps } from './Paginate'

interface ITableProps<T> extends IPaginateProps {
  cell: { column: string; key: keyof T }[]
  row: T[] | undefined
  index?: number
  url?: string
  subParams?: boolean
}

const Table = <T extends Record<string, any>>({
  cell,
  row,
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
          {row?.map((item, index) => (
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
