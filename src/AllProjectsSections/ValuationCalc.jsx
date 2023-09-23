import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import ValuationCalcStyles from './Project.module.css'

import carouselPic1 from '../assets/projects/ValuationCalc1.jpg'
import carouselPic2 from '../assets/projects/ValuationCalc2.jpg'

function ValuationCalc({ topProject }) {
    const [index, setIndex] = useState(0);
    const [toggleCollapseBtnValue, setToggleCollapseBtnValue] = useState("Collapse");

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const toggleCollapse = () => {
        toggleCollapseBtnValue === "Collapse" ? setToggleCollapseBtnValue("Expand") : setToggleCollapseBtnValue("Collapse");

        document.getElementById("valuationCalchLine").style.display =
            document.getElementById("valuationCalchLine").style.display === "block" ? "none" : "block";
        document.getElementById("valuationCalcMainPart").style.display =
            document.getElementById("valuationCalcMainPart").style.display === "flex" ? "none" : "flex";
    };

    // const completedClass = topProject ? ValuationCalcStyles. : '';

    return (
        <section className={`${topProject === true ? ValuationCalcStyles.projectParentTopProj : ""} ${ValuationCalcStyles.projectParent}`} id={`valuationCalc`}>
            <section className={`${ValuationCalcStyles.project}`}>
                <div className={`${ValuationCalcStyles.projectHeadDiv}`}>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h3 className={`${ValuationCalcStyles.projectHead}`}>Company Valuation Calculator Dashboard</h3>
                        <input type="button" id="toggleCollapseBtn1" value={toggleCollapseBtnValue} className={`${ValuationCalcStyles.toggleCollapseBtn}`} onClick={toggleCollapse} />
                    </div>
                    <hr style={{ "display": "block" }} id="valuationCalchLine" className={`${ValuationCalcStyles.hLine}`} />
                </div>
                <div style={{ "display": "flex" }} id="valuationCalcMainPart" className={`${ValuationCalcStyles.projectMainPart}`}>
                    <div className={`${ValuationCalcStyles.projectTextnBtn}`}>
                        <div className={`${ValuationCalcStyles.projectText}`}>
                            <p>
                                Excel based calculator for company valuations and metrics.
                            </p>
                            <p>
                                Developed a calculator integrating share price, EPS, RPS, BVPS, and discount rate metrics.
                                Display calculated valuesof Market Cap, DCF, P/E, P/B, and P/S ratios and presented these in an interactive dashboard.
                            </p>
                        </div>
                        {/* <div className={`${ValuationCalcStyles.bottomBtnsDiv}`}>
                            <a href="https://medium.com/@binayakbishnu/case-study-how-does-a-bike-share-navigate-speedy-success-f537b29b45f5?source=friends_link&sk=f0d0caccb33a270d7f2529cf5ac5494b" target="_blank" rel="noopener noreferrer" className={`${ValuationCalcStyles.projectBtnLink}`}>
                                <input type="button" value="Medium Blog" className={`${ValuationCalcStyles.projectBtn}`} />
                            </a>
                            <a href="https://www.linkedin.com/posts/binayakbishnu_case-study-report-activity-7094187914229690368-rIms" target="_blank" rel="noopener noreferrer" className={`${ValuationCalcStyles.projectBtnLink}`}>
                                <input type="button" value="LinkedIn post" className={`${ValuationCalcStyles.projectBtn}`} />
                            </a>
                        </div> */}
                    </div>
                    <div className={`${ValuationCalcStyles.projectSlideShow}`}>
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
                        </Carousel>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default ValuationCalc