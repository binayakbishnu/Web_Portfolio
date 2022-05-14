/**
 * This function is used to display the home page of the website
 */
import React from 'react'

import AboutMe from '../HomePageSections/AboutMe'
import Welcome from '../HomePageSections/Welcome'
import TechStack from '../HomePageSections/TechStack'
import ContactMe from '../ContactMe'

import homePageStyles from './HomePage.module.css'

function HomePage() {
    return (
        <div className={`${homePageStyles.home}`}>
            <Welcome />

            <AboutMe />

            <TechStack />

            <ContactMe />

        </div>
    )
}

export default HomePage
