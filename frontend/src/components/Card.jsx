import React from 'react'

const Card = ({Img}) => {
   
  return (
    <div style={{ backgroundImage: `url(${Img})` }}
   
    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
    
        {//hover
        }
        <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold tracking-wider'>
                React Js Application
            </span>
            <div className='pt-8 text-center'>
                <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>

            </div>
        </div>
    </div>
  )
}

export default Card