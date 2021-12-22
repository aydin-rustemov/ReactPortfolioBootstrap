import React from 'react'
import Typed from 'react-typed'
import shekil from '../wall-and-laptop-background.jpg'

const Header = () =>{
    return (
        <div className="header-wrapper" id="header">
            <div className="main-info">
                <h1>Web development and website services</h1>
                <Typed
                className="typed-text"
                strings={[
                    'Web Developer',
                    'Front-End Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                   
                </Typed>

                <a href={shekil} className="downloadcv" download>Download CV</a>
            </div>
            
        </div>
    )
}

export default Header
