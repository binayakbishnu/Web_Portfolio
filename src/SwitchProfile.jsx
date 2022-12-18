import React from 'react'
import { useNavigate } from 'react-router-dom';

import switchProfileStyles from './SwitchProfile.module.css'

function SwitchProfile() {
    const navigate = useNavigate();

    const profileChange = () => {
        console.log(document.getElementById("profileChange").value);
        if (document.getElementById("profileChange").value === "Data Analytics") navigate(`/`)
        else navigate('/webdev');
    }

    const minSwitchProfile = () => {
        document.getElementById("switchProfileContent").style.display =
            document.getElementById("switchProfileContent").style.display === "flex" ? "none" : "flex";
    }

    // render() {
    return (
        <section id="switchProfileParent" className={`${switchProfileStyles.switchProfileParent}`}>
            <h3>Select profile</h3>
            <div id="switchProfileContent" style={{ "display": "flex" }}>
                <select id="profileChange">
                    <option value="none" selected disabled hidden>Select an Option</option>
                    <option>Data Analytics</option>
                    <option>Web Developer</option>
                </select>
                {/* {this.props.defaultValue} */}
                <input type="button" value="Go" onClick={profileChange} />
            </div>

            <div className={`${switchProfileStyles.switchProfileMinDiv}`}>
                <input type="button" value="-" className={`${switchProfileStyles.switchProfileMin}`} onClick={minSwitchProfile} target="_self" />
            </div>
        </section>
    )
    // }
}

export default SwitchProfile