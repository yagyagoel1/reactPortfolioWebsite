import React from 'react'
import Card from './Card'
import blah from "/src/assets/BLAH.jpeg"
import realEstate from '/src/assets/images.jpeg'
const Work = () => {
    return (
       
        <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
          
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-4 font-semibold text-lg'>Check out some of my recent work</p>
                </div>
                {//container
                }
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                 {//card
                 }
                  <Card Img ={realEstate}></Card>
                 
                  <Card Img={blah}></Card>
                  <Card Img ={realEstate}></Card>
                  <Card Img={blah}></Card>
                  <Card Img ={realEstate}></Card>
                  <Card Img={blah}></Card>
                  
                </div>
            </div>
        </div>

    )
}

export default Work