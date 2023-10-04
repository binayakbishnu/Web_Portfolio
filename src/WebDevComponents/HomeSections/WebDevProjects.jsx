import React from 'react'

import projectStyles from './WebProjects.module.css'

import tastalchemyThumbnail from '../../assets/projects/Tastalchemy1.jpg'
import oneResumeThumbnail from '../../assets/projects/OneResume1.jpg'
import howHotIsItThumbnail from '../../assets/projects/HowHotIsIt1.jpg'
import mediServThumbnail from '../../assets/projects/MediServ1.webp'
import bookRevThumbnail from '../../assets/projects/BookRev1.webp'

function WebProjects() {
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
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersFullStack" id="fullStack" onClick={(e) => projectFilter(e)}>Full Stack</button>
                            </li>
                            <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersOthers" id="Reactjs" onClick={(e) => projectFilter(e)}>ReactJs</button>
                            </li>
                            <li className={`${projectStyles.projectFiltersCategory}`}>
                                <button className={`${projectStyles.projectFiltersButton}`} name="projectFiltersOthers" id="Nodejs" onClick={(e) => projectFilter(e)}>NodeJs</button>
                            </li>
                        </ul>
                        <a href="/webdev/projects" style={{ "color": "white" }}>See all</a>
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
                            <a href="/webdev/projects#tastalchemy">
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
                    <div id="oneResume" className={`${projectStyles.project} ${projectStyles.oneResume} fullStack Reactjs Nodejs Firebase`}>
                        <div className={`${projectStyles.container}`}>
                            <a href="/webdev/projects#oneResume">
                                <img src={oneResumeThumbnail} alt="oneResume" className={`${projectStyles.projectImg} ${projectStyles.oneResumeImg}`}
                                    width="100%"
                                    height="100%" />
                                <div className={`${projectStyles.overlay}`}>
                                    <div className={`${projectStyles.text}`}>
                                        <h5>OneResume</h5>
                                        <p>Single-link resume sharing portal.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className={projectStyles.projectTechStack}>Full stack&nbsp;|&nbsp;ReactJs&nbsp;|&nbsp;NodeJs&nbsp;|&nbsp;Firebase</p>
                    </div>
                    <div id="howHotIsIt" className={`${projectStyles.project} ${projectStyles.howHotIsIt} Reactjs Nodejs MongoDB Others`}>
                        <div className={`${projectStyles.container}`}>
                            <a href="/webdev/projects#howHotIsIt">
                                <img src={howHotIsItThumbnail} alt="howHotIsIt" className={`${projectStyles.projectImg} ${projectStyles.howHotIsItImg}`}
                                    width="100%"
                                    height="100%" />
                                <div className={`${projectStyles.overlay}`}>
                                    <div className={`${projectStyles.text}`}>
                                        <h5>HowHowIsIt</h5>
                                        <p>Real-time global weather report</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p className={projectStyles.projectTechStack}>Front end&nbsp;|&nbsp;API&nbsp;|&nbsp;ReactJs&nbsp;|&nbsp;NodeJs</p>
                    </div>
                    <div id="mediServ" className={`${projectStyles.project} ${projectStyles.mediServ} fullStack Reactjs Nodejs MongoDB Others`}>
                        <div className={`${projectStyles.container}`}>
                            <a href="/webdev/projects#mediServ">
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
                        <p className={projectStyles.projectTechStack}>Full stack&nbsp;|&nbsp;ReactJs&nbsp;|&nbsp;NodeJs&nbsp;|&nbsp;MongoDB</p>
                    </div>
                    <div id="bookRev" className={`${projectStyles.project} ${projectStyles.bookRev} fullStack HTML CSS Js Nodejs SQL`}>
                        <div className={`${projectStyles.container}`}>
                            <a href="/webdev/projects#bookRev">
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
                        <p className={projectStyles.projectTechStack}>Full stack&nbsp;|&nbsp;Nodejs&nbsp;|&nbsp;SQL</p>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default WebProjects
