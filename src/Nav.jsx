import React from 'react'
import { NavLink } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faContactCard } from '@fortawesome/free-regular-svg-icons'

import navStyles from './Navbar.module.css'

export default function Nav() {
    return (
        <nav className={`${navStyles.nav}`}>
            {/* <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul> */}

            <ReactBootstrap.Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="light" className={`${navStyles.bStrapParent}`}>
                <ReactBootstrap.Container className={`${navStyles.bStrapContainer}`}>
                    <ReactBootstrap.Navbar.Brand href="#home">
                        <ReactBootstrap.NavLink
                            className={`${navStyles.links} ${navStyles.brandLink}`}
                            activeClassName="is-active"
                            to="/"
                            exact
                        >
                            {/* <ReactBootstrap.Image src={logo} fluid /> */}
                            Binayak
                        </ReactBootstrap.NavLink>
                    </ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootstrap.Nav className="me-auto">
                            <ReactBootstrap.Nav.Link href="#features" className={`${navStyles.links} ${navStyles.leftLinks}`}>About Me</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="#features" className={`${navStyles.links} ${navStyles.leftLinks}`}>Tech Stack</ReactBootstrap.Nav.Link>
                            <ReactBootstrap.NavDropdown title="Top Projects" id="collasible-nav-dropdown" className={`${navStyles.links} ${navStyles.leftLinks}`}>
                                <ReactBootstrap.NavDropdown.Item href="#action/3.1">Project 1</ReactBootstrap.NavDropdown.Item>
                                <ReactBootstrap.NavDropdown.Item href="#action/3.2">Project 2</ReactBootstrap.NavDropdown.Item>
                                <ReactBootstrap.NavDropdown.Item href="#action/3.3">Project 3</ReactBootstrap.NavDropdown.Item>
                                <ReactBootstrap.NavDropdown.Divider />
                                <ReactBootstrap.NavDropdown.Item href="#action/3.4">Other Projects</ReactBootstrap.NavDropdown.Item>
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
                                className={`${navStyles.socialLinks} ${navStyles.links} ms-1`}
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="https://www.behance.net/binayakbishnu"
                                target="_blank"
                                className={`${navStyles.socialLinks} ${navStyles.links} ms-1`}
                            >
                                <FontAwesomeIcon icon={faBehance} />
                            </ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href="https://www.instagram.com/binayak_bishnu"
                                target="_blank"
                                className={`${navStyles.socialLinks} ${navStyles.links} ms-1`}
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </ReactBootstrap.Nav.Link>
                            <ReactBootstrap.Nav.Link href=""
                                target="_blank"
                                className={`${navStyles.socialLinks} ${navStyles.links} ms-1`}
                            >
                                <FontAwesomeIcon icon={faContactCard} />
                            </ReactBootstrap.Nav.Link>
                        </ReactBootstrap.Nav>
                    </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Container>
            </ReactBootstrap.Navbar>
        </nav>
    )
}
