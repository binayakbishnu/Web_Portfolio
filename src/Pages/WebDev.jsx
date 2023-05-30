import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import WebDevWelcome from '../WebdevSections/WebdevWelcome'
import AboutMeWebDev from '../WebdevSections/AboutMeWebDev'
import SwitchProfile from '../SwitchProfile'
import TechStackWebDev from '../WebdevSections/TechStackWebDev'

function WebDev() {
    return (
        <section>
            <Nav rootLink="webdevHome" scrollLinks="webdev" />
            <WebDevWelcome />

            <AboutMeWebDev />

            <TechStackWebDev />

            <SwitchProfile />

            <Footer goUpTarget="#welcome" />
        </section>
    )
}

export default WebDev