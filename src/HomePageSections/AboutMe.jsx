import React from 'react'

import aboutStyles from './AboutMe.module.css'

function AboutMe() {
    return (
        <section className={`${aboutStyles.aboutParent}`} id="aboutme">
            <section className={`${aboutStyles.about}`} id="aboutme">
                <h3>About Me</h3>
            </section>
        </section>
    )
}

export default AboutMe
