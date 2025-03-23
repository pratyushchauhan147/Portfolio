import React from 'react'
import Home from '../screens/Home'
import ProblemSolving from '../screens/ProblemSolving'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import { useScroll, useTransform } from 'framer-motion'
const AppRoutes = () => {
  useScroll
  return (
    <div><BrowserRouter>
    <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/ps'  element={<ProblemSolving/>} />
    </Routes>
    </BrowserRouter></div>
    
  )
}

export default AppRoutes