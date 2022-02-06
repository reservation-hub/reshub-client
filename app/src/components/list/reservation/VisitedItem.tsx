import LinkCard from '@components/common/LinkCard'
import { PATHS } from '@constants/paths'
import React from 'react'
import { ListProps } from '@components/list/_PropsType'

const VisitedItem = <T extends { id: string; name: string }>({
  item
}: ListProps<T>) => {
  return (
    <LinkCard
      url={`${PATHS.SHOPS}/detail/${item?.id}`}
      classes='p-5 m-5 border rounded-lg'
      shadow
    >
      <div className='flex'></div>
    </LinkCard>
  )
}
