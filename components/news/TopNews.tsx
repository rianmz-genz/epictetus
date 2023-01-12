import React, { FC } from "react";
import NewsInfo from './NewsInfo';
const TopNews:FC<News> = (topNews) => {
  return (
    <article className="w-full h-fit mt-9 flex items-center flex-wrap border-b pb-8 lg:border-none lg:pb-0 border-gray-600">
      <div className="lg:w-8/12 md:pr-5 md:w-7/12 w-full">
        <img src={topNews.imageNewsUrl} alt="image" />
      </div>
      <div className="lg:w-4/12 md:w-5/12 w-full mt-3">
        <NewsInfo 
          imageNewsUrl={topNews.imageNewsUrl}
          categoryAuthor={topNews.categoryAuthor}
          releaseDate={topNews.releaseDate}
          title={topNews.title}
          description={topNews.description}
          imageAuthor={topNews.imageAuthor}
          authorName={topNews.authorName}
        />
      </div>
    </article>
  );
};

export default TopNews;
