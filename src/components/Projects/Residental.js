import React, { useEffect } from "react";

import CardGrid from "./CardGrid";

/* styles */
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

/* images */
import {
    residental1,
    residental2,
    residental3,
    residental4,
    residental5,
    residental6,
    residental8,
    residental7,
    residental9,
    residental10,
    residental11,
    residental12,
    residental13,
    residental14,
    residental15,
    residental16,
    residental17,
    residental18,
    residental19,
    residental20,
    residental22,
    residental21,
} from "../../images/allImages";

const Residental = () => {
    useEffect(() => {
        AOS.init({ duration: 1700 });
    }, []);
    return (
        <>
            <CardGrid image1={residental2} image2={residental8} image3={residental5} />
            <CardGrid image1={residental3} image2={residental9} image3={residental6} />
            <CardGrid image1={residental4} image2={residental10} image3={residental7} />
            <CardGrid image1={residental11} image2={residental18} image3={residental19} />
            <CardGrid image1={residental12} image2={residental17} image3={residental20} />
            <CardGrid image1={residental13} image2={residental16} image3={residental15} />
            <CardGrid image1={residental14} image2={residental21} image3={residental22} />
        </>
    );
};

export default Residental;
