import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Intro from "./Components/Intro/Intro.jsx";
import Services from "./Components/Services/Services.jsx"
import Experience from "./Components/Experience/Experience.jsx";
import Work from "./Components/Works/Works.jsx"
import Portfolio from "./Components/Portfolio/Portfolio.jsx"
import Footer from "./Components/Footer/Footer.jsx"
function App() {
  
  return(
    <>
  
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    
    <Work/>
    <Portfolio/>
    <Footer/>
    </>
  
  )
  
}

export default App
