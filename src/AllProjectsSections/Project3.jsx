import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import project3Styles from './Project.module.css'

import carouselPic1 from '../assets/projects/MediServ1.webp'
import carouselPic2 from '../assets/projects/MediServ2.webp'
import carouselPic3 from '../assets/projects/MediServ3.webp'

function Project3() {
    const [index, setIndex] = useState(0);
    const [toggleCollapseBtnValue, setToggleCollapseBtnValue] = useState("Collapse");

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const toggleCollapse = () => {
        toggleCollapseBtnValue === "Collapse" ? setToggleCollapseBtnValue("Expand") : setToggleCollapseBtnValue("Collapse");

        document.getElementById("hLine3").style.display =
            document.getElementById("hLine3").style.display === "block" ? "none" : "block";
        document.getElementById("project3MainPart").style.display =
            document.getElementById("project3MainPart").style.display === "flex" ? "none" : "flex";
    };

    return (
        <section className={`${project3Styles.projectParent}`} id="project3">
            <section className={`${project3Styles.project}`}>
                <div className={`${project3Styles.projectHeadDiv}`}>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h3 className={`${project3Styles.projectHead}`}>MediServ</h3>
                        <input type="button" id="toggleCollapseBtn1" value={toggleCollapseBtnValue} className={`${project3Styles.toggleCollapseBtn}`} onClick={toggleCollapse} />
                    </div>
                    <hr style={{ "display": "block" }} id="hLine3" className={`${project3Styles.hLine}`} />
                </div>
                <div style={{ "display": "flex" }} id="project3MainPart" className={`${project3Styles.projectMainPart}`}>
                    <div className={`${project3Styles.projectTextnBtn}`}>
                        <div className={`${project3Styles.projectText}`}>
                            <p>
                                Website built on ReactJs, NodeJs/ExpressJs and SQL.
                                It allows users to order medicine and consult doctors online.
                            </p>
                        </div>
                        <div className={`${project3Styles.bottomBtnsDiv}`}>
                            <a href="https://github.com/binayakbishnu/MediServ_website" target="_blank" rel="noopener noreferrer" className={`${project3Styles.projectBtnLink}`}>
                                <input type="button" value="GitHub" className={`${project3Styles.projectBtn}`} />
                            </a>
                        </div>
                    </div>
                    <div className={`${project3Styles.projectSlideShow}`}>
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

export default Project3
