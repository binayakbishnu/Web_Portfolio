import React from 'react'
import ContactMe from '../ContactMe'
import Footer from '../Footer'
import Nav from '../Nav'

import DataProjectsStyles from './AllProjects.module.css'
import LinkedInProj from '../AllProjectsSections/LinkedInProj'
import RainFallProj from '../AllProjectsSections/RainFallProj'
import MediServ from '../AllProjectsSections/MediServ'
import BookRev from '../AllProjectsSections/BookRev'

function DataProjects() {
    const projects = [
        <RainFallProj />,
    ]
    return (
        <div className={`${DataProjectsStyles.allProjects}`}>
            <Nav goBackLink="/allprojects" navDisplay="none" />
            {
                projects.map((data, index) => (
                    <div key={index}>{data}</div>
                ))
            }

            <ContactMe />

            <Footer goUpTarget="#project1" />
        </div>
    )
}

export default DataProjects