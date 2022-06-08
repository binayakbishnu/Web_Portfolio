import React, { Component } from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

import footerStyles from './Footer.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faContactCard } from '@fortawesome/free-regular-svg-icons'

export class Footer extends Component {
    showContactPopUp() {
        if (document.getElementById("contactMePopUp").style.display === "none") {
            document.getElementById("contactMePopUp").style.display = "block";
        } else {
            document.getElementById("contactMePopUp").style.display = "none";
        }
    }

    render() {
        return (
            <footer className={`${footerStyles.footerParent}`}>
                <MDBFooter className={`${footerStyles.MDBParent} text-center`} color='black'>
                    <MDBContainer className='p-4'>
                        <section className={`${footerStyles.socialIconSection} mb-4`}>
                            <a className={`${footerStyles.socialIcons} btn btn-outline-light btn-floating m-1 ms-0`} href='https://www.github.com/BinayakBishnu' role='button' target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>

                            <a className={`${footerStyles.socialIcons} btn btn-outline-light btn-floating m-1`} href='https://www.linkedin.com/in/binayakbishnu' role='button' target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>

                            <a className={`${footerStyles.socialIcons} btn btn-outline-light btn-floating m-1`} href='https://www.behance.net/binayakbishnu' role='button' target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faBehance} />
                            </a>

                            <a className={`${footerStyles.socialIcons} btn btn-outline-light btn-floating m-1`} href='https://www.instagram.com/binayak_bishnu' role='button' target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>

                            <a className={`${footerStyles.socialIcons} btn btn-outline-light btn-floating m-1 me-0`} href='#!' role='button' onClick={this.showContactPopUp} target="_self">
                                <FontAwesomeIcon icon={faContactCard} />
                            </a>

                            {/* <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='github' />
                        </a> */}
                        </section>

                        <section className=''>
                            <form action=''>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-auto'>
                                        <p className='pt-2'>
                                            <strong>Send me a message!!</strong>
                                        </p>
                                    </div>

                                    <MDBCol md='5' start='12'>
                                        <MDBInput contrast type='email' label='' className={`${footerStyles.inputBox} mb-1 mb-md-4`} placeholder='Type here...' />
                                    </MDBCol>

                                    <div className='col-auto'>
                                        <MDBBtn outline color='light' type='submit' className='mb-2 mb-md-4'>
                                            Send
                                        </MDBBtn>
                                    </div>
                                </div>
                            </form>
                        </section>

                        <section className='mb-2 mb-md-4'>
                            <p>
                                <strong>Peace!</strong>✌
                            </p>
                        </section>

                        {/* <section className=''>
                        <MDBRow>
                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Links</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>

                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Links</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>

                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Links</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>

                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Links</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </section> */}
                    </MDBContainer>

                    <div className='text-white text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        {/* Binayak Bishnu &nbsp; */}
                        <a className='text-white' href='#welcome'>
                            Go up
                        </a>
                    </div>
                </MDBFooter>
            </footer>
        );
    }
}

export default Footer;