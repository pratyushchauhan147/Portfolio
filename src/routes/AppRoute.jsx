import React from 'react'
import Home from '../screens/Home'
import ProblemSolving from '../screens/ProblemSolving'
import { Route,BrowserRouter,Routes,useLocation } from 'react-router-dom'
import Projects from '../screens/Projects'
import MyJourney from '../screens/MyJourney'
import StaticHome from '../screens/StaticHome'
import { useScroll, useTransform } from 'framer-motion'
import ContactMe from '../screens/ContactMe'
const AppRoutes = () => {
  useScroll
  return (
    <div><BrowserRouter>
    <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/ps'  element={<ProblemSolving/>} />
        <Route path='/projects'  element={<Projects/>} />
        <Route path='/contact'  element={<ContactMe/>} />
        <Route path='/static'  element={<StaticHome/>} />
        <Route path='/myjourney'  element={<MyJourney/>} />
    </Routes>
    </BrowserRouter></div>
    
  )
}

export default AppRoutes

//orace and aws 
//node js 
// django
//