import React, { useState } from 'react'

import aboutStyles from './AboutMeWebDev.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons'

import aboutMeFig from '../assets/aboutMeFigure.svg'

function AboutMeWebDev() {
    const [toggleCollapseBtnValueEducation, setToggleCollapseBtnValueEducation] = useState("Expand");
    const [toggleCollapseBtnValueOtherSkills, setToggleCollapseBtnValueOtherSkills] = useState("Expand");

    const toggleEducationExpand = () => {
        toggleCollapseBtnValueEducation === "Collapse" ? setToggleCollapseBtnValueEducation("Expand") : setToggleCollapseBtnValueEducation("Collapse");

        document.getElementById("educationhLine").style.display =
            document.getElementById("educationhLine").style.display === "block" ? "none" : "block";
        document.getElementById("educationLists").style.display =
            document.getElementById("educationLists").style.display === "block" ? "none" : "block";
    }
    const toggleOtherSkillsExpand = () => {
        toggleCollapseBtnValueOtherSkills === "Collapse" ? setToggleCollapseBtnValueOtherSkills("Expand") : setToggleCollapseBtnValueOtherSkills("Collapse");

        document.getElementById("otherSkillshLine").style.display =
            document.getElementById("otherSkillshLine").style.display === "block" ? "none" : "block";
        document.getElementById("otherSkillsLists").style.display =
            document.getElementById("otherSkillsLists").style.display === "block" ? "none" : "block";
    }

    return (
        <section className={`${aboutStyles.aboutParent}`} id="aboutmewebdev">
            <section className={`${aboutStyles.about}`} id="aboutmewebdev">
                <div className={`${aboutStyles.aboutHeadDiv}`}>
                    <h3 className={`${aboutStyles.aboutHead}`}>About Me</h3>
                    <hr className={`${aboutStyles.hLine}`} />
                </div>

                <div className={`${aboutStyles.aboutMainPart}`}>
                    <img src={aboutMeFig} alt="About me illustration" className={`${aboutStyles.illustration}`} />

                    <div className={`${aboutStyles.textParent}`}>
                        <div className={`${aboutStyles.introDiv}`}>
                            <h5>Hi</h5>
                            <p>
                                I am a student pursuing my undergraduate in Information Technology.
                                I am a project-oriented learner who goes the extra mile for a task and volunteers to take charge. I have operational skills in <kbd>SQL</kbd> (queries, nested queries, joins, triggers, and PL/SQL), <kbd>Excel</kbd> (functions, visualisation) and <kbd>Tableau</kbd>, along with <kbd>Python</kbd>.
                            </p>
                            <p>
                                I also have proficiency in data analysis using <kbd><code style={{ color: "white" }}>Python</code></kbd> and web development using <kbd><code style={{ color: "white" }}>ReactJs</code></kbd>, <kbd><code style={{ color: "white" }}>NodeJs</code></kbd> and <kbd><code style={{ color: "white" }}>Express</code></kbd>. I have made full stack projects using the same along with SQL and MongoDB as databases.
                            </p>
                        </div>

                        <div className={`${aboutStyles.resumeBtnsDiv}`}>
                            <a href="https://drive.google.com/drive/folders/1YLMcfYHqf2WRmurqZciduCF_YllDD5rV?usp=sharing" target="_blank" rel="noopener noreferrer" title="Resume Link">
                                <button className={`${aboutStyles.resumeBtn} ${aboutStyles.downloadResume}`}>Download my Resume&nbsp;&nbsp;<FontAwesomeIcon icon={faGoogleDrive} />
                                </button>
                            </a>
                            {/* <a href="https://drive.google.com/file/d/1_OlKrOklOIRyuidzQszGGgqeJ3SYyklU/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Resume Link">
                                <input type="button" value="View my Resume" className={`${aboutStyles.resumeBtn} ${aboutStyles.viewResume}`} />
                            </a> */}
                        </div>

                        <div className={`${aboutStyles.progressDiv}`}>
                            <div className={`${aboutStyles.progressHeaders}`}>
                                <ul className={`${aboutStyles.progressHeadersList}`}>
                                    <li className={`${aboutStyles.progressHeadersListMembers}`}>SQL</li>
                                    <li className={`${aboutStyles.progressHeadersListMembers}`}>Tableau</li>
                                    <li className={`${aboutStyles.progressHeadersListMembers}`}>Excel</li>
                                    <li className={`${aboutStyles.progressHeadersListMembers}`}>Python</li>
                                    <li className={`${aboutStyles.progressHeadersListMembers}`}>Statistics</li>
                                    <li className={`${aboutStyles.progressHeadersListMembers}`}>R</li>
                                </ul>
                            </div>

                            <meter min="0" max="14" value="11" className={`${aboutStyles.progressBar}`} />
                        </div>
                        <div className={`${aboutStyles.progressDiv}`}>
                            <div className={`${aboutStyles.progressHeaders}`}>
                                <ul className={`${aboutStyles.progressHeadersList}`}>
                                    <li className={`${aboutStyles.progressHeadersListMembers}`}>HTML/CSS</li>
                                    <li className={`${aboutStyles.progressHeadersListMembers}`}>CSS</li>
                                    <li className={`${aboutStyles.progressHeadersListMembers}`}>Js</li>
                                    <li className={`${aboutStyles.progressHeadersListMembers}`}>ReactJs</li>
                                    <li className={`${aboutStyles.progressHeadersListMembers}`}>NodeJs</li>
                                    {/* <li className={`${aboutStyles.progressHeadersListMembers}`}>R</li> */}
                                </ul>
                            </div>

                            <meter min="0" max="14" value="11" className={`${aboutStyles.progressBar}`} />
                        </div>
                    </div>
                </div>

                <div className={`${aboutStyles.aboutMeExtended}`}>
                    <div className={`${aboutStyles.education}`}>
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <h5 className={`${aboutStyles.subHeadEducation}`} onClick={toggleEducationExpand}>Education</h5>
                            <input type="button" value={toggleCollapseBtnValueEducation} className={`${aboutStyles.toggleCollapseBtn}`} onClick={toggleEducationExpand} />
                        </div>
                        <hr style={{ "display": "none" }} id="educationhLine" className={`${aboutStyles.hLine}`} />
                        <div style={{ "display": "none" }} id="educationLists">
                            <div className={`${aboutStyles.educationList} ${aboutStyles.educationList1}`}>
                                <p className={`${aboutStyles.educationListHead}`}>B.Tech. | Vellore Institute of Technology | 2020-24</p>
                                <ul className={`${aboutStyles.educationListBody}`}>
                                    <li>CGPA (till 4th sem): 8.22; Latest GPA: 8.67</li>
                                    <li>Chairperson at a chapter, ISA-VIT.</li>
                                    <li>Senior core member in a club, TEC.</li>
                                    <li>Volunteered as a student coordinator of the placement cell.</li>
                                </ul>
                            </div>
                            <div className={`${aboutStyles.educationList} ${aboutStyles.educationList2}`}>
                                <p className={`${aboutStyles.educationListHead}`}>Class 12 | Delhi Public School, Ruby Park, Kolkata | 2018-20</p>
                                <ul className={`${aboutStyles.educationListBody}`}>
                                    <li>AISSCE: 95.2%</li>
                                </ul>
                            </div>
                            <div className={`${aboutStyles.educationList} ${aboutStyles.educationList3}`}>
                                <p className={`${aboutStyles.educationListHead}`}>Class 10 | Delhi Public School, Ruby Park, Kolkata | 2008-18</p>
                                <ul className={`${aboutStyles.educationListBody}`}>
                                    <li>AISSE: 94.2%</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`${aboutStyles.otherSkills}`}>
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <h5 className={`${aboutStyles.subHeadOtherSkills}`} onClick={toggleOtherSkillsExpand}>Other skills</h5>
                            <input type="button" value={toggleCollapseBtnValueOtherSkills} className={`${aboutStyles.toggleCollapseBtn}`} onClick={toggleOtherSkillsExpand} />
                        </div>
                        <hr style={{ "display": "none" }} id="otherSkillshLine" className={`${aboutStyles.hLine}`} />
                        <div style={{ "display": "none" }} id="otherSkillsLists">
                            <div className={`${aboutStyles.otherSkillsList} ${aboutStyles.otherSkillsList1}`}>
                                <p className={`${aboutStyles.otherSkillsListHead}`}>Tech</p>
                                <ul className={`${aboutStyles.otherSkillsListBody}`}>
                                    {/* <li>Dashboarding</li> */}
                                    <li>Open Source collaboration using Git/Github</li>
                                </ul>
                            </div>
                            <div className={`${aboutStyles.otherSkillsList} ${aboutStyles.otherSkillsList2}`}>
                                <p className={`${aboutStyles.otherSkillsListHead}`}>Non-tech</p>
                                <ul className={`${aboutStyles.otherSkillsListBody}`}>
                                    <li>Team Management</li>
                                    <li>Oral Communication</li>
                                </ul>
                            </div>

                            <a href="/#coCurricular" style={{ "color": "white", "fontWeight": "", "textDecoration": "underline", "cursor": "pointer" }}>Co-Curricular/Volunteer work</a>
                        </div>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default AboutMeWebDev