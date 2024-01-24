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
                        Web Developer | Web App Team | TaskHuman | October 2023-January 2024
                        <p style={{ "fontStyle": "italic", "margin": "0" }}>Intern under the web app team.</p>
                        <ul>
                            <li>Worked directly on the production code for web app and teams app.</li>
                            <li>Concentrated on bug fixing and QA ticket resolution, having worked in 40+ tickets.</li>
                            <li>Majorly worked with ReactJs, ChakraUI, Git, and Jira.</li>
                        </ul>
                        Tech Lead | Core Team | eZ | February 2023-June 2023
                        <p style={{ "fontStyle": "italic", "margin": "0" }}>Part of the pre-launch team, delegation, communication, repository admin, code ownership.</p>
                        <ul>
                            <li>Responsible for the front-end web development and overall management of the tech team.</li>
                            <li>Understood customer requirements to enhance website experience.</li>
                            <li>Extensively made use of Git conflict resolution and agile methodology.</li>
                        </ul>
                        Web Developer | Founder's Office | Fleverage | December 2022-February 2023
                        <p style={{ "fontStyle": "italic", "margin": "0" }}>Member of the technical team at the incubation stage, frontend development, data-driven designing.</p>
                        <ul>
                            <li>Developed the landing page for the startup.</li>
                            <li>Coordinated with the design team to decide on the brand theme and UI/UX.</li>
                        </ul>
                        Web Developer, Designer | Founder's Office | Konoha Trendz | October 2021-February 2022
                        <p style={{ "fontStyle": "italic", "margin": "0" }}>Frontend developer in the pre-launch development team.</p>
                        <ul>
                            <li>Collaborated on GitHub as a team to create the product website.</li>
                            <li>Worked with ReactJs and NodeJs on a full-stack website.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default Experience