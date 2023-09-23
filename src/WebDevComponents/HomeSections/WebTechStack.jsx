import React from 'react'

import techStackStyles from './WebTechStack.module.css'

// import excelLogo from '../assets/techStackLogos/excellogo.webp'
// import sqlLogo from '../assets/techStackLogos/SQLlogo.webp'
// import pythonLogo from '../assets/techStackLogos/pythonlogo.webp'
// import gitLogo from '../assets/techStackLogos/gitlogo.webp'
// import mongodbLogo from '../assets/techStackLogos/mongodblogo.webp'
// import reactjsLogo from '../assets/techStackLogos/reactjslogo.webp'
// import nodejsLogo from '../assets/techStackLogos/nodejslogo.webp'
// import cppLogo from '../assets/techStackLogos/cpplogo.webp'
// import rLogo from '../assets/techStackLogos/Rlogo.webp'
// import figmaLogo from '../assets/techStackLogos/figmalogo.webp'

const skillSet1 = [
    { name: 'React.js', /* logo: reactjsLogo, */ alt: 'reactjs' },
    { name: 'Node.js', /* logo: nodejsLogo, */ alt: 'nodejs' },
    { name: 'JavaScript', /* logo: cppLogo, */ alt: 'js' },
    { name: 'HTML', /* logo: cppLogo, */ alt: 'html' },
    { name: 'CSS', /* logo: cppLogo, */ alt: 'CSS' },
    { name: 'Tailwind', /* logo: cppLogo, */ alt: 'tailwind' },
    { name: 'Bootstrap', /* logo: cppLogo, */ alt: 'bootstrap' },
]
const skillSet2 = [
    { name: 'Git', /* logo: gitLogo, */ alt: 'git' },
    { name: 'SQL', /* logo: sqlLogo, */ alt: 'sql' },
    { name: 'Firebase', /* logo: sqlLogo, */ alt: 'firebase' },
    { name: 'MongoDB', /* logo: mongodbLogo, */ alt: 'mongodb' },
    { name: 'Jenkins', /* logo: cppLogo, */ alt: 'jenkins' },
    { name: 'Flutter', /* logo: cppLogo, */ alt: 'flutter' },
    { name: 'MS Office', /* logo: cppLogo, */ alt: 'msoffice' },
]
const skillSet3 = [
    { name: 'UI/UX', /* logo: cppLogo, */ alt: 'uiux' },
    { name: 'Figma', /* logo: figmaLogo, */ alt: 'figma' },
    { name: 'C++', /* logo: cppLogo, */ alt: 'cpp' },
    { name: 'Java', /* logo: cppLogo, */ alt: 'java' },
    { name: 'Excel', /* logo: excelLogo, */ alt: 'excel' },
    { name: 'PowerBi', /* logo: cppLogo, */ alt: 'powerbi' },
    { name: 'Python', /* logo: pythonLogo, */ alt: 'py' },
    { name: 'R', /* logo: rLogo, */ alt: 'r' },
    { name: 'Data Analytics', /* logo: cppLogo, */ alt: 'dataanalytics' },
]
const softSkills = [
    { name: 'Requirements Analysis' },
    { name: 'Team Lead' },
    { name: 'Team Management' },
    { name: 'Event Management' },
    { name: 'Communication' },
]

function WebTechStack() {
    return (
        <section className={`${techStackStyles.techStackParent}`} id="techStack">
            <section className={`${techStackStyles.techStack}`} id="techStack">
                <div className={`${techStackStyles.techStackHeadDiv}`}>
                    <h3 className={`${techStackStyles.techStackHead}`}>Tech Stack</h3>
                    <hr className={`${techStackStyles.hLine}`} />
                </div>

                <div className={`${techStackStyles.techStackMainPart}`}>

                    <div className={`${techStackStyles.skillSectionParents}`}>
                        <p>Web Dev:</p>
                        <div className={`${techStackStyles.skillSections}`}>
                            {
                                skillSet1.map((data, index) => (
                                    (
                                        <div key={index} className={`${techStackStyles.techMembers}`}>
                                            {/* <img src={data.logo} alt={data.alt} className={`${techStackStyles.techLogos}`} /> */}
                                            {data.name}
                                        </div>
                                    )
                                ))
                            }
                        </div>
                    </div>
                    <div className={`${techStackStyles.skillSectionParents}`}>
                        <p>Tech toolkit:</p>
                        <div className={`${techStackStyles.skillSections}`}>
                            {
                                skillSet2.map((data, index) => (
                                    (
                                        <div key={index} className={`${techStackStyles.techMembers}`}>
                                            {/* <img src={data.logo} alt={data.alt} className={`${techStackStyles.techLogos}`} /> */}
                                            {data.name}
                                        </div>
                                    )
                                ))
                            }
                        </div>
                    </div>
                    <div className={`${techStackStyles.skillSectionParents}`}>
                        <p>Other skills:</p>
                        <div className={`${techStackStyles.skillSections}`}>
                            {
                                skillSet3.map((data, index) => (
                                    (
                                        <div key={index} className={`${techStackStyles.techMembers}`}>
                                            {/* <img src={data.logo} alt={data.alt} className={`${techStackStyles.techLogos}`} /> */}
                                            {data.name}
                                        </div>
                                    )
                                ))
                            }
                        </div>
                    </div>
                    <div className={`${techStackStyles.skillSectionParents}`}>
                        <p>Soft skills:</p>
                        <div className={`${techStackStyles.skillSections}`}>
                            {
                                softSkills.map((data, index) => (
                                    (
                                        <div key={index} className={`${techStackStyles.techMembers} ${techStackStyles.softSkillsMembers}`}>
                                            {/* <img src={data.logo} alt={data.alt} className={`${techStackStyles.techLogos}`} /> */}
                                            {data.name}
                                        </div>
                                    )
                                ))
                            }
                        </div>
                    </div>

                </div>
            </section>
        </section >
    )
}

export default WebTechStack