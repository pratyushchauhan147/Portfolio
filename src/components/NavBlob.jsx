import React from 'react'
import { scroll } from "motion"
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
const NavBlob = () => {
   let navigate = useNavigate();
  return (
    <div className='  backdrop-blur-sm bg-white/10 mix-blend-difference  z-40 fixed right-[5%] rounded-full px-3 gap-2 top-3 w-fit flex text-black '>
      <a href="/"> <h1 className="text-[#c90a0a]  text-[4vh]  font-[anton] md:text-[4vh] ">Home</h1></a>
      <a href="/#contact"> <h1 className=" text-[#1054d1] text-[4vh]  font-[anton] md:text-[4vh] ">Contact</h1></a>
      <a href="/"> <h1 className=" text-[#edd923] text-[4vh]  font-[anton] md:text-[4vh] ">Static</h1></a>
    </div>
  )
}

export default NavBlob
