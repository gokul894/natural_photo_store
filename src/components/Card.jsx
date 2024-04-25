import React from 'react'

function Card({Img, Name}) {
  return (
    <div className='h-auto w-[300px] p-5 shadow-slate-600 bg-slate-200 rounded-xl'>
        <img src={Img} alt="img" className='h-[150px] w-[300px] bg-red-200 object-cover rounded-lg'/>
        <h1 className=' text-2xl font-bold text-center text-slate-800'>{Name}</h1>
        <p className='text-center text-slate-700 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia, possimus animi cumque hic recusandae nesciunt</p>
        <div className='flex gap-[30px] w-full p-2 items-center'>
            <div>
                <input type="checkbox" name="like" />
                <label htmlFor="like" className='ml-2 text-slate-900 font-semibold'>Like</label>
            </div>
            <div>
                <input type="checkbox" name="dislike" />
                <label htmlFor="dislike" className='ml-2 text-slate-900 font-semibold'>Dislike</label>
            </div>
            <button className=' bg-blue-600 text-white font-bold p-2 rounded-2xl shadow-2xl shadow-black'>More</button>
        </div>
    </div>
  )
}

export default Card