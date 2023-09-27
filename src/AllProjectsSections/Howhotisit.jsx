import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import howHotIsItStyles from './Project.module.css'

import carouselPic1 from '../assets/projects/HowHotIsIt1.jpg'
import carouselPic2 from '../assets/projects/HowHotIsIt2.jpg'

function HowHotIsIt() {
    const [index, setIndex] = useState(0);
    const [toggleCollapseBtnValue, setToggleCollapseBtnValue] = useState("Collapse");

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const toggleCollapse = () => {
        toggleCollapseBtnValue === "Collapse" ? setToggleCollapseBtnValue("Expand") : setToggleCollapseBtnValue("Collapse");

        document.getElementById("howHotIsItMainPart").style.display =
            document.getElementById("howHotIsItMainPart").style.display === "flex" ? "none" : "flex";
        document.getElementById("howHotIsIthLine").style.display =
            document.getElementById("howHotIsIthLine").style.display === "block" ? "none" : "block";
    };

    return (
        <section className={`${howHotIsItStyles.projectParent}`} id="howHotIsIt">
            <section className={`${howHotIsItStyles.project}`}>
                <div className={`${howHotIsItStyles.projectHeadDiv}`}>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h3 className={`${howHotIsItStyles.projectHead}`}>HowHotIsIt</h3>
                        <input type="button" id="toggleCollapseBtn2" value={toggleCollapseBtnValue} className={`${howHotIsItStyles.toggleCollapseBtn}`} onClick={toggleCollapse} />
                    </div>
                    <hr style={{ "display": "block" }} id="howHotIsIthLine" className={`${howHotIsItStyles.hLine}`} />
                </div>
                <div style={{ "display": "flex" }} id="howHotIsItMainPart" className={`${howHotIsItStyles.projectMainPart}`}>
                    <div className={`${howHotIsItStyles.projectTextnBtn}`}>
                        <div className={`${howHotIsItStyles.projectText}`}>
                            <p>
                                This dashboard shows some essential weather updates of cities all over the world based on the city entered by the user. This dashboard also has error handling for wrong or empty inputs.
                            </p>
                        </div>
                        <div className={`${howHotIsItStyles.bottomBtnsDiv}`}>
                            <a href="https://howhotisit.netlify.app" target="_blank" rel="noopener noreferrer" className={`${howHotIsItStyles.projectBtnLink}`}>
                                <input type="button" value="Deployed website" className={`${howHotIsItStyles.projectBtn}`} />
                            </a>
                            <a href="https://drive.google.com/file/d/1P-V4wmABt4HlasilLu2aeNgzTjimi5dY/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={`${howHotIsItStyles.projectBtnLink}`}>
                                <input type="button" value="Demo" className={`${howHotIsItStyles.projectBtn}`} />
                            </a>
                        </div>
                    </div>
                    <div className={`${howHotIsItStyles.projectSlideShow}`}>
                        <Carousel activeIndex={index} onSelect={handleSelect} fade variant="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carouselPic1}
                                    alt="Second slide"
                                    style={{ "borderRadius": "10px" }}
                                    width="100%"
                                    height="100%"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carouselPic2}
                                    alt="Third slide"
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

export default HowHotIsIt
