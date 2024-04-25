import React from 'react'
import { FaCopyright } from "react-icons/fa"
import authimg from "../assets/media/author/gkimage.jpg"

function Footer() {
  return (
    <div className='min-w-full h-[200px] flex gap-[300px] my-4 border-t-2 p-3 border-slate-500 '>
        <div className='flex gap-2'>
            <FaCopyright className=' text-xl mt-1'/> 
            <h1 className='font-semibold'>Copy right: 2024</h1>
        </div>
        <div>
            <h1 className='text-xl font-bold '>Sections</h1>
            <div>
            <li className='text-md font-semibold text-slate-900 mt-2 ml-3'>Home</li>
            <li className='text-md font-semibold text-slate-900 mt-2 ml-3'>Explore</li>
            <li className='text-md font-semibold text-slate-900 mt-2 ml-3'>About</li>
            <li className='text-md font-semibold text-slate-900 mt-2 ml-3'>Contact</li>
            </div>
        </div>
        <div>
            <h1 className='text-xl font-bold '>Follow Me:</h1>
            <div className='flex flex-col mt-[10px] gap-2'>
                <a href="https://github.com/gokul894" className='hover:text-blue-500 text-blue-900'>Github</a>
                <a href="https://www.instagram.com/gokul_kr9/" className='hover:text-blue-500 text-blue-900'>Instagram</a>
                <a href="www.linkedin.com/in/gokul-kumar-60a6b6206" className='hover:text-blue-500 text-blue-900'>Linkedln</a>
            </div>
        </div>
    </div>
  )
}

export default Footer