import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import mediServStyles from './Project.module.css'

import carouselPic1 from '../assets/projects/MediServ1.webp'
import carouselPic2 from '../assets/projects/MediServ2.webp'
import carouselPic3 from '../assets/projects/MediServ3.webp'

function MediServ() {
    const [index, setIndex] = useState(0);
    const [toggleCollapseBtnValue, setToggleCollapseBtnValue] = useState("Collapse");

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const toggleCollapse = () => {
        toggleCollapseBtnValue === "Collapse" ? setToggleCollapseBtnValue("Expand") : setToggleCollapseBtnValue("Collapse");

        document.getElementById("mediServhLine").style.display =
            document.getElementById("mediServhLine").style.display === "block" ? "none" : "block";
        document.getElementById("mediServMainPart").style.display =
            document.getElementById("mediServMainPart").style.display === "flex" ? "none" : "flex";
    };

    return (
        <section className={`${mediServStyles.projectParent}`} id="mediServ">
            <section className={`${mediServStyles.project}`}>
                <div className={`${mediServStyles.projectHeadDiv}`}>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h3 className={`${mediServStyles.projectHead}`}>MediServ</h3>
                        <input type="button" id="toggleCollapseBtn1" value={toggleCollapseBtnValue} className={`${mediServStyles.toggleCollapseBtn}`} onClick={toggleCollapse} />
                    </div>
                    <hr style={{ "display": "block" }} id="mediServhLine" className={`${mediServStyles.hLine}`} />
                </div>
                <div style={{ "display": "flex" }} id="mediServMainPart" className={`${mediServStyles.projectMainPart}`}>
                    <div className={`${mediServStyles.projectTextnBtn}`}>
                        <div className={`${mediServStyles.projectText}`}>
                            <p>
                                Website built on ReactJs, NodeJs/ExpressJs and SQL.
                                It allows users to order medicine and consult doctors online.
                            </p>
                        </div>
                        <div className={`${mediServStyles.bottomBtnsDiv}`}>
                            <a href="https://github.com/binayakbishnu/MediServ_website" target="_blank" rel="noopener noreferrer" className={`${mediServStyles.projectBtnLink}`}>
                                <input type="button" value="GitHub" className={`${mediServStyles.projectBtn}`} />
                            </a>
                        </div>
                    </div>
                    <div className={`${mediServStyles.projectSlideShow}`}>
                        <Carousel activeIndex={index} onSelect={handleSelect} fade variant="dark">
                            <Carousel.Item>
                                <img loading='lazy'
                                    className="d-block w-100"
                                    src={carouselPic1}
                                    alt="First slide"
                                    style={{ "borderRadius": "10px" }}
                                    width="100%"
                                    height="100%"
                                />
                                {/* <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img loading='lazy'
                                    className="d-block w-100"
                                    src={carouselPic2}
                                    alt="Second slide"
                                    style={{ "borderRadius": "10px" }}
                                    width="100%"
                                    height="100%"
                                />

                                {/* <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img loading='lazy'
                                    className="d-block w-100"
                                    src={carouselPic3}
                                    alt="Third slide"
                                    style={{ "borderRadius": "10px" }}
                                    width="100%"
                                    height="100%"
                                />

                                {/* <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default MediServ
