import React from 'react'
import { motion } from 'framer-motion'
const Sec3 = () => {
  return (
    <div>
        <div className='w-full  mt-5 '>
            <div data-scroll  data-scroll-speed="0" className="top flex items-center justify-center  mix-blend-exclude ">
                <motion.div initial={{scale:0,opacity:0}} whileInView={{scale:1 , opacity:1}} className='w-[40%] rounded-2xl  h-[20vw] m-2  flex justify-center  items-center bg-white'> <h1 className=' font-[anton] text-[10vh] text-black'>PROJECTS</h1></motion.div>
                <motion.div initial={{scale:0,opacity:0}} whileInView={{scale:1 , opacity:1}} className='w-[10%] rounded-2xl  h-[20vw] m-2 bg-yellow-400'></motion.div>
                <motion.div initial={{scale:0,opacity:0}} whileInView={{scale:1 , opacity:1}} className='w-[30%] rounded-2xl  h-[20vw] m-2 bg-white'></motion.div>
            </div>
            <div data-scroll  data-scroll-speed="0" className="top flex justify-center ">
                <motion.div initial={{scale:0,opacity:0}} whileInView={{scale:1 , opacity:1}} className='w-[20%] rounded-2xl h-[20vw] m-2  bg-white'></motion.div>
                <motion.div initial={{scale:0,opacity:0}} whileInView={{scale:1 , opacity:1}} className='w-[40%] rounded-2xl  h-[20vw] m-2 bg-white'></motion.div>
                <motion.div initial={{scale:0,opacity:0}} whileInView={{scale:1 , opacity:1}} className='w-[20%] rounded-2xl  h-[20vw] m-2 bg-red-400'></motion.div>
            </div>

            <div data-scroll  data-scroll-speed="0" className="top flex justify-center ">
                <motion.div initial={{scale:0,opacity:0}} whileInView={{scale:1 , opacity:1}} className='w-[10%] rounded-2xl h-[20vw] m-2  bg-green-400'></motion.div>
                <motion.div initial={{scale:0,opacity:0}} whileInView={{scale:1 , opacity:1}} className='w-[50%] rounded-2xl  h-[20vw] m-2 bg-white'></motion.div>
                <motion.div initial={{scale:0,opacity:0}} whileInView={{scale:1 , opacity:1}} className='w-[20%] rounded-2xl  h-[20vw] m-2 bg-white'></motion.div>
            </div>

        </div>
      
    </div>
  )
}

export default Sec3
