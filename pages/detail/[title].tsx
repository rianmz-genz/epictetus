import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/layout/Container";
import { useRouter } from "next/router";
import { ContentData } from "../../store/ContentData";
import DetailNews from "../../components/news/DetailNews";
import AuthorProfile from "../../components/profile/AuthorProfile";
import Footer from "../../components/footer/Footer";
const DetailPage = () => {
  const router = useRouter();
  const detail = router.query?.title;
  const [search, setSearch] = useState<string>("");
  const x = ContentData.news.find((y) => y.title === detail);
  return (
    <main className="bg-gradient-to-b text-white from-gray-700 to-gray-900 w-full min-h-screen">
      <Container>
        <Navbar search={search} setSearch={setSearch} />
        <div className="mt-8">
          <DetailNews
            categoryAuthor={x?.categoryAuthor}
            isCenter={true}
            releaseDate={x?.releaseDate}
          />
        </div>
        <h1 className="text-lg text-center lg:w-6/12 mx-auto mb-2">
          {x?.title}
        </h1>
        <div className="w-full flex justify-center mt-4">
          <AuthorProfile
            imageAuthor={x?.imageAuthor}
            authorName={x?.authorName}
            categoryAuthor={x?.categoryAuthor}
          />
        </div>
        <img className="lg:w-8/12 mt-6 mx-auto" src={x?.imageNewsUrl} alt="image" />
        <p className="lg:w-6/12 mt-6 mx-auto">{x?.description}</p>
        <Footer copy='Copyright (c) 2023 - Develop by Adrian' />
      </Container>
    </main>
  );
};

export default DetailPage;
