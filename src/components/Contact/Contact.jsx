import React from 'react'
import "./Contact.css";
import Animated from "../../animatedBG/Animated";
import Socials from '../Header/Socials';

const Contact = () => {
  return (
    <div className='services pt-5 pb-5'>
      <div className="container pt-5">
        <div className='text-center'>
          <h5>Get in touch</h5>
          <h1 className='main-header'>Contact</h1>
        </div>
        <div className='row mt-5 mb-5 '>
          <div className='col-12 col-md-6 mb-4'>
            <h4>Message Me</h4>
            <input type="text" placeholder="Name" className='name' required/>
            <input type="text" placeholder="Email" className='email' required/>
            <input type="text" placeholder="Subject" className='subject required'/>
            <textarea placeholder="Message" className='message'/>
            <button className="btn btn-success rounded-pill">Send Me A Message</button>
          </div>
          <div className='col-12 col-md-6'>
            <h4>Contact Information</h4>
            <p>Open for opportunities. Let's connect and build something awesome together!</p>
            <div className="information">
              <div className='user-info  d-flex align-items-center'>
                <i className="fa-solid fa-user"></i>
                <div className="info">
                  <h3>Name</h3>
                  <p  className="text-white-50">Abdallah Elhosary</p>
                </div>
              </div>
              <div className='user-info  d-flex align-items-center'>
                <i className="fa-solid fa-location-pin"></i>
                <div className="info">
                  <h3>Location</h3>
                  <p className="text-white-50">Cairo,EG</p>
                </div>
              </div>
              <div className='user-info  d-flex align-items-center'>
                <i className="fa-solid fa-envelope"></i>
                <div className="info">
                  <h3>Email</h3>
                  <p><a href="mailto:abdallhelhosary@gmail.com">abdallhelhosary@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Socials />
      <Animated />
    </div>
  )
}

export default Contact