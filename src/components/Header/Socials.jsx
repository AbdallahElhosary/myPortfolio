import React from 'react';
import { Link } from 'react-router-dom';
import "./Socials.css";

const Socials = () => {
  return (
      <ul className='socials text-center' data-aos="fade-left">
          <li className="mt-3"><Link to="https://www.facebook.com/abdallh.elhosary/" target="_blank"><i className="fa-brands fa-facebook"></i></Link></li>
          <li className="mt-3"><Link to="https://www.linkedin.com/in/abdallh-elhosary-a41671220/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link></li>
          <li className="mt-3"><Link to="https://github.com/AbdallahElhosary" target="_blank"><i className="fa-brands fa-github"></i></Link></li>
          <li className="mt-3"><Link to=" https://wa.me/+201113833591" target="_blank"><i className="fa-brands fa-whatsapp"></i></Link></li>
    </ul>
  )
}

export default Socials
