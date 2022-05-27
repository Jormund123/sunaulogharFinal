import React, { useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

/* styles */
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CardGrid(props) {
    useEffect(() => {
        AOS.init({ duration: 1700 });
    }, []);

    let { image1, image2, image3 } = props;

    return (
        <MDBContainer className='mt-3'>
            <MDBRow>
                <MDBCol data-aos='fade-right' size='md' className='col-example'>
                    <div className='bg-image hover-overlay'>
                        <img src={image1} className='img-fluid rounded shadow-3-strong m-2 dimensionsImage ' alt='Sample' />
                    </div>
                </MDBCol>
                <MDBCol data-aos='fade-right' size='md' className='col-example'>
                    <div className='bg-image hover-overlay'>
                        <img src={image2} className='dimensionsImage img-fluid rounded shadow-3-strong m-2 ' alt='Sample' />
                    </div>
                </MDBCol>
                <MDBCol data-aos='fade-right' size='md' className='col-example'>
                    <div className='bg-image hover-overlay'>
                        <img src={image3} className='dimensionsImage img-fluid rounded shadow-3-strong m-2 ' alt='Sample' />
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
