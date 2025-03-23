import React from 'react'
import { useEffect,useState } from 'react'
import Sectionones from '../components/Sectionone'
import Sec2 from '../components/Sec2'
import Sec3 from '../components/sec3'
import Marque from '../components/Marque'
import About from "../components/About"
const Home = () => {
  


  return (
    <div className="">
      <div>
        <Sectionones></Sectionones>
      </div>
      <div  className='h-auto'><Marque></Marque></div>
      <About></About>
      <Sec2></Sec2>
      <div data-scroll data-scroll-speed="0.6" className=" z-20 fast h-[10vh] w-full bg-amber-500 mix-blend-difference "></div>
      <Sec3></Sec3>
      <div className='h-screen w-full'></div>
      </div>
  )
}

export default Home
