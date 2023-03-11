import React from 'react'
import "./Portfolio.css";
import { Websites } from "../../websites.js";
import Socials from "../Header/Socials";
import Animated from '../../animatedBG/Animated';



const Portfolio = () => {
  const website = Websites.map(website => (
    <div className='website col-12 col-md-5 text-center' key={website.id} data-aos={website.id % 2 ===0 ? "fade-left" :"fade-right"}>
      <img src={website.img} alt='my-img' />
      <div className='text'>
        <h4>{website.name}</h4>
        <div>Skills Used : {website.skills.map(s => {
          return <>{s} , </>
      })}</div>
      </div>
      <div className='buttons '>
        <button  className='btn btn-primary'><a href={website.github} target="_blank">Github</a></button>
        <button  className='btn btn-outline-primary'><a  href={website.live} target="_blank">Live Demo</a></button>
        
      </div>
    </div>
  ))

  return (
    <div className='portfolio pt-5 pb-5'>
      <div className='container pt-5'>
        <div className='text-center my-4'>
          <h5>View my work</h5>
          <h1 className='main-header'>Portfolio</h1>
        </div>
        <div className='row justify-content-around'>
          {website}
        </div>
      </div>
      <Socials />
      <Animated />
    </div>
  )
}

export default Portfolio