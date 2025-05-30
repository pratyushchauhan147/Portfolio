import React, { useRef,useEffect,useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import NavBlob from '../components/NavBlob'
import SkillSet from '../components/SkillSet';
const ProblemSolving = () => {
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
          
      }, []);
  
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
        [0, 0.2],
        ['1%', "100%"]
      );
      

  return (
    <div data-scroll  ref={tarRef} className='relative '>
      <NavBlob></NavBlob>
        <motion.div initial={{opacity:""}} id="landing" className=' sticky top-0 overflow-hidden mt-[5vh] md:block  hidden'>
            <motion.h1   style={{x:x}} className='md:leading-[20vh]   text-amber-400 font-[anton] text-[8vh] md:text-[8vw] text-nowrap' >PROGRAMMING  <span className='text-zinc-900  '>SPARKS CREATIVITY.PROBLEM-SOLVING DRIVES GROWTH.SKILLS DEFINE SUCCESS</span>.</motion.h1>  
            <motion.h1  style={{x}} className='md:leading-[20vh]  text-amber-400 font-[anton] text-[6vh] md:text-[8vw] text-nowrap' > PROBLEM-SOLVING  <span  className='text-zinc-900 '>DRIVES GROWTH.SKILLS DEFINE SUCCESS.</span></motion.h1>  
            <motion.h1   style={{x}} className='md:leading-[20vh]  text-amber-400 font-[anton] text-[8vh] md:text-[8vw] text-nowrap' >SKILLS <span  className='text-zinc-900 '> DEFINE SUCCESS.</span></motion.h1>  
        </motion.div>
         <div id="landing" className=' top-0 overflow-hidden mt-[6vh] block  md:hidden'>
          <h1 className='text-amber-400 text-center font-extrabold text-4xl p-4'>SKILLS</h1>

            </div>
        <div data-scroll data-scroll-speed="0.6" className=" z-20 fast hidden md:block h-[10vh] w-full bg-blue-200 mix-blend-difference "></div>
        
            <div data-scroll data-scroll-section data-scroll-speed="0" s className="h-screen bg-amber-500 mix-blend-difference flex md:flex-row p-[2vh]  flex-col justify-around  items-center ">
                <div data-scroll className="bg-black h-[98%] md:w-1/2 w-full rounded-xl flex flex-col  justify-center items-center ">
                <motion.h1   className='  text-amber-500 font-[anton] md:text-[10vw] text-[10vh] ' > { (!data)?"###":data.totalSolved+"+"}</motion.h1>
                <motion.h1   className='  text-amber-500 font-[anton] md:text-[3vw] text-[3vh] ' > { (!data)?"Refreshing":"PROBLEM SOLVED"}</motion.h1>
                </div>


                <div data-scroll className=" h-[90%]  w-2/5 flex flex-col items-center  rounded-xl">
                <motion.h1 initial={{scale:0.3}} whileInView={{scale:1}}   className='  text-black font-[anton] text-[6vw] ' > LEETCODE</motion.h1>
                <div className='flex md:flex-col flex-col justify-center items-center'>
                <motion.h1 initial={{scale:0.3}} whileInView={{scale:1}} className=' m-2 p-2 flex items-center justify-center bg-black text-amber-500 font-[anton] text-[3vh] w-full md:text-[3vw] ' > { (!data)?"Refreshing":data.easySolved+" Easy"}</motion.h1>
                <motion.h1 initial={{scale:0.3}} whileInView={{scale:1}} className=' m-2 p-2 flex items-center justify-center bg-black text-amber-500 font-[anton] text-[3vh] w-full md:text-[3vw] ' > { (!data)?"Refreshing":data.mediumSolved+" Medium"}</motion.h1>
                <motion.h1 initial={{scale:0.3}} whileInView={{scale:1}} className=' m-2 p-2 flex items-center justify-center bg-black text-amber-500 font-[anton] text-[3vh] w-full md:text-[3vw] ' > { (!data)?"Refreshing":data.hardSolved+" Hard"}</motion.h1>
                <motion.a  href='https://leetcode.com/u/pratyushchauhan/' initial={{scale:0.3}} whileHover={{scale:1.2}} transition={{type:"spring"}} whileInView={{scale:1}} className='  m-4 rounded-2xl p-2  flex items-center justify-center bg-blue-900 text-amber-500 font-[anton]  text-[3vh] w-full md:text-[3vw] ' >Visit</motion.a>
                </div>
                
                </div>

            </div>
            <div data-scroll data-scroll-section data-scroll-speed="" s className=" relative h-screen bg-green-400 mix-blend-difference  flex justify-around  items-center ">
            <motion.h1 initial={{scale:0.3}} whileInView={{scale:1}} className=' m-2 p-2 flex items-center justify-center text-black font-[anton] text-[13vw] ' > Languages</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-1/3 top-1/3 md:top-1/5 m-2 p-2 flex items-center justify-center text-black font-[anton]   text-[3vh] md:text-[5vw] ' > C/C++</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-1/12 top-3/5 m-2 p-2 flex items-center justify-center text-black font-[anton]   text-[3vh] md:text-[5vw] ' > PYTHON</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-3/6 top-4/6 m-2 p-2 flex items-center justify-center text-black font-[anton]   text-[3vh] md:text-[5vw] ' > JAVA</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute md:left-[70%] left-[30%] top-[20%] md:top-[15%] m-2 p-2 flex items-center justify-center text-black font-[anton]   text-[3vh] md:text-[5vw] ' > JAVASCRIPT</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-[67%] top-[75%] m-2 p-2 flex items-center justify-center text-black font-[anton]   text-[3vh] md:text-[5vw] ' >CSS</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-[10%] md:left-[17%] top-[6%] md:top-[8%] m-2 p-2 flex items-center justify-center text-black font-[anton]   text-[3vh] md:text-[5vw] ' >HTML</motion.h1>
               

            </div>

            <div data-scroll data-scroll-section data-scroll-speed="0" s className=" relative h-screen bg-sky-400 mix-blend-difference  flex justify-around  items-center ">
            <motion.h1 initial={{scale:0.3}} whileInView={{scale:1}} className=' m-2 p-2 flex items-center justify-center text-black font-[anton] text-[13vw] ' >WEB DEVELOPMENT</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-1/3 top-1/5 m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' >REACT.JS</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-1/12 top-3/5 m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' >NEXT.JS</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-3/6 top-4/6 m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' >NODE.JS</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-[70%] top-[15%] m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' >DJANGO</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-[67%] top-[75%] m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' >MONGODB</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-[17%] top-[8%] m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' >EXPRESS</motion.h1>
            <motion.h1   initial={{scale:0.3}} whileInView={{scale:1}} className=' absolute left-[17%] md:top-[80%] top-[40%] m-2 p-2 flex items-center justify-center text-black font-[anton] text-[5vw] ' >FIREBASE</motion.h1>
               

            </div>

            <SkillSet></SkillSet>
            <div className='h-[40vh] w-full'>
          

              

            </div>

  


          


           
            
            
    
    </div>
  
  )
}

export default ProblemSolving
