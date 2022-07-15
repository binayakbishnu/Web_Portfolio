import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import researchWork1Styles from './ResearchWork.module.css'

import carouselPic1 from '../assets/researchWorks/StockMarket1.webp'
import carouselPic2 from '../assets/researchWorks/StockMarket4.webp'
import carouselPic3 from '../assets/researchWorks/StockMarket5.webp'
import carouselPic4 from '../assets/researchWorks/StockMarket6.webp'
import carouselPic5 from '../assets/researchWorks/StockMarket7.webp'

function ResearchWork1() {
    const [index, setIndex] = useState(0);
    const [toggleCollapseBtnValue, setToggleCollapseBtnValue] = useState("Collapse");

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const toggleCollapse = () => {
        toggleCollapseBtnValue === "Collapse" ? setToggleCollapseBtnValue("Expand") : setToggleCollapseBtnValue("Collapse");

        document.getElementById("hLine").style.display =
            document.getElementById("hLine").style.display === "block" ? "none" : "block";
        document.getElementById("researchWorkMainPart").style.display =
            document.getElementById("researchWorkMainPart").style.display === "flex" ? "none" : "flex";
    };

    return (
        <section className={`${researchWork1Styles.researchWorkParent}`} id="researchWork1">
            <section className={`${researchWork1Styles.researchWork}`}>
                <div className={`${researchWork1Styles.researchWorkHeadDiv}`}>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h3 className={`${researchWork1Styles.researchWorkHead}`}>Assessing the Stock Market for new investors</h3>
                        <input type="button" id="toggleCollapseBtn" value={toggleCollapseBtnValue} className={`${researchWork1Styles.toggleCollapseBtn}`} onClick={toggleCollapse} />
                    </div>
                    <hr style={{ "display": "block" }} id="hLine" className={`${researchWork1Styles.hLine}`} />
                </div>
                <div style={{ "display": "flex" }} className={`${researchWork1Styles.researchWorkMainPart}`} id="researchWorkMainPart">
                    <div className={`${researchWork1Styles.researchWorkTextnBtn}`}>
                        <div className={`${researchWork1Styles.researchWorkText}`}>
                            <p className='m-0'>
                                Stock market prediction systems have been in high demand in recent
                                times after artificial intelligence and machine learning models became popular even in non-technical fields and workspaces.
                                An efficient predictor can not only help businesses and individuals to make informed decisions but
                                also act as a guide for those just starting out.
                            </p>
                            <p className='m-0'>
                                New investors are often overwhelmed when it comes to investing in the
                                stock market and prefer an automated system to guide them and help them
                                make informed decisions.
                            </p>
                            <p className='m-0'>
                                The research deals with searching for and implementing an efficient algorithm
                                to analyse the stock market.
                                Various algorithm and learning models have been explored to decide on the
                                best fit(s) for the purpose of this research
                            </p>
                        </div>
                        <div className={`${researchWork1Styles.bottomBtnsDiv}`}>
                            <a href="https://drive.google.com/drive/folders/1Ofw8XjHtl0pBNXa9DhhxGiHufiq5UX98?usp=sharing" target="_blank" rel="noopener noreferrer" className={`${researchWork1Styles.researchWorkBtnLink}`}>
                                <input disabled type="button" value="Paper" className={`${researchWork1Styles.bottomBtns}`} />
                            </a>
                            <a href="https://www.canva.com/design/DAE-DNLHPvs/ywFWkaq_3AEj0C1R5nZygQ/view?utm_content=DAE-DNLHPvs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" className={`${researchWork1Styles.researchWorkBtnLink} ${researchWork1Styles.pptLink}`}>
                                <input type="button" value="Presentation" className={`${researchWork1Styles.bottomBtns}`} />
                            </a>
                        </div>
                    </div>
                    <div className={`${researchWork1Styles.researchWorkSlideShow}`}>
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
                        </Carousel>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default ResearchWork1
