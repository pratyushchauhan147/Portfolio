import React from 'react'
import Home from '../screens/Home'
import ProblemSolving from '../screens/ProblemSolving'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Projects from '../screens/Projects'
import { useScroll, useTransform } from 'framer-motion'
const AppRoutes = () => {
  useScroll
  return (
    <div><BrowserRouter>
    <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/ps'  element={<ProblemSolving/>} />
        <Route path='/projects'  element={<Projects/>} />
    </Routes>
    </BrowserRouter></div>
    
  )
}

export default AppRoutes

//orace and aws 
//node js 
// django
//