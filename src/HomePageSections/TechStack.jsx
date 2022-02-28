import React from 'react'

import techStackStyles from './TechStack.module.css'

import excelLogo from '../assets/excellogo.png'
import sqlLogo from '../assets/SQLlogo.png'
import tableauLogo from '../assets/tableaulogo.png'
import pythonLogo from '../assets/pythonlogo.png'
import gitLogo from '../assets/gitlogo.png'
import reactjsLogo from '../assets/reactjslogo.png'
import nodejsLogo from '../assets/nodejslogo.png'
import uiuxLogo from '../assets/uiuxlogo.png'
import figmaLogo from '../assets/figmalogo.png'
import behanceLogo from '../assets/behancelogo.jpg'
import dribbbleLogo from '../assets/dribbblelogo.png'

function TechStack() {
    return (
        <section className={`${techStackStyles.techStackParent}`} id="techStack">
            <section className={`${techStackStyles.techStack}`} id="techStack">
                <div className={`${techStackStyles.techStackHeadDiv}`}>
                    <h3 className={`${techStackStyles.techStackHead}`}>Tech Stack</h3>
                    <hr className={`${techStackStyles.hLine}`} />
                </div>

                <div className={`${techStackStyles.techStackMainPart}`}>
                    {/* <img src={techStackFig} alt="About me illustration" className={`${techStackStyles.illustration}`} /> */}

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
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.git}`}>
                            <img src={gitLogo} alt="Git" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.gitLogo}`} />
                            Git
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.reactjs}`}>
                            <img src={reactjsLogo} alt="ReactJs" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.reactjsLogo}`} />
                            ReactJs
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.nodejs}`}>
                            <img src={nodejsLogo} alt="NodeJs" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.nodejsLogo}`} />
                            NodeJs
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.hidden}`}>
                        </div>
                        <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.uiux}`}>
                            <img src={uiuxLogo} alt="UI/UX" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.uiuxLogo}`} />
                            UI/UX
                        </div>
                        {/* <div className={`${techStackStyles.mainTechMembers} ${techStackStyles.excel}`}></div> */}
                    </div>

                    {/* <div className={`${techStackStyles.subTech}`}>
                        <div className={`${techStackStyles.pythonSubTech}`}>
                            <ul>
                                <li>NumPy</li>
                                <li>Pandas</li>
                                <li>Matplotlib</li>
                                <li>Seaborn</li>
                                <li>Mito</li>
                            </ul>
                        </div>
                    </div> */}

                    <div className={`${techStackStyles.uiuxSubPart}`}>
                        <div className={`${techStackStyles.uiuxSubPartMembers} ${techStackStyles.figma}`}>
                            <img src={figmaLogo} alt="Figma" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.figmaLogo}`} />
                            Figma
                        </div>
                        <div className={`${techStackStyles.uiuxSubPartMembers} ${techStackStyles.behance}`}>
                            <img src={behanceLogo} alt="Figma" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.behanceLogo}`} />
                            Behance
                        </div>
                        <div className={`${techStackStyles.uiuxSubPartMembers} ${techStackStyles.dribble}`}>
                            <img src={dribbbleLogo} alt="Figma" className={`${techStackStyles.techLogos} ${techStackStyles.mainTechLogos} ${techStackStyles.dribbbleLogo}`} />
                            Dribbble
                        </div>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default TechStack