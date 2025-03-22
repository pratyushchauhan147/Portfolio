import React from 'react'
import{ motion, transform }from 'framer-motion'
import { useEffect,useState } from 'react'
const Marque = () => {
    const [wx, setwx] = useState(0);
    const [wy, setwy] = useState(0);
    useEffect(() => {
      window.addEventListener("mousemove", (e)=>{
        const speed = 0.03; // Adjust speed for smoother movement
        let mouseX = e.clientX - window.innerWidth / 3; // Center-based calculations
        let mouseY = e.clientY - window.innerHeight / 3;
  
        setwx(mouseX * speed);
        setwy(mouseY * speed);
          
  
      })
      
     
  });
  return (
    <motion.div data-scroll data-scroll-section data-scroll-speed="." initial={{opacity:0 }}  transition={{delay:.3}}animate={{opacity:1}} className='overflow-hidden whitespace-nowrap  w-full  '>
        <div className='relative'>
        <div data-speed={20} style={{transform:`translate(-${wx}px,-${wy}px) ` }}  className="z-[1] w-[20vw] h-[15vh] bg-blue-800 absolute top-10 left-3/4 mix-blend-difference"></div>
        <div data-speed={20} style={{transform:`translate(${wx}px,${wy}px) ` }}  className="z-[1] w-[10vw] h-[20vh] bg-blue-800 absolute top-20 left-1/4 mix-blend-difference"></div>
        </div>
        
      <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='  text-blue-800 font-[anton]  text-[12vw]'> A JOURNEY OF DESIGNING AND DEVELOPING WEBSITES </motion.h1>
   
    </motion.div>
  )
}

export default Marque
