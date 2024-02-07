import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
    return (
        <div name="skills" className='bg-[#0a192f] text-gray-300'>
            {//container
            }
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl  text-gray-300 border-b-4 inline border-pink-500  pb-2 pt-4'>
                        Experience
                    </p>
                    <p className='py-5 text-md font-semibold'>These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML ICON" />
                        <p className='my-4'>HTML</p>
                    </div>
                   
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="HTML ICON" />
                        <p className='my-4'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="HTML ICON" />
                        <p className='my-4'>Nodejs</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt="HTML ICON" />
                        <p className='my-4'>MongoDB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="HTML ICON" />
                        <p className='my-4'>Tailwind CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="HTML ICON" />
                        <p className='my-4'>Github</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills