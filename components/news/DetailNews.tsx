import React, { FC } from 'react'
import NewsTitle from './NewsTitle'
interface DetailNewsProps{
    releaseDate?: string
    authorName?: string
    categoryAuthor?: string
    isCenter?:boolean
}
const DetailNews: FC<DetailNewsProps> = ({categoryAuthor, releaseDate, isCenter}) => {
  return (
    <NewsTitle categoryAuthor={categoryAuthor} releaseDate={releaseDate} isCenter={isCenter} />
  )
}

export default DetailNews