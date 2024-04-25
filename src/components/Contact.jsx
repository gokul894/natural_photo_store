import React from 'react'

function Contact() {
  return (
    <div className='h-auto w-1/2 flex my-8 flex-col gap-6 p-6 items-center shadow-2xl bg-slate-200 rounded-2xl'>
        <h1 className='text-slate-700 font-bold text-2xl underline p-3'>CONTACT ME</h1>
        <input type="text" placeholder='username' className='w-1/2 p-3 font-bold text-xl outline-none rounded-2xl shadow-2xl border-2 border-amber-200 text-center text-slate-700'/>
        <input type="text" placeholder='discription' className='w-1/2 p-3 font-bold text-xl outline-none rounded-2xl shadow-2xl border-2 border-amber-200 text-center text-slate-700'/>
        <textarea name="mytext" cols="30" rows="10" className='w-1/2 p-3 font-bold text-xl outline-none rounded-2xl shadow-2xl border-2 border-amber-200 text-center text-slate-700' placeholder='write something'></textarea>
        <a href="#" className=' bg-purple-300 font-bold cursor-pointer  hover:text-orange-200 p-2 rounded-lg shadow-lg'>Submit</a>
    </div>
  )
}

export default Contact