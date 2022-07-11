import React from 'react'

import projectStyles from './Projects.module.css'

import projectPic1 from '../assets/projects/MediServ1.png'
import projectPic2 from '../assets/projects/BookRev1.png'
import projectPic3 from '../assets/projects/MediServ3.png'

function Projects() {
    return (
        <section className={`${projectStyles.projectsParent}`} id="projects"
            initial={{ rotate: 0, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1.0 }}
            transition={{ duration: 1, /* yoyo: 1 */ }}
        >
            <section className={`${projectStyles.projects}`} id="projects">
                <div>
                    <div className={`${projectStyles.projectsHeadDiv}`}>
                        <h3 className={`${projectStyles.projectsHead}`}>Projects</h3>
                        <a href="/allprojects" style={{ "color": "black" }}>See all</a>
                    </div>
                    <hr className={`${projectStyles.hLine}`} />
                </div>

                <div className={`${projectStyles.projectsMainPart}`}>
                    <div className={`${projectStyles.project} ${projectStyles.project1}`}>
                        <a href="/allprojects#project1">
                            <img src={projectPic1} alt="project1" className={`${projectStyles.projectImg} ${projectStyles.project1Img}`} />
                        </a>
                    </div>
                    <div className={`${projectStyles.project} ${projectStyles.project2}`}>
                        <a href="/allprojects#project2">
                            <img src={projectPic2} alt="project" className={`${projectStyles.projectImg} ${projectStyles.project2Img}`} />
                        </a>
                    </div>
                    <div className={`${projectStyles.project} ${projectStyles.project3}`}>
                        <a href="/allprojects#project1">
                            <img src={projectPic3} alt="project3" className={`${projectStyles.projectImg} ${projectStyles.project2Img}`} />
                        </a>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default Projects
