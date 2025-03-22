import React, { useEffect, useState } from "react";

const Earth = () => {
    const [rotate, setRotate] = useState(0);
     const [wx, setwx] = useState(0);
        const [wy, setwy] = useState(0);
    
      useEffect(() => {
        const handleMouseMove = (e) => {
          let mouseX = e.clientX;
          let mouseY = e.clientY;
          let deltaY = mouseY - window.innerHeight*(1/2);
          let deltaX = mouseX - window.innerWidth *(1/2);
          let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
          let moon = (mouseX/5)
          setwx(moon)
          setRotate(angle);
        };
    
        window.addEventListener("mousemove", handleMouseMove);
    
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }, []); 
    
  return (
    <div>
      
      
      <div className='absolute top-1/5 left-0 -translate-1/2 h-[12vw] w-[12vw] rounded-full bg-blue-700'>
        <div style={{transform:`rotate(${rotate}deg)`}} className="relative top-1/2 left-1/2 -translate-1/2 w-[100%]  ">
        <div  style={{transform:`translate(50%,50%)`}} className=' absolute h-[3vw] w-[3vw] rounded-full bg-yellow-400'></div>
        </div>

        <div style={{transform:`rotate(${-rotate}deg)`}} className="relative top-1/2 left-1/2 -translate-1/2 w-[100%]  ">
        <div  style={{transform:`translate(200%,20%)`}} className=' absolute h-[2vw] w-[2vw] rounded-full bg-black '></div>
        </div>

        <div style={{transform:`rotate(${-rotate}deg)`}} className="relative top-1/2 left-1/2 -translate-1/2 w-[100%]  ">
        <div  style={{transform:`translate(200%,100%)`}} className=' absolute h-[1vw] w-[1vw] rounded-full bg-white'></div>
        </div>

        <div style={{transform:`rotate(${-rotate}deg)`}} className="relative top-1/2 left-1/2 -translate-1/2 w-[100%]  ">
        <div  style={{transform:`translate(300%,60%)`}} className=' absolute h-[2.4vw] w-[2.4vw] rounded-full bg-green-400'></div>
        </div>
      </div>
      
    </div>
  )
}

export default Earth
