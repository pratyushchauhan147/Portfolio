import React from 'react'
import { scroll } from "motion"
import { useNavigate,Navigate } from 'react-router-dom';
import { motion } from 'framer-motion'
const NavBlob = () => {
   let navigate = useNavigate();
  return (
    <div className='  backdrop-blur-sm bg-white/10 mix-blend-difference  z-40 fixed right-[5%] rounded-full px-3 gap-2 top-3 w-fit flex text-black '>
      <motion.div  initial={{scale:1}} whileHover={{scale:1.1}} onClick={()=>{navigate('/')}} href="/"> <h1 className="text-[#c90a0a]  text-[4vh] cursor-pointer  font-[anton] md:text-[4vh] ">Home</h1></motion.div>
      <motion.div   initial={{scale:1}} whileHover={{scale:1.1}}   onClick={()=>{navigate('/contact')}} > <h1 className=" text-[#1054d1] text-[4vh]  cursor-pointer font-[anton] md:text-[4vh] ">Contact</h1></motion.div>
      <motion.div   initial={{scale:1}} whileHover={{scale:1.1}}  onClick={()=>{navigate('/')}} href="/"> <h1 className=" text-[#edd923] text-[4vh]  cursor-pointer font-[anton] md:text-[4vh] ">Static</h1></motion.div>
    </div>
  )
}

export default NavBlob
