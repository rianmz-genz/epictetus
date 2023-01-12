import React, { FC } from "react";
interface NewsTitleProps{
    categoryAuthor?: string
    releaseDate?: string
    isCenter?: boolean
}
const NewsTitle:FC<NewsTitleProps> = ({categoryAuthor, releaseDate, isCenter}) => {
  return (
    <p className={`text-xs text-gray-400 mb-2 ${isCenter ? "text-center" : ""}`}>
      {categoryAuthor} | {releaseDate}
    </p>
  );
};

export default NewsTitle;
