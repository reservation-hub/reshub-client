import { IPaginateProps } from '@components/common/Paginate'

export interface IListProps extends IPaginateProps {
  item?: Record<string, any>
  loading?: boolean
  useInfinite?: boolean
}

export interface IInDetailListProps extends IListProps {
  boxText?: string
  inDetailPage?: boolean
  gotoSection?: () => void
}

export type TCurrentPage = {
  currentPage: number
}
