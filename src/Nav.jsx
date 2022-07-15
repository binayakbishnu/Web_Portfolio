import React, { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

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
                <ReactBootstrap.Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="light" className={`${navStyles.bStrapParent}`}>
                    <ReactBootstrap.Container className={`${navStyles.bStrapContainer}`}>
                        <ReactBootstrap.Navbar.Brand href="/" className={`${navStyles.links} ${navStyles.brandLink} mb-1`}>
                            Binayak
                        </ReactBootstrap.Navbar.Brand>
                        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                            <ReactBootstrap.Nav className="me-auto">
                                <ReactBootstrap.Nav.Link href="/" className={`${navStyles.links} ${navStyles.leftLinks}`} style={{ "display": `${this.props.navDisplay === "none" ? "block" : "none"}` }}>Go back</ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="#aboutme" className={`${navStyles.links} ${navStyles.leftLinks}`} style={{ "display": `${this.props.navDisplay}` }}>About Me</ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="#techStack" className={`${navStyles.links} ${navStyles.leftLinks}`} style={{ "display": `${this.props.navDisplay}` }}>Tech Stack</ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="/allresearchwork" className={`${navStyles.links} ${navStyles.leftLinks}`}>Research Work</ReactBootstrap.Nav.Link>
                                <ReactBootstrap.NavDropdown title="Top Projects" menuVariant="dark" id="collasible-nav-dropdown" className={`${navStyles.links} ${navStyles.leftLinks}`}>
                                    <ReactBootstrap.NavDropdown.Item href="/allprojects#project1">Project 1</ReactBootstrap.NavDropdown.Item>
                                    <ReactBootstrap.NavDropdown.Item href="/allprojects#project2">Project 2</ReactBootstrap.NavDropdown.Item>
                                    {/* <ReactBootstrap.NavDropdown.Item href="/allprojects#project3">Project 3</ReactBootstrap.NavDropdown.Item> */}
                                    <ReactBootstrap.NavDropdown.Divider />
                                    <ReactBootstrap.NavDropdown.Item href="/allprojects">All Projects</ReactBootstrap.NavDropdown.Item>
                                </ReactBootstrap.NavDropdown>
                            </ReactBootstrap.Nav>
                            <ReactBootstrap.Nav className={`${navStyles.socialLinksParent} d-flex flex-row`}>
                                <ReactBootstrap.Nav.Link href="https://www.github.com/BinayakBishnu"
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
                                <ReactBootstrap.Nav.Link href="https://www.behance.net/binayakbishnu"
                                    target="_blank"
                                    className={`${navStyles.socialLinks} ${navStyles.links} ms-2 ms-md-1`}
                                >
                                    <FontAwesomeIcon icon={faBehance} />
                                </ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="https://www.instagram.com/binayak_bishnu"
                                    target="_blank"
                                    className={`${navStyles.socialLinks} ${navStyles.links} ms-2 ms-md-1`}
                                >
                                    <FontAwesomeIcon icon={faInstagram} />
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