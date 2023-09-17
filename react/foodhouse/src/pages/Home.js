import React from "react";
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza1.jpg'

import "bootstrap/dist/css/bootstrap.min.css"

const Home = () => {
    return ( 
        <div className="home" style ={{ backgroundImage:`url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1>Domino's Pizza</h1>
                <p> Pizza to fit any taste</p>
                <Link to="/menu">
                <button> ORDER NOW </button>
                </Link>
                <p><abbr title="attribute">픽업서비스</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">배달서비스</abbr></p>
            </div>
        </div>
     );
}
 
export default Home;