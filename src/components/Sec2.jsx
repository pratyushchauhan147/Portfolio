import React from 'react'
import{ motion, transform, useMotionValue, useMotionValueEvent, useScroll }from 'framer-motion'
import { useTransform } from "motion/react"
import { scroll } from "motion"
import { useEffect,useState ,useRef } from 'react'
import './st1.css'
const Sec2 = (props) => {
   
        const targetRef= useRef(null)
        const {scrollYProgress} = useScroll({target:targetRef})
        useMotionValueEvent(scrollYProgress,'change')
        const rotate =  useTransform(scrollYProgress, [1,0],["180deg","0deg"])
        const slide =  useTransform(scrollYProgress, [1,0],["0","100"])

   
    
  return (
    <motion.div data-scroll  data-scroll-speed="0" initial={{opacity:0}} whileInView={{opacity:1}} className='w-full overflow-hidden flex justify-center items-center'>
      <div className="  relative p-3 w-[100vw] h-[50vh] flex bg-white" >
        <h1 className=' absolute top-2 left-2 text-[15vh] font-[anton] text-zinc-900'> Designing </h1>
        <h1 className=' bottom-2 right-2 absolute text-[15vh] font-[anton] text-zinc-900'> Development </h1>
        <motion.div ref={targetRef} style={{rotate:rotate ,bottom:slide}} className=' absolute left-1/2 bottom-0 -translate-x-[50%]  -translate-y-[50%] bg-white w-[120%] h-[30vh] md:h-[40vh] mix-blend-difference'>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Sec2
