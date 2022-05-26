import React, { Component } from "react";

import contactStyles from './ContactMe.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
// import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

export class ContactMe extends Component {
    closeContactPopUp() {
            document.getElementById("contactMePopUp").style.display = "none";
    }

    render() {
        return (
            <article className={`${contactStyles.contactParent}`} id="contactMePopUp" style={{ "display": "none" }}>
                <section className={`${contactStyles.contactSection}`}>
                    <h2 className={`${contactStyles.contactHead}`}>My Contact Details</h2>

                    <div className={`${contactStyles.ContactContentMainParent}`}>
                        <div className={`${contactStyles.ContactContentMainDiv}`}>
                            <FontAwesomeIcon icon={faPhoneAlt} className={`${contactStyles.contactIconsMain}`} />
                            <span className={`${contactStyles.ContactContentMain}`}>+91-9836042209</span>
                        </div>
                        <div className={`${contactStyles.ContactContentMainDiv}`}>
                            <FontAwesomeIcon icon={faEnvelope} className={`${contactStyles.contactIconsMain}`} />
                            <span className={`${contactStyles.ContactContentMain}`}>bishnu.binayak12@gmail.com</span>
                        </div>
                        <div className={`${contactStyles.ContactContentMainDiv}`}>
                            <FontAwesomeIcon icon={faSearchLocation} className={`${contactStyles.contactIconsMain}`} />
                            <span className={`${contactStyles.ContactContentMain}`}>Kolkata, West Bengal</span>
                        </div>
                    </div>
                </section>

                <div className={`${contactStyles.contactCloseDiv}`}>
                    <input type="button" value="X" className={`${contactStyles.contactClose}`} onClick={this.closeContactPopUp} target="_self" />
                </div>
            </article>
        );
    }
}

export default ContactMe;