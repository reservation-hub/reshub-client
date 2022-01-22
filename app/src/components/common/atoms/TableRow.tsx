import React from 'react'
import { ClassesAndChildren } from '@components/common/_PropsType'

const TableRow = ({ children, classes }: ClassesAndChildren) => {
  return (
    <tr className={`${classes} hover:bg-secondary-dark border-b-2 h-[4.5rem]`}>
      {children}
    </tr>
  )
}

export default TableRow
