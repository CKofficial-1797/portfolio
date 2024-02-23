import React from 'react'
import "./Services.css"
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from "../Card/Card"
import Resume from "./Resume.pdf"

const Services =()=>{
    return(
        <div className="services">
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
                <div style={{
                    left: "14rem"
                }}>
                    <Card emoji={HeartEmoji}
 heading={"Design"}
 detail={"Figma, Sketh , PhotoShop,Adobe ,Adobe xd"}
                    />
                </div>
                {/* second card */}
        <div style ={{top: "12rem", left:"-4rem"}}>
            <Card 
            emoji ={Glasses}
            heading ={"Developer"}
            detail={"Html,Css,JavaScript,React"}
            />
        </div>
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
