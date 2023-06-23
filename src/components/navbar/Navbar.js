import React from 'react'
import {AiFillCaretDown, AiOutlineGlobal} from 'react-icons/ai'
function Navbar() {
  return (
    <>
       <div className='flex absolute w-full  justify-between items-center px-40 py-5 z-10'>
        <div className=''>
            <h1 className='text-red-700 font-bold text-4xl'> NETFLIX</h1>
        </div>

        <div className='flex items-center gap-2'>
            <button className='flex justify-between items-center gap-1 border border-gray-600 rounded-md p-1 px-3'>
                <AiOutlineGlobal />
                <span>English</span>
                <AiFillCaretDown />
            </button>
            <button className='bg-red-600 p-1 px-3 rounded-md font-semibold'>Sign In</button>
        </div>
       </div>
    </>
  )
}

export default Navbar