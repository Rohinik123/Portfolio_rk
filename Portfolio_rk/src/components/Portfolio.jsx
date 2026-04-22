import React from "react";
import chatting_img from "../assets/chatting_app.jpg";

import task_img from "../assets/task_management.jpg";

import news_img from "../assets/news_page.avif";

const Portfolio = () => {
  const Portfolios = [
    {
      id: 1,
      src: chatting_img,

      SourceCode: "https://github.com/Rohinik123/Capstone-Chit-Chat-App",
      LiveLink: "https://regal-strudel-b25084.netlify.app",
    },
    {
      id: 2,
      src: task_img,

      SourceCode: "https://github.com/Rohinik123/Map_My_Task",
      LiveLink: "https://mapmytask16.netlify.app/",
    },
    {
      id: 3,
      src: news_img,

      SourceCode: "https://github.com/Rohinik123/Newsapp",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen scroll-mt-20"
    >
      <div className="max-w-screen-lg px-4 sm:px-6 py-16 sm:py-20 mx-auto flex flex-col w-full">
        <div className="pb-6 sm:pb-8">
          <div className="portfolio">
            <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500 pt-4 sm:pt-0">
              Portfolio
            </p>
          </div>
          <p className="py-4 sm:py-6 text-sm sm:text-base text-gray-300">
            Check out some of my work here...
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {Portfolios.map(({ id, src, LiveLink, SourceCode }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden flex flex-col"
            >
              <img
                src={src}
                alt=""
                className="rounded-t-md w-full h-48 sm:h-56 object-cover duration-200 hover:scale-105"
              />
              <div className="flex flex-col sm:flex-row items-stretch justify-center gap-1 sm:gap-0 p-2 sm:p-3">
                {LiveLink ? (
                  <a
                    className="flex-1 text-center text-white text-sm sm:text-base px-3 py-2.5 m-1 sm:m-2 rounded duration-200 hover:scale-105 bg-gray-700/50 hover:bg-gray-600/50"
                    href={LiveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                ) : null}
                <a
                  className="flex-1 text-center text-white text-sm sm:text-base px-3 py-2.5 m-1 sm:m-2 rounded duration-200 hover:scale-105 bg-gray-700/50 hover:bg-gray-600/50"
                  href={SourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
