import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import OneResumeStyles from './Project.module.css'

import carouselPic1 from '../assets/projects/OneResume1.jpg'
import carouselPic2 from '../assets/projects/OneResume2.jpg'
import carouselPic3 from '../assets/projects/OneResume3.jpg'

function OneResume({ topProject }) {
    const [index, setIndex] = useState(0);
    const [toggleCollapseBtnValue, setToggleCollapseBtnValue] = useState("Collapse");

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const toggleCollapse = () => {
        toggleCollapseBtnValue === "Collapse" ? setToggleCollapseBtnValue("Expand") : setToggleCollapseBtnValue("Collapse");

        document.getElementById("oneResumehLine").style.display =
            document.getElementById("oneResumehLine").style.display === "block" ? "none" : "block";
        document.getElementById("oneResumeMainPart").style.display =
            document.getElementById("oneResumeMainPart").style.display === "flex" ? "none" : "flex";
    };

    // const completedClass = topProject ? OneResumeStyles. : '';

    return (
        <section className={`${topProject === true ? OneResumeStyles.projectParentTopProj : ""} ${OneResumeStyles.projectParent}`} id={`oneResume`}>
            <section className={`${OneResumeStyles.project}`}>
                <div className={`${OneResumeStyles.projectHeadDiv}`}>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h3 className={`${OneResumeStyles.projectHead}`}>OneResume</h3>
                        <input type="button" id="toggleCollapseBtn1" value={toggleCollapseBtnValue} className={`${OneResumeStyles.toggleCollapseBtn}`} onClick={toggleCollapse} />
                    </div>
                    <hr style={{ "display": "block" }} id="oneResumehLine" className={`${OneResumeStyles.hLine}`} />
                </div>
                <div style={{ "display": "flex" }} id="oneResumeMainPart" className={`${OneResumeStyles.projectMainPart}`}>
                    <div className={`${OneResumeStyles.projectTextnBtn}`}>
                        <div className={`${OneResumeStyles.projectText}`}>
                            <p>
                                Single-link resume sharing portal.
                            </p>
                            <p>
                                Users can upload updated resumes without the need to generate new links or create copies.
                                Removes the risk of the old link breaking, the same link shows the new file.
                                Built with ReactJs, Nodejs, and Firebase for authentication and storage.
                            </p>
                        </div>
                        <div className={`${OneResumeStyles.bottomBtnsDiv}`}>
                            <a href="https://onecv.tech" target="_blank" rel="noopener noreferrer" className={`${OneResumeStyles.projectBtnLink}`}>
                                <input type="button" value="Deployed website" className={`${OneResumeStyles.projectBtn}`} />
                            </a>
                            {/* <a href="https://drive.google.com/file/d/1P-V4wmABt4HlasilLu2aeNgzTjimi5dY/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={`${OneResumeStyles.projectBtnLink}`}>
                                <input type="button" value="Demo" className={`${OneResumeStyles.projectBtn}`} />
                            </a> */}
                        </div>
                    </div>
                    <div className={`${OneResumeStyles.projectSlideShow}`}>
                        <Carousel activeIndex={index} onSelect={handleSelect} fade variant="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carouselPic1}
                                    alt="First slide"
                                    style={{ "borderRadius": "10px" }}
                                    width="100%"
                                    height="100%"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carouselPic2}
                                    alt="Second slide"
                                    style={{ "borderRadius": "10px" }}
                                    width="100%"
                                    height="100%"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carouselPic3}
                                    alt="Third slide"
                                    style={{ "borderRadius": "10px" }}
                                    width="100%"
                                    height="100%"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default OneResume