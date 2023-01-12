import React, { useState } from "react";
// import components
import Container from "../components/layout/Container";
import Navbar from "../components/navbar/Navbar";
import TopNews from "../components/news/TopNews";
import Footer from "../components/footer/Footer";
import NewsCard from "../components/news/NewsCard";
const Notfound = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <main className="bg-gradient-to-b text-white from-gray-700 to-gray-900 w-full min-h-screen">
      <Container>
        <div className="z-40">
          <Navbar search={search} setSearch={setSearch} />
        </div>
        <h1 className=" absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl z-0">
          404 NOT | FOUND 🤔
        </h1>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <Footer copy="Copyright (c) 2023 - Develop by Adrian" />
        </div>
      </Container>
    </main>
  );
};

export default Notfound;
