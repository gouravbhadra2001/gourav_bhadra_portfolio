import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Dynamic/Home/Home'
import About from '../../Dynamic/About/About'
import Contact from '../../Dynamic/Contact/Contact'
import Education from '../../Dynamic/About/Education/Education'
import Projects from '../../Dynamic/Projects/Projects'
import Skills from '../../Dynamic/About/Skills/Skills'
import Certificates from '../../Dynamic/About/Certificates/Certificates'



const Main = () => {
  return (
    <div className='main'>
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
       
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default Main
