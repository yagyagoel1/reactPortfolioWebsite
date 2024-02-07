import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name = "home" className='w-full h-screen bg-[#0a192f]'>
        {//container
        }
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold  text-[#ccd6f6]'>Yagya Goel</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full-stack developer specializing in building
          (and occasionally designing) exceptional digital experiences.Currently I'm 
          focused on building responsive full-stack application
        </p>
        <div>
        <button className=" text-white group font-semibold text-lg flex items-center rounded-2xl px-2 py-3 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
  View More  <div className='group-hover:rotate-90 duration-300  px-2 items-center pt-1 text-bold'><HiArrowNarrowRight /></div>
</button>
        </div>
        </div>
    </div>
  )
}

export default Home