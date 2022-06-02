import React, { useEffect, useRef } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement } from "mdb-react-ui-kit";

/* Images */

import carouselvideo1 from "../../../videos/videoResidental1.mp4";
import carouselvideo2 from "../../../videos/videoResidental2.mp4";
import carouselvideo3 from "../../../videos/videoResidental3.mp4";

/* styles */
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Carousel() {
    useEffect(() => {
        AOS.init({ once: true, duration: 1700 });
    }, []);
    const vidRef = useRef();

    useEffect(() => {
        vidRef.current.play();
    }, []);

    return (
        <MDBCarousel data-aos='flip-left' showIndicators>
            <MDBCarouselInner className='carouselInner'>
                <MDBCarouselItem className='active'>
                    <video
                        className='carouselImage'
                        autoPlay
                        muted
                        width='100%'
                        src={carouselvideo1}
                        controls=''
                        loop
                        ref={vidRef}
                    ></video>
                </MDBCarouselItem>
                <MDBCarouselItem>
                    <video
                        className='carouselImage'
                        autoPlay
                        muted
                        width='100%'
                        src={carouselvideo2}
                        controls=''
                        loop
                        ref={vidRef}
                    ></video>
                </MDBCarouselItem>

                <MDBCarouselItem>
                    <video
                        className='carouselImage'
                        autoPlay
                        muted
                        width='100%'
                        src={carouselvideo3}
                        controls=''
                        loop
                        ref={vidRef}
                    ></video>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    );
}
