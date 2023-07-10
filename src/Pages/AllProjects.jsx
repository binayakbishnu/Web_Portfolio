import React from 'react'
import ContactMe from '../ContactMe'
import Footer from '../Footer'
import Nav from '../Nav'

import allProjectsStyles from './AllProjects.module.css'
import LinkedInProj from '../AllProjectsSections/LinkedInProj'
import RainFallProj from '../AllProjectsSections/RainFallProj'
import MediServ from '../AllProjectsSections/MediServ'
import BookRev from '../AllProjectsSections/BookRev'

function MoreProjects() {
    const projects = [
        <LinkedInProj />,
        <RainFallProj />,
        <MediServ />,
        <BookRev />,
    ]
    return (
        <div className={`${allProjectsStyles.allProjects}`}>
            <Nav goBackLink="/#projects" navDisplay="none" />
            {
                projects.map((data) => (
                    <div>{data}</div>
                ))
            }
            {/* <Project1 />

            <Project2 />

            <Project3 />

            <Project4 /> */}

            <ContactMe />

            <Footer goUpTarget="#project1" />
        </div>
    )
}

export default MoreProjects
