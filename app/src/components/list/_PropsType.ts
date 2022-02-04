import { IPaginateProps } from '@components/common/Paginate'

export interface IListProps<T> extends IPaginateProps {
  item?: T
  loading?: boolean
  useInfinite?: boolean
}

export interface IInDetailListProps<T> extends IListProps<T> {
  boxText?: string
  inDetailPage?: boolean
  gotoSection?: () => void
}

export type TCurrentPage = {
  currentPage: number
}
