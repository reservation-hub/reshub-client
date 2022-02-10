import React, { useEffect } from 'react'
import Button from '@components/common/Button'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import { BiCrown } from 'react-icons/bi'
import Input from '@components/common/Input'
import IconButton from '@components/common/IconButton'
import { ClassesAndChildren } from '@components/_PropsTypes'
import Select from './Select'
import { useDispatch, useSelector } from 'react-redux'
import { getArea, getOneCity, getOnePref } from '@/store/actions/locationAction'
import { RootState } from '@/store/store'
import { useSearch } from '@/utils/hooks/useSearch'
import { useModal } from '@/utils/hooks/useModal'

export interface SearchBarProps extends ClassesAndChildren {
  searchFromTags?: () => void
  buttonClass?: string
}

const SearchBox = ({
  searchFromTags,
  classes,
  buttonClass
}: SearchBarProps) => {
  const dispatch = useDispatch()
  const { location } = useSelector((state: RootState) => state)
  const { open, modalHandler } = useModal(false)

  const openMenu = open ? 'hidden' : ''
  // searchBox div
  const searchBox = `${classes} lg:text-[1.6rem] text-[1.3rem] border bg-secondary-light mt-3 shadow-lg lg:p-8 p-4 rounded-lg text-gray-main`
  // searchBox svg icons
  const buttonIcons =
    'text-primary lg:w-[2.4rem] w-[2rem] lg:h-[2.4rem] h-[2rem] lg:mr-2 mr-1'
  const hoverButton = 'border border-primary rounded'

  // searchBox Input box
  const searchInputBox = `border border-primary w-full h-[4.3rem] mx-auto flex rounded ${openMenu}`

  const convertToOptionsType = (item: any) => {
    return { label: item.name, value: item?.id ? String(item.id) : item.name }
  }

  const {
    controls,
    watchLocationIds,
    SubmitHandlers,
    searchToKeyword,
    searchToLocation
  } = useSearch()

  const locationItems = {
    area: Object.values(location.area).map((area) =>
      convertToOptionsType(area)
    ),
    prefecture: location.prefecture.prefectures?.map((prefecture) =>
      convertToOptionsType(prefecture)
    ),
    city: location.city.cities?.map((city) => convertToOptionsType(city))
  }

  useEffect(() => {
    dispatch(getArea())
    if (watchLocationIds?.[0] !== '') {
      dispatch(getOnePref(Number(watchLocationIds?.[0])))
    }
    if (watchLocationIds?.[1] !== '') {
      dispatch(getOneCity(Number(watchLocationIds?.[1])))
    }
  }, [dispatch, watchLocationIds?.[0], watchLocationIds?.[1]])

  return (
    <>
      <div className={searchBox}>
        <span className='md:text-[2rem] text-[1.8rem] flex items-start my-5'>
          条件からサロンを探す
        </span>
        <div className='text-gray-main'>
          <ul className='flex flex-wrap	justify-between my-4'>
            <li
              className={
                buttonClass ? `${buttonClass} mb-5 w-full` : 'w-full mb-5'
              }
            >
              <IconButton
                icon
                onClick={modalHandler}
                text='エリアから探す'
                classes={hoverButton}
              >
                <IoLocationOutline className={buttonIcons} />
              </IconButton>
              {open && (
                <div className='bg-secondary-light p-5 rounded-lg border border-primary'>
                  <div className='mt-2 flex justify-between'>
                    <Select
                      name='areaId'
                      control={controls.toLocation}
                      item={locationItems.area}
                      classes='p-5'
                    />
                    <Select
                      name='prefectureId'
                      control={controls.toLocation}
                      item={locationItems.prefecture}
                      classes='p-5'
                    />
                    <Select
                      name='cityId'
                      control={controls.toLocation}
                      item={locationItems.city}
                      classes='p-5'
                    />
                  </div>
                  <Button
                    onClick={SubmitHandlers.toLocation(searchToLocation)}
                    classes='w-full bg-primary text-secondary-light mt-10'
                  >
                    検索
                  </Button>
                </div>
              )}
            </li>
            <li
              className={
                buttonClass
                  ? `${buttonClass} ${openMenu} mb-5 w-full`
                  : `${openMenu}  w-full mb-5`
              }
            >
              <IconButton
                icon
                onClick={searchFromTags}
                text='タグから探す'
                classes={hoverButton}
              >
                <BiCrown className={buttonIcons} />
              </IconButton>
            </li>
          </ul>
        </div>
        <form
          className={searchInputBox}
          onSubmit={SubmitHandlers.toKeyword(searchToKeyword)}
        >
          <Input
            name='keyword'
            placeholder='サロン名'
            autoComplete='off'
            classes='w-full h-[4.3rem]'
            inputClasses='border-none h-[4.1rem]'
            control={controls.toKeyword}
          />
          <Button classes='border-none w-[5.9rem] h-[4.1rem]'>
            <AiOutlineSearch className='w-full h-full bg-primary text-secondary-light' />
          </Button>
        </form>
      </div>
    </>
  )
}

export default SearchBox
