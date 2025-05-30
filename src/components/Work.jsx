import React, { useRef } from 'react';
import { delay, motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const Work = (props) => {
    const tarRef = useRef(null)
    let navigate = useNavigate();
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
  return (
    <div data-scroll className='p-4 w-[80vw] h-[58vh] md:w-[25vw] md:h-[40vw] mt-10 mix-blend-difference' >
        <a href={props.url} target='new' className='w-full h-full'>
            <motion.div  initial={{rotate:"0deg" ,scale:0.3,filter: "blur(40px)",backgroundColor:"#007e8a"}} whileHover={{rotate:"0deg",backgroundColor:"#222222"}} transition={{delay:"0", type:"spring"}} whileInView={{rotate:"10deg" ,filter:"blur(0px)" , scale:1}}  className="bg-red-600 p-2 h-[90%] rounded-2xl w-full">
                <h1 className='font-[anton] text-[6vw] md:text-[6vh]'>{props.projectName}</h1>
                <h1 className='font-[anton] text-[3vh]'>{props.projectIs}</h1>
                <div className='mt-[2vh]'>
                <img className=' w-full rounded-xl ' src={props.projectImage} alt="" />
                  
                   <p className='font-[poppins]  md:text-[2.5vh] text-[1.5vh]'> {props.projectDesc} </p>

                
                </div>
               
            </motion.div>

        </a>
        

      
    </div>
  )
}

export default Work
