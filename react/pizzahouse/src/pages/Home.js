import React from 'react'
import '../styles/style/Home.css'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza1.jpg'

function Home() {
  return (
    <div className="home" style ={{backgroundImage:`url(${BannerImage})`}}>
    <div className="headerContainer" style={{fontSize: `16px`}}>
      <h1>Domino's Pizza</h1>
      <p>Pizza to fit any taete</p>

      <Link to="/menu">
        <button> ORDER NOW</button>
      </Link>
    </div>
    </div>
  )
}

export default Home;