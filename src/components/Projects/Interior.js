import React, { useEffect } from "react";

import CardGrid from "./CardGrid";

/* styles */
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

/* images */
import {
    interior1,
    interior2,
    interior3,
    interior4,
    interior5,
    interior6,
    interior7,
    interior8,
    interior9,
    interior10,
    interior11,
    interior12,
    interior13,
    interior14,
    interior15,
    interior16,
} from "../../images/allImages";

const Interior = () => {
    useEffect(() => {
        AOS.init({ duration: 1700 });
    }, []);
    return (
        <>
            <CardGrid image1={interior10} image2={interior2} image3={interior3} />
            <CardGrid image1={interior4} image2={interior5} image3={interior6} />
            <CardGrid image1={interior7} image2={interior11} image3={interior14} />
            <CardGrid image1={interior8} image2={interior12} image3={interior15} />
            <CardGrid image1={interior9} image2={interior13} image3={interior16} />
        </>
    );
};

export default Interior;
