import React from 'react'
import Project1 from '../AllProjectsSections/Project1'
import Project2 from '../AllProjectsSections/Project2'
import Project3 from '../AllProjectsSections/Project3'
import Project4 from '../AllProjectsSections/Project4'
import ContactMe from '../ContactMe'
import Footer from '../Footer'
import Nav from '../Nav'

import allProjectsStyles from './AllProjects.module.css'

function MoreProjects() {
    return (
        <div className={`${allProjectsStyles.allProjects}`}>
            <Nav goBackLink="/#projects" navDisplay="none" />

            <Project1 />

            <Project2 />

            <Project3 />

            <Project4 />

            <ContactMe />

            <Footer goUpTarget="#project1" />
        </div>
    )
}

export default MoreProjects
