import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
export default function Header({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchClick = () => {
    if (searchValue.trim() !== "") {
      onSearch(searchValue);
    }
  };
  return (
    <>
      <div className="p-6 bg-black sm:flex fixed items-center justify-between w-full top-0 left-0 z-1000">
        <div className="flex items-center space-x-6 ">
          <h1 className="font-extrabold text-red-700 sm:text-[40px] text-[32px]">
            MOVIE
          </h1>
          <nav className="flex items-center space-x-4 sm:text-[18px] text-[14px] font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-red-500"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-red-500"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-red-500"
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>

        <div className="sm:flex items-center gap-0 hidden w-[30%]">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search"
            className="py-4 px-6 text-black bg-white rounded-l-2xl w-[70%]"
          />
          <button
            onClick={handleSearchClick}
            className="p-[17px] text-white bg-red-600 rounded-r-2xl font-medium w-[30%]"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}
