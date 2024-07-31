import React, { useState } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
// convert the BookOpenIcon with img tag with image
const Header = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <BookOpenIcon className="w-7 h-7 text-yellow-400" />
          <span>Name</span>
        </div>

        {/* Search Bar */}

        <div className="relative hidden md:block">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="h-4 w-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input type="text" id="search-navbar" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-black focus:border-yellow-300 focus:ring-yellow-300" placeholder="Search..." />
      </div>

        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="text-gray-800 hover:text-yellow-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
