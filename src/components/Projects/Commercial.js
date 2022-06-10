import React, { useEffect } from "react";

import CardGrid from "./CardGrid";

/* styles */
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

/* images */
import {
    Commercial11,
    Commercial2,
    Commercial3,
    Commercial4,
    Commercial5,
    Commercial6,
    Commercial7,
    Commercial8,
    Commercial9,
    Commercial10,
    Commercial12,
    Commercial13,
    Commercial14,
    Commercial15,
    Commercial16,
    Commercial17,
    Commercial18,
    Commercial19,
    Commercial20,
    Commercial1,
} from "../../images/allImages";

const Commercial = () => {
    useEffect(() => {
        AOS.init({ duration: 1700 });
    }, []);
    return (
        <>
            <CardGrid image1={Commercial2} image2={Commercial20} image3={Commercial5} />
            <CardGrid image1={Commercial3} image2={Commercial9} image3={Commercial6} />
            <CardGrid image1={Commercial4} image2={Commercial10} image3={Commercial7} />
            <CardGrid image1={Commercial11} image2={Commercial14} image3={Commercial17} />
            <CardGrid image1={Commercial12} image2={Commercial15} image3={Commercial18} />
            <CardGrid image1={Commercial13} image2={Commercial16} image3={Commercial19} />
            <CardGrid image1={Commercial1} image2={Commercial8} image3={Commercial2} />
        </>
    );
};

export default Commercial;
