import React, { useRef,useEffect,useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import Work from '../components/Work';
import NavBlob from '../components/NavBlob'
import Whitework from '../components/Whitework';
import { useNavigate } from 'react-router-dom';
const Projects = () => {
    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        
        
    }, []);
    useEffect(() => console.log('Hi '), [])


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
            <Whitework direction={'-100%'} image={'iotlab2.png'} title={"UI/UX Team Lead"} text={"I joined IoT Lab as a Graphic Designer and UI/UX Designer in February 2023, and I now lead the design team. Over the past year, I have contributed to numerous events and have successfully led the design team for 5+ flagship events. This experience has provided me with valuable insights into team collaboration, project execution, and leadership in a dynamic environment."} under={"IoT Lab,"} ></Whitework>
            <Whitework direction={'100%'} image={'kiitfest.jpg'} title={"Organizer"} text={"I worked as a Technical Organiser for KIITFEST 8.0 in 2025, where I was part of the Organising Committee responsible for planning and managing various technical events. My role involved coordinating event logistics, assisting with technical setups, and ensuring smooth execution during competitions and workshops. This experience helped me develop strong teamwork, communication, and problem-solving skills while working under tight deadlines during one of KIIT's largest techno-management fests."} under={"KIITFEST8.0"} ></Whitework>

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
                <Work projectName="CityCast" projectIs="Weather Forecast Dashboard" projectDesc="A simple Minimal Weather Dashboard made by Pratyush Chauhan , This Page uses OpenWeather APIs with React + Vite as well as Tailwind css , added animations using Framer Motion" projectImage="weather.png" ></Work>
                </div> 
            </div>



        
            
            
            


           
            
            
           

        </motion.div>
    )
}

export default Projects