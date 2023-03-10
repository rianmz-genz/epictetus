import Head from "next/head";
import { useState } from "react";
// import content
import { ContentData } from "../store/ContentData";
// import components
import Container from "../components/layout/Container";
import Navbar from "../components/navbar/Navbar";
import TopNews from "../components/news/TopNews";
import Footer from "../components/footer/Footer";
import NewsCard from "../components/news/NewsCard";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const { topNews, news } = ContentData;
  return (
    <>
      <Head>
        <title>EpictetusNews</title>
        <meta property="og:site_name" content="epictetusnews.vercel.app" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="EpictetusNews" />
        <meta
          property="og:description"
          content="EpictetusNews is slicinged design develop by Adrian Aji Septa"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="googlebot-news" content="index, follow" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.country" content="id" />
        <meta name="geo.placename" content="Indonesia" />
        <meta
          name="description"
          content="EpictetusNews is slicinged design develop by Adrian Aji Septa"
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
