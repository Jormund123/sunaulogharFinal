import React, { useEffect } from "react";

import CardGrid from "./CardGrid";

/* styles */
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

/* images */
import {
    commercial2,
    commercial3,
    commercial4,
    commercial5,
    commercial6,
    commercial7,
    commercial8,
    commercial9,
    commercial10,
} from "../../images/allImages";

const Commercial = () => {
    useEffect(() => {
        AOS.init({ duration: 1700 });
    }, []);
    return (
        <>
            <CardGrid image1={commercial2} image2={commercial8} image3={commercial5} />
            <CardGrid image1={commercial3} image2={commercial9} image3={commercial6} />
            <CardGrid image1={commercial4} image2={commercial10} image3={commercial7} />
        </>
    );
};

export default Commercial;
