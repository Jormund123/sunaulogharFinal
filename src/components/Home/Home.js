import React, { useEffect } from "react";

import { MDBContainer } from "mdb-react-ui-kit";

import Carousel from "./Carousel/Carousel";
import HomeCard from "./CardGrid/HomeCard";
import ContactHome from "./Contact/ContactHome";
import Map from "../Contact Us/Map";

import Modal from "./Modal";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Carousel />
            <MDBContainer>
                <header data-aos='fade-right'>
                    <h1 className='mt-3 text-center'>Our Projects</h1>
                    <hr />
                </header>
            </MDBContainer>
            <HomeCard />
            <ContactHome />

            {/* Documents Required Download */}
            <Modal />
            <Map />
        </>
    );
};

export default Home;
