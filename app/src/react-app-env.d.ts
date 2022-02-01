/// <reference types="react-scripts" />
/// <reference types="react-infinite-scroller" />

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly REACT_APP_BASE_URL: string
    readonly REACT_APP_GOOGLE_CLIENT_ID: string
    readonly REACT_APP_GOOGLE_CLIENT_SECRET: string
  }
}

declare namespace InfiniteScroll {
  export interface InfiniteScrollProps extends React.HTMLProps<InfiniteScroll> {
    readonly loadMore(page: number): void | undefined
  }
}
