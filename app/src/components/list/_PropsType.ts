import { UseInfiniteScroll } from '@/utils/hooks/useInfiniteScroll'
import { ClassesAndChildren } from '../_PropsTypes';

export interface ListProps<T> extends UseInfiniteProps<T> {
  loading?: boolean
}

export interface UseInfiniteProps<T> extends Items<T> {
  useInfiniteScroll: UseInfiniteScroll
}

export interface Items<T> extends ClassesAndChildren {
  item?: T
  loading?: boolean
}

export interface IInDetailListProps<T> extends Items<T> {
  boxText?: string
  inDetailPage?: boolean
  gotoSection?: () => void
}
