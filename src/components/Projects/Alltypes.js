import React, { useEffect } from "react";

import CardGrid from "./CardGrid";

/* styles */
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

/* images */
import {
    Commercial2,
    Commercial3,
    Commercial4,
    Commercial5,
    Commercial6,
    Commercial7,
    Commercial8,
    Commercial9,
    Commercial10,
    residental1,
    residental2,
    residental3,
    residental4,
    residental5,
    residental6,
    residental8,
    residental9,
    residental10,
    residental11,
    residental12,
    residental13,
    residental14,
    residental15,
    interior1,
    interior2,
    interior3,
} from "../../images/allImages";

export default function AllTypes() {
    useEffect(() => {
        AOS.init({ duration: 1700 });
    }, []);
    return (
        <>
            <CardGrid image1={residental1} image2={Commercial2} image3={interior1} />
            <CardGrid image1={residental2} image2={Commercial3} image3={interior2} />
            <CardGrid image1={residental3} image2={Commercial4} image3={interior3} />
            <CardGrid image1={residental4} image2={Commercial5} image3={residental1} />
            <CardGrid image1={residental5} image2={Commercial6} image3={residental11} />
            <CardGrid image1={residental6} image2={Commercial7} image3={residental12} />
            <CardGrid image1={residental8} image2={Commercial8} image3={residental13} />
            <CardGrid image1={residental9} image2={Commercial9} image3={residental14} />
            <CardGrid image1={residental10} image2={Commercial10} image3={residental15} />
        </>
    );
}
