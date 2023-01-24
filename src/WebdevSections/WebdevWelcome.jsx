/**
 * This is a React component that renders a welcome page
 * @returns A section element with a class of `welcome` and a child element of `div` with a class of
 * `mainPart`.
 */
import React from 'react'
// import Blink from 'react-blink-text';

import welcomeStyles from './WebDevWelcome.module.css'
// import BlinkingText from './BlinkingText'

// import ball from '../assets/Ball.png'
// import ball2 from '../assets/Ball-2.png'
// import cube from '../assets/Cube.png'
// import torus from '../assets/Torus-2.png'
import figure from '../assets/webdevwelcomepic.svg'

function WebDevWelcome() {
    return (
        <section className={`${welcomeStyles.welcomeParent}`} id="welcome">
            <section className={`${welcomeStyles.welcome}`} id="welcome">
                <div className={`${welcomeStyles.welcomeMainPart}`}>
                    {/* <video autoPlay muted loop className={`${welcomeStyles.vid}`} autoplay>
                    <source src={video} type="video/mp4" />
                </video> */}
                    <h1 className={`${welcomeStyles.mainHead}`}>
                        Hello,<br />
                        I am<br />
                        Binayak Bishnu{/* <span className={`${welcomeStyles.blinkerText}`}>_</span> */}
                        {/* Binayak Bishnu<span className={`${welcomeStyles.blink_me}`}>_</span> */}
                        {/* Binayak Bishnu<Blink color='blue' text='TestReactApp' fontSize='20'>_</Blink> */}
                        {/* Binayak Bishnu<BlinkingText /> */}
                    </h1>
                    {/* <div>
                    <h1 className={`${welcomeStyles.mainHead}`}>
                        Welcome,
                    </h1>
                    <br />
                    <h1 className={`${welcomeStyles.mainHead}`}>
                        I am
                    </h1>
                    <br />
                    <h1 className={`${welcomeStyles.mainHead}`}>
                        Binayak Bishnu
                    </h1>
                </div> */}
                    {/* <div className={`${welcomeStyles.illustrations}`}>
                    <img src={ball} className={`${welcomeStyles.rightIllustration} ${welcomeStyles.ball}`} />
                    <img src={ball2} className={`${welcomeStyles.rightIllustration} ${welcomeStyles.ball2}`} />
                    <img src={cube} className={`${welcomeStyles.rightIllustration} ${welcomeStyles.cube}`} />
                    <img src={torus} className={`${welcomeStyles.rightIllustration} ${welcomeStyles.torus}`} />
                </div> */}
                    <img alt="Illustration of Person with desk" src={figure} className={`${welcomeStyles.figure}`} />
                </div>

                <hr className={`${welcomeStyles.hLine}`} />

                <div className={`${welcomeStyles.scroll}`}>
                    <a href="#aboutme">&#xbb;</a>
                </div>
            </section>
        </section>
    )
}

export default WebDevWelcome
