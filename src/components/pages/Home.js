import React from 'react'
import Navbar from '../navbar/Navbar'
import {AiOutlineRight} from 'react-icons/ai'
const Home = () => {
  return (
    <div className=' bg-gradient-to-t from-gray-800 to-gray-500'>
        
        <img className='absolute w-full h-full object-cover mix-blend-overlay z-0' src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/9c547c8a-e707-4bdb-bdbc-843f134dd2a6/IN-en-20230619-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
       
        <Navbar />

        <div className='flex flex-col items-center justify-center t-[100px] w-full mx-auto px-24'>
          <div className=' text-center flex flex-col gap-4'>
            <h1 className='text-3xl font-bold'>Unlimited movies, TV shows and more</h1>
            <h3>Watch anywhere.Cancel anytimme.</h3>
          </div>
          
          <div className='flex items-center gap-4 flex-col'>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>  
            <div className='flex gap-3'>
            <input className='px-40 text-white bg-gray-700 border h-full py-3 pl-5' type="email" placeholder='Email address' />
            <button className='flex items-center p-2 rounded-md bg-red-700 '>
              <span>Get Started</span>
              <AiOutlineRight />
            </button>
            </div>
          </div>
         </div>
    </div>
  )
}

export default Home