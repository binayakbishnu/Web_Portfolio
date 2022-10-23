import React, { Component } from 'react'

import switchProfileStyles from './SwitchProfile.module.css'

export class SwitchProfile extends Component {
    profileChange() {
        console.log(document.getElementById("profileChange").value);
    }

    minSwitchProfile() {
        document.getElementById("switchProfileContent").style.display =
            document.getElementById("switchProfileContent").style.display === "flex" ? "none" : "flex";
    }

    render() {
        return (
            <section id="switchProfileParent" className={`${switchProfileStyles.switchProfileParent}`}>
                <h3>Select profile</h3>
                <div id="switchProfileContent" style={{ "display": "flex" }}>
                    <select id="profileChange" defaultValue={this.props.defaultValue}>
                        <option>Data Analytics</option>
                        <option>Web Developer</option>
                    </select>
                    {this.props.defaultValue}
                    <input type="button" value="Go" onClick={this.profileChange} />
                </div>

                <div className={`${switchProfileStyles.switchProfileMinDiv}`}>
                    <input type="button" value="-" className={`${switchProfileStyles.switchProfileMin}`} onClick={this.minSwitchProfile} target="_self" />
                </div>
            </section>
        )
    }
}

export default SwitchProfile