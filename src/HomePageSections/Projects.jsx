import React from 'react'

import projectStyles from './Projects.module.css'

import tastalchemyThumbnail from '../assets/projects/Tastalchemy1.jpg'
import valuationCalcThumbnail from '../assets/projects/ValuationCalc1.jpg'
import cyclistVisuThumbnail from '../assets/projects/CyclistVisu1.svg'
import onyxHotelThumbnail from '../assets/projects/OnyxHotel1.svg'
import spotifyThumbnail from '../assets/projects/Spotify1.svg'
import linkedInProjThumbnail from '../assets/projects/LinkedInScrape1.png'
import rainFallProjThumbnail from '../assets/projects/RainfallAnalysis1.png'
import mediServThumbnail from '../assets/projects/MediServ1.webp'
import bookRevThumbnail from '../assets/projects/BookRev1.webp'

function Projects() {
    const projectFilter = (event) => {
        var flag = 0;
        var childrenCount = document.getElementById('projectsMainPart').childElementCount;
        var children = document.getElementById('projectsMainPart').childNodes;
        var childrenArray = [...children];
        for (var i = 1; i < childrenCount; i++) {
            if (childrenArray[i].classList.contains(event.target.id)) {
                childrenArray[i].style.display = 'block';
                flag += 1;
            }
            else {
                childrenArray[i].style.display = 'none';
            }
        }
        // for (var i = 1; i <= childrenCount - 1; i++) {
        //     var element = document.getElementById(`project${i}`);
        //     if (element.classList.contains(event.target.id)) {
        //         // alert(event.target.id + '\n' + element.classList);
        //         element.style.display = 'block';
        //         flag += 1;
        //     } else {
        //         // alert('Removing: ' + element.id);
        //         element.style.display = 'none';
        //     }
        // }
        document.getElementById("filterResultDiv").style.display = "flex";
        flag === 0 ? document.getElementById("countFiltersMatched").innerHTML = "None matched &nbsp;" : document.getElementById("countFiltersMatched").innerHTML = `${flag} matched &nbsp;`;
    }

    const removeFilters = () => {
        document.getElementById("filterResultDiv").style.display = "none";
        var childrenCount = document.getElementById('projectsMainPart').childElementCount;
        var children = document.getElementById('projectsMainPart').childNodes;
        var childrenArray = [...children];
        for (var i = 1; i < childrenCount; i++) {
            childrenArray[i].style.display = 'block';
        }
    }

    return (
        <section className={`${projectStyles.projectsParent}`} id="projects"
            initial={{ rotate: 0, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1.0 }}
            transition={{ duration: 1, /* yoyo: 1 */ }}
        >
            <section className={`${projectStyles.projects}`} id="projects">
                <div id="headWithLine">
                    <div className={`${projectStyles.projectsHeadDiv}`}>
                        <h3 className={`${projectStyles.projectsHead}`}>Projects</h3>
                        <ul className={`${projectStyles.projectFilters}`}>
                            {/* <li className={`${projectStyles.filterHeading}`}>Filters: </li> */}
                            <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersAnalytics" id="analytics" onClick={(e) => projectFilter(e)}>Analytics</button>
                            </li>
                            <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersDashboards" id="dashboards" onClick={(e) => projectFilter(e)}>Dashboards</button>
                            </li>
                            <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersFullStack" id="fullStack" onClick={(e) => projectFilter(e)}>Full Stack</button>
                            </li>
                            <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersExcel" id="Excel" onClick={(e) => projectFilter(e)}>Excel</button>
                            </li>
                            <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersSQL" id="SQL" onClick={(e) => projectFilter(e)}>SQL</button>
                            </li>
                            {/* <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersTableau" id="Tableau" onClick={(e) => projectFilter(e)}>Tableau</button>
                            </li> */}
                            {/* <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersEDA" id="EDA" onClick={(e) => projectFilter(e)}>EDA</button>
                            </li> */}
                            <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersOthers" id="Others" onClick={(e) => projectFilter(e)}>Others</button>
                            </li>
                        </ul>
                        <a href="/allprojects" style={{ "color": "white" }}>See all</a>
                    </div>
                    <hr className={`${projectStyles.hLine}`} />
                </div>

                <div id="filterResultDiv" className={`${projectStyles.filterResultDiv}`}>
                    <p id="countFiltersMatched" className={`${projectStyles.countFiltersMatched} m-0 mb-2 p-0`}></p>
                    <button id="removeFilters" onClick={removeFilters} className={`${projectStyles.removeFilters}`}>
                        Remove filters
                    </button>
                </div>

                <div id="projectsMainPart" className={`${projectStyles.projectsMainPart}`}>
                    <p className={`${projectStyles.mobileHint} m-0 mb-2 p-0`}>Click on any to expand</p>
                    <div id="tastalchemy" className={`${projectStyles.project} ${projectStyles.tastalchemy} fullStack Reactjs Nodejs Firebase`}>
                        <div className={`${projectStyles.container}`}>
                            <a href="/allprojects#tastalchemy">
                                <img src={tastalchemyThumbnail} alt="tastalchemy" className={`${projectStyles.projectImg} ${projectStyles.tastalchemyImg}`}
                                    width="100%"
                                    height="100%" />
                                <div className={`${projectStyles.overlay}`}>
                                    <div className={`${projectStyles.text}`}>
                                        <h5>Tastalchemy</h5>
                                        <p>Personal digital recipe book.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className={projectStyles.projectTechStack}>Full stack&nbsp;|&nbsp;ReactJs&nbsp;|&nbsp;NodeJs&nbsp;|&nbsp;Firebase</p>
                    </div>
                    <div id="valuationCalc" className={`${projectStyles.project} ${projectStyles.valuationCalc} analytics dashboards Excel Others`}>
                        <div className={`${projectStyles.container}`}>
                            <a href="/allprojects#valuationCalc">
                                <img src={valuationCalcThumbnail} alt="valuationCalc" className={`${projectStyles.projectImg} ${projectStyles.valuationCalcImg}`}
                                    width="100%"
                                    height="100%" />
                                <div className={`${projectStyles.overlay}`}>
                                    <div className={`${projectStyles.text}`}>
                                        <h5>Company Valuation Calculator</h5>
                                        <p>Excel based calculator for company valuations and metrics.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className={projectStyles.projectTechStack}>Finance&nbsp;|&nbsp;Analytics&nbsp;|&nbsp;Dashboards&nbsp;|&nbsp;Excel</p>
                    </div>
                    <div id="cyclistVisu" className={`${projectStyles.project} ${projectStyles.cyclistVisu} analytics dashboards PowerBi Others`}>
                        <div className={`${projectStyles.container}`}>
                            <a href="/allprojects#cyclistVisu">
                                <img src={cyclistVisuThumbnail} alt="cyclistVisu" className={`${projectStyles.projectImg} ${projectStyles.cyclistVisuImg}`}
                                    width="100%"
                                    height="100%" />
                                <div className={`${projectStyles.overlay}`}>
                                    <div className={`${projectStyles.text}`}>
                                        <h5>Case Study: Bike-sharing</h5>
                                        <p>Analysing the trends in usage for a bike-sharing company.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className={projectStyles.projectTechStack}>Analytics&nbsp;|&nbsp;Dashboards&nbsp;|&nbsp;Power Bi</p>
                    </div>
                    <div id="onyxHotel" className={`${projectStyles.project} ${projectStyles.onyxHotel} analytics dashboards Excel`}>
                        <div className={`${projectStyles.container}`}>
                            <a href="/allprojects#onyxHotel">
                                <img src={onyxHotelThumbnail} alt="onyxHotel" className={`${projectStyles.projectImg} ${projectStyles.onyxHotelImg}`}
                                    width="100%"
                                    height="100%" />
                                <div className={`${projectStyles.overlay}`}>
                                    <div className={`${projectStyles.text}`}>
                                        <h5>Participation: Onyx Data Challenge</h5>
                                        <p>Presented a report for Hotel bookings dataset for the Onyx dataset challenge.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className={projectStyles.projectTechStack}>Analytics&nbsp;|&nbsp;Dashboards&nbsp;|&nbsp;Excel</p>
                    </div>
                    <div id="spotify" className={`${projectStyles.project} ${projectStyles.spotify} analytics dashboards Excel`}>
                        <div className={`${projectStyles.container}`}>
                            <a href="/allprojects#spotify">
                                <img src={spotifyThumbnail} alt="spotify" className={`${projectStyles.projectImg} ${projectStyles.spotifyImg}`}
                                    width="100%"
                                    height="100%" />
                                <div className={`${projectStyles.overlay}`}>
                                    <div className={`${projectStyles.text}`}>
                                        <h5>Spotify Wrapped 2022</h5>
                                        <p>Created a spotify wrapped for my own profile.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className={projectStyles.projectTechStack}>Analytics&nbsp;|&nbsp;Dashboards&nbsp;|&nbsp;Excel</p>
                    </div>
                    <div id="linkedInProj" className={`${projectStyles.project} ${projectStyles.linkedInProj} webscrapping Python Others`}>
                        <div className={`${projectStyles.container}`}>
                            <a href="/allprojects#linkedInProj">
                                <img src={linkedInProjThumbnail} alt="linkedInProj" className={`${projectStyles.projectImg} ${projectStyles.linkedInProjImg}`}
                                    width="100%"
                                    height="100%" />
                                <div className={`${projectStyles.overlay}`}>
                                    <div className={`${projectStyles.text}`}>
                                        <h5>LinkedIn Job Webscrapper</h5>
                                        <p>Displaying job posts based on role</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className={projectStyles.projectTechStack}>Webscrapping&nbsp;|&nbsp;Python</p>
                    </div>
                    <div id="rainFallProj" className={`${projectStyles.project} ${projectStyles.rainFallProj} analytics dashboards Excel`}>
                        <div className={`${projectStyles.container}`}>
                            <a href="/allprojects#rainFallProj">
                                <img src={rainFallProjThumbnail} alt="rainFallProj" className={`${projectStyles.projectImg} ${projectStyles.rainFallProjImg}`}
                                    width="100%"
                                    height="100%" />
                                <div className={`${projectStyles.overlay}`}>
                                    <div className={`${projectStyles.text}`}>
                                        <h5>Rainfall Analysis</h5>
                                        <p>Visualising rainfall patterns</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className={projectStyles.projectTechStack}>Analytics&nbsp;|&nbsp;Dashboards&nbsp;|&nbsp;Excel</p>
                    </div>
                    <div id="mediServ" className={`${projectStyles.project} ${projectStyles.mediServ} fullStack MongoDB Others`}>
                        <div className={`${projectStyles.container}`}>
                            <a href="/allprojects#mediServ">
                                <img src={mediServThumbnail} alt="mediServ" className={`${projectStyles.projectImg} ${projectStyles.mediServImg}`}
                                    width="100%"
                                    height="100%" />
                                <div className={`${projectStyles.overlay}`}>
                                    <div className={`${projectStyles.text}`}>
                                        <h5>BookRev</h5>
                                        <p>Online book sell/buy store</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className={projectStyles.projectTechStack}>Full stack&nbsp;|&nbsp;MongoDB</p>
                    </div>
                    <div id="bookRev" className={`${projectStyles.project} ${projectStyles.bookRev} fullStack SQL`}>
                        <div className={`${projectStyles.container}`}>
                            <a href="/allprojects#bookRev">
                                <img src={bookRevThumbnail} alt="bookRev" className={`${projectStyles.projectImg} ${projectStyles.bookRevImg}`}
                                    width="100%"
                                    height="100%" />
                                <div className={`${projectStyles.overlay}`}>
                                    <div className={`${projectStyles.text}`}>
                                        <h5>MediServ</h5>
                                        <p>Online consultation/medical store</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className={projectStyles.projectTechStack}>Full stack&nbsp;|&nbsp;SQL</p>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default Projects
