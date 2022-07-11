import React from 'react'
import Project1 from '../AllProjectsSections/Project1'
import Project2 from '../AllProjectsSections/Project2'
import ContactMe from '../ContactMe'
import Footer from '../Footer'
import Nav from '../Nav'

import allProjectsStyles from './AllProjects.module.css'

function MoreProjects() {
    return (
        <div className={`${allProjectsStyles.allProjects}`}>
            <Nav navDisplay="hidden" />

            <Project1 />

            <Project2 />

            <ContactMe />

            <Footer goUpTarget="#project1" />
        </div>
    )
}

export default MoreProjects
