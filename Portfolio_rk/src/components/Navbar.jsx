import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full min-h-[4rem] sm:h-20 text-white bg-black px-3 sm:px-4 fixed top-0 left-0 z-50">
      <div className="heading">
        <h1 className="text-2xl sm:text-3xl md:text-4xl ml-1 sm:ml-2 truncate max-w-[55vw] sm:max-w-none">
          Rohini Kalane
        </h1>
      </div>
      <ul className="hidden md:flex flex-wrap justify-end">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-2 lg:px-4 cursor-pointer capitalize text-sm lg:text-base font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer p-2 z-[60] text-gray-400 md:hidden"
        aria-label={nav ? "Close menu" : "Open menu"}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center fixed inset-0 w-full h-[100dvh] bg-gradient-to-b from-black to-gray-800 text-gray-300 z-40 overflow-y-auto pt-20">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-4 sm:py-6 text-2xl sm:text-4xl w-full text-center"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
