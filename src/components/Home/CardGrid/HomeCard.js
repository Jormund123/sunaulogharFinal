import React, { useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";

/* styles */
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
/* images */
import residental1 from "../../../images/residental/Residental1.jpeg";
import commercial1 from "../../../images/commercial/commercial5.jpeg";
import interior1 from "../../../images/interior/Interior1.jpeg";
import { Link } from "react-router-dom";

export default function HomeCard() {
    useEffect(() => {
        AOS.init({ duration: 1700 });
    }, []);
    return (
        <MDBContainer className='mt-3'>
            <MDBRow>
                <MDBCol data-aos='fade-right' size='md' className='col-example'>
                    <div className='bg-image hover-overlay'>
                        <img src={residental1} className='img-fluid rounded shadow-3-strong m-2 dimensionsImage ' alt='Sample' />
                        <div className='mask p-4' style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                            <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                                <p className='text-white mb-0'>
                                    Each dwelling is classified as an apartment or a condominium because it has its own kitchen
                                    and bathroom. We have enough experience to provide you with the best possible design and
                                    built.
                                </p>
                                <Link to='/projects'>
                                    <MDBBtn className='mt-4'>More Designs</MDBBtn>
                                </Link>
                            </div>
                        </div>
                    </div>
                </MDBCol>
                <MDBCol data-aos='fade-right' size='md' className='col-example'>
                    <div className='bg-image hover-overlay'>
                        <img src={commercial1} className='dimensionsImage img-fluid rounded shadow-3-strong m-2 ' alt='Sample' />
                        <div className='mask p-4' style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                            <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                                <p className='text-white mb-0'>
                                    The art and technique of designing and building, as distinguished from the skills associated
                                    with construction. Commercial structures are structures in which commercial activity take
                                    place. Commercial structures include office buildings, retail space, warehouses, and other
                                    structures.
                                </p>
                                <MDBBtn className='mt-4'>More Designs</MDBBtn>
                            </div>
                        </div>
                    </div>
                </MDBCol>
                <MDBCol data-aos='fade-right' size='md' className='col-example'>
                    <div className='bg-image hover-overlay'>
                        <img src={interior1} className='dimensionsImage img-fluid rounded shadow-3-strong m-2 ' alt='Sample' />
                        <div className='mask p-4' style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                            <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                                <p className='text-white mb-0'>
                                    Interior design is the art and science of improving a building's interior to make it healthier
                                    and more aesthetically pleasant for the people who use it.
                                </p>
                                <MDBBtn className='mt-4'>More Designs</MDBBtn>
                            </div>
                        </div>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
