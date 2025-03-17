import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <div className="px-4 h-[70vh] flex justify-between items-center">
      <div>

        <div
          style={{ transform: `rotate(-${rotate}deg)` }}
          className="h-[28vw] w-[28vw] bg-blue-800">
        </div>
      </div>

      <div className="flex flex-col h-[28vw] w-[60vw] items-center gap-5 scale-[0.9] justify-center mr-8">
        <motion.h1
          initial={{ opacity: 0, x: -250 ,letterSpacing:'-50px'}}
          animate={{ opacity: 1, x: 0 ,letterSpacing:'0px'}}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className="leading-[100%] p-4 text-white font-[poppins] font-thin text-[7vw]"
        >
          Hello!
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.8 ,delay:0.4}}

          className="leading-[100%] text-white font-[poppins] font-thin text-[5vw]"
        >
          I AM
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 1 ,delay:.5}}
          className="leading-[100%] text-white font-[poppins] font-thin text-[5vw]"
        >
          PRATYUSH CHAUHAN
        </motion.h1>
      </div>
    </div>
  );
};

export default Sectionone;
