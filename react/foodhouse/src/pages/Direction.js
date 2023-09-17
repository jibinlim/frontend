import React from 'react'
import Image from '../assets/image.png'
import '../styles/About.css'

const Direction = () => {
    return ( 
        <div className = "about">
            <div className = "aboutBottom">
                <h1>찾아오시는 길</h1>
            </div>
            <div className = "aboutTop" style={{backgroundImage:`url(${Image})`}}>
            </div>
        </div>
     );
}
 
export default Direction;