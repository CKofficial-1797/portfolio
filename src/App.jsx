import { useState ,useContext} from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Intro from "./Components/Intro/Intro.jsx";
import Services from "./Components/Services/Services.jsx"
import Experience from "./Components/Experience/Experience.jsx";
import Work from "./Components/Works/Works.jsx"
import Portfolio from "./Components/Portfolio/Portfolio.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import {themeContext} from "./Context.jsx"
function App() {
  const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;
    return(

    <div className ="App" style={{
      background : darkMode? 'black':"",
      color: darkMode? "white":"",
    }}>
  
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    
    <Work/>
    <Portfolio/>
    <Footer/>
    </div>
  
  )
  
}

export default App
