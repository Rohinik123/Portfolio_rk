import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import GitHub from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootastrap.png";
import redux from "../assets/Redux.png";
import reduxsaga from "../assets/redux-saga.png";
import typescript from "../assets/Typescript.png";
import mui from "../assets/material_ui.png";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "HTML5",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS3",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: redux,
      title: "Redux Toolkit",
      style: "shadow-purple-500",
    },
    {
      id: 6,
      src: reduxsaga,
      title: "Redux Saga",
      style: "shadow-emerald-500",
    },
    {
      id: 7,
      src: typescript,
      title: "TypeScript",
      style: "shadow-indigo-500",
    },
    {
      id: 8,
      src: mui,
      title: "Material UI",
      style: "shadow-sky-500",
    },
    {
      id: 9,
      src: node,
      title: "NODE JS",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: GitHub,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-400",
    },
    {
      id: 12,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-blue-600",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 p-4 to-black w-full min-h-screen scroll-mt-20"
    >
      <div className="max-w-screen-lg mx-auto px-3 sm:px-4 py-12 sm:py-16 flex flex-col w-full text-white">
        <div className="pb-6 sm:pb-8">
          <p className="text-3xl sm:text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-4 sm:py-6 text-sm sm:text-base text-gray-300 max-w-2xl">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 text-center py-4 sm:py-6">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 sm:py-3 rounded-lg px-1 ${style}`}
            >
              <img
                src={src}
                alt=""
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain mx-auto"
              />
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-tight break-words px-0.5">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
