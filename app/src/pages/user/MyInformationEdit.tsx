import React, { useCallback, useEffect } from 'react'
import MypageMenu from '@components/user/detail/MypageMenu'
import MainTemplate from '@components/Template/MainTemplate'
import UserEditForm from '@components/user/form/UserEditForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, patchUser } from '@store/actions/userAction'
import { userSchema, UserSchema } from '@components/user/userSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { RootState } from '@store/store'

const MyInformationEdit = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state: RootState) => state)

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    mode: 'onSubmit',
    defaultValues: {
      username: (user.user.user && user.user.user.username) || '',
      firstNameKana: (user.user.user && user.user.user.firstNameKana) || '',
      lastNameKana: (user.user.user && user.user.user.lastNameKana) || '',
      firstNameKanji: '',
      lastNameKanji: '',
      gender: undefined,
      birthday: (user.user.user && user.user.user.birthday) || ''
    }
  })

  const onSubmit: SubmitHandler<UserSchema> = useCallback(
    (value: UserSchema) => {
      dispatch(patchUser(user.user.user.id, value))
    },
    []
  )

  console.log(watch())

  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <MainTemplate>
      <div className='flex'>
        <MypageMenu />

        <UserEditForm
          submitHandler={handleSubmit(onSubmit)}
          control={control}
          error={errors}
        />
      </div>
    </MainTemplate>
  )
}

export default MyInformationEdit
