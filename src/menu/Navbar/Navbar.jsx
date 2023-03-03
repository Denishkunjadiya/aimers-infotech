import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <Link to='/'><li><img src={require('../img/Aimers logo.png')} alt="img not display" /></li></Link>
                </div>
                <div className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </div>
            </div>
        </>
    )
}

export default Navbar
