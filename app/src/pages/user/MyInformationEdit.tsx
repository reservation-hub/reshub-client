import MypageMenu from '@components/user/detail/MypageMenu'
import MainTemplate from '@components/Template/MainTemplate'
import React from 'react'

const MyInformationEdit = () => {
  return (
    <MainTemplate>
      <div className='flex'>
        <MypageMenu />
      </div>
    </MainTemplate>
  )
}

export default MyInformationEdit
