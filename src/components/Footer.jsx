import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
// import { Link } from "react-router-dom";
import {Link} from "react-scroll"

const Footer = () => {
  return (
    <div className="footer bg-dark d-flex align-items-center justify-content-around">
      <div className="left d-flex justify-content-center flex-column">
        <Link smooth={true} to="header" className='cursor text-muted mb-1 blockquote '>Home</Link>
        <Link smooth={true} to="about" className='cursor text-muted mb-1 blockquote '>About Me</Link>
        <Link smooth={true} to="services" className='cursor text-muted mb-1 blockquote '>Services</Link>
        <Link smooth={true} to="experience" className='cursor text-muted mb-1 blockquote '>Experience</Link>
        <Link smooth={true} to="contact" className='cursor text-muted mb-1 blockquote '>Contact</Link>
      </div>
      <div className="center">
          <form action="#">
          <div class="input-group mb-3">
            <input type="text" class="form-control bg-transparent" placeholder="Search" />
             <div class="input-group-append">
                 <button class="btn btn-outline-secondary" type="button"><FontAwesomeIcon icon={faSearch} /></button>
             </div>
</div>
          </form>
      </div>
      <div className="right">
        <div className="icons-footer d-flex justify-content-center ">
          <a href="#" className="facebookIcon mx-2 text-white mb-4">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
          <a href="#" className="instagramIcon mx-2 text-white">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
          <a href="#" className="twitterIcon mx-2 text-white">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
        </div>
        <div className="info d-flex justify-content-center mt-3">
          <a href="#" className="mx-2 text-white font-weight-bold">
            Info
          </a>
          <a href="#" className="text-white font-weight-bold">
            Support
          </a>
        </div>
        <div className="terms">
          <a href="#" className="mx-2 text-white font-weight-bold">
            Terms of Use
          </a>
          <a href="#" className="text-white font-weight-bold">
            Privacy Policy
          </a>
        </div>
        <div className="copy">
          <span>&copy; 2022 Rustemov Aydin</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
