import React from 'react'

import AboutMe from '../HomePageSections/AboutMe'
import Welcome from '../HomePageSections/Welcome'

import homePageStyles from './HomePage.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

function closeContactBox() {
    alert("Close");
    console.log("Close");
}

function HomePage() {
    return (
        <div className={`${homePageStyles.home}`}>
            <Welcome />

            <AboutMe />

            {/* <article className={`${homePageStyles.contactParent}`}>
                <section className={`${homePageStyles.contactSection}`}>
                    <h2 className={`${homePageStyles.contactHead}`}>My Contact Details</h2>

                    <div className={`${homePageStyles.ContactContentMainParent}`}>
                        <div className={`${homePageStyles.ContactContentMainDiv}`}>
                            <FontAwesomeIcon icon={faPhoneAlt} className={`${homePageStyles.contactIconsMain}`} />
                            <span className={`${homePageStyles.ContactContentMain}`}>+91-9836042209</span>
                        </div>
                        <div className={`${homePageStyles.ContactContentMainDiv}`}>
                            <FontAwesomeIcon icon={faEnvelope} className={`${homePageStyles.contactIconsMain}`} />
                            <span className={`${homePageStyles.ContactContentMain}`}>bishnu.binayak12@gmail.com</span>
                        </div>
                        <div className={`${homePageStyles.ContactContentMainDiv}`}>
                            <FontAwesomeIcon icon={faSearchLocation} className={`${homePageStyles.contactIconsMain}`} />
                            <span className={`${homePageStyles.ContactContentMain}`}>Kolkata, West Bengal</span>
                        </div>
                    </div>
                </section>

                <div className={`${homePageStyles.contactCloseDiv}`}>
                    <input type="button" value="X" className={`${homePageStyles.contactClose}`} onclick={closeContactBox} />
                </div>
            </article> */}
        </div>
    )
}

export default HomePage
