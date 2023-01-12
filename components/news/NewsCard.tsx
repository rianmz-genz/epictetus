import React, { FC } from "react";
import { useRouter } from "next/router";
import AuthorProfile from "../profile/AuthorProfile";
import NewsTitle from "./NewsTitle";

const NewsCard: FC<News> = ({
  imageNewsUrl,
  categoryAuthor,
  releaseDate,
  title,
  description,
  imageAuthor,
  authorName,
}) => {
  const router = useRouter();
  const handleDetail = (title: string) => {
    router.push(`/detail/${title}`);
  };
  return (
    <article className="md:w-4/12 w-full px-2 mb-12 lg:mb-8">
      <img src={imageNewsUrl} className="mb-3 w-full" alt="image" />
      <NewsTitle categoryAuthor={categoryAuthor} releaseDate={releaseDate} />
      <h1
        onClick={() => handleDetail(title)}
        className="text-lg mb-2 cursor-pointer hover:underline transition-all duration-300 hover:transition-all"
      >
        {title}
      </h1>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <AuthorProfile
        imageAuthor={imageAuthor}
        authorName={authorName}
        categoryAuthor={categoryAuthor}
      />
    </article>
  );
};

export default NewsCard;
