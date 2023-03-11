import React from 'react'
import "./About.css";
import img2 from "../../assets/portfolio-2.png";
import Socials from "../Header/Socials";
import { frontSkills, AdditionalSkills } from '../../websites';
import Animated from '../../animatedBG/Animated';

const About = () => {
    const FrontSkills = frontSkills.map(skill => {
        return (
            <>
                <li>
                    <h6>{skill.skill }</h6>
                    <p>{skill.level}</p>
                </li>
            </>
        )
    })
    const AdditionSkills = AdditionalSkills.map(skill => {
        return (
            <>
                <li>
                    <h6>{skill.skill }</h6>
                    <p>{skill.level}</p>
                </li>
            </>
        )
    })
    return (
        <div className='about pt-5 pb-5'>
            <div className='container pt-5'>
                <div className='text-center'>
                    <h5>Get To Know</h5>
                    <h1 className='main-header'>About Me</h1>
                </div>
            </div>
            <div className="container">
                <section className='row pt-5 pb-5'>
                    <div className='col-12 col-md-6 photo my-5 mt-0' data-aos="fade-right">
                        <img src={img2} className="w-100" alt="me" />
                    </div>
                    <div className='col-12 col-md-6 d-flex align-items-center' data-aos="fade-left">
                        <div className='row justify-content-around'>
                            <div className='col-5 text-center item pt-3'>
                                <i className="fa-solid fa-award"></i>
                                <h4>Experience</h4>
                                <p>+1 years of freelancing experience</p>
                            </div>
                            <div className='col-5 text-center item p-3'>
                                <i className="fa-solid fa-folder-open my-2"></i>
                                <h4>Projects</h4>
                                <p className='text-light-50'>+20 Project on my github account</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='row container pt-5 pb-5 intro' data-aos="fade-right">
                    <div className='col-12'>
                        <p>Nice to meet you</p>
                        <h3>Frontend Web Developer who creates amazing digital experiences!</h3>
                        <p className='text-white-50'>My unique blend of technical expertise, creative thinking, and background in psychology allows me to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products</p>
                    </div>
                    <hr />
                    <div className='col-12 d-flex info-section'>
                        <div className='row'>
                            <div className='info col-12 col-md-6'>
                                <div>Name : </div>
                                <p>Abdallah Elhosary</p>
                            </div>
                            <div className='info col-12 col-md-6'>
                                <div>Email : </div>
                                <p>abdallhelhosary@gmail.com</p>
                            </div>
                            <div className='info col-12 col-md-6'>
                                <div>Location : </div>
                                <p>Cairo-EG</p>
                            </div>
                            <div className='info col-12 col-md-6'>
                                <div>Availability : </div>
                                <p>Open for work</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Skills mb-5'>
                    <div className='text-center'>
                        <h2 className='main-header fw-bold'>What Skills I Have</h2>
                    </div>
                    <div className='row pt-5 justify-content-between' >
                        <div className='col-12 col-md-6 frontend-skills skills-item mb-4' data-aos="fade-right">
                            <h4 className='text-center'>Frontend Development</h4>
                            <ul className='skill'>
                                {FrontSkills}
                            </ul>
                        </div>
                        <div className='col-12 col-md-6 skills-item' data-aos="fade-left">
                            <h4 className='text-center'>additional skills</h4>
                            <ul className='skill'>
                                {AdditionSkills}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Socials />
            <Animated />

        </div>

    )
}

export default About;
