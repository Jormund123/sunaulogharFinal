import React, { useEffect } from "react";

import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Map() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <div data-aos='fade-up' className='map' style={{ height: "400px" }}>
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.063600983047!2d83.46244901544118!3d27.68442908280135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399687c60aa7c99d%3A0x782bfea8604abbb5!2sSunauloghar.com!5e0!3m2!1sen!2snp!4v1645967981047!5m2!1sen!2snp'
                className='mapCSS'
                allowFullScreen=''
                aria-hidden='false'
                tabIndex='0'
                title='mapFrame'
            ></iframe>
        </div>
    );
}

export default Map;
