import React, { FC, useState } from "react";
import Profile from "../profile/Profile";
import SearchInput from "../input/SearchInput";
import { ContentData } from "../../store/ContentData";

const Navbar: FC<NavbarProps> = ({ search, setSearch }) => {
  const [exc, setExc] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false)
  const [viewSearch, setViewSearch] = useState<boolean>(false)
  return (
    <header className="w-full h-fit">
      <ul className="flex items-center">
        <button className="w-3/12 lg:hidden" onClick={()=> setMenu(!menu)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <path
                d="M3 12H21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
        <li className="lg:w-2/12 w-6/12">
          <Profile name="EpictetusNews" />
        </li>
        <button className="w-3/12 text-right lg:hidden" onClick={() => setViewSearch(!viewSearch)}>
          <svg
            className="inline-block"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21L16.65 16.65"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
        <div className={`lg:w-8/12 transition-all duration-300 lg:space-y-0 space-y-5 flex lg:flex-row flex-col fixed lg:bg-none lg:static lg:h-auto lg:p-0 lg:space-x-10 lg:items-center bg-gradient-to-b from-gray-600 to-gray-900 cursor-pointer w-full top-0 h-screen p-10 ${menu ? "left-0" : "-left-full"} `}>
          <svg
            onClick={()=> setMenu(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x absolute right-10 top-14 lg:hidden"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          <li><a href="/category/uidesign">Ui Design</a></li>
          <li><a href="/category/frontend">Front End</a></li>
          <li><a href="/category/backend">Back End</a></li>
          <div className="relative group transition-all duration-300">
            <li onClick={() => setExc(!exc)} className="flex items-center">
              Lainya
              <svg
                className="mt-1 ml-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            {exc && (
              <div className="flex flex-col w-[180px] bg-gray-800 absolute mt-4 items-center rounded ">
                {ContentData.dropDownList.map(({ text, href }, i) => (
                  <li
                    key={i}
                    className="border-b border-gray-900 w-full hover:bg-gray-700 h-full py-2 flex items-center justify-center last:border-none"
                  >
                    <a href={`/category/${href}`}>{text}</a>
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>
        <li className={`lg:w-3/12 top-4 left-0 px-8 lg:static lg:p-0 absolute w-full transition-all duration-300 ${viewSearch ? "top-4" : "-top-28"} `}>
          <button className="absolute top-3 right-10 lg:hidden" onClick={()=> setViewSearch(!viewSearch)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          </button>
          <SearchInput search={search} setSearch={setSearch} />
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
