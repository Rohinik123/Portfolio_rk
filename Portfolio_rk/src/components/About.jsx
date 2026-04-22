import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white scroll-mt-20"
    >
      <div className="max-w-screen-lg px-4 sm:px-6 py-16 sm:py-20 mx-auto flex flex-col w-full">
        <div className="pb-6 sm:pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed break-words">
          Hello, I'm Rohini Kalane As a passionate full-stack web developer, I
          thrive on creating innovative solutions that not only meet user needs
          but also push the boundaries of what's possible on the web. With a
          keen eye for design and a dedication to crafting clean, efficient
          code, I'm driven by my love for turning ideas into interactive and
          functional websites and applications. I believe that the web is a
          canvas where technology and creativity converge, and I'm excited to be
          a part of this dynamic landscape. My journey in web development has
          been a continuous quest for knowledge and improvement, and I'm always
          eager to take on new challenges and explore emerging trends in the
          industry. From front-end design using modern frameworks like React, to
          back-end development with tools like Node.js and Express, I have a
          holistic understanding of the development process. My goal is to
          create seamless user experiences that leave a lasting impression and
          drive engagement. With a commitment to learning, adaptability, and a
          strong collaborative spirit, I'm not just a developer; I'm a problem
          solver, a tech enthusiast, and a lifelong learner. Welcome to my
          portfolio, where you'll discover a collection of my projects that
          reflect my skills, dedication, and passion for the world of web
          development.
        </p>
        <p className="text-base sm:text-lg md:text-xl mt-6 mb-4 sm:mb-8">
          Let's build something remarkable together.
        </p>
      </div>
    </div>
  );
};

export default About;
