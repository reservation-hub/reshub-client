import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { MatchParams } from '@components/_PropsTypes'
import { useDispatch, useSelector } from 'react-redux'
import { getOneShop } from '@store/actions/shopAction'
import { RootState } from '@store/store'
import ShopDetail from '@components/shop/detail/ShopDetail'
import { DetailMenuItem, SECTION_TYPE } from '@constants/detail'
import Menu from '@components/shop/detail/Menu'
import Header from '@/components/shop/detail/Header'
import { fetchAllStylist } from '@store/actions/stylistAction'
import { OrderBy } from '@utils/api/request-response-types/client/Common'
import StylistList from '@/components/stylist/list/StylistList'
import { fetchAllMenu, getPopularMenu } from '@store/actions/menuAction'
import useInfiniteScroll from '@utils/hooks/useInfiniteScroll'
import MainTemplate from '@components/Template/MainTemplate'
import Box from '@components/Template/Box'
import MenuList from '@/components/menu/list/MenuList'

const Detail = ({ match }: RouteComponentProps<MatchParams>) => {
  const { id } = match.params
  const dispatch = useDispatch()
  const convertId = Number(id)

  const { shop, stylist, menus } = useSelector((state: RootState) => state)

  const infiniteScrollToStylistList = useInfiniteScroll(stylist.totalCount)
  const infiniteScrollToMenus = useInfiniteScroll(menus.totalCount)

  const [sectionType, setSectionType] =
    useState<keyof typeof SECTION_TYPE>('INDEX')

  const menuItem: DetailMenuItem[] = [
    {
      label: 'サロン情報',
      slug: SECTION_TYPE.INDEX,
      click: () => setSectionType('INDEX')
    },
    {
      label: 'メニュー',
      slug: SECTION_TYPE.MENU,
      click: () => setSectionType('MENU')
    },
    {
      label: 'スタイリスト',
      slug: SECTION_TYPE.STYLIST,
      click: () => setSectionType('STYLIST')
    },
    {
      label: '口コミ',
      slug: SECTION_TYPE.REVIEW,
      click: () => setSectionType('REVIEW')
    }
  ]

  useEffect(() => {
    if (sectionType === SECTION_TYPE.INDEX) {
      dispatch(getOneShop(convertId))
      dispatch(getPopularMenu())
    } else if (sectionType === SECTION_TYPE.STYLIST) {
      dispatch(
        fetchAllStylist({
          shopId: convertId,
          page: infiniteScrollToStylistList.page,
          order: OrderBy.ASC
        })
      )
    } else if (sectionType === SECTION_TYPE.MENU) {
      dispatch(
        fetchAllMenu({
          shopId: convertId,
          page: infiniteScrollToMenus.page,
          order: OrderBy.ASC
        })
      )
    }
  }, [
    sectionType,
    infiniteScrollToStylistList.page,
    infiniteScrollToMenus.page
  ])

  return (
    <MainTemplate>
      <div className='w-full'>
        <div className='w-full bg-primary rounded-tl-lg rounded-tr-lg text-secondary-main'>
          <Header item={shop.shop} />
          <Menu menuItem={menuItem} sectionType={sectionType} />
        </div>
        {sectionType === SECTION_TYPE.INDEX ? (
          <ShopDetail
            item={shop.shop}
            menuItem={menuItem}
            sectionType={sectionType}
            loading={shop.loading}
          />
        ) : sectionType === SECTION_TYPE.MENU ? (
          <div className='my-10'>
            <Box title={`${shop.name}のメニュー`}>
              <MenuList item={menus.menus} />
            </Box>
          </div>
        ) : sectionType === SECTION_TYPE.STYLIST ? (
          <div className='my-10'>
            <div className='text-rose-500 mb-5'>
              {stylist.totalCount}人のスタイリストがいます
            </div>
            <Box title={`${shop.name}のスタイリスト`}>
              <StylistList
                item={stylist.stylists}
                loading={stylist.loading}
                useInfiniteScroll={infiniteScrollToStylistList}
                length={stylist.totalCount}
              />
            </Box>
          </div>
        ) : (
          <div>test haha3</div>
        )}
      </div>
    </MainTemplate>
  )
}

export default Detail
