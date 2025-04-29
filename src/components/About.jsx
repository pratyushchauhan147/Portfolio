import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
    const scrollRef = useRef(null);   // Ref for the scrolling content
    const boxRef = useRef(null);
    const boxRef2 = useRef(null);

    // Scroll tracking for the content
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"]
    });

    // Transformations
    const height1 = useTransform(scrollYProgress, [0, 1], ["0px", "700px"]);  
    const height2 = useTransform(scrollYProgress, [0, 1], ["100px", "700px"]);  
    const rotate = useTransform(scrollYProgress, [0, 1], ["-5deg", "5deg"]); 

    return (
        <div data-scroll data-scroll-speed="0" className="relative md:min-h-screen h-auto mt-5  bg-blue-800 flex flex-col items-center justify-center">
            
       
            <motion.div 
                ref={boxRef} 
                style={{ height:height1 }}  
                className="absolute top-0 left-[10%] w-[10vw] mix-blend-exclusion md:mix-blend-normal bg-white"
            />
            <motion.div 
                ref={boxRef2} 
                style={{ height:height2 }}  
                className="absolute top-0 left-[80%] w-[10vw] bg-white  mix-blend-exclusion md:mix-blend-normal"
            />
            
            <h1 className="text-[8vh] font-[anton] text-white">About Me</h1>

            
            <motion.div 
                ref={scrollRef}
                style={{ rotate }}
                className="  px-[5vw] py-[5vh] text-justify md:text-[1.5vw] text-[3vw] font-[poppins] text-white max-w-[800px]"
            >
                I am a passionate Full-Stack Developer currently pursuing my Computer Science Engineering degree at KIIT University. With a strong foundation in both front-end and back-end technologies, I enjoy building dynamic, scalable, and user-friendly web applications.

                I completed my schooling at City Montessori School, Lucknow, where my interest in technology first sparked. Over time, I honed my skills by working on various projects, gaining hands-on experience in web development, UI/UX design, and problem-solving.

                Apart from coding, I have a creative side and enjoy crafting intuitive user experiences through sleek and functional designs. I’m always eager to explore new technologies, collaborate on innovative projects, and contribute to open-source initiatives.
            </motion.div>
        </div>
    );
};

export default About;
