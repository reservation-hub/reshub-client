import React, { useEffect, useState } from 'react'
import Section from '@components/Template/Section'
import { RouteComponentProps } from 'react-router-dom'
import { MatchParams } from '@components/_PropsTypes'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getOneShop } from '@store/actions/shopAction'
import { RootState } from '@store/store'
import ShopDetail from '@components/detail/shop/ShopDetail'
import { DetailMenuItem, SECTION_TYPE } from '@constants/detail'
import Menu from '@components/detail/shop/Menu'
import Header from '@components/detail/shop/Header'
import { fetchAllStylist } from '@store/actions/stylistAction'
import { OrderBy } from '@utils/api/request-response-types/client/Common'
import StylistList from '@components/list/stylist/StylistList'
import { fetchAllMenu } from '@/store/actions/menuAction'
import MenuList from '@/components/list/menu/MenuList'
import useInfiniteScroll from '@/utils/hooks/useInfiniteScroll'
import MainTemplate from '@/components/Template/MainTemplate'
import Box from '@/components/Template/Box'

const Detail = ({ match }: RouteComponentProps<MatchParams>) => {
  const { id } = match.params
  const dispatch = useDispatch()
  const convertId = Number(id)

  const { shop, stylist, menu } = useSelector(
    (state: RootState) => ({
      shop: state.shop.shop,
      stylist: state.stylist,
      menu: state.menus
    }),
    shallowEqual
  )

  const infiniteScrollToStylistList = useInfiniteScroll(stylist.stylists)
  const infiniteScrollToMenus = useInfiniteScroll(menu.menus)

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
      <Section classes='lg:w-[100rem] w-full mx-auto'>
        <div className='h-full'>
          <div className='w-full bg-primary rounded-tl-lg rounded-tr-lg text-secondary-main'>
            <Header item={shop} />
            <Menu menuItem={menuItem} sectionType={sectionType} />
          </div>
          {sectionType === SECTION_TYPE.INDEX ? (
            <ShopDetail
              item={shop}
              menuItem={menuItem}
              sectionType={sectionType}
            />
          ) : sectionType === SECTION_TYPE.MENU ? (
            <div className='my-10'>
              <Box title={`${shop.name}のメニュー`}>
                <MenuList
                  item={menu.menus}
                  loading={menu.loading}
                  useInfiniteScroll={infiniteScrollToMenus}
                />
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
                />
              </Box>
            </div>
          ) : (
            <div>test haha3</div>
          )}
        </div>
      </Section>
    </MainTemplate>
  )
}

export default Detail
