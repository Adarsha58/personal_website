import React from 'react';
import '../styles/About.css';
import { FaArrowDown } from 'react-icons/fa';
import ME from '../images/me.png';

const About = () => {
    return (
        <div className='about-container'>
            <div className='left'>
       
                <div className='ciao'>
                    <span className='ciao-letter' data-letter='C'>C</span>
                    <span className='ciao-letter' data-letter='I'>I</span>
                    <span className='ciao-letter' data-letter='A'>A</span>
                    <span className='ciao-letter' data-letter='O'>O</span>
                </div>

                <div className='personal-info'>
                    <span className='firstname'>I'm Adarsha</span>
                    <span className='lastname'>Poudel</span>
                    <span className='about-me'>Detail-Oriented Problem Solver</span>
                </div>
                </div>

        
            <img className='my-pic' src={ME}/>
        </div>
    );
}

export default About;
