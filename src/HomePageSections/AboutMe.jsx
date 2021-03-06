import React from 'react'

import aboutStyles from './AboutMe.module.css'

import aboutMeFig from '../assets/aboutMeFigure.svg'

function AboutMe() {
    return (
        <section className={`${aboutStyles.aboutParent}`} id="aboutme">
            <section className={`${aboutStyles.about}`} id="aboutme">
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
                                I am an aspiring <a href="https://www.coursera.org/articles/what-is-data-analysis-with-examples" target="_blank" rel="clickable noopener noreferrer" style={{ whiteSpace: "nowrap" }}><kbd><code style={{ color: "white" }}>Data Analyst</code></kbd></a> with a long-term goal in <a href="https://www.oracle.com/in/data-science/what-is-data-science/" target="_blank" rel="noopener noreferrer" style={{ whiteSpace: "nowrap" }}><kbd><code style={{ color: "white" }}>Data Science</code></kbd></a>.
                            </p>
                            <p>
                                I have experience working with <kbd><code style={{ color: "white" }}>SQL</code></kbd> and <kbd><code style={{ color: "white" }}>Excel</code></kbd> for data analysis, followed by <kbd>Tableau</kbd> for data visualization.
                            </p>
                            <p>
                                I also have proficiency in data analysis using <kbd><code style={{ color: "white" }}>Python</code></kbd> and web development using <kbd><code style={{ color: "white" }}>ReactJs</code></kbd>, <kbd><code style={{ color: "white" }}>NodeJs</code></kbd> and <kbd><code style={{ color: "white" }}>Express</code></kbd>. I have made full stack projects using the same along with SQL and MongoDB as databases.
                            </p>
                        </div>

                        <div className={`${aboutStyles.resumeBtnsDiv}`}>
                            <a href="https://drive.google.com/drive/folders/1YLMcfYHqf2WRmurqZciduCF_YllDD5rV?usp=sharing" target="_blank" rel="noopener noreferrer" title="Resume Link">
                                <input type="button" value="Download my Resume" className={`${aboutStyles.resumeBtn} ${aboutStyles.downloadResume}`} />
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
                                    <li className={`${aboutStyles.progressHeadersListMembers}`}>Statistics</li>
                                    <li className={`${aboutStyles.progressHeadersListMembers}`}>Python</li>
                                    <li className={`${aboutStyles.progressHeadersListMembers}`}>R</li>
                                </ul>
                            </div>

                            <meter min="0" max="14" value="11" className={`${aboutStyles.progressBar}`} />
                        </div>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default AboutMe
