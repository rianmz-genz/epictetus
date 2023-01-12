import React, { useEffect, useState } from "react";
import { ContentData } from "../../store/ContentData";
import Container from "../../components/layout/Container";
import Navbar from "../../components/navbar/Navbar";
import { useRouter } from "next/router";
import NewsCard from '../../components/news/NewsCard';
const CategoryPage = () => {
  const [search, setSearch] = useState<string>("");
  const [searched, setSearched] = useState<string>("");
  const router = useRouter();
  const {news} = ContentData
  const category = router.query?.thecategory as string;
  useEffect(() => {
    setSearched(category);
  }, [router.isReady]);
  return (
    <main className="bg-gradient-to-b text-white from-gray-700 to-gray-900 w-full min-h-screen">
      <Container>
        <Navbar search={search} setSearch={setSearch} />
        <h1 className="w-full text-center mt-8 text-2xl">Category: {searched}</h1>
        <div className="w-full h-fit mt-12 flex flex-wrap">
          {news.map(
            (
              {
                title,
                imageAuthor,
                imageNewsUrl,
                description,
                categoryAuthor,
                releaseDate,
                authorName,
              },
              index
            ) => (
              <NewsCard
                key={index}
                title={title}
                imageAuthor={imageAuthor}
                imageNewsUrl={imageNewsUrl}
                description={description}
                categoryAuthor={categoryAuthor}
                releaseDate={releaseDate}
                authorName={authorName}
              />
            )
          )}
        </div>
      </Container>
    </main>
  );
};

export default CategoryPage;