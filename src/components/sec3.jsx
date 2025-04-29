import React from 'react'
import { scroll } from "motion"
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
const Sec3 = () => {
    let navigate = useNavigate();
  return (
    <div>
        <div className='w-full  mt-5 '>
            <div data-scroll  data-scroll-speed="0" className="top flex items-center justify-center  mix-blend-exclude ">
                <motion.div initial={{scale:0,opacity:0}} whileHover={{scale:1.05,backgroundColor:"#4a4aff"}} onClick={()=>{navigate('/projects')}}  whileInView={{scale:1 , opacity:1}} className='w-[40%] rounded-2xl  h-[20vw] m-2  flex justify-center  items-center bg-white'> <h1 className=' font-[anton] text-[5vw] text-black'>PROJECTS</h1></motion.div>
                <motion.div initial={{scale:0,opacity:0}} whileInView={{scale:1 , opacity:1}} className='w-[10%] rounded-2xl  h-[20vw] m-2 bg-yellow-400'></motion.div>
                <motion.div initial={{scale:0,opacity:0}} whileInView={{scale:1 , opacity:1}} className='w-[30%] rounded-2xl  h-[20vw] m-2 bg-white'></motion.div>
            </div>
            <div data-scroll  data-scroll-speed="0" className="top flex justify-center ">
                <motion.div initial={{scale:0,opacity:0}} whileInView={{scale:1 , opacity:1}} className='w-[20%] rounded-2xl h-[20vw] m-2  bg-white'></motion.div>
                <motion.a href='/ps' whileHover={{scale:1.05,backgroundColor:"#a867e6"}}  initial={{scale:0,opacity:0}} whileInView={{scale:1 , opacity:1}} className='w-[40%] rounded-2xl  h-[20vw] m-2  flex justify-center  items-center bg-white'> <h1 className=' font-[anton] text-[5vw] text-black'>SKILLS</h1></motion.a>
                <motion.div initial={{scale:0,opacity:0}} whileInView={{scale:1 , opacity:1}} className='w-[20%] rounded-2xl  h-[20vw] m-2 bg-red-400'></motion.div>
            </div>

            <div data-scroll  data-scroll-speed="0" className="top flex justify-center ">
                <motion.div initial={{scale:0,opacity:0}} whileInView={{scale:1 , opacity:1}} className='w-[10%] rounded-2xl h-[20vw] m-2  bg-blue-400'></motion.div>
                <motion.a href='/ps' initial={{scale:0,opacity:0}}  whileHover={{scale:1.05,backgroundColor:"#63ff92"}}   whileInView={{scale:1 , opacity:1}} className='w-[50%] rounded-2xl  h-[20vw] m-2  flex justify-center  items-center bg-white'> <h1 className=' font-[anton] text-[5vw] text-black'>PROBLEM SOLVING</h1></motion.a>
                <motion.div initial={{scale:0,opacity:0}} whileInView={{scale:1 , opacity:1}} className='w-[20%] rounded-2xl  h-[20vw] m-2 bg-white'></motion.div>
            </div>
            

        </div>
      
    </div>
  )
}

export default Sec3
