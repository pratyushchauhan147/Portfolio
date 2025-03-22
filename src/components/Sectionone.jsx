import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Earth from "./earth";
const Sectionone = () => {
  const [rotate, setRotate] = useState(0);
  

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaY = mouseY - window.innerHeight / 4;
      let deltaX = mouseX - window.innerWidth * (1 / 4);
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle / 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); 

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className=" relative  h-[70vh] flex justify-center items-center">
      
      <div className=" flex justify-center  items-center gap-4 mt-[2vh] h-[70vh] w-[90vw] ">
        
      <motion.div initial={{y:"100px" ,opacity:0}} animate={{y:"0px" , opacity:1}}  className="overflow-hidden flex flex-row justify-end items-end   relative rounded-xl bg-blue-800 h-full ">
      
      <Earth className></Earth>
      <div className=" abi flex flex-col items-end  h-auto w-[90%]">
        


        <motion.div initial={{y:"100px" ,scale:0}} transition={{delay:.1}} animate={{y:"0px" , scale:1}} className="flex flex-row overflow-hidden">
          <h1  className="text-[#1335ae] text-[20vh] md:leading-[20vh] font-[anton] md:text-[20vh] ">HELLO!</h1>
          <h1 className=" text-[#2b4bc1] text-[20vh] md:leading-[20vh] font-[anton] md:text-[20vh] ">HELLO!</h1>
          <h1 className=" text-[#1335ae] text-[20vh] md:leading-[20vh] font-[anton] md:text-[20vh] ">HELLO!</h1>
          <motion.h1 initial={{color:"#1335ae"}} transition={{delay:.4}} animate={{color:"#ffffff"}} className="   md:leading-[20vh] font-[anton] text-[20vh] ">HELLO!</motion.h1>
        </motion.div>
        <motion.div className="flex flex-row overflow-hidden">
          <h1 className="text-[#1335ae] md:leading-[20vh] font-[anton] text-[10vw] ">IAM</h1>
          <h1 className=" text-[#2b4bc1] md:leading-[20vh] font-[anton] text-[10vw] ">IAM</h1>
          <h1 className=" text-[#102f9d] md:leading-[20vh] font-[anton] text-[10vw] ">IAM</h1>
          <h1 className=" text-[#1335ae] md:leading-[20vh] font-[anton] text-[10vw] ">IAM</h1>
          <h1 className=" text-[#2b4bc1] md:leading-[20vh] font-[anton] text-[10vw] ">IAM</h1>
          <h1 className=" text-[#1335ae] md:leading-[20vh] font-[anton] text-[10vw] ">IAM</h1>
          <motion.h1 initial={{color:"#1335ae"}} transition={{delay:.6}} animate={{color:"#ffffff"}}  className="  md:leading-[20vh] font-[anton] text-[10vw] ">IAM</motion.h1>
        </motion.div>
        <motion.img src="me2.webp" className=" z-0 absolute top-1/2 left-1/4 md:top-1/3 -translate-y-2/6 -translate-x-1/2 md:left-1/2 md:h-[40vw] h-[50vw]  " alt="" />  
        <motion.div className=" z-10 flex flex-row overflow-hidden">
          <h1 className="text-[#1335ae] leading-[20vh] text-nowrap font-[anton] text-[10vw] ">PRATYUSH CHAUHAN</h1>
          <h1 className=" text-[#2b4bc1] leading-[20vh] text-nowrap font-[anton] text-[10vw] ">PRATYUSH CHAUHAN</h1>
          <motion.h1 initial={{color:"#1335ae"}} transition={{delay:.8}} animate={{color:"#ffffff"}} className="  leading-[20vh] font-[anton] text-nowrap text-[10vw] ">PRATYUSH CHAUHAN</motion.h1>
        </motion.div>
      </div>
     
      


      </motion.div>
      
 
      </div>
      
      
        </div>
  );
};

export default Sectionone;
