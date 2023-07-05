import React from 'react'

import experienceStyles from './Experience.module.css'

function Experience() {
    return (
        <section className={`${experienceStyles.experienceParent}`} id="experience">
            <section className={`${experienceStyles.experience}`} id="experience">
                <div>
                    <h3 className={`${experienceStyles.experienceHead}`}>Work Experience</h3>
                    <hr className={`${experienceStyles.hLine}`} />
                </div>

                <div className={`${experienceStyles.experienceMainPart}`}>
                    <div className={`${experienceStyles.experienceSection} ${experienceStyles.experienceSection1}`}>
                        {/* <h5>Student clubs and chapters&nbsp;&nbsp;<button className={`${experienceStyles.expandBtn}`} onClick={cCPositionToggle}>{cCPositionToggleValue}</button></h5> */}
                        Tech Lead | Core Team | eZ | February 2023-June 2023
                        <ul>
                            <li>Part of the pre-launch development team.</li>
                            <li>Responsible for the front-end web development and overall management of the tech team.</li>
                            <li>Maintained production-ready code and coordinated with the backend team.</li>
                        </ul>
                        Web Developer | Founder's Office | Fleverage | December 2022-February 2023
                        <ul>
                            <li>Developed the landing page for the startup.</li>
                            <li>Worked with the design team to decide on the brand theme and UI/UX.</li>
                        </ul>
                        Web Developer, Designer | Founder's Office | Konoha Trendz | October 2021-February 2022
                        <ul>
                            <li>Collaborated as a team to create the product website.</li>
                            <li>Worked with ReactJs and NodeJs.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default Experience