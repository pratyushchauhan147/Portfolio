import React, { useRef,useEffect,useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import Work from '../components/Work';

const Whitework = (props) => {
     const tarRef = useRef(null)
        const {scrollYProgress} = useScroll({target:tarRef});
         const blurr = useTransform(
                scrollYProgress,
                [0, 0.2],
                ['1', "0"]
              );
              const scale = useTransform(
                scrollYProgress,
                [0, 0.2],
                ['1', "8"]
              );
              const bg = useTransform(
                scrollYProgress,
                [0,0.2,0.4,0.6,0.8],
                ['#000000', "#0C5987","#34b8fa","#EBEBEB","#E0B684"]
              );
              const bg2 = useTransform(
                scrollYProgress,
                [0,0.2,0.4,0.6,0.8],
                ['#000000', "#0C5987","#34b8fa","#EBEBEB","#E0B684"]
              );
  return (

    <div ref={tarRef}>
        <motion.div initial={{x:props.direction}} whileInView={{x:'0%'}} transition={{type:"linear"}} className='bg-white w-[100wv] flex justify-center items-center mt-4  p-2  h-[50vh]'>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}}  transition={{delay:0.1}} className='h-[37vh] w-[37vh] m-2 rounded-full ' src={props.image}  alt="" />
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}}  transition={{delay:0.2}} className='w-4/5 h-[100%] rounded-2xl  p-2 border-2 border-zinc-300 '>
                <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.22}}  className='text-zinc-800 text-[3vw] font-[anton]'>{props.title}<span className='font-[poppins] text-zinc-500'> at <span className='text-blue-400'>{props.under},</span>KIIT</span></motion.h1>
                <motion.p  initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.24}} className='text-zinc-800 text-[1.5vw] font-[poppins]'>{props.text}</motion.p>
                </motion.div>

            </motion.div>
      
    </div>
  )
}

export default Whitework
