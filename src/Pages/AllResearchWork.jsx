import React from 'react'
import ResearchWork1 from '../AllResearchWorkSections/ResearchWork1'
import ContactMe from '../ContactMe'
import Footer from '../Footer'
import Nav from '../Nav'

import allResearchWorkStyles from './AllResearchWork.module.css'

function AllResearchWork() {
    return (
        <div className={`${allResearchWorkStyles.AllResearchWorks}`}>
            <Nav navDisplay="hidden" />

            <ResearchWork1 />

            <ContactMe />

            <Footer goUpTarget="#researchWork1" />
        </div>
    )
}

export default AllResearchWork