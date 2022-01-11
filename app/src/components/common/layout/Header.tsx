import React from 'react'
import { IMainTemplateProps } from '@components/common/_PropsType'
import CustomButton from '@components/common/atoms/CustomButton'
import H1 from '@components/common/atoms/H1'
import { Link } from 'react-router-dom'

const Header = ({ onLogout }: IMainTemplateProps) => {
  const styled =
    'w-full h-[6rem] top-0 bg-primary flex justify-between items-center text-secondary-main p-4'

  return (
    <header className={styled}>
      <Link to='/dashboard'>
        <H1>Reshub-admin</H1>
      </Link>
      <CustomButton onClick={onLogout}>Logout</CustomButton>
    </header>
  )
}

export default Header
