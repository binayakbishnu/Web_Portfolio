import React, { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import navStyles from './Navbar.module.css'

export class Nav extends Component {
    showContactPopUp() {
        // document.getElementById("welcome").scrollIntoView();

        // document.getElementById("contactMePopUp").style.display = "block"
        if (document.getElementById("contactMePopUp").style.display === "none") {
            document.getElementById("contactMePopUp").style.display = "block";
        } else /* if (document.getElementById("contactMePopUp").style.display == "block") */ {
            document.getElementById("contactMePopUp").style.display = "none";
        }

        // alert("Clicked");
    }

    render() {
        return (
            <nav className={`${navStyles.navParent}`}>
                <ReactBootstrap.Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className={`${navStyles.bStrapParent}`}>
                    <ReactBootstrap.Container className={`${navStyles.bStrapContainer}`}>
                        <ReactBootstrap.Navbar.Brand href={this.props.rootLink === "webdevHome" ? "/webdev" : "/"} className={`${navStyles.links} ${navStyles.brandLink} mb-0`}>
                            <FontAwesomeIcon icon={faHome} />
                        </ReactBootstrap.Navbar.Brand>
                        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                            <ReactBootstrap.Nav className="me-auto">
                                <ReactBootstrap.Nav.Link href={this.props.goBackLink} className={`${navStyles.links} ${navStyles.leftLinks}`} style={{ "display": `${this.props.navDisplay === "none" ? "block" : "none"}` }}>Go back</ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href={this.props.scrollLinks === "webdev" ? "webdev/#aboutmewebdev" : "#aboutme"} className={`${navStyles.links} ${navStyles.leftLinks}`} style={{ "display": `${this.props.navDisplay}` }}>About Me</ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href={this.props.scrollLinks === "webdev" ? "webdev/#techStackwebdev" : "#techStack"} className={`${navStyles.links} ${navStyles.leftLinks}`} style={{ "display": `${this.props.navDisplay}` }}>Tech Stack</ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href={this.props.scrollLinks === "webdev" ? "webdev/#experiencewebdev" : "#experience"} className={`${navStyles.links} ${navStyles.leftLinks}`} style={{ "display": `${this.props.navDisplay}` }}>Experience</ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href={this.props.scrollLinks === "webdev" ? "webdev/#projectswebdev" : "#projects"} className={`${navStyles.links} ${navStyles.leftLinks}`} style={{ "display": `${this.props.navDisplay}` }}>Projects</ReactBootstrap.Nav.Link>
                                {/* <ReactBootstrap.Nav.Link href={this.props.scrollLinks === "webdev" ? "webdev/#researchWorkswebdev" : "#researchWorks"} className={`${navStyles.links} ${navStyles.leftLinks}`} style={{ "display": `${this.props.navDisplay}` }}>Research Work</ReactBootstrap.Nav.Link> */}
                                {this.props.rootLink !== "webdevHome" && <ReactBootstrap.Nav.Link href={this.props.scrollLinks === "webdev" ? "webdev/#certificationswebdev" : "#certifications"} className={`${navStyles.links} ${navStyles.leftLinks}`} style={{ "display": `${this.props.navDisplay}` }}>Certifications</ReactBootstrap.Nav.Link>}
                                <ReactBootstrap.Nav.Link href={this.props.scrollLinks === "webdev" ? "webdev/#coCurricularwebdev" : "#coCurricular"} className={`${navStyles.links} ${navStyles.leftLinks}`} style={{ "display": `${this.props.navDisplay}` }}>Others</ReactBootstrap.Nav.Link>
                            </ReactBootstrap.Nav>
                            <ReactBootstrap.Nav className={`${navStyles.socialLinksParent} d-flex flex-row`}>
                                <ReactBootstrap.Nav.Link href="https://medium.com/@binayakbishnu"
                                    target="_blank"
                                    className={`${navStyles.socialLinks} ${navStyles.links}`}
                                >
                                    <FontAwesomeIcon icon={faMedium} />
                                </ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="https://www.github.com/binayakbishnu"
                                    target="_blank"
                                    className={`${navStyles.socialLinks} ${navStyles.links}`}
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="https://www.linkedin.com/in/binayakbishnu"
                                    target="_blank"
                                    className={`${navStyles.socialLinks} ${navStyles.links} ms-2 ms-md-1`}
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </ReactBootstrap.Nav.Link>
                                {/* <ReactBootstrap.Nav.Link href="https://www.behance.net/binayakbishnu"
                                    target="_blank"
                                    className={`${navStyles.socialLinks} ${navStyles.links} ms-2 ms-md-1`}
                                >
                                    <FontAwesomeIcon icon={faBehance} />
                                </ReactBootstrap.Nav.Link> */}
                                <ReactBootstrap.Nav.Link href="https://www.instagram.com/binayakbishnu"
                                    target="_blank"
                                    className={`${navStyles.socialLinks} ${navStyles.links} ms-2 ms-md-1`}
                                >
                                    <FontAwesomeIcon icon={faInstagram} />
                                </ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="https://twitter.com/binayakbishnu"
                                    target="_blank"
                                    className={`${navStyles.socialLinks} ${navStyles.links} ms-2 ms-md-1`}
                                >
                                    <FontAwesomeIcon icon={faTwitter} />
                                </ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link
                                    onClick={this.showContactPopUp}
                                    target="_self"
                                    className={`${navStyles.socialLinks} ${navStyles.links} ms-2 ms-md-1`}
                                >
                                    {/* <FontAwesomeIcon icon={faContactCard} /> */}
                                    <p style={{ "margin": 0, "fontWeight": "bold" }}>Contact Me</p>
                                </ReactBootstrap.Nav.Link>
                            </ReactBootstrap.Nav>
                        </ReactBootstrap.Navbar.Collapse>
                    </ReactBootstrap.Container>
                </ReactBootstrap.Navbar>
            </nav>
        );
    }
}

export default Nav;