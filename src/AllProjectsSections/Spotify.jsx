import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import SpotifyStyles from './Project.module.css'

import carouselPic1 from '../assets/projects/Spotify1.svg'
import carouselPic2 from '../assets/projects/Spotify2.svg'
// import carouselPic3 from '../assets/projects/Spotify3.svg'

function Spotify({ topProject }) {
    const [index, setIndex] = useState(0);
    const [toggleCollapseBtnValue, setToggleCollapseBtnValue] = useState("Collapse");

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const toggleCollapse = () => {
        toggleCollapseBtnValue === "Collapse" ? setToggleCollapseBtnValue("Expand") : setToggleCollapseBtnValue("Collapse");

        document.getElementById("spotifyhLine").style.display =
            document.getElementById("spotifyhLine").style.display === "block" ? "none" : "block";
        document.getElementById("spotifyMainPart").style.display =
            document.getElementById("spotifyMainPart").style.display === "flex" ? "none" : "flex";
    };

    // const completedClass = topProject ? SpotifyStyles. : '';

    return (
        <section className={`${topProject === true ? SpotifyStyles.projectParentTopProj : ""} ${SpotifyStyles.projectParent}`} id={`spotify`}>
            <section className={`${SpotifyStyles.project}`}>
                <div className={`${SpotifyStyles.projectHeadDiv}`}>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h3 className={`${SpotifyStyles.projectHead}`}>Spotify Wrapped 2022</h3>
                        <input type="button" id="toggleCollapseBtn1" value={toggleCollapseBtnValue} className={`${SpotifyStyles.toggleCollapseBtn}`} onClick={toggleCollapse} />
                    </div>
                    <hr style={{ "display": "block" }} id="spotifyhLine" className={`${SpotifyStyles.hLine}`} />
                </div>
                <div style={{ "display": "flex" }} id="spotifyMainPart" className={`${SpotifyStyles.projectMainPart}`}>
                    <div className={`${SpotifyStyles.projectTextnBtn}`}>
                        <div className={`${SpotifyStyles.projectText}`}>
                            <p>
                                Created a spotify wrapped for my own profile.
                            </p>
                            <p>Carried out data transformations and cleaning.
                                Next, this was loaded into the Data Model to create PowerPivot tables and PivotCharts.
                                Finally, all the charts were brought into the dashboard with slicers to filter them.
                            </p>
                        </div>
                        <div className={`${SpotifyStyles.bottomBtnsDiv}`}>
                            <a href="https://www.linkedin.com/posts/binayakbishnu_created-my-own-spotify-wrapped-in-excel-activity-7088374620101181440-lP6Q" target="_blank" rel="noopener noreferrer" className={`${SpotifyStyles.projectBtnLink}`}>
                                <input type="button" value="LinkedIn post" className={`${SpotifyStyles.projectBtn}`} />
                            </a>
                        </div>
                    </div>
                    <div className={`${SpotifyStyles.projectSlideShow}`}>
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
                            {/* <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={carouselPic3}
                                    alt="Third slide"
                                    style={{ "borderRadius": "10px" }}
                                    width="100%"
                                    height="100%"
                                />
                            </Carousel.Item> */}
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

export default Spotify