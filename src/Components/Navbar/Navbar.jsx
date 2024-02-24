import React from "react"
import "./Navbar.css"
import {Link} from "react-scroll";
import Toggle from "../Toggle/Toggle.jsx"

const Navbar = () =>{
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">
                    CHANDRAKANT <br></br>GORAIN
                </div>
                <Toggle/>
                </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
                        <li className="list" >Home</li>
                        </Link>
                        <Link spy={true} to="Services" smooth={true} ><li className="list">Services</li></Link>
                        <Link spy={true} to="Experience" smooth={true} >
                        <li id="list1">Experience</li>
                        </Link>             
                        
                        <li className="list">Portfolio</li>
                        <li className="list">Testimonials</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact us
                </button>
            </div>
        </div>
    )
}
export default Navbar
