import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import OnyxHotelStyles from './Project.module.css'

import carouselPic1 from '../assets/projects/OnyxHotel1.svg'
import carouselPic2 from '../assets/projects/OnyxHotel2.svg'
import carouselPic3 from '../assets/projects/OnyxHotel3.svg'

function OnyxHotel({ topProject }) {
    const [index, setIndex] = useState(0);
    const [toggleCollapseBtnValue, setToggleCollapseBtnValue] = useState("Collapse");

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const toggleCollapse = () => {
        toggleCollapseBtnValue === "Collapse" ? setToggleCollapseBtnValue("Expand") : setToggleCollapseBtnValue("Collapse");

        document.getElementById("onyxHotelhLine").style.display =
            document.getElementById("onyxHotelhLine").style.display === "block" ? "none" : "block";
        document.getElementById("onyxHotelMainPart").style.display =
            document.getElementById("onyxHotelMainPart").style.display === "flex" ? "none" : "flex";
    };

    // const completedClass = topProject ? OnyxHotelStyles. : '';

    return (
        <section className={`${topProject === true ? OnyxHotelStyles.projectParentTopProj : ""} ${OnyxHotelStyles.projectParent}`} id={`onyxHotel`}>
            <section className={`${OnyxHotelStyles.project}`}>
                <div className={`${OnyxHotelStyles.projectHeadDiv}`}>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h3 className={`${OnyxHotelStyles.projectHead}`}>Participation: Onyx Data Challenge</h3>
                        <input type="button" id="toggleCollapseBtn1" value={toggleCollapseBtnValue} className={`${OnyxHotelStyles.toggleCollapseBtn}`} onClick={toggleCollapse} />
                    </div>
                    <hr style={{ "display": "block" }} id="onyxHotelhLine" className={`${OnyxHotelStyles.hLine}`} />
                </div>
                <div style={{ "display": "flex" }} id="onyxHotelMainPart" className={`${OnyxHotelStyles.projectMainPart}`}>
                    <div className={`${OnyxHotelStyles.projectTextnBtn}`}>
                        <div className={`${OnyxHotelStyles.projectText}`}>
                            <p>
                                Participated in the Onyx dataset challenge and presented a report for Hotel bookings dataset.
                            </p>
                            <p>
                                Created and analysed various metrics using Pivot tables and graphs.
                                Made use of Macros to automate filtering on the dahsboard.
                            </p>
                        </div>
                        <div className={`${OnyxHotelStyles.bottomBtnsDiv}`}>
                            <a href="https://www.linkedin.com/posts/binayakbishnu_datadna-activity-7088964729859190784-cba7" target="_blank" rel="noopener noreferrer" className={`${OnyxHotelStyles.projectBtnLink}`}>
                                <input type="button" value="LinkedIn post" className={`${OnyxHotelStyles.projectBtn}`} />
                            </a>
                        </div>
                    </div>
                    <div className={`${OnyxHotelStyles.projectSlideShow}`}>
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

export default OnyxHotel