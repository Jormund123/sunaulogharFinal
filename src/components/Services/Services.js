import React from "react";

import { useEffect } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

//extra imports
import services1 from "../../images/services/serviceMain.jpg";
import services2 from "../../images/services/services2.jpeg";
import services3 from "../../images/services/servicesbackground.jpg";

import AOS from "aos";
import "./styles.css";

function Services() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div data-aos='fade-down' className='p-5 text-center bg-image services-image1'>
                <div className='mask' style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                    <div className='d-flex justify-content-center align-items-center h-50'>
                        <div className='text-white'></div>
                    </div>
                </div>
            </div>
            <MDBContainer>
                <h2>Types of Services</h2>
                <div data-aos='fade-up' className='d-flex shadow-2-strong m-4'>
                    <MDBRow className=' pe-2 d-flex justify-content-center align-items-center'>
                        <MDBCol size='md' className=' col-example'>
                            <img src={services1} className='img-fluid shadow-2-strong' alt='' />
                        </MDBCol>
                        <MDBCol>
                            <h3>Commercial Building</h3>
                            <hr />
                            <p style={{ textAlign: "justify" }}>
                                The art and technique of designing and building, as distinguished from the skills associated with
                                construction. Commercial structures are structures in which commercial activity take place.
                                Commercial structures include office buildings, retail space, warehouses, and other structures.
                                This differentiates from commercial property, which also includes multi-family structures such as
                                apartment buildings. The reason for this is that commercial buildings are where commerce takes
                                place, whereas commercial property earns money for its owners but does not have to be used for
                                commerce.{" "}
                            </p>
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBContainer>
            <MDBContainer className='bg-light p-0'>
                <div data-aos='fade-down' className='d-flex shadow-2-strong m-4'>
                    <MDBRow className='pe-2 d-flex justify-content-center align-items-center'>
                        <MDBCol size='md' className=' col-example'>
                            <img src={services2} className='img-fluid shadow-2-strong' alt='' />
                        </MDBCol>
                        <MDBCol>
                            <h3>Residental Building</h3>
                            <hr />
                            <p style={{ textAlign: "justify" }}>
                                A residential building is a structure with distinct residences where people can live or stay on a
                                regular basis. Each dwelling is classified as an apartment or a condominium because it has its own
                                kitchen and bathroom. We have enough experience to provide you with the best possible design and
                                built.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBContainer>
            <MDBContainer className='bg-light p-0'>
                <div data-aos='fade-up' className='d-flex shadow-2-strong m-4'>
                    <MDBRow className='pe-2 d-flex justify-content-center align-items-center'>
                        <MDBCol size='md' className=' col-example'>
                            <img src={services3} className='img-fluid shadow-2-strong' alt='' />
                        </MDBCol>
                        <MDBCol>
                            <h3>Interior Design</h3>
                            <hr />
                            <p style={{ textAlign: "justify" }}>
                                Interior design is the art and science of improving a building's interior to make it healthier and
                                more aesthetically pleasant for the people who use it. An interior designer is a professional who
                                designs, studies, coordinates, and manages such improvements. Conceptual conception, space
                                planning, site inspections, programming, research, interacting with project stakeholders,
                                construction management, and design execution are all part of the interior design process.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBContainer>
        </>
    );
}

export default Services;
