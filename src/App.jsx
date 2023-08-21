import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './pages/about'
import Contact from './pages/contact'
import Portolio from './pages/portfolio'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/portfolio' element={<Portolio/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
