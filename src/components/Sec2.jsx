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
      <div className="  relative p-3 w-[100vw] h-[60vh] flex bg-white" >
        <div className=' w-1/2 text-[7vw] font-[anton] text-zinc-900 flex flex-col '><h1 className=''>Designing </h1> <p className=' md:text-[1.5vw] text-[2vh] w-2/3 text-justify'>I specialize in designing web pages, mobile interfaces, and UI, creating visually appealing, intuitive, and user-friendly experiences. With a focus on responsive layouts, clean aesthetics, and seamless navigation, I aim to deliver designs that enhance both usability and visual impact.</p></div>
        <div className='  w-1/2 text-[7vw] font-[anton] text-zinc-900 flex flex-col  justify-end items-end '>  <p className='  md:text-[1.5vw] text-[2vh] w-2/3 text-justify'>As a Full-Stack Developer, I build dynamic and scalable web applications with clean, efficient, and maintainable code. I specialize in both front-end and back-end development, ensuring seamless functionality, performance, and a smooth user experience. My goal is to create reliable and high-performing digital products.</p> <h1 className=''>DeVelopment </h1> </div>
        <motion.div ref={targetRef} style={{rotate:rotate ,bottom:slide}} className=' absolute left-1/2 bottom-0 -translate-x-[50%]  -translate-y-[50%] bg-white w-[120%] h-[30vh] md:h-[40vh] mix-blend-difference'>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Sec2
