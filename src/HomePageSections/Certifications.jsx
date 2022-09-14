import React from 'react'

import certificationsStyles from './Certifications.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

function Certifications() {
    return (
        <section className={`${certificationsStyles.certificationsParent}`} id="certifications">
            <section className={`${certificationsStyles.certifications}`} id="certifications">
                <div>
                    <h3 className={`${certificationsStyles.certificationsHead}`}>Certifications</h3>
                    <hr className={`${certificationsStyles.hLine}`} />
                </div>

                <div className={`${certificationsStyles.certificationsMainPart}`}>
                    <h5><a style={{ "color": "white", "textDecoration": "none", "cursor": "pointer" }} target="_blank" href="https://www.coursera.org/verify/QMFN2QEPAAL8">Share Data Through the Art of Visualization | Google | Coursera&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a></h5>
                    {/* <ul name="subLists" className={`${certificationsStyles.subLists}`}>
                        <li>A technical chapter and a student section under the non-profit technical society, ISA.</li>
                        <li>Presided over all activities in the chapter, including but not limiting meetings and events. Worked with domain leads to motivate core members to learn and contribute via training sessions and projects.</li>
                        <li>Keep the Faculty Coordinator updated and work as one of the representatives to the Student Welfare Office.</li>
                        <li>Maintain logistics and documentation of aforementioned activities.</li>
                    </ul> */}
                    <h5><a style={{ "color": "white", "textDecoration": "none", "cursor": "pointer" }} target="_blank" href="https://www.coursera.org/verify/L5C7CNMPDDRS">Introduction to Data Analysis using Excel | Rice University | Coursera&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a></h5>
                    <h5><a style={{ "color": "white", "textDecoration": "none", "cursor": "pointer" }} target="_blank" href="https://verify.skilljar.com/c/ehva5ydbh82h">Get started with Tableau | Tableau&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a></h5>
                    <h5><a style={{ "color": "white", "textDecoration": "none", "cursor": "pointer" }} target="_blank" href="https://freecodecamp.org/certification/binayakbishnu/data-analysis-with-python-v7">Data Analysis using Python | freeCodeCamp&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a></h5>
                </div>
            </section>
        </section >
    )
}

export default Certifications;