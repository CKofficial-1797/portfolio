import React from 'react'
import "./Services.css"
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from "../Card/Card"
import Resume from "./Resume.pdf"
import {motion} from "framer-motion"

const Services =()=>{
    const transition ={duration:2,type: 'spring'}
    return(
        <div className="services" id="Services">
            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere esse impedit, dolorem <br/>laudantium rem suscipit voluptatibus velit hic, fugit accusantium placeat, voluptas fugiat?</span>
                <a href={Resume} download>

                <button className="button s-button">Download CV</button>
                </a>

                <div className="blur s-blur1" style={{ background: "#ABF1FF9",}}> 
                </div>
            </div>
                {/* right side */}
            <div className="cards">
                <div
                // initial={{left:"25%" }}
                // whileInView={{left:"25rem"}}
                
                style={{
                    left: "14rem"
                }}>
                    <Card emoji={HeartEmoji}
 heading={"Design"}
 detail={"Figma, Sketh , PhotoShop,Adobe ,Adobe xd"}
                    />
                </div>
                {/* second card */}
        <motion.div
        whileInView={{left:"1rem", top:"12rem"}}
        initial={{left: '15%'}}
        transition={transition}
        style ={{top: "12rem", left:"-4rem"}}>
            <Card 
            emoji ={Glasses}
            heading ={"Developer"}
            detail={"Html,Css,JavaScript,React"}
            />
        </motion.div>
        {/* 3rd Card */}
        <div style={{ top: "23rem",left: "16rem"}}>
            <Card emoji={Humble}
            heading={"UI/UX"}
            detail={
                'UI/UX enthusiast learning and developing new creative interfaces '
            }/>
        </div>
        <div className="blur s-blur2" style={{background: "rgba(150,70,34,0.3)"}}></div>

            </div>          
        </div>
    )
}
export default Services
