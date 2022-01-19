import React from 'react'

import AboutMe from '../HomePageSections/AboutMe'
import Welcome from '../HomePageSections/Welcome'

import homePageStyles from './HomePage.module.css'

function HomePage() {
    return (
        <div className={`${homePageStyles.home}`}>
            <Welcome />
            <AboutMe />
        </div>
    )
}

export default HomePage
