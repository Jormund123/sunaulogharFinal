import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import Map from "./Map";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";

import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { contact } from "../../images/allImages";

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_a7jcgqc", "template_ji03659", form.current, "5GheFttLGV2F30L4g").then(
            (result) => {
                setMessage("SENT");
                setMessageColor("success");
                setTimeout(() => {
                    setMessage("SEND MESSAGE");
                    setMessageColor("dark");
                }, 2000);
            },
            (error) => {
                console.log(error.text);
            }
        );
        //clearing form after submitting
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        name.value = "";
        email.value = "";
        message.value = "";
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [message, setMessage] = useState("SEND MESSAGE");
    const [messageColor, setMessageColor] = useState("black");

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
                        <span className='text'>071-437496</span>
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
                        <span className='text'>sunauloghar13@gmail.com</span>
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
                        <span className='text'>Butwal-9, Rajmarga Chauraha, Nepal</span>
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
                            <form ref={form} onSubmit={sendEmail} data-aos='fade-up'>
                                <div>
                                    <input
                                        type='text'
                                        id='name'
                                        name='user_name'
                                        className='form-control'
                                        placeholder='Name'
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type='email'
                                        id='email'
                                        name='user_email'
                                        className='form-control'
                                        required
                                        placeholder='E-mail'
                                    />
                                </div>
                                <textarea
                                    name='message'
                                    id='message'
                                    rows='5'
                                    placeholder='Message'
                                    className='form-control'
                                    required
                                ></textarea>
                                <MDBBtn type='submit' className={`send-btn bg-${messageColor} text-light`}>
                                    {message}
                                </MDBBtn>
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
