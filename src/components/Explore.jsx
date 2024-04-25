import React from 'react'
import Card from './Card'
import img1 from "../assets/media/pexels-bri-schneiter-28802-346529.jpg"
import img2 from "../assets/media/pexels-horst-joachims-282933937-19212195.jpg"
import img3 from "../assets/media/pexels-horst-joachims-282933937-19212200.jpg"
import img4 from "../assets/media/pexels-lauripoldre-19144661.jpg"
import img5 from "../assets/media/pexels-line-knipst-574109081-19022801.jpg"
import img6 from "../assets/media/pexels-pixabay-206359.jpg"
import img7 from "../assets/media/pexels-pixabay-33545.jpg"
import img8 from "../assets/media/pexels-samandgos-709552.jpg"


function Explore() {
  
  return (
    <div className=' h-auto my-8 p-7 w-full'>
      <h1 className=' text-3xl font-bold p-3 border-b-2 border-amber-500 mb-4 text-black'>Explore some natural beauty</h1>
      <div className='flex flex-wrap mt-11 items-center gap-4 justify-center'>
        <Card Img={img1} Name="img1"/>
        <Card Img={img2} Name="img2"/>
        <Card Img={img3} Name="img3"/>
        <Card Img={img4} Name="img4"/>
        <Card Img={img8} Name="img5"/>
        <Card Img={img5} Name="img6"/>
        <Card Img={img6} Name="img7"/>
        <Card Img={img7} Name="img8"/>
      </div>
    </div>
  )
}

export default Explore