import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import Typewriter from "typewriter-effect";
import Socials from './Socials';
import cv from "../../assets/cv.pdf";
import img1 from "../../assets/portfolio-4.png";
import Animated from "../../animatedBG/Animated";
import "aos/dist/aos.css";

const Header = () => {
  
  return (
    <header>
      <div className='container text-center'>
        <div className='header-text'>
          <h5 className='text-white-50' data-aos="fade-down">I'am</h5>
          <h1 className='fs-5' >
            <Typewriter
              options={{
                strings: ['Abdallah Elhosary', 'Front End Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <div className='buttons' data-aos="fade-right">
          <a className='btn btn-outline-primary text-light fs-5' href={cv} download>Download CV</a>
          <Link className='btn btn-primary text-dark' to="/contact">Let's Talk</Link>
        </div>
        <div className='me' data-aos="fade-up">
          <img src={img1} alt="me"/>
        </div>
        
      </div>
      <div className='socials' data-aos="fade-left">
              <Socials />
      </div>
      <Animated />
      
    </header>
  )
}

export default Header