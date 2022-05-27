import React, { useEffect } from "react";

import CardGrid from "./CardGrid";

/* styles */
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

/* images */
import { interior1, interior2, interior3 } from "../../images/allImages";

const Interior = () => {
    useEffect(() => {
        AOS.init({ duration: 1700 });
    }, []);
    return (
        <>
            <CardGrid image1={interior1} image2={interior2} image3={interior3} />
        </>
    );
};

export default Interior;
