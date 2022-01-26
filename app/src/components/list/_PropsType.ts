import { Items } from '@constants/items'
import { IPaginateProps } from '@components/common/Paginate'

export interface IListProps extends IPaginateProps {
  item?: Record<string, any>
  loading?: boolean
}

export type TCurrentPage = {
  currentPage: number
}
