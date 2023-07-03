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
                    <p className={`m-0 mb-2`}>
                        <a style={{ "color": "white", "textDecoration": "none", "cursor": "pointer" }}
                            target="_blank" rel="noopener noreferrer" href="https://www.coursera.org/account/accomplishments/specialization/certificate/BM695QNUX7V7"
                        >Excel Skills for Data Analytics and Visualization Specialization | Macquarie University | Coursera&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    </p>
                    <p className={`m-0 mb-2`}>
                        <a style={{ "color": "white", "textDecoration": "none", "cursor": "pointer" }}
                            target="_blank" rel="noopener noreferrer" href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata_WiohnHHDcRxHXArwb_1673251021658_completion_certificate.pdf"
                        >TATA Data Visualisation: Empowering Business with Effective Insights | TATA | Forage&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    </p>
                    <p className={`m-0 mb-2`}>
                        <a style={{ "color": "white", "textDecoration": "none", "cursor": "pointer" }}
                            target="_blank" rel="noopener noreferrer" href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20Nordics/KJGjQRHZ6eGquTKfF_Accenture%20Nordics_WiohnHHDcRxHXArwb_1672855983646_completion_certificate.pdf"
                        >Accenture Consultant Virtual Experience Program | Accenture | Forage&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    </p>
                    <p className={`m-0 mb-2`}>
                        <a style={{ "color": "white", "textDecoration": "none", "cursor": "pointer" }}
                            target="_blank" rel="noopener noreferrer" href="https://www.coursera.org/verify/L5C7CNMPDDRS"
                        >Introduction to Data Analysis using Excel | Rice University | Coursera&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    </p>
                    <p className={`m-0 mb-2`}>
                        <a style={{ "color": "white", "textDecoration": "none", "cursor": "pointer" }}
                            target="_blank" rel="noopener noreferrer" href="https://www.coursera.org/verify/QMFN2QEPAAL8"
                        >Share Data Through the Art of Visualization | Google | Coursera&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    </p>
                    {/* <p className={`m-0 mb-2`}><a style={{ "color": "white", "textDecoration": "none", "cursor": "pointer" }} target="_blank" rel="noopener noreferrer" href="https://verify.skilljar.com/c/ehva5ydbh82h">Get started with Tableau | Tableau&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a></p> */}
                    <p className={`m-0 mb-2`}>
                        <a style={{ "color": "white", "textDecoration": "none", "cursor": "pointer" }}
                            target="_blank" rel="noopener noreferrer" href="https://freecodecamp.org/certification/binayakbishnu/data-analysis-with-python-v7"
                        >Data Analysis using Python | freeCodeCamp&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    </p>
                </div>
            </section>
        </section >
    )
}

export default Certifications;