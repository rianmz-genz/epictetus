import React, { FC } from "react";

const News: FC<News> = ({
  imageNewsUrl,
  categoryAuthor,
  releaseDate,
  title,
  description,
  imageAuthor,
  authorName,
}) => {
  return (
    <article className="w-full mb-8">
      <img src={imageNewsUrl} className="mb-3" />
      <p className="text-xs text-gray-500 mb-2">
        {categoryAuthor} | {releaseDate}
      </p>
      <h1 className="text-lg mb-2">{title}</h1>
      <p className="text-gray-500 text-sm mb-4">{description}</p>
      <div className="flex items-center">
        <img src={imageAuthor} />
        <div className="ml-3">
          <p>{authorName}</p>
          <p className="text-gray-500 text-sm">{categoryAuthor}</p>
        </div>
      </div>
    </article>
  );
};

export default News;
