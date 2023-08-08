import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import CyclistVisuStyles from './Project.module.css'

import carouselPic1 from '../assets/projects/CyclistVisu1.svg'
import carouselPic2 from '../assets/projects/CyclistVisu2.svg'
import carouselPic3 from '../assets/projects/CyclistVisu3.svg'
// import carouselPic4 from '../assets/projects/RainfallAnalysis4.png'

function CyclistVisu({topProject}) {
    const [index, setIndex] = useState(0);
    const [toggleCollapseBtnValue, setToggleCollapseBtnValue] = useState("Collapse");

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const toggleCollapse = () => {
        toggleCollapseBtnValue === "Collapse" ? setToggleCollapseBtnValue("Expand") : setToggleCollapseBtnValue("Collapse");

        document.getElementById("cyclistVisuhLine").style.display =
            document.getElementById("cyclistVisuhLine").style.display === "block" ? "none" : "block";
        document.getElementById("cyclistVisuMainPart").style.display =
            document.getElementById("cyclistVisuMainPart").style.display === "flex" ? "none" : "flex";
    };

    // const completedClass = topProject ? CyclistVisuStyles. : '';

    return (
        <section className={`${topProject === true ? CyclistVisuStyles.projectParentTopProj : ""} ${CyclistVisuStyles.projectParent}`} id={`cyclistVisu`}>
            <section className={`${CyclistVisuStyles.project}`}>
                <div className={`${CyclistVisuStyles.projectHeadDiv}`}>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h3 className={`${CyclistVisuStyles.projectHead}`}>Case Study: Bike-sharing</h3>
                        <input type="button" id="toggleCollapseBtn1" value={toggleCollapseBtnValue} className={`${CyclistVisuStyles.toggleCollapseBtn}`} onClick={toggleCollapse} />
                    </div>
                    <hr style={{ "display": "block" }} id="cyclistVisuhLine" className={`${CyclistVisuStyles.hLine}`} />
                </div>
                <div style={{ "display": "flex" }} id="cyclistVisuMainPart" className={`${CyclistVisuStyles.projectMainPart}`}>
                    <div className={`${CyclistVisuStyles.projectTextnBtn}`}>
                        <div className={`${CyclistVisuStyles.projectText}`}>
                            <p>
                                Analysing the trends in usage for a bike-sharing company.
                            </p>
                                <p>This case study is part of the capstone project under Google's Data Analytics Professional Certificate. Instead of limiting myself to the suggestions given in the instructions, I used Power Bi and Power Query to transform the data and then created a dashboard.</p>
                        </div>
                        <div className={`${CyclistVisuStyles.bottomBtnsDiv}`}>
                            <a href="https://medium.com/@binayakbishnu/case-study-how-does-a-bike-share-navigate-speedy-success-f537b29b45f5?source=friends_link&sk=f0d0caccb33a270d7f2529cf5ac5494b" target="_blank" rel="noopener noreferrer" className={`${CyclistVisuStyles.projectBtnLink}`}>
                                <input type="button" value="Medium Blog" className={`${CyclistVisuStyles.projectBtn}`} />
                            </a>
                            <a href="https://www.linkedin.com/posts/binayakbishnu_case-study-report-activity-7094187914229690368-rIms" target="_blank" rel="noopener noreferrer" className={`${CyclistVisuStyles.projectBtnLink}`}>
                                <input type="button" value="LinkedIn post" className={`${CyclistVisuStyles.projectBtn}`} />
                            </a>
                        </div>
                    </div>
                    <div className={`${CyclistVisuStyles.projectSlideShow}`}>
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
                            {/* <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carouselPic4}
                                    alt="Fourth slide"
                                    style={{ "borderRadius": "10px" }}
                                    width="100%"
                                    height="100%"
                                />
                            </Carousel.Item> */}
                        </Carousel>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default CyclistVisu