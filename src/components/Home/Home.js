import React, { useEffect } from "react";
import Carousel from "./Carousel/Carousel";

import { MDBContainer } from "mdb-react-ui-kit";
import HomeCard from "./CardGrid/HomeCard";

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
        </>
    );
};

export default Home;
