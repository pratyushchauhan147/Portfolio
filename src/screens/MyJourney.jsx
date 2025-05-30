import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import NavBlob from "../components/NavBlob";
export default function MyJourney() {
  const { scrollYProgress } = useScroll();

  // Animation transforms
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  const timeline = [
    {
      title: "Started B.Tech in CDE",
      period: "2022",
      description: "Began undergraduate studies in Computer and Data Engineering with a focus on software fundamentals and data-driven technologies."
    },
    {
      title: "Joined IoT Lab as UI/UX Designer",
      period: "Feb 2023",
      description: "Worked on various design projects, led design team for 5+ flagship events, and enhanced UI/UX skills in real-world scenarios."
    },
    {
      title: "Built Full-Stack Projects",
      period: "2023-2024",
      description: "Developed projects like Adore (social media platform), Rouler (trainer-trainee platform), and BuzzBuy (e-commerce store) using MERN, Next.js, and Firebase."
    },
    {
      title: "Explored AI Automation",
      period: "2024-2025",
      description: "Started building AI assistants for PC automation using Ollama, GPT, and Python, combining screen analysis with instruction-following."
    },
    {
      title: "Ready for Software Engineering Roles",
      period: "2025",
      description: "Actively seeking roles that value strong fundamentals, full-stack development, system design, and AI integration skills."
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-8">
        <NavBlob></NavBlob>
     <h1 className="text-2xl font-[poppins]" >Still Exploring....</h1>
    
    </div>
  );
} 
