import React from "react";
import photo from "../assets/photo.jfif";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 scroll-mt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 pt-24 pb-12 md:flex-row md:pt-20 md:pb-16">
        <div className="flex flex-col justify-center w-full md:w-1/2 md:pr-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-2 sm:mt-4">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-sm sm:text-base leading-relaxed">
            I have 1 years of experience of building and designing software.
            currently, I love to work on web application using technologies like
            React, Tailwind etc.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="image-container w-full flex justify-center md:w-1/2 md:justify-end flex-shrink-0">
          <img
            src={photo}
            alt="profile"
            className="rounded-2xl mx-auto h-auto w-2/3 sm:w-1/2 max-w-[200px] sm:max-w-[220px] md:w-1/2 md:max-w-[240px] lg:max-w-[260px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
