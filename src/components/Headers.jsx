import React from 'react'
import Headeritem from './Headeritem'
import { HiHome,HiLightBulb } from "react-icons/hi2";
import { MdOutlineTravelExplore,MdOutlineContactMail } from "react-icons/md";

function Headers() {
    const items = [
        {
            id:1,
            name:"HOME",
            icon: HiHome
        },
        {
            id:2,
            name:"EXPLORE",
            icon:MdOutlineTravelExplore
        },
        {
            id:3,
            name:"ABOUT",
            icon:HiLightBulb
        },
        {
            id:4,
            name:"CONTACT",
            icon:MdOutlineContactMail
        }
    ]
  return (
    <div className='fixed min-w-full text-amber-600 flex place-items-center justify-around font-semibold p-3  bg-slate-400 mt-3 bg-opacity-[.2] backdrop-blur-sm rounded-2xl shadow-lg' id='Home'>
        <h1 className=' text-2xl font-bold border-2 p-2 rounded-2xl text-amber-600'>WELCOME TO NATURE</h1>
        <div className='flex gap-8 items-center cursor-pointer'>
        {items.map((item) => (
                <Headeritem key={item.id} Name={item.name} Icon={item.icon} />
            ))}
        </div>
        <a href="#" className=' bg-purple-300 font-bold cursor-pointer  hover:text-orange-200 p-2 rounded-lg shadow-lg'>LogIn/SignUp</a>
    </div>
  )
}

export default Headers