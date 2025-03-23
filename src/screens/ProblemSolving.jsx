import React, { useRef,useEffect,useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
const ProblemSolving = () => {
    const tarRef = useRef(null)
    const {scrollYProgress} = useScroll({target:tarRef});
    const [data, setData] = useState(null);
    const [gfgdata, setgfgData] = useState(null);

    useEffect(() => {
      fetch("https://leetcode-stats-api.herokuapp.com/pratyushchauhan")
        .then((res) => res.json())
        .then((data) => {setData(data);console.log(data)})
        .catch((error) => console.error("Error fetching LeetCode data:", error));

       
 
    }, []);

    const x = useTransform(
        scrollYProgress,
        [0, 0.4],
        ['1%', "100%"]
      );
      

  return (
    <div data-scroll  ref={tarRef} className='relative '>
        <div id="landing" className=' sticky top-0 overflow-hidden '>
            <motion.h1   style={{x}} className='md:leading-[20vh]  text-amber-400 font-[anton] text-[8vw] text-nowrap' >PROGRAMMING  <span className='text-zinc-900'>SPARKS CREATIVITY.PROBLEM-SOLVING DRIVES GROWTH.SKILLS DEFINE SUCCESS</span>.</motion.h1>  
            <motion.h1  style={{x}} className='md:leading-[20vh]  text-amber-400 font-[anton] text-[8vw] text-nowrap' > PROBLEM-SOLVING  <span  className='text-zinc-900'>DRIVES GROWTH.SKILLS DEFINE SUCCESS.</span></motion.h1>  
            <motion.h1   style={{x}} className='md:leading-[20vh]  text-amber-400 font-[anton] text-[8vw] text-nowrap' >SKILLS <span  className='text-zinc-900'> DEFINE SUCCESS.</span></motion.h1>  
        </div>
        <div data-scroll data-scroll-speed="0.6" className=" z-20 fast h-[10vh] w-full bg-blue-200 mix-blend-difference "></div>
        
            <div data-scroll data-scroll-section data-scroll-speed="0" s className="h-screen bg-amber-500 mix-blend-difference  flex justify-around  items-center ">
                <div data-scroll className="bg-black h-[98%] w-1/2 rounded-xl flex flex-col justify-center items-center ">
                <motion.h1   className='  text-amber-500 font-[anton] text-[10vw] ' > { (!data)?"###":data.totalSolved+"+"}</motion.h1>
                <motion.h1   className='  text-amber-500 font-[anton] text-[3vw] ' > { (!data)?"Refreshing":"PROBLEM SOLVED"}</motion.h1>
                </div>


                <div data-scroll className=" h-[90%]  w-2/5 flex flex-col items-center  rounded-xl">
                <motion.h1 initial={{scale:0.3}} whileInView={{scale:1}}   className='  text-black font-[anton] text-[6vw] ' > LEETCODE</motion.h1>
                <div className='flex flex-col'>
                <motion.h1 initial={{scale:0.3}} whileInView={{scale:1}} className=' m-2 p-2 flex items-center justify-center bg-black text-amber-500 font-[anton] text-[3vw] ' > { (!data)?"Refreshing":data.easySolved+" Easy"}</motion.h1>
                <motion.h1 initial={{scale:0.3}} whileInView={{scale:1}} className=' m-2 p-2 flex items-center justify-center bg-black text-amber-500 font-[anton] text-[3vw] ' > { (!data)?"Refreshing":data.mediumSolved+" Medium"}</motion.h1>
                <motion.h1 initial={{scale:0.3}} whileInView={{scale:1}} className=' m-2 p-2 flex items-center justify-center bg-black text-amber-500 font-[anton] text-[3vw] ' > { (!data)?"Refreshing":data.hardSolved+" Hard"}</motion.h1>
                <motion.a  href='https://leetcode.com/u/pratyushchauhan/' initial={{scale:0.3}} whileHover={{scale:1.2}} transition={{type:"spring"}} whileInView={{scale:1}} className='  m-4 rounded-2xl p-2  flex items-center justify-center bg-blue-900 text-amber-500 font-[anton] text-[3vw] ' >Visit</motion.a>
                </div>
                
                </div>

            </div>
            <div data-scroll data-scroll-section data-scroll-speed="-3" s className=" relative h-screen bg-green-400 mix-blend-difference  flex justify-around  items-center ">
            <motion.h1 initial={{scale:0.3}} whileInView={{scale:1}} className=' m-2 p-2 flex items-center justify-center text-black font-[anton] text-[13vw] ' > Languages</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-1/3 top-1/5 m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' > C/C++</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-1/12 top-3/5 m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' > PYTHON</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-3/6 top-4/6 m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' > JAVA</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-[70%] top-[15%] m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' > JAVASCRIPT</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-[67%] top-[75%] m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' >CSS</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-[17%] top-[8%] m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' >HTML</motion.h1>
               

            </div>

            <div data-scroll data-scroll-section data-scroll-speed="0" s className=" relative h-screen bg-sky-400 mix-blend-difference  flex justify-around  items-center ">
            <motion.h1 initial={{scale:0.3}} whileInView={{scale:1}} className=' m-2 p-2 flex items-center justify-center text-black font-[anton] text-[13vw] ' >WEB DEVELOPMENT</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-1/3 top-1/5 m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' >REACT.JS</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-1/12 top-3/5 m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' >NEXT.JS</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-3/6 top-4/6 m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' >NODE.JS</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-[70%] top-[15%] m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' >DJANGO</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-[67%] top-[75%] m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' >MONGODB</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-[17%] top-[8%] m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' >EXPRESS</motion.h1>
               

            </div>


          


           
            
            
    
    </div>
  
  )
}

export default ProblemSolving
