import React, { FC, useState } from "react";
import Profile from "../profile/Profile";
import SearchInput from "../input/SearchInput";
import { ContentData } from '../../store/ContentData';

const Navbar:FC<NavbarProps> = ({search, setSearch}) => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <header className="w-full h-fit">
      <ul className="flex items-center">
        <li className="w-2/12">
          <Profile name="Epictetus" />
        </li>
        <div className="w-8/12 flex space-x-10 items-center cursor-pointer">
          <li>Ui Design</li>
          <li>Front End</li>
          <li>Back End</li>
          <div className="relative group transition-all duration-300">
            <li onClick={() => setMenu(!menu)} className="flex items-center">
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
            {menu && (
              <div className="flex flex-col w-[180px] bg-gray-800 absolute mt-4 items-center rounded ">
                {ContentData.dropDownList.map(({ text, href }, i) => (
                  <li key={i} className="border-b border-gray-900 w-full hover:bg-gray-700 h-full py-2 flex items-center justify-center last:border-none">
                    <a href={href}>{text}</a>
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>
        <li>
          <SearchInput search={search} setSearch={setSearch} />
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
