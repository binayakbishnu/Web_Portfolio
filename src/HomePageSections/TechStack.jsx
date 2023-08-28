import React from 'react'

import techStackStyles from './TechStack.module.css'

import excelLogo from '../assets/techStackLogos/excellogo.webp'
import sqlLogo from '../assets/techStackLogos/SQLlogo.webp'
import tableauLogo from '../assets/techStackLogos/tableaulogo.webp'
import pythonLogo from '../assets/techStackLogos/pythonlogo.webp'
import gitLogo from '../assets/techStackLogos/gitlogo.webp'
import mongodbLogo from '../assets/techStackLogos/mongodblogo.webp'
import reactjsLogo from '../assets/techStackLogos/reactjslogo.webp'
import nodejsLogo from '../assets/techStackLogos/nodejslogo.webp'
import cppLogo from '../assets/techStackLogos/cpplogo.webp'
import rLogo from '../assets/techStackLogos/Rlogo.webp'

function TechStack() {
    return (
        <section className={`${techStackStyles.techStackParent}`} id="techStack">
            <section className={`${techStackStyles.techStack}`} id="techStack">
                <div className={`${techStackStyles.techStackHeadDiv}`}>
                    <h3 className={`${techStackStyles.techStackHead}`}>Tech Stack</h3>
                    <hr className={`${techStackStyles.hLine}`} />
                </div>

                <div className={`${techStackStyles.techStackMainPart}`}>

                    <div className={`${techStackStyles.mainTech}`}>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.excel}`}>
                            <img src={excelLogo} alt="Excel" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.excelLogo}`} />
                            Excel
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.sql}`}>
                            <img src={sqlLogo} alt="SQL" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.sqlLogo}`} />
                            SQL
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.tableau}`}>
                            <img src={tableauLogo} alt="Tableau" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.tableauLogo}`} />
                            Tableau
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.python}`}>
                            <img src={pythonLogo} alt="Python" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.pythonLogo}`} />
                            Python
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.mongodb}`}>
                            <img src={mongodbLogo} alt="MongoDB" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.mongodbLogo}`} />
                            MongoDB
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.r}`}>
                            <img src={rLogo} alt="R" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.rLogo}`} />
                            R
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.cpp}`}>
                            <img src={cppLogo} alt="Cpp" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.cppLogo}`} />
                            C++
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.reactjs}`}>
                            <img src={reactjsLogo} alt="ReactJs" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.reactjsLogo}`} />
                            ReactJs
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.nodejs}`}>
                            <img src={nodejsLogo} alt="NodeJs" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.nodejsLogo}`} />
                            NodeJs
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.git}`}>
                            <img src={gitLogo} alt="Git" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.gitLogo}`} />
                            Git/Github
                        </div>
                    </div>

                </div>
            </section>
        </section >
    )
}

export default TechStack