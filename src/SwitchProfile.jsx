import React from 'react'
import { useNavigate } from 'react-router-dom';

import switchProfileStyles from './SwitchProfile.module.css'

function SwitchProfile() {
    const navigate = useNavigate();

    const profileChange = () => {
        if (document.getElementById("profileChange").value === "Data Analytics") navigate(`/`)
        else navigate('/webdev');
    }

    return (
        <div className={`${switchProfileStyles.switchProfileParentOuter}`}>
            <section id="switchProfileParent" className={`${switchProfileStyles.switchProfileParent}`}>
                <p>Select profile</p>
                <h3>Select profile</h3>
                <div id="switchProfileContent" style={{ "display": "flex" }}>
                    <select id="profileChange" onChange={profileChange}>
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option>Data Analytics</option>
                        <option>Web Developer</option>
                    </select>
                    {/* <input type="button" value="Go" onClick={profileChange} /> */}
                </div>

                {/* <div className={`${switchProfileStyles.switchProfileMinDiv}`}>
                    <input type="button" value="-" className={`${switchProfileStyles.switchProfileMin}`} onClick={minSwitchProfile} target="_self" />
                </div> */}
            </section>
        </div>
    )
}

export default SwitchProfile