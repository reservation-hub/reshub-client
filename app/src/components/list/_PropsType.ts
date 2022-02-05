import { UseInfiniteScroll } from '@/utils/hooks/useInfiniteScroll'

export interface IListProps<T> extends IUseInfiniteProps<T> {
  loading?: boolean
}

export interface IUseInfiniteProps<T> extends Items<T> {
  useInfiniteScroll: UseInfiniteScroll
}

export interface Items<T> {
  item?: T
  loading?: boolean
}

export interface IInDetailListProps<T> extends Items<T> {
  boxText?: string
  inDetailPage?: boolean
  gotoSection?: () => void
}
