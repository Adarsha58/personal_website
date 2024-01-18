import React, { useState } from 'react';
import '../styles/Experience.css'; // Import your CSS file
import { EXPERIENCES } from '../utils/experiences';


const ExperienceDetail = () => {
    const [expButton, setExpButton] = useState(EXPERIENCES.map(() => false));
    console.log(expButton);

    const handleMoreInfoClicked = (idx) => {
        console.log(expButton)
        setExpButton(expButton.map((state, expIdx) => idx === expIdx ? !state : state));
    }

    const imageStyle = (isOpen) => {
        return ({
            transition: 'transform 0.7s ease',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        });
    }


    return (
        <div className="experiences-container container-fluid">
            {
                EXPERIENCES.map((experience, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            <div className='experience-container row'>
                                <div className="col-sm-3">
                                    <span className='exp exp-date'>{experience.date}</span>
                                </div>
                                <div className="col-sm-2">
                                    <span className='exp exp-name'>{experience.name}</span>
                                </div>
                                <div className="col-sm-3">
                                    <span className='exp exp-position'>{experience.position}</span>
                                </div>
                                <div className="col-sm-3">
                                    <span className='exp exp-location'>{experience.location}</span>
                                </div>
                                <div className="col-sm-1">
                                    <img
                                        src="https://assets-global.website-files.com/5b54e064ef1d588c6d4a4264/62642abf5db7f5d0e68a9966_plus.svg"
                                        loading="lazy"
                                        onClick={() => handleMoreInfoClicked(idx)}
                                        style={imageStyle(expButton[idx])}
                                    />
                                </div>
                            </div>
                            {
                                expButton[idx] &&
                                <div className='exp-points-container row'>
                                    {
                                        experience.points.map(
                                            (point, pointIdx) =>
                                                <div className='exp-point' key={pointIdx}>
                                                    <img src="https://assets-global.website-files.com/5b54e064ef1d588c6d4a4264/62642be05e6c3d7624c3e64e_bullet22.svg"
                                                        loading="lazy"
                                                        style={{ marginRight: '1rem' }} />
                                                    <span key={pointIdx}>{point}</span>
                                                </div>
                                        )
                                    }
                                </div>
                            }

                        </React.Fragment>
                    );
                })
            }

        </div>
    );
};

export default ExperienceDetail;
