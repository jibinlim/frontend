import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from '@mui/material';

function Navar() {
    const [openLinks,setOpenLinks] = useState(false);

    const togleNavbar = () =>{
        setOpenLinks(!openLinks);
    }
  return (
    <div>
       <div className='navbar'>
       <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="hiddenLinks">
        <img src={Logo} />
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">     
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={togleNavbar}>
            <MenuIcon />
        </button>

      </div>
    </div>
    </div>
  )
}
export default Navar