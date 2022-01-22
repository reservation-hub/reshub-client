import React from 'react'
import { ClassesAndChildren } from '@components/common/_PropsType'

const CenterBox = ({ classes, children }: ClassesAndChildren) => {
  return (
    <div
      className={`top-2/4 left-2/4 absolute transform translate-x-[-50%] translate-y-[-50%] ${classes}`}
    >
      {children}
    </div>
  )
}

export default CenterBox
