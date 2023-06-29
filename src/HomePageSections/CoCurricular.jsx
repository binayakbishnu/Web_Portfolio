import React, { useState } from 'react'

import coCurricularStyles from './CoCurricular.module.css'

function CoCurricular() {
    const [cCPositionToggleValue, setCCPositionToggleValue] = useState("Expand");
    const [cCPositionToggleValueSub, setCCPositionToggleValueSub] = useState("...");

    const cCPositionToggle = () => {
        cCPositionToggleValue === "Expand" ? setCCPositionToggleValue("Collapse") : setCCPositionToggleValue("Expand");
        cCPositionToggleValueSub === "..." ? setCCPositionToggleValueSub("") : setCCPositionToggleValueSub("...");

        document.getElementsByName("subLists").forEach(function (member) {
            member.style.display = member.style.display === "none" ? "block" : "none";
        })

    }
    return (
        <section className={`${coCurricularStyles.coCurricularParent}`} id="coCurricular">
            <section className={`${coCurricularStyles.coCurricular}`} id="coCurricular">
                <div>
                    <h3 className={`${coCurricularStyles.coCurricularHead}`}>Co-Curricular/Volunteer work</h3>
                    <hr className={`${coCurricularStyles.hLine}`} />
                </div>

                <div className={`${coCurricularStyles.coCurricularMainPart}`}>
                    <div className={`${coCurricularStyles.coCurricularSection} ${coCurricularStyles.coCurricularSection1}`}>
                        <h5>Student clubs and chapters&nbsp;&nbsp;<button className={`${coCurricularStyles.expandBtn}`} onClick={cCPositionToggle}>{cCPositionToggleValue}</button></h5>
                        International Society of Automation | VIT
                        <ul>
                            <li>Chairperson<button className={`${coCurricularStyles.expandBtnSub}`}>{cCPositionToggleValueSub}</button>
                                <ul name="subLists" style={{ "display": "none" }} className={`${coCurricularStyles.subLists}`}>
                                    <li>A technical chapter and a student section under the non-profit technical society, ISA.</li>
                                    <li>Presided over all activities in the chapter, including but not limiting meetings and events. Worked with domain leads to motivate core members to learn and contribute via training sessions and projects.</li>
                                    <li>Keep the Faculty Coordinator updated and work as one of the representatives to the Student Welfare Office.</li>
                                    <li>Maintain logistics and documentation of aforementioned activities.</li>
                                </ul>
                            </li>
                            <li>Core member<button className={`${coCurricularStyles.expandBtnSub}`}>{cCPositionToggleValueSub}</button>
                            </li>
                        </ul>
                        The Electronics Club | VIT
                        <ul>
                            <li>Senior Core Member<button className={`${coCurricularStyles.expandBtnSub}`}>{cCPositionToggleValueSub}</button>
                            </li>
                            <li>Junior Core member<button className={`${coCurricularStyles.expandBtnSub}`}>{cCPositionToggleValueSub}</button>
                            </li>
                        </ul>
                    </div>
                    <div className={`${coCurricularStyles.coCurricularSection} ${coCurricularStyles.coCurricularSection2}`}>
                        <div>
                            <h5>Volunteer work</h5>
                            Placement Coodinator | VIT
                        </div>
                        <div>
                            <h5>Co-curricular</h5>
                            Electronic Keyboard Grade-8 | London College of Music
                            <br />Oral Communication Grade-7 | London College of Music
                        </div>
                    </div>
                </div>
            </section>
        </section >
    )
}

export default CoCurricular