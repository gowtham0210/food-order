import React, { useState } from 'react';
import logo from '../assets/logo.png';
import {Link} from  'react-router-dom';
import '../styles/navbar.css';
//import Menu from '../pages/Menu';
function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    function Click(){
        setShowLinks(!showLinks);
    }
    
    return (
        <div className='navbar'>
            <div className='leftSide' id={showLinks ?"open":"close"}>
                <img src={logo}/>
                <div className='hiddenLinks'>
                <Link to="/">Home</Link>
                <Link to="Menu">Menu</Link>
                <Link to="About">About</Link>
                <Link to="Contact">Contact</Link>
            </div>

            </div>
            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="Menu">Menu</Link>
                <Link to="About">About</Link>
                <Link to="Contact">Contact</Link>
            </div>
        </div>
      );
}

export default Navbar;