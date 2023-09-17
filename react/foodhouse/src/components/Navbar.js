import React , {useState} from "react";
import Logo from '../assets/logo.png';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks( !openLinks )
    }
    return ( 
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo}/>
                <div className="hiddenLinks" >
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/direction">Direction</Link>
                    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
                </div>
            </div>

            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/direction">Direction</Link>
                <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
                <button onClick={toggleNavbar}>
                    <MenuIcon />
                </button>
            </div>

        </div>
     );
}
 
export default Navbar;