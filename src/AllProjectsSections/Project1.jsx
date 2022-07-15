import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import project1Styles from './Project.module.css'

import carouselPic1 from '../assets/projects/MediServ1.webp'
import carouselPic2 from '../assets/projects/MediServ2.webp'
import carouselPic3 from '../assets/projects/MediServ3.webp'

function Project1() {
    const [index, setIndex] = useState(0);
    const [toggleCollapseBtnValue, setToggleCollapseBtnValue] = useState("Collapse");

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const toggleCollapse = () => {
        toggleCollapseBtnValue === "Collapse" ? setToggleCollapseBtnValue("Expand") : setToggleCollapseBtnValue("Collapse");

        document.getElementById("hLine1").style.display =
            document.getElementById("hLine1").style.display === "block" ? "none" : "block";
        document.getElementById("project1MainPart").style.display =
            document.getElementById("project1MainPart").style.display === "flex" ? "none" : "flex";
    };

    return (
        <section className={`${project1Styles.projectParent}`} id="project1">
            <section className={`${project1Styles.project}`}>
                <div className={`${project1Styles.projectHeadDiv}`}>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h3 className={`${project1Styles.projectHead}`}>MediServ</h3>
                        <input type="button" id="toggleCollapseBtn1" value={toggleCollapseBtnValue} className={`${project1Styles.toggleCollapseBtn}`} onClick={toggleCollapse} />
                    </div>
                    <hr style={{ "display": "block" }} id="hLine1" className={`${project1Styles.hLine}`} />
                </div>
                <div style={{ "display": "flex" }} id="project1MainPart" className={`${project1Styles.projectMainPart}`}>
                    <div className={`${project1Styles.projectTextnBtn}`}>
                        <div className={`${project1Styles.projectText}`}>
                            <p>
                                Website built on ReactJs, NodeJs/ExpressJs and SQL.
                                It allows users to order medicine and consult doctors online.
                            </p>
                        </div>
                        <a href="https://github.com/binayakbishnu/MediServ_website" target="_blank" rel="noopener noreferrer" className={`${project1Styles.projectBtnLink}`}>
                            <input type="button" value="GitHub" className={`${project1Styles.projectBtn}`} />
                        </a>
                    </div>
                    <div className={`${project1Styles.projectSlideShow}`}>
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
                        </Carousel>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default Project1
