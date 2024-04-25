import React from 'react'
import Headers from './components/Headers'
import img1 from './assets/media/bgheader.jpg'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Explore from './components/Explore'

function App() {
  return (
    <div className='flex flex-col items-center'>
      <img src={img1} alt="imgheder" className='h-[500px] w-full object-cover relative shadow-lg'/>
      <Headers/>
      <Explore/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App