import React from "react";
import Navbar from "../features/Navbar";
import  "../css/page.css"



const About=()=>{

    return(
        <div className="page-main">
            <Navbar/>
            <h1>This is About page</h1>
            <div className="content">
                <div className="image">
                    <img src="../pictures/coder.jpg" alt="pictures"/>
                </div>
                <div className="introduction">
                <p>myself shiv kumar. I have done graduation from Vinobha Bhave University,Hazaribag,Jharkhand.Completed my post-graduation from Nalanda Open University. I have done certification courses from IIT Kharagpur and IIT Roorkee. </p>
                </div>
            </div>
            
        </div>
    )
}

export default About;