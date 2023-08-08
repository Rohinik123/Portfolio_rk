import React from 'react'
import photo from "../assets/photo.jfif"
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
<div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>


  <div className='flex flex-col justify-center h-full mt-10'>
    <h2 className='text-4xl sm:text-7xl font-bold text-white mt-20'>
        I'm a Full Stack Developer
    </h2>
    <p className='text-gray-500 py-4 max-w-md'>
        I have 1 years of experience of building and designing software.
        currently, I love to work on web application using technologies like React, Tailwind etc.
    </p>
    <div>
        <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
            Portfolio
            <span className='group-hover:rotate-90 duration-300'> 
            <MdOutlineKeyboardArrowRight size={25}
            className='ml-1'/>
            </span>
        </Link>
    </div>
  </div>
  <div className="image-container">
    <img src={photo} alt='profile'className='rounded-2xl mx-auto w-2/3 md:w-full'/>
  </div>
    </div>
    </div>
  )
}

export default Home