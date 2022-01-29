import { Items } from '@constants/items'
import { IPaginateProps } from '@components/common/Paginate'

export interface IListProps extends IPaginateProps {
  item: Record<string, any>
  loading?: boolean
  useInfinite?: boolean
}

export type TCurrentPage = {
  currentPage: number
}
