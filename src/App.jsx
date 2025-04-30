import React, { useEffect, useRef } from 'react';
import AppRoutes from './routes/AppRoute'
import './App.css'
import LocomotiveScroll from 'locomotive-scroll';
import { AnimatePresence } from "framer-motion";


const App = () => {
  const scrollRef = useRef(null);
  const locoScrollRef = useRef(null);
  useEffect(()=>{

  })
  useEffect(() => {
    // Only initialize once
    locoScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
      tablet: { smooth: true },
      smartphone: { smooth: true }
    });

    return () => {
      locoScrollRef.current?.destroy();
    };
  }, []);

  
  return (
    
      <AnimatePresence> <   AppRoutes  ref={scrollRef} /></AnimatePresence>
       
    
  )
}

export default App
