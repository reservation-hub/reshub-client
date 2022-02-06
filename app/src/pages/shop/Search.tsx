import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
type Test = {
  keyword: string
}
const Search = ({ match }: RouteComponentProps<Test>) => {
  console.log(match)
  return <div></div>
}

export default Search
