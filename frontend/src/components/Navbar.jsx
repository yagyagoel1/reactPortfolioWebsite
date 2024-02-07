import React, { useState } from 'react'

import {FaBars,FaTimes,FaGithub,FaLinkedin, FaFacebook} from "react-icons/fa"
import {HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill} from "react-icons/bs"
import logo from '../assets/logo1.png'
const Navbar = () => {
    const [nav,setNav] = useState(true);
    const handleClick= ()=>{
        setNav(n =>!n)
    }
    

  return (
    <div className='fixed w-full h-[80px] flex justify-between 
    text-gray-300 font-medium items-center px-4 bg-[#0a192f]'>
        <div>
            <img src = {logo} alt ="Logo IMage" className='w-[50px]'></img>
        </div>


        {//menu
        }
        
            <ul className='hidden md:flex '>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Home</li>
            <li>Work</li>
            <li>Contact</li>

            </ul>
     
        {//hamburger
        }
        <div className='md:hidden z-10' onClick={handleClick}>
            {nav?<FaBars/>:<FaTimes/>}
        </div>
        {//mobilemenu
        }
        
        <ul className={nav?'hidden':' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex  flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>

        </ul>



        {//socialicons
        }
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] pl-[30px] h-[60px] flex rounded-3xl justify-between items-center ml-[-100px] hover:ml-[-25px] duration-300 bg-blue-500'>
                <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                    LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] pl-[30px] h-[60px] flex rounded-3xl justify-between items-center ml-[-100px] hover:ml-[-25px] duration-300 bg-gray-800'>
                <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                    Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] pl-[30px] h-[60px] flex rounded-3xl justify-between items-center ml-[-100px] hover:ml-[-25px] duration-300 bg-red-500'>
                <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                    Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] pl-[30px] h-[60px] flex rounded-3xl justify-between items-center ml-[-100px] hover:ml-[-25px] duration-300 bg-gray-700'>
                <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                    Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
    }
export default Navbar