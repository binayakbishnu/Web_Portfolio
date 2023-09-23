/**
 * This function is used to display the home page of the website
 */
import React from 'react'

import AboutMe from '../WebDevComponents/HomeSections/WebAboutMe'
import Welcome from '../WebDevComponents/HomeSections/WebWelcome'
import TechStack from '../WebDevComponents/HomeSections/WebTechStack'
import Projects from '../WebDevComponents/HomeSections/WebDevProjects'
import ContactMe from '../ContactMe'

import homePageStyles from './HomePage.module.css'
import Nav from '../Nav'
import Footer from '../Footer'
import CoCurricular from '../HomePageSections/CoCurricular'
// import Certifications from '../HomePageSections/Certifications'
import Experience from '../HomePageSections/Experience'

function WebDevHome
() {
    return (
        <div className={`${homePageStyles.home}`}>
            <Nav navDisplay="visible" rootLink="webdevHome" />

            <Welcome />

            <AboutMe />

            <TechStack />

            <Experience />

            <Projects />

            {/* <Certifications /> */}

            <CoCurricular />

            <ContactMe />

            <Footer goUpTarget="#welcome" />
        </div>
    )
}

export default WebDevHome

