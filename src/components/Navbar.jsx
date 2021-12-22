import React from 'react'
import logo from '../logo.png'
// import { Link } from "react-router-dom";

import {Link} from "react-scroll"
const Navbar =() =>{
    return (
    
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="#"><img src={logo}  className="logo" alt="" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="header" className="cursor nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" className="cursor nav-link">About me</Link>
            </li>

          
            <li className="nav-item">
              <Link smooth={true} to="services" className="cursor nav-link">Services</Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to="experience" className="cursor nav-link">Experiences</Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to="contact" className="cursor nav-link" >Contact us</Link>
            </li>
           
          </ul>
        
        </div>
      </nav>
     
    )
}

export default Navbar
