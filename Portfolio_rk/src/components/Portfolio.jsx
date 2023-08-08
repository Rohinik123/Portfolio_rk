import React from 'react'
import chatting_img from "../assets/chatting_app.jpg"

import task_img from "..//assets/task_management.jpg"

import news_img from "../assets/news_page.avif"



const Portfolio = () => {

    const Portfolios= [
        {
            id:1,
            src: chatting_img,
            
            SourceCode:'https://github.com/Rohinik123/Capstone-Chit-Chat-App',
            LiveLink:" https://jetset-sms-rk.netlify.app"
        },
        {
            id:2,
            src: task_img,
           
            SourceCode:"https://github.com/Rohinik123/Map_My_Task",
            LiveLink :"https://mapmytask16.netlify.app/"

        },
        {
          id:3,
          src: news_img,
         
          
          SourceCode:"https://github.com/Rohinik123/Newsapp"

      },
        
        
    ]
  return (
    <div name="portfolio"
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <div className='portfolio'><p className='text-4xl font-bold inline border-b-4 border-gray-500  mt-20'>Portfolio</p>
        </div>
        <p className='py-6'>Check out some of my work here...</p>
      </div>

     
      
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

      {Portfolios.map(({id,src,LiveLink,SourceCode})=>(
          <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
          <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 ' />
          <div className='flex items-center justify-center'>
                        <a className='flex justify-between items-center w-full text-white w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' href={LiveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        <a className='flex justify-between items-center w-full text-white w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' href={SourceCode} target="_blank" rel="noopener noreferrer">Source Code</a>
                    </div>
          
          
      </div>
        ))}

      
      </div>
    </div>
    </div>
  )
}

export default Portfolio;

