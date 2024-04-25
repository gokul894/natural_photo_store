import React from 'react'

function Headeritem({Id,Name,Icon}) {
    

  return (
    <div className='flex items-center gap-3  hover:text-orange-200'>
        <Icon/>
        <a href="#" >{Name}</a>
    </div>
  )
}

export default Headeritem