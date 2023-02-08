import React from 'react'
import { useNavigate } from 'react-router-dom';

import switchProfileStyles from './SwitchProfile.module.css'

function SwitchProfile() {
    const navigate = useNavigate();

    const profileChange = () => {
        if (document.getElementById("profileChange").value === "Data Analytics") navigate(`/`)
        else navigate('/webdev');
    }

    // alternative to hover for mobile view
    const revealprofileChange = () => {
        if (window.screen.width <= "480") {
            console.log("clicked");
            document.getElementById("switchProfileParentOuter").style.right = /* document.getElementById("switchProfileParentOuter").style.right === "0%" ? "-52%" : */ "0%";
        }
    }

    const closePopUp = () => {
        if (window.screen.width <= "414") {
            console.log("close");
            document.getElementById("switchProfileParentOuter").style.right = "-52%";
        }
    }

    return (
        <div id="switchProfileParentOuter" className={`${switchProfileStyles.switchProfileParentOuter}`}>
            <section id="switchProfileParent" className={`${switchProfileStyles.switchProfileParent}`}>
                <p onClick={revealprofileChange}>Select profile</p>
                <h3>Select profile</h3>
                <div id="switchProfileContent" style={{ "display": "flex" }}>
                    <select id="profileChange" onChange={profileChange} className={`${switchProfileStyles.selectMenu}`}>
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="Data Analytics">Data Analytics</option>
                        <option value="Web Developer">Web Developer</option>
                    </select>
                    {/* <input type="button" value="Go" onClick={profileChange} /> */}
                </div>

                {/* only for mobile */}
                <button id="closeButton" onClick={closePopUp} className={`${switchProfileStyles.closeButton} text-white`}>X</button>

                {/* <div className={`${switchProfileStyles.switchProfileMinDiv}`}>
                    <input type="button" value="-" className={`${switchProfileStyles.switchProfileMin}`} onClick={minSwitchProfile} target="_self" />
                </div> */}
            </section>
        </div>
    )
}

export default SwitchProfile