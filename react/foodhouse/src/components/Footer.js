import React from "react"
import '../styles/Footer.css'
import {Instagram, Facebook, Twitter, LinkedIn} from '@mui/icons-material'

const Footer = () => {
    return ( 
        <div className = "footer">
            <div className="socialMedia">
                <Instagram />
                <Facebook />
                <Twitter />
                <LinkedIn />
            </div>
            <p> &copy; 2024 Domino's Pizza</p>
        </div>
     );
}
 
export default Footer;