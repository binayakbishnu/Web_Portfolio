import React from 'react'
// import Blink from 'react-blink-text';

import welcomeStyles from './Welcome.module.css'
import BlinkingText from './BlinkingText'

// import ball from '../assets/Ball.png'
// import ball2 from '../assets/Ball-2.png'
// import cube from '../assets/Cube.png'
// import torus from '../assets/Torus-2.png'
import figure from '../assets/figure3.svg'

function Welcome() {
    return (
        <section className={`${welcomeStyles.welcome}`}>
            <div className={`${welcomeStyles.mainPart}`}>
                {/* <video autoPlay muted loop className={`${welcomeStyles.vid}`} autoplay>
                    <source src={video} type="video/mp4" />
                </video> */}
                    <h1 className={`${welcomeStyles.mainHead}`}>
                        Welcome,<br />
                        I am<br />
                        {/* Binayak Bishnu<blink classname={`${welcomeStyles.blinker}`}>_</blink> */}
                        {/* Binayak Bishnu<span className={`${welcomeStyles.blink_me}`}>_</span> */}
                        {/* Binayak Bishnu<Blink color='blue' text='TestReactApp' fontSize='20'>_</Blink> */}
                        Binayak Bishnu<BlinkingText />
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
                <img alt="Illustration of Person with desk" src={figure} className={`${welcomeStyles.figure} ${welcomeStyles.torus}`} />
            </div>

            <hr className={`${welcomeStyles.hLine}`} />

            <div className={`${welcomeStyles.scroll}`}>
                &#xbb;
            </div>
        </section>
    )
}

export default Welcome
