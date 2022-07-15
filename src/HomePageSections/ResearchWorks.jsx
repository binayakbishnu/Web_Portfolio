import React from 'react'

import researchWorkStyles from './ResearchWorks.module.css'

import researchWorksPic1 from '../assets/researchWorks/StockMarket1.png'
import researchWorksPic2 from '../assets/researchWorks/StockMarket5.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons'

function ResearchWorks() {
    const changeonMouseOver1 = () => {
        document.getElementById("researchWork1").src = `${researchWorksPic2}`;
    }
    const changeonMouseLeave1 = () => {
        document.getElementById("researchWork1").src = `${researchWorksPic1}`;
    }
    return (
        <section className={`${researchWorkStyles.researchWorksParent}`} id="researchWorks"
            initial={{ rotate: 0, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1.0 }}
            transition={{ duration: 1, /* yoyo: 1 */ }}
        >
            <section className={`${researchWorkStyles.researchWorks}`} id="researchWorks">
                <div>
                    <div className={`${researchWorkStyles.researchWorksHeadDiv}`}>
                        <h3 className={`${researchWorkStyles.researchWorksHead}`}>Research Work</h3>
                        <a href="/allresearchwork" style={{ "color": "white" }}>See all</a>
                    </div>
                    <hr className={`${researchWorkStyles.hLine}`} />
                </div>

                <div className={`${researchWorkStyles.researchWorksMainPart}`}>
                    <p className={`${researchWorkStyles.mobileHint} m-0 mb-2 p-0`}>Click on any to expand</p>
                    <div className={`${researchWorkStyles.researchWork} ${researchWorkStyles.researchWork1}`}>
                        <div className={`${researchWorkStyles.container}`}>
                            <a href="/allresearchwork#researchWork1">
                                <img id="researchWork1" src={researchWorksPic1} alt="researchWork1" className={`${researchWorkStyles.researchWorkImg} ${researchWorkStyles.researchWork1Img}`}
                                    width="100%"
                                    height="100%" />
                                <div className={`${researchWorkStyles.overlay}`} onMouseEnter={changeonMouseOver1} onMouseLeave={changeonMouseLeave1}>
                                    <div className={`${researchWorkStyles.text}`}>
                                        <p className="text-black">
                                            <span className="font-weight-bold text-decoration-underline">Click to expand</span>&nbsp;<FontAwesomeIcon icon={faShareFromSquare} />
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default ResearchWorks
