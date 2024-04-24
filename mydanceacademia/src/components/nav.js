
import React from "react";
import {Link} from "react-router-dom";
const Nav = () => {
    const navColor = {
        color: "#7AE930",
        textDecoration:"none",
      
    }
    return(
    <div className="navContainer">
        My Dance Academia
        <ul>
        <li><Link to="/aboutus" style={navColor}>About Us</Link></li>
        <li><Link to="/contact" style={navColor}>Contact</Link></li>
        </ul>
        </div>
        )
}

export default Nav;