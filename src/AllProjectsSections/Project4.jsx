import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import project4Styles from './Project.module.css'

// import carouselPic1 from '../assets/projects/BookRev1.webp'
import carouselPic2 from '../assets/projects/BookRev2.webp'
import carouselPic3 from '../assets/projects/BookRev3.webp'
import carouselPic4 from '../assets/projects/BookRev4.webp'
import carouselPic5 from '../assets/projects/BookRev5.webp'

function Project4() {
    const [index, setIndex] = useState(0);
    const [toggleCollapseBtnValue, setToggleCollapseBtnValue] = useState("Collapse");

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const toggleCollapse = () => {
        toggleCollapseBtnValue === "Collapse" ? setToggleCollapseBtnValue("Expand") : setToggleCollapseBtnValue("Collapse");

        document.getElementById("project4MainPart").style.display =
            document.getElementById("project4MainPart").style.display === "flex" ? "none" : "flex";
        document.getElementById("hLine4").style.display =
            document.getElementById("hLine4").style.display === "block" ? "none" : "block";
    };

    return (
        <section className={`${project4Styles.projectParent}`} id="project4">
            <section className={`${project4Styles.project}`}>
                <div className={`${project4Styles.projectHeadDiv}`}>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h3 className={`${project4Styles.projectHead}`}>BookRev</h3>
                        <input type="button" id="toggleCollapseBtn2" value={toggleCollapseBtnValue} className={`${project4Styles.toggleCollapseBtn}`} onClick={toggleCollapse} />
                    </div>
                    <hr style={{ "display": "block" }} id="hLine4" className={`${project4Styles.hLine}`} />
                </div>
                <div style={{ "display": "flex" }} id="project4MainPart" className={`${project4Styles.projectMainPart}`}>
                    <div className={`${project4Styles.projectTextnBtn}`}>
                        <div className={`${project4Styles.projectText}`}>
                            <p>
                                Website built on HTML, CSS, Javascript, NodeJs and MongoDB.
                                It allows users to buy and sell books online.
                            </p>
                        </div>
                        <div className={`${project4Styles.bottomBtnsDiv}`}>
                            <a href="https://github.com/chetan-0/BookRev" target="_blank" rel="noopener noreferrer" className={`${project4Styles.projectBtnLink}`}>
                                <input type="button" value="GitHub" className={`${project4Styles.projectBtn}`} />
                            </a>
                        </div>
                    </div>
                    <div className={`${project4Styles.projectSlideShow}`}>
                        <Carousel activeIndex={index} onSelect={handleSelect} fade variant="dark">
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
                                    src={carouselPic5}
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

export default Project4
