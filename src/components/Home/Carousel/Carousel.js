import React, { useEffect } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement } from "mdb-react-ui-kit";

/* Images */
import carousel1 from "../../../images/carousel/carousel1.jpg";
import carousel2 from "../../../images/carousel/carousel2.jpg";
import carousel3 from "../../../images/carousel/carousel3.jpg";

/* styles */
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Carousel() {
    useEffect(() => {
        AOS.init({ duration: 1700 });
    }, []);

    return (
        <MDBCarousel data-aos='flip-left' showIndicators showControls>
            <MDBCarouselInner>
                <MDBCarouselItem className='active'>
                    <MDBCarouselElement className='carouselImage' src={carousel1} alt='...' />
                </MDBCarouselItem>

                <MDBCarouselItem>
                    <MDBCarouselElement className='carouselImage' src={carousel2} alt='...' />
                </MDBCarouselItem>

                <MDBCarouselItem>
                    <MDBCarouselElement className='carouselImage' src={carousel3} alt='...' />
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    );
}
