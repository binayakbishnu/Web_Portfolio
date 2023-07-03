import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import project2Styles from './Project.module.css'

import carouselPic1 from '../assets/projects/RainfallAnalysis1.png'
import carouselPic2 from '../assets/projects/RainfallAnalysis2.png'
import carouselPic3 from '../assets/projects/RainfallAnalysis3.png'
import carouselPic4 from '../assets/projects/RainfallAnalysis4.png'

function Project2() {
    const [index, setIndex] = useState(0);
    const [toggleCollapseBtnValue, setToggleCollapseBtnValue] = useState("Collapse");

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const toggleCollapse = () => {
        toggleCollapseBtnValue === "Collapse" ? setToggleCollapseBtnValue("Expand") : setToggleCollapseBtnValue("Collapse");

        document.getElementById("hLine2").style.display =
            document.getElementById("hLine2").style.display === "block" ? "none" : "block";
        document.getElementById("project2MainPart").style.display =
            document.getElementById("project2MainPart").style.display === "flex" ? "none" : "flex";
    };

    return (
        <section className={`${project2Styles.projectParent}`} id="project2">
            <section className={`${project2Styles.project}`}>
                <div className={`${project2Styles.projectHeadDiv}`}>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h3 className={`${project2Styles.projectHead}`}>Rainfall Analysis</h3>
                        <input type="button" id="toggleCollapseBtn1" value={toggleCollapseBtnValue} className={`${project2Styles.toggleCollapseBtn}`} onClick={toggleCollapse} />
                    </div>
                    <hr style={{ "display": "block" }} id="hLine2" className={`${project2Styles.hLine}`} />
                </div>
                <div style={{ "display": "flex" }} id="project2MainPart" className={`${project2Styles.projectMainPart}`}>
                    <div className={`${project2Styles.projectTextnBtn}`}>
                        <div className={`${project2Styles.projectText}`}>
                            <p>
                                Analysis of rainfall pattern in India, monthwise and statewise.
                                Used Power Query to clean and transform data, and Power Query to create visualisations and filters.
                            </p>
                        </div>
                        {/* <div className={`${project2Styles.bottomBtnsDiv}`}>
                            <a href="https://github.com/binayakbishnu/MediServ_website" target="_blank" rel="noopener noreferrer" className={`${project2Styles.projectBtnLink}`}>
                                <input type="button" value="GitHub" className={`${project2Styles.projectBtn}`} />
                            </a>
                        </div> */}
                    </div>
                    <div className={`${project2Styles.projectSlideShow}`}>
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
                                {/* <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
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

                                {/* <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption> */}
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

                                {/* <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carouselPic4}
                                    alt="Fourth slide"
                                    style={{ "borderRadius": "10px" }}
                                    width="100%"
                                    height="100%"
                                />

                                {/* <Carousel.Caption>
                                    <h3>Fourth slide label</h3>
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

export default Project2
