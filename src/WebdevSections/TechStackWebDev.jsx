import React from 'react'

import techStackStyles from './TechStackWebDev.module.css'

import excelLogo from '../assets/techStackLogos/excellogo.webp'
import sqlLogo from '../assets/techStackLogos/SQLlogo.webp'
import tableauLogo from '../assets/techStackLogos/tableaulogo.webp'
import pythonLogo from '../assets/techStackLogos/pythonlogo.webp'
import gitLogo from '../assets/techStackLogos/gitlogo.webp'
import mongodbLogo from '../assets/techStackLogos/mongodblogo.webp'
import reactjsLogo from '../assets/techStackLogos/reactjslogo.webp'
import nodejsLogo from '../assets/techStackLogos/nodejslogo.webp'
// import uiuxLogo from '../assets/techStackLogos/uiuxlogo.webp'
import figmaLogo from '../assets/techStackLogos/figmalogo.webp'
// import behanceLogo from '../assets/techStackLogos/behancelogo.jpg'
// import dribbbleLogo from '../assets/techStackLogos/dribbblelogo.webp'
import vscodeLogo from '../assets/techStackLogos/vscodelogo.webp'
import jupyterLogo from '../assets/techStackLogos/jupyterlogo.webp'

function TechStackWebDev() {
    return (
        <section className={`${techStackStyles.techStackParent}`} id="techStackwebdev">
            <section className={`${techStackStyles.techStack}`} id="techStackwebdev">
                <div className={`${techStackStyles.techStackHeadDiv}`}>
                    <h3 className={`${techStackStyles.techStackHead}`}>Tech Stack</h3>
                    <hr className={`${techStackStyles.hLine}`} />
                </div>

                <div className={`${techStackStyles.techStackMainPart}`}>
                    <div className={`${techStackStyles.editorsSubPart}`}>
                        <div className={`${techStackStyles.editorsSubPartMembers} ${techStackStyles.vscode}`}>
                            <img src={vscodeLogo} alt="VSCode" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.vscodeLogo}`} />
                        </div>
                        <div className={`${techStackStyles.editorsSubPartMembers} ${techStackStyles.jupyter}`}>
                            <img src={jupyterLogo} alt="Jupyter" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.jupyterLogo}`} />
                        </div>
                    </div>

                    <div className={`${techStackStyles.mainTech}`}>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.sql}`}>
                            <img src={sqlLogo} alt="SQL" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.sqlLogo}`} />
                            SQL
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.tableau}`}>
                            <img src={tableauLogo} alt="Tableau" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.tableauLogo}`} />
                            Tableau
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.excel}`}>
                            <img src={excelLogo} alt="Excel" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.excelLogo}`} />
                            Excel
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.reactjs}`}>
                            <img src={reactjsLogo} alt="ReactJs" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.reactjsLogo}`} />
                            ReactJs
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.nodejs}`}>
                            <img src={nodejsLogo} alt="NodeJs" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.nodejsLogo}`} />
                            NodeJs
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.mongodb}`}>
                            <img src={mongodbLogo} alt="MongoDB" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.mongodbLogo}`} />
                            MongoDB
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.git}`}>
                            <img src={gitLogo} alt="Git" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.gitLogo}`} />
                            Git/Github
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.python}`}>
                            <img src={pythonLogo} alt="Python" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.pythonLogo}`} />
                            Python
                        </div>
                        {/* <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.hidden}`}>
                        </div> */}
                        {/* <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.uiux}`}>
                            <img src={uiuxLogo} alt="UI/UX" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.uiuxLogo}`} />
                            UI/UX
                        </div> */}
                        {/* <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.excel}`}></div> */}
                    </div>

                    <div className={`${techStackStyles.uiuxSubPart}`}>
                        <div className={`${techStackStyles.uiuxSubPartMembers} ${techStackStyles.figma}`}>
                            <img src={figmaLogo} alt="Figma" className={`${techStackStyles.techLogos} ${techStackStyles.figmaLogo}`} />
                        </div>
                        <div className={`${techStackStyles.uiuxSubPartMembers} ${techStackStyles.behance}`}>
                            {/* <img src={behanceLogo} alt="Behance" className={`${techStackStyles.techLogos} ${techStackStyles.behanceLogo}`} /> */}
                        </div>
                        <div className={`${techStackStyles.uiuxSubPartMembers} ${techStackStyles.dribble}`}>
                            {/* <img src={dribbbleLogo} alt="Dribbble" className={`${techStackStyles.techLogos} ${techStackStyles.dribbbleLogo}`} /> */}
                        </div>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default TechStackWebDev