import React from 'react'
import ContactMe from '../ContactMe'
import Footer from '../Footer'
import Nav from '../Nav'

import allProjectsStyles from './AllProjects.module.css'
import LinkedInProj from '../AllProjectsSections/LinkedInProj'
import RainFallProj from '../AllProjectsSections/RainFallProj'
import MediServ from '../AllProjectsSections/MediServ'
import BookRev from '../AllProjectsSections/BookRev'
import CyclistVisu from '../AllProjectsSections/CyclistVisu'
import Spotify from '../AllProjectsSections/Spotify'
import OnyxHotel from '../AllProjectsSections/OnyxHotel'
import ValuationCalc from '../AllProjectsSections/ValuationCalc'
import Tastalchemy from '../AllProjectsSections/Tastalchemy'
import OneResume from '../AllProjectsSections/OneResume'

function MoreProjects() {
    const projects = [
        <Tastalchemy topProject={true} />,
        <OneResume topProject={false} />,
        <ValuationCalc topProject={false} />,
        <CyclistVisu topProject={false} />,
        <OnyxHotel topProject={false} />,
        <Spotify topProject={false} />,
        <LinkedInProj topProject={false} />,
        <RainFallProj topProject={false} />,
        <MediServ topProject={false} />,
        <BookRev topProject={false} />,
    ]
    return (
        <div className={`${allProjectsStyles.allProjects}`}>
            <Nav goBackLink="/#projects" navDisplay="none" />
            {
                projects.map((data, index) => (
                    <div key={index}>{data}</div>
                ))
            }
            <section className={`${allProjectsStyles.dataProjLinkParent}`}>
                <div className={`${allProjectsStyles.dataProjLink}`}>
                    <p><a href="/dataprojects" style={{ "color": "white" }}>Check out my data analytics projects here</a></p>
                    {/* <button>
                        <a href="/dataprojects" style={{ "color": "white" }}>Check here</a>
                    </button> */}
                </div>
            </section>

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
