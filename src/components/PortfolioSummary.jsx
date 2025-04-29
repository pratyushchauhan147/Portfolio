import React, { useRef,useEffect,useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
const PortfolioSummary = () => {

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
                [1,0.8,0.4,0],
                ['#000000',"#1a1a6e","#003d9e","#0046c7"]
              );
              const bg2 = useTransform(
                scrollYProgress,
                [0,0.2,0.4,0.6,0.8],
                ['#000000', "#0C5987","#34b8fa","#EBEBEB","#E0B684"]
              );
        

  return (
    <motion.div ref={tarRef} style={{backgroundColor:bg}} className=" text-white min-h-screen p-8 font-sans space-y-12  mb-12">
      {/* Introduction */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">RESUME</h1>
        <p className="text-gray-400">
          Full-Stack Developer & UI/UX Designer | KIIT CSE'26 | Design Lead @ IoT Lab
        </p>
        <div className="mt-4 space-x-4 text-sm text-blue-400">
          <a href="mailto:pratyushchauhan147@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/pratyush-chauhan-5245b722b/" target="_blank">LinkedIn</a>
          <a href="https://github.com/pratyushchauhan147" target="_blank">GitHub</a>
        </div>
      </section>

      {/* Education */}
      <motion.section initial={{opacity:0,y:"100%"}} whileInView={{opacity:1,y:"0%"}} transition={{duration:0.4}}>
        <motion.h2  initial={{y:"80%",opacity:0}}  whileInView={{y:0,opacity:1}} className="text-2xl font-semibold border-b border-gray-600 pb-2 mb-4">Education</motion.h2>
        <div>
          <p className="font-semibold">Kalinga Institute of Industrial Technology (2022 – 2026)</p>
          <p className="text-gray-400">B.Tech in Computer Science | CGPA: 8.3</p>
          <p className="text-gray-500 text-sm">OOPs in Java, DSA in C++, Design Analysis & Algorithm</p>
        </div>
        <div className="mt-4">
          <p className="font-semibold">City Montessori School (2019 – 2022)</p>
          <p className="text-gray-400">Intermediate: 94%, High School: 94.6%</p>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section initial={{opacity:0,y:"100%"}} whileInView={{opacity:1,y:"0%"}} transition={{duration:0.4}}>
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "JavaScript", "React.js", "Next.js", "EJS", "HTML/CSS",
            "Node.js", "Express.js", "Django", "Flask",
            "SQL", "MongoDB", "Mongoose",
            "Java", "C++", "Python"
          ].map((skill, idx) => (
            <motion.span initial={{scale:0}} whileInView={{scale:1}} transition={{delay:`${idx*0.1}`}} key={idx} className="bg-gray-800 px-4 py-1 rounded-full text-sm">{skill}</motion.span>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section initial={{opacity:0,y:"100%"}} whileInView={{opacity:1,y:"0%"}} transition={{duration:0.4}}>
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2 mb-4">Experience</h2>
        <div>
          <p className="font-semibold">UI/UX and Graphic Design Lead – IoT Lab, KIIT</p>
          <p className="text-gray-400 text-sm">Oct 2023 – Present</p>
          <ul className="list-disc list-inside text-gray-200 mt-1 text-sm">
            <li>Led design for 5+ events including Innovance 3.0, Encode 4.0</li>
            <li>Mentored juniors in web and graphic design</li>
          </ul>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Organizer – KIITFEST 8.0</p>
          <p className="text-gray-300 text-sm">Feb 2024 – Mar 2024</p>
          <ul className="list-disc list-inside text-gray-200 mt-1 text-sm">
            <li>Designed UI for Raiders Reckoning event app</li>
          </ul>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section initial={{opacity:0,y:"100%"}} whileInView={{opacity:1,y:"0%"}} transition={{duration:0.4}}>
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2 mb-4">Projects</h2>
        <ul className="space-y-2 text-white text-sm">
          <li>
            <a href="https://buzz-buy-gamma.vercel.app/about" target="_blank">
              BuzzBuy – E-commerce site for digital art (Node.js, MongoDB, EJS, Tailwind)
            </a>
          </li>
          <li>
            <a href="https://pratyushchauhan.pythonanywhere.com/" target="_blank">
              SecSoc – Anonymous chat room (Django, AJAX)
            </a>
          </li>
          <li>
            <a href="https://itinary-gen-with-gem.vercel.app/" target="_blank">
              GemTrav – AI Itinerary Generator (React, Gemini API, Framer Motion)
            </a>
          </li>
        </ul>
      </motion.section>

      {/* Certifications */}
      <motion.section initial={{opacity:0,y:"100%"}} whileInView={{opacity:1,y:"0%"}} transition={{duration:0.4}}>
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2 mb-4">Certifications</h2>
        <ul className="list-disc list-inside text-gray-100 text-sm">
          <li>
            <a href="https://www.hackerrank.com/certificates/da3c309883b7" target="_blank">Problem Solving (Intermediate) – HackerRank</a>
          </li>
          <li>
            <a href="https://www.hackerrank.com/certificates/9039a908fc58" target="_blank">Java (Basic) – HackerRank</a>
          </li>
          <li>
            <a href="https://www.coursera.org/learn/introduction-to-version-control" target="_blank">Version Control – Coursera</a>
          </li>
          <li>
            <a href="https://coursera.org/share/bb3d94af8c444c1b10476512697cc34a" target="_blank">Principles of UX/UI Design – Coursera</a>
          </li>
        </ul>
      </motion.section>
    </motion.div>
  );
};

export default PortfolioSummary;
