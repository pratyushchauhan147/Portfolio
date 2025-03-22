import React from 'react'
import { useEffect,useState } from 'react'
import Sectionones from '../components/Sectionone'
import Sec2 from '../components/Sec2'
import Sec3 from '../components/sec3'
import Marque from '../components/Marque'
const Home = () => {
  


  return (
    <div className="">
      <div>
        <Sectionones></Sectionones>
      </div>
      <div  className='h-auto'><Marque></Marque></div>
      <Sec2></Sec2>
      <Sec3></Sec3>
      <div className='h-screen w-full'></div>
      </div>
  )
}

export default Home
