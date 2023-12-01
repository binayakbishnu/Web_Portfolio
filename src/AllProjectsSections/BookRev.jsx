import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import bookRevStyles from './Project.module.css'

// import carouselPic1 from '../assets/projects/BookRev1.webp'
import carouselPic2 from '../assets/projects/BookRev2.webp'
import carouselPic3 from '../assets/projects/BookRev3.webp'
import carouselPic4 from '../assets/projects/BookRev4.webp'
import carouselPic5 from '../assets/projects/BookRev5.webp'

function BookRev() {
    const [index, setIndex] = useState(0);
    const [toggleCollapseBtnValue, setToggleCollapseBtnValue] = useState("Collapse");

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const toggleCollapse = () => {
        toggleCollapseBtnValue === "Collapse" ? setToggleCollapseBtnValue("Expand") : setToggleCollapseBtnValue("Collapse");

        document.getElementById("bookRevMainPart").style.display =
            document.getElementById("bookRevMainPart").style.display === "flex" ? "none" : "flex";
        document.getElementById("bookRevhLine").style.display =
            document.getElementById("bookRevhLine").style.display === "block" ? "none" : "block";
    };

    return (
        <section className={`${bookRevStyles.projectParent}`} id="bookRev">
            <section className={`${bookRevStyles.project}`}>
                <div className={`${bookRevStyles.projectHeadDiv}`}>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h3 className={`${bookRevStyles.projectHead}`}>BookRev</h3>
                        <input type="button" id="toggleCollapseBtn2" value={toggleCollapseBtnValue} className={`${bookRevStyles.toggleCollapseBtn}`} onClick={toggleCollapse} />
                    </div>
                    <hr style={{ "display": "block" }} id="bookRevhLine" className={`${bookRevStyles.hLine}`} />
                </div>
                <div style={{ "display": "flex" }} id="bookRevMainPart" className={`${bookRevStyles.projectMainPart}`}>
                    <div className={`${bookRevStyles.projectTextnBtn}`}>
                        <div className={`${bookRevStyles.projectText}`}>
                            <p>
                                Website built on HTML, CSS, Javascript, NodeJs and MongoDB.
                                It allows users to buy and sell books online.
                            </p>
                        </div>
                        <div className={`${bookRevStyles.bottomBtnsDiv}`}>
                            <a href="https://github.com/chetan-0/BookRev" target="_blank" rel="noopener noreferrer" className={`${bookRevStyles.projectBtnLink}`}>
                                <input type="button" value="GitHub" className={`${bookRevStyles.projectBtn}`} />
                            </a>
                        </div>
                    </div>
                    <div className={`${bookRevStyles.projectSlideShow}`}>
                        <Carousel activeIndex={index} onSelect={handleSelect} fade variant="dark">
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
                            <Carousel.Item>
                                <img loading='lazy'
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
                                <img loading='lazy'
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

export default BookRev
