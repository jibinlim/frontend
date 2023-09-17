import React from "react";
import '../styles/style/Footer.css'
import { Instagram,Facebook,Twitter,LinkedIn, Face } from '@mui/icons-material'
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className = "footer">
            <div className = "socialMedia">
                <Instagram />
                <Facebook />
                <Twitter />
                <LinkedIn />
            </div>
            <p> &copy; 2023 Domino's Pizza </p>
        </div>
     );
}
 
export default Footer;