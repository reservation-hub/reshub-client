import { Items } from '@constants/items'
import { IPaginateProps } from '@components/common/atoms/Paginate'

export interface IListProps extends IPaginateProps {
  admin?: boolean
  item?: Record<string, any>
}

export type TCurrentPage = {
  currentPage: number
}
