import Input from '@/components/common/Input'
import FormWrapper from '@/components/form/FormWrapper'
import { FormProps } from '@/components/form/_PropsType'
import Box from '@/components/Template/Box'
import React from 'react'

const UserEditForm = <T extends Record<string, any>>({
  control,
  error,
  submitHandler
}: FormProps<T>) => {
  return (
    <Box title='ユーザー情報編集' boxClass='w-[69rem] mt-14'>
      <FormWrapper submitHandler={submitHandler} buttonText='修正する'>
        <Input
          id='username'
          name='username'
          label='ユーザー名'
          control={control}
          error={error?.username}
          errorText={error?.username?.message}
          fullWidth
        />

        <div className='flex justify-between mt-10'>
          <Input
            name='firstNameKana'
            label='お名前（セイ）'
            classes='w-[30rem]'
            control={control}
            error={error?.firstNameKana}
            errorText={error?.firstNameKana?.message}
          />
          <Input
            name='lastNameKana'
            label='お名前（メイ）'
            classes='w-[30rem]'
            control={control}
            error={error?.lastNameKana}
            errorText={error?.lastNameKana?.message}
          />
        </div>

        <Input
          id='birthday'
          name='birthday'
          label='生年月日'
          classes='mt-10'
          control={control}
          fullWidth
        />
      </FormWrapper>
    </Box>
  )
}

export default UserEditForm
