import React from 'react'
import Nav from '../Nav'
import WebdevWelcome from '../WebdevSections/WebdevWelcome'
import SwitchProfile from '../SwitchProfile'

function WebDev() {
    return (
        <section>
            <Nav goBackLink="/" navDisplay="none" />
            <WebdevWelcome />

            <SwitchProfile defaultValue="Web Development" />
        </section>
    )
}

export default WebDev