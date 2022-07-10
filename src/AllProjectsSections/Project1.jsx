import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import project1Styles from './Project.module.css'

import carouselPic1 from '../assets/projects/MediServ1.png'
import carouselPic2 from '../assets/projects/MediServ2.png'
import carouselPic3 from '../assets/projects/MediServ3.png'

function Project1() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <section className={`${project1Styles.projectParent}`}>
            <section className={`${project1Styles.project}`}>
                <div className={`${project1Styles.projectHeadDiv}`}>
                    <h3 className={`${project1Styles.projectHead}`}>MediServ</h3>
                    <hr className={`${project1Styles.hLine}`} />
                </div>
                <div className={`${project1Styles.projectMainPart}`}>
                    <div className={`${project1Styles.projectText}`}>
                        <p>
                            Website built on ReactJs, NodeJs/ExpressJs and SQL.
                            It allows users to order medicine and consult doctors online.
                        </p>
                    </div>
                    <div className={`${project1Styles.projectSlideShow}`}>
                        <Carousel activeIndex={index} onSelect={handleSelect} fade variant="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carouselPic1}
                                    alt="First slide"
                                    style={{ "borderRadius": "10px" }}
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
