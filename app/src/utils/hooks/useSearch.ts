import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import history from '@utils/routers/history'
import { PATHS } from '@/constants/paths'
import {
  searchShopToLocation,
  SearchShopToLocationSchema,
  searchToShopsNameSchema,
  SearchToShopsNameSchema
} from '@/components/shop/searchSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useSearch = () => {
  const toLocation = useForm<SearchShopToLocationSchema>({
    resolver: zodResolver(searchShopToLocation),
    mode: 'onSubmit',
    defaultValues: {
      areaId: '',
      prefectureId: '',
      cityId: ''
    }
  })

  const searchToLocation: SubmitHandler<SearchShopToLocationSchema> =
    useCallback((values) => {
      history.push(`${PATHS.SHOPS}/area`, {
        areaId: values.areaId,
        prefectureId: values?.prefectureId,
        cityId: values?.cityId
      })
    }, [])

  const toKeyword = useForm<SearchToShopsNameSchema>({
    resolver: zodResolver(searchToShopsNameSchema),
    mode: 'onSubmit',
    defaultValues: {
      keyword: ''
    }
  })

  const searchToKeyword: SubmitHandler<SearchToShopsNameSchema> = useCallback(
    (values) => {
      history.push(`${PATHS.SHOPS}/keyword`, { keyword: values.keyword })
    },
    []
  )

  const controls = {
    toKeyword: toKeyword.control,
    toLocation: toLocation.control
  }

  const SubmitHandlers = {
    toKeyword: toKeyword.handleSubmit,
    toLocation: toLocation.handleSubmit
  }

  const watchLocationIds = toLocation.watch(['areaId', 'prefectureId'])

  return {
    searchToLocation,
    searchToKeyword,
    SubmitHandlers,
    controls,
    watchLocationIds
  }
}
