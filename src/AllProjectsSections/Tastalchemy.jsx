import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import TastalchemyStyles from './Project.module.css'

import carouselPic1 from '../assets/projects/Tastalchemy1.jpg'
import carouselPic2 from '../assets/projects/Tastalchemy2.jpg'
import carouselPic3 from '../assets/projects/Tastalchemy3.jpg'
import carouselPic4 from '../assets/projects/Tastalchemy4.jpg'
import carouselPic5 from '../assets/projects/Tastalchemy5.jpg'
import carouselPic6 from '../assets/projects/Tastalchemy6.jpg'
import carouselPic7 from '../assets/projects/Tastalchemy7.jpg'
import carouselPic8 from '../assets/projects/Tastalchemy8.jpg'
import carouselPic9 from '../assets/projects/Tastalchemy9.jpg'

function Tastalchemy({ topProject }) {
    const [index, setIndex] = useState(0);
    const [toggleCollapseBtnValue, setToggleCollapseBtnValue] = useState("Collapse");

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const toggleCollapse = () => {
        toggleCollapseBtnValue === "Collapse" ? setToggleCollapseBtnValue("Expand") : setToggleCollapseBtnValue("Collapse");

        document.getElementById("tastalchemyhLine").style.display =
            document.getElementById("tastalchemyhLine").style.display === "block" ? "none" : "block";
        document.getElementById("tastalchemyMainPart").style.display =
            document.getElementById("tastalchemyMainPart").style.display === "flex" ? "none" : "flex";
    };

    // const completedClass = topProject ? TastalchemyStyles. : '';

    return (
        <section className={`${topProject === true ? TastalchemyStyles.projectParentTopProj : ""} ${TastalchemyStyles.projectParent}`} id={`tastalchemy`}>
            <section className={`${TastalchemyStyles.project}`}>
                <div className={`${TastalchemyStyles.projectHeadDiv}`}>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h3 className={`${TastalchemyStyles.projectHead}`}>Tastalchemy</h3>
                        <input type="button" id="toggleCollapseBtn1" value={toggleCollapseBtnValue} className={`${TastalchemyStyles.toggleCollapseBtn}`} onClick={toggleCollapse} />
                    </div>
                    <hr style={{ "display": "block" }} id="tastalchemyhLine" className={`${TastalchemyStyles.hLine}`} />
                </div>
                <div style={{ "display": "flex" }} id="tastalchemyMainPart" className={`${TastalchemyStyles.projectMainPart}`}>
                    <div className={`${TastalchemyStyles.projectTextnBtn}`}>
                        <div className={`${TastalchemyStyles.projectText}`}>
                            <p>
                                Personal digital recipe book.
                            </p>
                            <p>
                                Users can add their recipes onto the platform and store it for future reference.
                                Built with ReactJs, Nodejs, and Firebase for authentication and storage.
                            </p>
                        </div>
                        <div className={`${TastalchemyStyles.bottomBtnsDiv}`}>
                            <a href="https://tastalchemy.web.app/" target="_blank" rel="noopener noreferrer" className={`${TastalchemyStyles.projectBtnLink}`}>
                                <input type="button" value="Deployed website" className={`${TastalchemyStyles.projectBtn}`} />
                            </a>
                            {/* <a href="https://drive.google.com/file/d/1P-V4wmABt4HlasilLu2aeNgzTjimi5dY/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={`${TastalchemyStyles.projectBtnLink}`}>
                                <input type="button" value="Demo" className={`${TastalchemyStyles.projectBtn}`} />
                            </a> */}
                        </div>
                    </div>
                    <div className={`${TastalchemyStyles.projectSlideShow}`}>
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
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carouselPic4}
                                    alt="Fourth slide"
                                    style={{ "borderRadius": "10px" }}
                                    width="100%"
                                    height="100%"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carouselPic5}
                                    alt="Fifth slide"
                                    style={{ "borderRadius": "10px" }}
                                    width="100%"
                                    height="100%"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carouselPic6}
                                    alt="Sixth slide"
                                    style={{ "borderRadius": "10px" }}
                                    width="100%"
                                    height="100%"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carouselPic7}
                                    alt="Seventh slide"
                                    style={{ "borderRadius": "10px" }}
                                    width="100%"
                                    height="100%"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carouselPic8}
                                    alt="Eighth slide"
                                    style={{ "borderRadius": "10px" }}
                                    width="100%"
                                    height="100%"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carouselPic9}
                                    alt="Ninth slide"
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

export default Tastalchemy