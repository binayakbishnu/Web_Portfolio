import React from 'react'
import ContactMe from '../ContactMe'
import Footer from '../Footer'
import Nav from '../Nav'

import WebDevProjectsStyles from './WebDevAllProjects.module.css'
import BookRev from '../AllProjectsSections/BookRev'
import MediServ from '../AllProjectsSections/MediServ'
import HowHotIsIt from '../AllProjectsSections/Howhotisit'
import Tastalchemy from '../AllProjectsSections/Tastalchemy'
import OneResume from '../AllProjectsSections/OneResume'

function WebDevAllProjects() {
    const projects = [
        <Tastalchemy />,
        <OneResume />,
        <HowHotIsIt />,
        <MediServ />,
        <BookRev />,
    ]
    return (
        <div className={`${WebDevProjectsStyles.allProjects}`}>
            <Nav goBackLink="/webdev#projects" navDisplay="none" rootLink="webdevHome" />
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

export default WebDevAllProjects