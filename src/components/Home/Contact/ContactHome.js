import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { MDBContainer } from "mdb-react-ui-kit";

import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactHome() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <MDBContainer>
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
            </MDBContainer>
        </>
    );
}

export default ContactHome;
