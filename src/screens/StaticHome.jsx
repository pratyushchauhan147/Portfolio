import React from 'react'
import { useEffect,useState } from 'react'
import Sectionones from '../components/Sectionone'
import Sec2 from '../components/Sec2'
import Sec3 from '../components/sec3'
import Marque from '../components/Marque'
import About from "../components/About"
import NavBlob from '../components/NavBlob'
import Contact from '../components/Contact'
import PortfolioSummary from '../components/PortfolioSummary'
const StaticHome= () => {
  


  return (
    <div className="">
      <div><NavBlob></NavBlob></div>
      <div>
        <Sectionones></Sectionones>
      </div>
      <div  className='h-auto'><Marque></Marque></div>
      

     
      
  
      <div data-scroll data-scroll-speed="0.6" className=" z-20 fast h-[10vh] w-full bg-amber-500 mix-blend-difference "></div>
      <PortfolioSummary></PortfolioSummary>
      <div   id="contact" className='w-full'>
        <Contact></Contact>
      </div>
      <div  className='h-screen w-full'></div>

      </div>
  )
}

export default StaticHome
