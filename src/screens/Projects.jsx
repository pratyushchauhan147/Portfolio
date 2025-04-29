import React, { useRef,useEffect,useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import Work from '../components/Work';
import NavBlob from '../components/NavBlob'
import Whitework from '../components/Whitework';

const Projects = () => {
    

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    }, []);


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
        <motion.div data-scroll id="project_top"      
       // style={{background:`linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)`}}   
            className="relative  overflow-hidden  bg-fixed bg-black"ref={tarRef} 
        >
            <NavBlob></NavBlob>
            <motion.div data-scroll data-scroll-to className="h-screen overflow-hidden">
                <div   className=" tatbox w-full h-full z-10 flex flex-col justify-center items-center text-white">
                    <motion.h1 style={{opacity:blurr, scale}}  className=" tat text-4xl font-bold mb-4">
                        MY WORK AND PROJECTS
                    </motion.h1>
                    <p className="text-xl">
                        Scroll to explore the journey
                    </p>
                </div>


            </motion.div>

            <motion.div initial={{x:'-100%'}} whileInView={{x:'0%'}} transition={{type:"linear"}} className='bg-white w-[100wv] flex justify-center items-center mt-4  p-2  h-[50vh]'>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}}  transition={{delay:0.1}} className='h-[37vh] w-[37vh] ' src="iotlab2.png" alt="" />
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}}  transition={{delay:0.2}} className='w-4/5 h-[100%] rounded-2xl  p-2 border-2 border-zinc-300 '>
                <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.22}}  className='text-zinc-800 text-[3vw] font-[anton]'>UI/UX Team Lead <span className='font-[poppins] text-zinc-500'>at <span className='text-blue-400'>IoT Lab,</span>KIIT</span></motion.h1>
                <motion.p  initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.24}} className='text-zinc-800 text-[1.5vw] font-[poppins]'>I joined IoT Lab as a Graphic Designer and UI/UX Designer in February 2023, and I now lead the design team. Over the past year, I have contributed to numerous events and have successfully led the design team for 5+ flagship events. This experience has provided me with valuable insights into team collaboration, project execution, and leadership in a dynamic environment. </motion.p>
                </motion.div>

            </motion.div>
            <Whitework direction={'100%'} image={'kiitfest.jpg'} title={"Organizer"} text={""} under={"KIITFEST8.0"} ></Whitework>

           <div  data-scroll className="flex flex-row flex-wrap justify-center items-center m-[10vh] ">
                <div >
                <Work projectName="BuzzBuy" projectIs="E-commerce" projectDesc="A clean E-commerce website of a Digital Painting Store for both customers and owner the site uses
                 For Front-end it uses : Embedded JavaScript , Tailwind CSS
                 For Back-end it uses : Nodejs , Express.js , Mongoose , MongoDB" projectImage="buzzbuy.png" ></Work>
                </div>

                <div >


                <Work projectName="GemTrav" projectIs="Itinarary Generator" projectDesc=" A dynamic and animated website that generates travel itinerary using Gemini API.• Technologies: React.js, Framer-motion, JavaScript, Gemini API" projectImage="gemtrav2.png" ></Work>



                </div>

                <div >
                <Work projectName="SecSoc" projectIs="Chat Room" projectDesc="An anonymous chat room where people with the same room code can communicate, made with basics of Web Development.• Front-end: HTML/CSS, JavaScript, AJAX for real-time updates• Back-end: Django, Python" projectImage="secsoc.png" ></Work>
                </div> 

                <div >
                <Work projectName="SecSoc" projectIs="Chat Room" projectDesc="An anonymous chat room where people with the same room code can communicate, made with basics of Web Development.• Front-end: HTML/CSS, JavaScript, AJAX for real-time updates• Back-end: Django, Python" projectImage="secsoc.png" ></Work>
                </div> 
            </div>



        
            
            
            


           
            
            
           

        </motion.div>
    )
}

export default Projects