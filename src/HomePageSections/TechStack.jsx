import React from 'react'

import techStackStyles from './TechStack.module.css'

import excelLogo from '../assets/techStackLogos/excellogo.webp'
import sqlLogo from '../assets/techStackLogos/SQLlogo.webp'
// import tableauLogo from '../assets/techStackLogos/tableaulogo.webp'
import pythonLogo from '../assets/techStackLogos/pythonlogo.webp'
import gitLogo from '../assets/techStackLogos/gitlogo.webp'
import mongodbLogo from '../assets/techStackLogos/mongodblogo.webp'
import reactjsLogo from '../assets/techStackLogos/reactjslogo.webp'
import nodejsLogo from '../assets/techStackLogos/nodejslogo.webp'
import cppLogo from '../assets/techStackLogos/cpplogo.webp'
import rLogo from '../assets/techStackLogos/Rlogo.webp'
import figmaLogo from '../assets/techStackLogos/figmalogo.webp'

const programmingSkills = [
    { name: 'C++', logo: cppLogo, alt: 'cpp' },
    { name: 'Java', logo: cppLogo, alt: 'java' },
    { name: 'Python', logo: pythonLogo, alt: 'py' },
    { name: 'SQL', logo: sqlLogo, alt: 'sql' },
    { name: 'React.js', logo: reactjsLogo, alt: 'reactjs' },
    { name: 'Node.js', logo: nodejsLogo, alt: 'nodejs' },
    { name: 'JavaScript', logo: cppLogo, alt: 'js' },
    { name: 'R', logo: rLogo, alt: 'r' },
]
const technicalSkills = [
    { name: 'Excel', logo: excelLogo, alt: 'excel' },
    { name: 'PowerBi', logo: cppLogo, alt: 'powerbi' },
    { name: 'MongoDB', logo: mongodbLogo, alt: 'mongodb' },
    { name: 'HTML', logo: cppLogo, alt: 'html' },
    { name: 'CSS', logo: cppLogo, alt: 'CSS' },
    { name: 'Bootstrap', logo: cppLogo, alt: 'bootstrap' },
    { name: 'Tailwind', logo: cppLogo, alt: 'tailwind' },
]
const otherTools = [
    { name: 'Power Query', logo: cppLogo, alt: 'power query' },
    { name: 'Power Pivot', logo: cppLogo, alt: 'power pivot' },
    { name: 'Git', logo: gitLogo, alt: 'git' },
    { name: 'Jenkins', logo: cppLogo, alt: 'jenkins' },
    { name: 'Figma', logo: figmaLogo, alt: 'figma' },
    { name: 'Flutter', logo: cppLogo, alt: 'flutter' },
]
const softSkills = [
    { name: 'Team Lead' },
    { name: 'Team Management' },
    { name: 'Event Management' },
]

function TechStack() {
    return (
        <section className={`${techStackStyles.techStackParent}`} id="techStack">
            <section className={`${techStackStyles.techStack}`} id="techStack">
                <div className={`${techStackStyles.techStackHeadDiv}`}>
                    <h3 className={`${techStackStyles.techStackHead}`}>Tech Stack</h3>
                    <hr className={`${techStackStyles.hLine}`} />
                </div>

                <div className={`${techStackStyles.techStackMainPart}`}>

                    <div className={`${techStackStyles.skillSectionParents}`}>
                        <p>Programming:</p>
                        <div className={`${techStackStyles.skillSections}`}>
                            {
                                programmingSkills.map((data, index) => (
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
                        <p>Technical:</p>
                        <div className={`${techStackStyles.skillSections}`}>
                            {
                                technicalSkills.map((data, index) => (
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
                        <p>Other tools:</p>
                        <div className={`${techStackStyles.skillSections}`}>
                            {
                                otherTools.map((data, index) => (
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

export default TechStack