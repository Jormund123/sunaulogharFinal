import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Map from "./Map";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { contact } from "../../images/allImages";

function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div data-aos='fade-down' className='p-5 text-center bg-image bg-image1'>
                <div className='mask' style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h4 className='mb-3'>Get in Touch with Us</h4>
                            <h1 className='mb-3'>Contact us</h1>
                            <p className='text'>
                                {" "}
                                “The mother art is architecture. Without an architecture of our own we have no soul of our own
                                civilization.” Frank Lloyd Wright
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <MDBContainer className='mb-5'>
                <div data-aos='fade-up' className='contact-info'>
                    <div>
                        <span>
                            <i className='fas fa-mobile-alt'></i>
                        </span>
                        <span>Phone No.</span>
                        <span className='text'>9812345678</span>
                    </div>
                    <div>
                        <span>
                            <Link
                                className='fas fa-envelope-open'
                                target='blank'
                                to='mailto:abc@example.com?subject = Feedback&body = Message'
                            ></Link>
                        </span>
                        <span>E-mail</span>
                        <span className='text'>sunauloghar3@gmail.com</span>
                    </div>
                    <div>
                        <span>
                            <Link
                                className='fas fa-map-marker-alt'
                                to='https://www.google.com/maps/place/Sunauloghar.com/@27.6844291,83.462449,17z/data=!4m12!1m6!3m5!1s0x399687c60aa7c99d:0x782bfea8604abbb5!2sSunauloghar.com!8m2!3d27.6844291!4d83.4646377!3m4!1s0x399687c60aa7c99d:0x782bfea8604abbb5!8m2!3d27.6844291!4d83.4646377'
                                target='blank'
                            ></Link>
                        </span>
                        <span>Address</span>
                        <span className='text'>Milanchowk-Butwal- Nepal</span>
                    </div>
                    <div>
                        <span>
                            <i className='fas fa-clock'></i>
                        </span>
                        <span>Opening Hours</span>
                        <span className='text'>Sunday- Friday (9:00 to 17:00)</span>
                    </div>
                </div>
                <MDBRow>
                    <MDBCol size='md' className='col-example'>
                        <MDBContainer>
                            <form data-aos='fade-up'>
                                <div>
                                    <input type='text' className='form-control' placeholder='First Name' />
                                    <input type='text' className='form-control' placeholder='Last Name' />
                                </div>
                                <div>
                                    <input type='email' className='form-control' placeholder='E-mail' />
                                </div>
                                <textarea rows='5' placeholder='Message' className='form-control'></textarea>
                                <input type='submit' className='send-btn' value='send message' />
                            </form>
                        </MDBContainer>
                    </MDBCol>
                    <MDBCol size='md' className='col-example'>
                        <img
                            data-aos='fade-up'
                            src={contact}
                            style={{ height: "380px", width: "650px" }}
                            className='img-fluid shadow-5-strong'
                            alt='...'
                        />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Map />
        </>
    );
}

export default Contact;
