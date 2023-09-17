import React from "react"
import MultiplePizzas from '../assets/pizza10.jpg'
import '../styles/About.css'
const About = () => {
    return ( 
        <div className="about">
            <div className="aboutTop" style={{backgroundImage:`url(${MultiplePizzas})`}}></div>
            <div className="aboutBottom">
                <h1>피자란?</h1>
                <p>오늘 먹은 피자는 치즈 피자와 파인애플 피자와 
                    고구마 피자와 어떤 피자였다.
                </p>
            </div>
        </div>
     );
}
 
export default About;