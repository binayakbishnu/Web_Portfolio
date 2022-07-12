import React, { Component } from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBInput,
    MDBCol,
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

                            <button className={`${footerStyles.socialIcons} btn btn-outline-light btn-floating m-1 me-0`} onClick={this.showContactPopUp}>
                                <FontAwesomeIcon icon={faContactCard} />
                            </button>
                        </section>

                        <section className={`${footerStyles.sendMsg}`}>
                            <form action=''>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-auto'>
                                        <p className='pt-2'>
                                            <strong>Send me a message!!</strong>
                                        </p>
                                    </div>

                                    <div className="col-auto">
                                        <MDBCol md='12' start='12'>
                                            <MDBInput contrast type='email' label='' className={`${footerStyles.inputBox} mb-1 mb-md-4`} placeholder='Type here...' />
                                        </MDBCol>
                                    </div>

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
                    </MDBContainer>

                    <div className='text-white text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        {/* Binayak Bishnu &nbsp; */}
                        <a className='text-white' href={this.props.goUpTarget}>
                            Go up
                        </a>
                    </div>
                </MDBFooter>
            </footer>
        );
    }
}

export default Footer;