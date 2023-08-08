import React from 'react'
import ContactMe from '../ContactMe'
import Footer from '../Footer'
import Nav from '../Nav'

import DataProjectsStyles from './AllProjects.module.css'
import RainFallProj from '../AllProjectsSections/RainFallProj'
import CyclistVisu from '../AllProjectsSections/CyclistVisu'
import Spotify from '../AllProjectsSections/Spotify'
import OnyxHotel from '../AllProjectsSections/OnyxHotel'

function DataProjects() {
    const projects = [
        <CyclistVisu />,
        <OnyxHotel />,
        <Spotify />,
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