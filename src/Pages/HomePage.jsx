/**
 * This function is used to display the home page of the website
 */
import React from 'react'

import AboutMe from '../HomePageSections/AboutMe'
import Welcome from '../HomePageSections/Welcome'
import TechStack from '../HomePageSections/TechStack'
import Projects from '../HomePageSections/Projects'
import ResearchWorks from '../HomePageSections/ResearchWorks'
import ContactMe from '../ContactMe'

import homePageStyles from './HomePage.module.css'
import Nav from '../Nav'
import Footer from '../Footer'

function HomePage() {
    return (
        <div className={`${homePageStyles.home}`}>
            <Nav navDisplay="visible" />

            <Welcome />

            <AboutMe />

            <TechStack />

            <Projects />

            <ResearchWorks />

            <ContactMe />

            <Footer goUpTarget="#welcome" />
        </div>
    )
}

export default HomePage
