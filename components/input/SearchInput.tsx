import { useRouter } from "next/router";
import React, { FC, KeyboardEvent } from "react";

const SearchInput:FC<NavbarProps> = ({search, setSearch}) => {
  const router = useRouter()
  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      router.push(`/search/${search}`)
    } 
  }
  return (
    <input
      value={search}
      onKeyUp={(e)=> handleSearch(e)}
      onChange={(e)=> setSearch(e.target.value)}
      placeholder="Search ..."
      className="lg:bg-gray-800/60 bg-gray-800 py-2  w-full rounded-lg lg:rounded-full pl-9 bg-search focus:outline-none focus:shadow-lg"
    />
  );
};

export default SearchInput;
