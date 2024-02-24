import React from "react";
import "./Works.css"
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import {motion} from "framer-motion"

const Works=()=>{
    return (
        <div className="works">
             {/* left side */}
             <div className="awesome">
                <span>Works for All these </span>
                <span>Brands & Client</span>
                <span>Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit.Facere esse impedit, dolorem <br/>laudantium rem suscipit voluptatibus velit hic,<br/> fugit accusantium placeat, voluptas fugiat?</span>
                {/* <a href={Resume} download> */}

                <button className="button s-button">Hire Me </button>
                {/* </a> */}

                <div className="blur s-blur1" style={{ background: "#ABF1FF9"}}> 
                </div>
            </div>
            {/* right side */}
            <div className="n-right">
                <motion.div
                initial={{rotate:45}}
                whileInView={{rotate: 0}}
                viewport={{margin:"-40px"}}
                transition ={{duration: 3.5 ,type: 'spring'}}              
                className="n-mainCircle" >
                    <div className="n-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="n-secCircle">
                        <img src={Fiverr} alt="" />

                    </div>
                    <div className="n-secCircle">
                        <img src={Amazon} alt="" />
                        
                    </div>
                    <div className="n-secCircle">
                        <img src={Shopify} alt="" />
                                 
                    </div>
                    <div
                    className="n-secCircle">
                        <img src={Facebook} alt="" />
                        
                    </div>
                        
                    </motion.div>
                    {/* <div className="n-backCircle blueCircle"></div>
                    <div className="n-backCircle yellowCircle"></div> */}
                </div>
            </div>
        

    )
}
export default Works