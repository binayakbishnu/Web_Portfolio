import React, { useState } from 'react'

import aboutStyles from './AboutMe.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons'

// import aboutMeFig from '../assets/aboutMeFigure.svg'

function AboutMe() {
    // const [toggleCollapseBtnValueSkills, setToggleCollapseBtnValueSkills] = useState("Expand");    
    /* const toggleSkillsExpand = () => {
        toggleCollapseBtnValueSkills === "Collapse" ? setToggleCollapseBtnValueSkills("Expand") : setToggleCollapseBtnValueSkills("Collapse");
        
        document.getElementById("skillsTogglehLine").style.display =
        document.getElementById("skillsTogglehLine").style.display === "block" ? "none" : "block";
        document.getElementById("skillsToggleLists").style.display =
        document.getElementById("skillsToggleLists").style.display === "block" ? "none" : "block";
    } */

    const [toggleCollapseBtnValueEducation, setToggleCollapseBtnValueEducation] = useState("Expand");
    const toggleEducationExpand = () => {
        toggleCollapseBtnValueEducation === "Collapse" ? setToggleCollapseBtnValueEducation("Expand") : setToggleCollapseBtnValueEducation("Collapse");

        document.getElementById("educationhLine").style.display =
            document.getElementById("educationhLine").style.display === "block" ? "none" : "block";
        document.getElementById("educationLists").style.display =
            document.getElementById("educationLists").style.display === "flex" ? "none" : "flex";
    }

    // const [toggleCollapseBtnValueOtherSkills, setToggleCollapseBtnValueOtherSkills] = useState("Expand");
    /* const toggleOtherSkillsExpand = () => {
        toggleCollapseBtnValueOtherSkills === "Collapse" ? setToggleCollapseBtnValueOtherSkills("Expand") : setToggleCollapseBtnValueOtherSkills("Collapse");

        document.getElementById("otherSkillshLine").style.display =
            document.getElementById("otherSkillshLine").style.display === "block" ? "none" : "block";
        document.getElementById("otherSkillsLists").style.display =
            document.getElementById("otherSkillsLists").style.display === "block" ? "none" : "block";
    } */

    return (
        <section className={`${aboutStyles.aboutParent}`} id="aboutme">
            <section className={`${aboutStyles.about}`} id="aboutme">
                <div className={`${aboutStyles.aboutHeadDiv}`}>
                    <h3 className={`${aboutStyles.aboutHead}`}>About Me</h3>
                    <hr className={`${aboutStyles.hLine}`} />
                </div>

                <div className={`${aboutStyles.aboutMainPart}`}>
                    {/* <img src={aboutMeFig} alt="About me illustration" className={`${aboutStyles.illustration}`} /> */}

                    <div className={`${aboutStyles.textParent}`}>
                        <div className={`${aboutStyles.introDiv}`}>
                            <div>
                                <span className={`${aboutStyles.subHeadings}`}>Hi</span>
                                <p>I am an undergraduate student pursuing BTech in IT, currently looking for internship roles to improve my skills and gain industry experience.</p>
                                <span className={`${aboutStyles.subHeadings} ${aboutStyles.hiddenSubHeading}`}>My motto&nbsp;
                                    <a href="/#projects" style={{
                                        "color": "white", "fontWeight": "",
                                        "textDecoration": "underline", "cursor": "pointer",
                                        "fontSize": "0.8rem",
                                    }}>Projects</a></span>
                                <p>I have a principle of experiment-observation in common day-to-day activities which helps me understand and analyse them better. I have also explored UI/UX which taught me to understand user perspective and how to tailor products and interfaces accordingly.</p>
                                {/* <div className={`${aboutStyles.resumeBtnsDiv} ${aboutStyles.resumeBtnLaptop}`}>
                                    <a href="https://drive.google.com/drive/folders/1YLMcfYHqf2WRmurqZciduCF_YllDD5rV?usp=sharing" target="_blank" rel="noopener noreferrer" title="Resume Link">
                                        <button className={`${aboutStyles.resumeBtn} ${aboutStyles.downloadResume}`}>Download my Resume&nbsp;&nbsp;<FontAwesomeIcon icon={faGoogleDrive} />
                                        </button>
                                    </a>
                                </div> */}
                            </div>
                            <div className={`${aboutStyles.skillsSection}`}>
                                <span className={`${aboutStyles.subHeadings}`}>Data Analytics and BI&nbsp;
                                    <a href="/#projects" style={{
                                        "color": "white", "fontWeight": "",
                                        "textDecoration": "underline", "cursor": "pointer",
                                        "fontSize": "0.8rem",
                                    }}>Projects</a></span>
                                <p>
                                    I have operational knowledge of MS Excel and SQL for Data Mining and Exploration, Power Bi for Visualisation, Data Analytics using Python, and MS PowerPoint for data presentation.
                                </p>
                                <span className={`${aboutStyles.subHeadings}`}>Web Development&nbsp;
                                    <a href="/#projects" style={{
                                        "color": "white", "fontWeight": "",
                                        "textDecoration": "underline", "cursor": "pointer",
                                        "fontSize": "0.8rem",
                                    }}>Projects</a></span>
                                <p>
                                    I have skills relevant to frontend web development, HTML, CSS, JS, ReactJs, NodeJs, and JSON having developed 2 full stack websites and 1 portfolio website. I have also worked with 2 startups to build their websites.
                                </p>
                                {/* <span className={`${aboutStyles.subHeadings}`}>Certifications&nbsp;
                                    <a href="/#certifications" style={{
                                        "color": "white", "fontWeight": "",
                                        "textDecoration": "underline", "cursor": "pointer",
                                        "fontSize": "0.8rem",
                                    }}>See all</a></span>
                                <p>
                                    I have completed courses and specialisations in these domains from Coursera along with Virtual Experience Programs under Accenture and TATA via Forage. I learned about setting project priorities, outcome analysis, communication with stakeholders, framing business cases, and providing insights.
                                </p> */}
                            </div>
                        </div>

                        <div className={`${aboutStyles.resumeBtnsDiv}`}>
                            <a className={`${aboutStyles.aboutMeTechBtnDecoy}`}>
                                
                            </a>
                            <a className={`${aboutStyles.resumeBtn}`} href="https://drive.google.com/drive/folders/1YLMcfYHqf2WRmurqZciduCF_YllDD5rV?usp=sharing" target="_blank" rel="noopener noreferrer" title="Resume Link">
                                {/* <button className={`${aboutStyles.resumeBtn} ${aboutStyles.downloadResume}`}> */}
                                    Download my Resume&nbsp;&nbsp;<FontAwesomeIcon icon={faGoogleDrive} />
                                {/* </button> */}
                            </a>
                            <a className={`${aboutStyles.aboutMeTechBtn}`} href='#techStack'>
                                Tech Stack
                            </a>
                        </div>
                    </div>
                </div>

                <div className={`${aboutStyles.aboutMeExtended}`}>
                    {/* <div className={`${aboutStyles.skillsToggle}`}>
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <h5 className={`${aboutStyles.subHeadSkillsToggle}`} onClick={toggleSkillsExpand}>Skills</h5>
                            <input type="button" value={toggleCollapseBtnValueSkills} className={`${aboutStyles.toggleCollapseBtn}`} onClick={toggleSkillsExpand} />
                        </div>
                        <hr style={{ "display": "none" }} id="skillsTogglehLine" className={`${aboutStyles.hLine}`} />
                        <div style={{ "display": "none" }} id="skillsToggleLists">
                            <div className={`${aboutStyles.skillsToggleList} ${aboutStyles.skillsToggleList1}`}>
                                <p className={`${aboutStyles.skillsToggleListHead}`}>Programming</p>
                                <ul className={`${aboutStyles.skillsToggleListBody}`}>
                                    <li>C++, Java, Python</li>
                                    <li>ReactJs, NodeJs, R</li>
                                </ul>
                            </div>
                            <div className={`${aboutStyles.skillsToggleList} ${aboutStyles.skillsToggleList2}`}>
                                <p className={`${aboutStyles.skillsToggleListHead}`}>Technical</p>
                                <ul className={`${aboutStyles.skillsToggleListBody}`}>
                                    <li>Excel, SQL, Power Bi, MongoDB</li>
                                    <li>Open Source collaboration using Git/Github</li>
                                </ul>
                            </div>
                            <div className={`${aboutStyles.skillsToggleList} ${aboutStyles.skillsToggleList3}`}>
                                <p className={`${aboutStyles.skillsToggleListHead}`}>Soft Skills</p>
                                <ul className={`${aboutStyles.skillsToggleListBody}`}>
                                    <li>Team Management</li>
                                    <li>Oral Communication</li>
                                    <li>Event Management</li>
                                </ul>
                            </div>

                            <a href="/#coCurricular" style={{ "color": "white", "fontWeight": "", "textDecoration": "underline", "cursor": "pointer" }}>Co-Curricular/Volunteer work</a>
                        </div>
                    </div> */}

                    <div className={`${aboutStyles.education}`}>
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <h5 className={`${aboutStyles.subHeadEducation}`} onClick={toggleEducationExpand}>Education</h5>
                            <input type="button" value={toggleCollapseBtnValueEducation} className={`${aboutStyles.toggleCollapseBtn}`} onClick={toggleEducationExpand} />
                        </div>
                        <hr style={{ "display": "none" }} id="educationhLine" className={`${aboutStyles.hLine}`} />
                        <div className={`${aboutStyles.educationMain}`} style={{ "display": "none" }} id="educationLists">
                            <div className={`${aboutStyles.educationList} ${aboutStyles.educationList1}`}>
                                <p className={`${aboutStyles.educationListHead}`}>B.Tech. | Vellore Institute of Technology | 2020-24</p>
                                <ul className={`${aboutStyles.educationListBody}`}>
                                    <li>CGPA (till 6th sem): 8.48; Latest GPA: 8.96</li>
                                    <li>Chairperson at a chapter, ISA-VIT.</li>
                                    <li>Senior core member in a club, TEC.</li>
                                    <li>Volunteered as a student coordinator of the placement cell.</li>
                                </ul>
                            </div>
                            {/* school */}
                            <div>
                                <div className={`${aboutStyles.educationList} ${aboutStyles.educationList2}`}>
                                    <p className={`${aboutStyles.educationListHead}`}>Class 12 | Delhi Public School, Ruby Park, Kolkata | 2020</p>
                                    <ul className={`${aboutStyles.educationListBody}`}>
                                        <li>AISSCE: 95.2%</li>
                                    </ul>
                                </div>
                                <div className={`${aboutStyles.educationList} ${aboutStyles.educationList3}`}>
                                    <p className={`${aboutStyles.educationListHead}`}>Class 10 | Delhi Public School, Ruby Park, Kolkata | 2018</p>
                                    <ul className={`${aboutStyles.educationListBody}`}>
                                        <li>AISSE: 94.2%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className={`${aboutStyles.otherSkills}`}>
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <h5 className={`${aboutStyles.subHeadOtherSkills}`} onClick={toggleOtherSkillsExpand}>Other skills</h5>
                            <input type="button" value={toggleCollapseBtnValueOtherSkills} className={`${aboutStyles.toggleCollapseBtn}`} onClick={toggleOtherSkillsExpand} />
                        </div>
                        <hr style={{ "display": "none" }} id="otherSkillshLine" className={`${aboutStyles.hLine}`} />
                        <div style={{ "display": "none" }} id="otherSkillsLists">
                            <div className={`${aboutStyles.otherSkillsList} ${aboutStyles.otherSkillsList1}`}>
                                <p className={`${aboutStyles.otherSkillsListHead}`}>Tech</p>
                                <ul className={`${aboutStyles.otherSkillsListBody}`}>
                                    <li>C++, Java, R</li>
                                    <li>Open Source collaboration using Git/Github</li>
                                </ul>
                            </div>
                            <div className={`${aboutStyles.otherSkillsList} ${aboutStyles.otherSkillsList2}`}>
                                <p className={`${aboutStyles.otherSkillsListHead}`}>Non-tech</p>
                                <ul className={`${aboutStyles.otherSkillsListBody}`}>
                                    <li>Team Management</li>
                                    <li>Oral Communication</li>
                                    <li>Event Management</li>
                                </ul>
                            </div>

                            <a href="/#coCurricular" style={{ "color": "white", "fontWeight": "", "textDecoration": "underline", "cursor": "pointer" }}>Co-Curricular/Volunteer work</a>
                        </div>
                    </div> */}
                </div>
            </section>
        </section >
    )
}

export default AboutMe
