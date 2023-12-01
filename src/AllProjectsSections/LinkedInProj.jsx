import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import linkedInProjStyles from './Project.module.css'

import carouselPic1 from '../assets/projects/LinkedInScrape1.png'
import carouselPic2 from '../assets/projects/LinkedInScrape2.png'
import carouselPic3 from '../assets/projects/LinkedInScrape3.png'

function LinkedInProj({topProject}) {
    const [index, setIndex] = useState(0);
    const [toggleCollapseBtnValue, setToggleCollapseBtnValue] = useState("Collapse");

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const toggleCollapse = () => {
        toggleCollapseBtnValue === "Collapse" ? setToggleCollapseBtnValue("Expand") : setToggleCollapseBtnValue("Collapse");

        document.getElementById("linkedInProjhLine").style.display =
            document.getElementById("linkedInProjhLine").style.display === "block" ? "none" : "block";
        document.getElementById("linkedInProjMainPart").style.display =
            document.getElementById("linkedInProjMainPart").style.display === "flex" ? "none" : "flex";
    };

    return (
        <section className={`${topProject === true ? linkedInProjStyles.projectParentTopProj : ""} ${linkedInProjStyles.projectParent}`} id="linkedInProj">
            <section className={`${linkedInProjStyles.project}`}>
                <div className={`${linkedInProjStyles.projectHeadDiv}`}>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h3 className={`${linkedInProjStyles.projectHead}`}>LinkedIn Job Webscrapper</h3>
                        <input type="button" id="toggleCollapseBtn1" value={toggleCollapseBtnValue} className={`${linkedInProjStyles.toggleCollapseBtn}`} onClick={toggleCollapse} />
                    </div>
                    <hr style={{ "display": "block" }} id="linkedInProjhLine" className={`${linkedInProjStyles.hLine}`} />
                </div>
                <div style={{ "display": "flex" }} id="linkedInProjMainPart" className={`${linkedInProjStyles.projectMainPart}`}>
                    <div className={`${linkedInProjStyles.projectTextnBtn}`}>
                        <div className={`${linkedInProjStyles.projectText}`}>
                            <p>
                                Displaying job posts based on role.
                                A simple web scrapping project built with Beautiful Soup in Python to pull data from LInkedIN job page based on a query for the role.
                                Data is display on an HTML file using Flask.
                            </p>
                        </div>
                        <div className={`${linkedInProjStyles.bottomBtnsDiv}`}>
                            <a href="https://www.linkedin.com/posts/binayakbishnu_a-simple-web-scrapping-project-using-python-activity-7079692402214469632-hNTG" target="_blank" rel="noopener noreferrer" className={`${linkedInProjStyles.projectBtnLink}`}>
                                <input type="button" value="Demo" className={`${linkedInProjStyles.projectBtn}`} />
                            </a>
                        </div>
                    </div>
                    <div className={`${linkedInProjStyles.projectSlideShow}`}>
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

export default LinkedInProj
