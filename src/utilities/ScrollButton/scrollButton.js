import React, { useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import { Button } from "./Styles";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 800) {
            setVisible(true);
        } else if (scrolled <= 800) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            /* you can also use 'auto' behaviour
		in place of 'smooth' */
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <Button>
            <FaLongArrowAltUp onClick={scrollToTop} style={{ display: visible ? "inline" : "none" }} />
        </Button>
    );
};

export default ScrollButton;
