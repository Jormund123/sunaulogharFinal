import React, { useEffect, useState } from "react";
import Alltypes from "./Alltypes";
import Residental from "./Residental";
import Commercial from "./Commercial";
import Interior from "./Interior";

import { MDBContainer, MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";

import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
    const [category, setCategory] = useState("AllTypes");

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onClickAllTypes = () => {
        setCategory("AllTypes");
    };
    const onClickResidental = () => {
        setCategory("Residental");
    };

    const onClickInterior = () => {
        setCategory("Interior");
    };

    const onClickCommercial = () => {
        setCategory("Commercial");
    };

    return (
        <>
            <div data-aos='fade-down' className='p-5 text-center bg-image project-image1'>
                <div className='mask' style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                    <div className='d-flex justify-content-center align-items-center h-50'>
                        <div className='text-white'></div>
                    </div>
                </div>
            </div>
            <MDBContainer className='mt-2' style={{ minHeight: "90vh" }}>
                <MDBBtnGroup className='d-flex justify-content-center' aria-label='Basic example'>
                    <MDBBtn onClick={onClickAllTypes}>All Types</MDBBtn>
                    <MDBBtn onClick={onClickResidental}>Residental</MDBBtn>
                    <MDBBtn onClick={onClickCommercial} className='HomePageBtn'>
                        Commercial
                    </MDBBtn>
                    <MDBBtn onClick={onClickInterior}>Interior</MDBBtn>
                </MDBBtnGroup>
                {(() => {
                    if (category === "AllTypes") {
                        return <Alltypes />;
                    } else if (category === "Residental") {
                        return <Residental />;
                    } else if (category === "Interior") {
                        return <Interior />;
                    } else if (category === "Commercial") {
                        return <Commercial />;
                    }
                })()}
            </MDBContainer>
        </>
    );
}

export default Projects;
