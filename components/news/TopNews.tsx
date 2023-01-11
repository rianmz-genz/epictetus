import React, { FC } from "react";
const TopNews:FC<News> = (topNews) => {
  return (
    <article className="w-full h-fit mt-9 flex items-center">
      <div className="w-8/12 pr-5">
        <img src={topNews.imageNewsUrl} />
      </div>
      <div className="w-4/12">
        <p className="text-xs text-gray-500 mb-3">{topNews.categoryAuthor} | {topNews.releaseDate}</p>
        <h1 className="text-xl mb-3">{topNews.title}</h1>
        <p className="text-base text-gray-500 mb-4 w-9/12">{topNews.description}</p>
        <div className="flex items-center">
            <img src={topNews.imageAuthor} />
            <div className="ml-3">
                <p className="mb-1">{topNews.authorName}</p>
                <p className="text-xs text-gray-500">{topNews.categoryAuthor}</p>
            </div>
        </div>
      </div>
    </article>
  );
};

export default TopNews;
