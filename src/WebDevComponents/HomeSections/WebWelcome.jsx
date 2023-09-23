/**
 * This is a React component that renders a welcome page
 * @returns A section element with a class of `welcome` and a child element of `div` with a class of
 * `mainPart`.
 */
import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Blink from 'react-blink-text';

import webWelcomeStyles from './WebWelcome.module.css'
// import BlinkingText from './BlinkingText'

// import ball from '../assets/Ball.png'
// import ball2 from '../assets/Ball-2.png'
// import cube from '../assets/Cube.png'
// import torus from '../assets/Torus-2.png'
import figure from '../../assets/webdevwelcomepic.svg'

function Welcome() {
    const navigate = useNavigate();
    const goToDAProfile = () => {
        navigate('/');
    }

    return (
        <section className={`${webWelcomeStyles.welcomeParent}`} id="welcome">
            <section className={`${webWelcomeStyles.welcome}`} id="welcome">
                <div className={`${webWelcomeStyles.welcomeMainPart}`}>
                    <h1 className={`${webWelcomeStyles.mainHead}`}>
                        Hello,<br />
                        I am<br />
                        Binayak Bishnu
                    </h1>
                    <img alt="Illustration of Person with desk" src={figure} className={`${webWelcomeStyles.figure}`} />
                </div>

                <hr className={`${webWelcomeStyles.hLine}`} />

                <div className={`${webWelcomeStyles.profileSwitch}`}
                    onClick={goToDAProfile}>
                    <p>
                        go to Data Analytics profile
                    </p>
                </div>

                <div className={`${webWelcomeStyles.scroll}`}>
                    <a href="#aboutme">&#xbb;</a>
                </div>
            </section>
        </section >
    )
}

export default Welcome
