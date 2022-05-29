import React, { useEffect, useState } from "react";
import Team from "./Team";

import "./styles.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { MDBContainer } from "mdb-react-ui-kit";
import { team1 } from "../../images/allImages";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    /* using state for changing border color of the message container */
    const [color, setColor] = useState("end");

    let count = 0;
    useEffect(() => {
        const interval = setInterval(() => {
            count++;
            if (count % 2 !== 0) setColor("bottom");
            else setColor("end");
        }, 1000);
        return () => clearInterval(interval);
    }, [count]);

    return (
        <>
            <div data-aos='fade-down' className='p-5 text-center bg-image about-image1'>
                <div className='mask' style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                    <div className='d-flex justify-content-center align-items-center h-50'>
                        <div className='text-white'></div>
                    </div>
                </div>
            </div>
            {/* Message from the Chairman */}
            <MDBContainer data-aos='slide-up' className='mt-3 mb-6 p-0'>
                <MDBContainer className={`p-0 shadow-5-strong border-${color}`} style={{ backgroundColor: "#D9D9D9" }}>
                    <img
                        className='border border-start float-md-start me-3'
                        src={team1}
                        alt=''
                        style={{ maxWidth: "10rem", maxHeight: "10rem" }}
                    />
                    <h3 className='text-md-start'>A Message From The Chairman,</h3>
                    <p className='p-3 pt-0' style={{ textAlign: "justify" }}>
                        At Sunauloghar.com, we strive for innovation by providing the best architectural, engineering and project
                        management solutions for the construction industry. We are proud of our talented team and our portfolio of
                        projects we have accomplished together to date. Success to Sunauloghar.com means more than merely
                        delivering projects; but rather pushing the boundaries of design and pioneering new engineering tools to
                        revolutionize our clients’ view on design possibilities. We have a diverse selection of projects
                        nationwide, both completed and ongoing. With over 7 years experience, our values have never changed. We
                        work with the best people, we are passionate about our projects, we care about every detail and most
                        importantly we put our clients’ needs at the heart of everything we do. Our journey started in 2016 with
                        our founder team of Engineers and Architect serving as the designing consultant of the projects. Today, we
                        are providing the service of design as well as project management, project construction. I invite you to
                        have a look at our website, where you can learn more about Sunauloghar.com and how we do things
                        differently, as we continue to expand and enhance our portfolio across the globe.
                    </p>
                </MDBContainer>
            </MDBContainer>

            {/* Why Choose Us */}
            <MDBContainer className='p-0 d-block mb-3'>
                <h1 data-aos='fade-in' className='m-0 pb-0'>
                    Why Choose Us?
                </h1>
                <hr />
                <MDBContainer
                    data-aos='fade-in'
                    className='d-md-flex flex-row justify-content-around align-items-center shadow-5-strong mainContainer'
                >
                    <MDBContainer
                        data-aos='flip-right'
                        className=' m-md-5 mt-md-0 p-1 pt-3 text-light'
                        style={{ backgroundColor: "#0065AF" }}
                    >
                        <h3 className='p-0'>Our Experience</h3>
                        <hr />
                        <p>
                            We pay attention to your goals so that we may fully comprehend your priorities. Each of our designs is
                            one-of-a-kind and tailored to your specific requirements. Our services are adaptable to your needs.
                        </p>
                    </MDBContainer>
                    <MDBContainer
                        data-aos='flip-right'
                        className=' m-md-5 mt-md-0 p-1 pt-3 text-dark'
                        style={{ backgroundColor: "#D9D9D9" }}
                    >
                        <h3 className='p-0'>On-Time Completion</h3>
                        <hr />
                        <p>
                            We can assure that your expectations are met on schedule since we have the necessary tools, the ideal
                            staff, and seamless communication when planning and completing the project.
                        </p>
                    </MDBContainer>
                    <MDBContainer
                        data-aos='flip-right'
                        className=' m-md-5 mt-md-0 p-1 pt-3 text-light'
                        style={{ backgroundColor: "#D7AC5C" }}
                    >
                        <h3 className='p-0'>Good Price</h3>
                        <hr />
                        <p>
                            Our pricing are reasonable and competitive. There will be no unexpected bills. You must approve any
                            unexpected or increased charges in advance. That's how we'd like to be treated, and it's how we treat
                            our clients.
                        </p>
                    </MDBContainer>
                </MDBContainer>
            </MDBContainer>
            <Team />
        </>
    );
};

export default About;
