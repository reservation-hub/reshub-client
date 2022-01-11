import React from 'react'
import history from '@utils/routes/history'

interface IItemProps<T> {
  details: any
  index?: number
  url?: string
  subParams?: boolean
}

const Item = <T extends Record<string, any>>({
  details,
  index,
  url,
  subParams
}: IItemProps<T>): React.ReactElement => {
  return <>{details}</>
}

export default Item
