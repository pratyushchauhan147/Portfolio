import React, { useRef,useEffect,useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
const skills = [
    { name: "Java/OOPs", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "C/C++", level: 80 },
    { name: "Python", level: 70 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 75 },
  ];
const SkillSet = () => {
    return (
        <motion.div className=" text-white p-8 rounded-2xl w-[80vw] mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Skill Set</h2>
          <div className="space-y-5">
            {skills.map((skill, index) => (
              <div  key={index}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <motion.div  initial={{width:0}}  whileInView={{width: `100%`}}  className="w-full h-3 bg-gray-700 rounded-full">
                  <motion.div
                  initial={{width:0}} whileInView={{width: `${skill.level}%`}} transition={{delay:0.2}}
                    className="h-3  bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      );
    };

export default SkillSet
