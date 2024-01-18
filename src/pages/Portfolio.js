import React, { useState, useEffect, useRef } from 'react';
import '../styles/Portfolio.css';
import { PORTFOLIO } from '../utils/portfolio';
import PRESENT_ICON from '../images/ppt-icon.png';
import PDF_ICON from '../images/PDF_icon.png';
import UCSB_ICON from '../images/ucsb-logo.png';
import UVA_ICON from '../images/uva-logo.png';
import ZOOM_ICON from '../images/zoom-logo.png';
import EBAY_ICON from '../images/ebay-logo.png';

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const dialogRef = useRef(null);

    const handleCloseDialog = (event) => {
        event.stopPropagation();

        dialogRef?.current.close();
        setSelectedProject(null);
        dialogRef.current = null;

    };

    const handleProjectClick = (index) => {
        setSelectedProject(index);
    };

    useEffect(() => {
        if (selectedProject !== null) {
            dialogRef?.current.showModal();
        }
    }, [selectedProject]);



    return (
        <div className='portfolio-container' id="projects">
            <div className='work-set'>
                <h1 className='work-set-heading'>WORK</h1>
                <h1 className='work-set-heading'>WORK</h1>
                <h1 className='work-set-heading'>WORK</h1>
                <h1 className='work-set-heading'>WORK</h1>
                <h1 className='work-set-heading'>WORK</h1>
                <h1 className='work-set-heading'>WORK</h1>
                <h1 className='work-set-heading'>WORK</h1>
            </div>

            <div className='container mt-5'>
                <div className='row'>
                    {PORTFOLIO.map((project, index) => (
                        <div key={index} className={`col-md-${project.width} mb-3 mr-3 port-container`} onClick={() => handleProjectClick(index)}>
                            <img
                                src={project.src}
                                className='img-fluid project-img'
                                alt={`Project ${index + 1}`}
                            />

                            <div className="work-tag22">
                                <div className="work-tag-text">{project.name}</div>
                            </div>

                            {
                                index === selectedProject && (
                                    <React.Fragment>
                                        <div className='overlay' onClick={handleCloseDialog}></div>
                                        <dialog ref={dialogRef} className={`project-information-dialog ${project.className}`}>

                                            <div className='dialog-header'>
                                                <h1>{project.title}</h1>
                                                <div className='links'>
                                                    {project.linkToPPT && (
                                                        <img className='ppt-icon heartbeat' src={PRESENT_ICON} onClick={() => window.open(project.linkToPPT, '_blank')} />
                                                    )}

                                                    {project.linkToPDF && (
                                                        <img className='pdf-icon heartbeat' src={PDF_ICON} onClick={() => window.open(project.linkToPDF, '_blank')} />
                                                    )}


                                                </div>


                                                <img
                                                    src="https://assets-global.website-files.com/5b54e064ef1d588c6d4a4264/62642abf5db7f5d0e68a9966_plus.svg"
                                                    loading="lazy"
                                                    onClick={handleCloseDialog}
                                                    className='dialog-close'
                                                />
                                            </div>

                                            <div className='work-points'>
                                                <div className='exp-points-container row'>
                                                    {
                                                        project.points.map(
                                                            (point, pointIdx) =>
                                                                <div className='exp-point' key={pointIdx}>
                                                                    <div>
                                                                        <img src="https://assets-global.website-files.com/5b54e064ef1d588c6d4a4264/62642be05e6c3d7624c3e64e_bullet22.svg"
                                                                        loading="lazy"
                                                                        style={{ marginRight: '1rem' }} />
                                                                    </div>
                                                                    <div key={pointIdx}>
                                                                        <span>{point}</span>
                                                                    </div>
                                                                </div>
                                                        )
                                                    }
                                                </div>

                                            </div>


                                            <div className='media-container row'>

                                                {project.media.map((item, mediaIndex) => (
                                                    <React.Fragment key={mediaIndex}>
                                                        <div className={`media col-sm-${item.width}`}>
                                                            {item.type === 'image' && <img src={item.src} alt={project.title} />}
                                                            {item.type === 'video' && (
                                                                <video controls>
                                                                    <source src={item.src} type='video/mp4' />
                                                                    Your browser does not support the video tag.
                                                                </video>
                                                            )}
                                                        </div>
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        </dialog>
                                    </React.Fragment>
                                )
                            }


                        </div>
                    ))}
                </div>
            </div>


            <div className='container mt-5 career-logo'>
                <span className='career-text'>During my career, I had the chance to collaborate in different capacities with these great companies and institutions.</span>

                <div className="logo-row-container">
                    <img src={UCSB_ICON} alt="UCSB" className="logo" />
                    <img src={UVA_ICON} alt="UVA" className="logo" />
                    <img src={ZOOM_ICON} alt="Zoom" className="logo" />
                    <img src={EBAY_ICON} alt="eBay" className="logo" />
                </div>
            </div>


        </div>
    );
};

export default Portfolio;
