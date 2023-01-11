import Head from "next/head";
import Image from "next/image";
// import content
ContentData;
// import components
import Container from "../components/layout/Container";
import Navbar from "../components/navbar/Navbar";
import TopNews from "../components/news/TopNews";
import { ContentData } from "../store/ContentData";
import Footer from "../components/footer/Footer";
import { useState } from "react";
import NewsCard from '../components/news/NewsCard';

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const { topNews, news } = ContentData;
  return (
    <>
      <Head>
        <title>Epictetus</title>
        <meta
          name="description"
          content="Slicing design develop by Adrian Aji Septa"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b text-white from-gray-700 to-gray-900 w-full min-h-screen">
        <Container>
          <Navbar search={search} setSearch={setSearch} />
          <TopNews {...topNews} />
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
          <Footer copy="Copyright (c) 2023 - Develop by Adrian" />
        </Container>
      </main>
    </>
  );
}
