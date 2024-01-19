import React from 'react';
import '../styles/Experience.css'; // Import your CSS file
import IMAGES from '../images/images';
import ExperienceDetail from '../components/ExperienceDetail';
// Todo: fix the size of the box of the paragraph
// Todo: fix the widht of the container 

const Experience = () => {
    return (
        <div id="experience" className="container-fluid experience-container">
            <div className="experience-box">
                <div className="experience-title">
                    <span className="bold">EXPERIENCE</span>
                    <span className="outlined">EXPERIENCE</span>
                    <span className="bold">EXPERIENCE</span>
                    <span className="outlined">EXPERIENCE</span>
                    <span className="bold">EXPERIENCE</span>
                    <span className="outlined">EXPERIENCE</span>
                    <span className="bold">EXPERIENCE</span>
                    <span className="outlined">EXPERIENCE</span>
                </div>


                <div className="container-fluid experience-summary">
                    <div className="row">
                        <div className="col-sm-4 person-col">
                            <img className="person-gif" src={IMAGES['person-talking']} alt='person talking gif'/>
                        </div>
            
                        <div className="col-sm-8 bio-col">
                            <div className="balloon-tip">
                                <img src="https://assets-global.website-files.com/5b54e064ef1d588c6d4a4264/6263eef33d9066764b6705b8_balloon_tip.svg" loading="lazy" />
                            </div>
               
                            <div className="experience-bio-paragraph">
                                <div className="text-block-23">
                                    5 years of diverse programming expertise through education, training, and corporate experience.
                                </div>
                                <div className="text-block-23-copy">
                                    I don't just write code: strategic design thinking, visionary solutions, and forward-looking development are the cornerstones of my expertise. <br/><br/>
                                    I've led impactful industrial full-stack development projects using technologies like SpringBoot, Node, React, Redux, and managed remote teams across different time zones to successful completion.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ExperienceDetail />
            </div>
        </div>
    );
};

export default Experience;
