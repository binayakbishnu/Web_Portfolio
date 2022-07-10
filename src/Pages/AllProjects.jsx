import React from 'react'
import Project1 from '../AllProjectsSections/Project1'
import Project2 from '../AllProjectsSections/Project2'

import allProjectsStyles from './AllProjects.module.css'

function MoreProjects() {
    return (
        <div className={`${allProjectsStyles.allProjects}`}>
            <Project1 />
            <Project2 />
        </div>
    )
}

export default MoreProjects
