import React, { useState } from "react";

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBIcon,
    MDBBtn,
} from "mdb-react-ui-kit";

/* images */
import logo from "../../images/logo/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const [nav, setNav] = useState(false);
    const [button, setButton] = useState(false);

    const changeBackgroundNav = () => {
        if (window.scrollY >= 20) setNav(true);
        else setNav(false);
    };

    const changeBackgroundBtn = () => {
        if (window.scrollY >= 20) setButton(true);
        else setButton(false);
    };

    window.addEventListener("scroll", changeBackgroundNav);
    window.addEventListener("scroll", changeBackgroundBtn);

    return (
        <MDBNavbar data-aos='fade-in' fixed='top' expand='lg' className='shadow-0 text-dark' bgColor={!nav ? "" : "dark"}>
            <MDBContainer fluid>
                <MDBContainer>
                    <MDBNavbarBrand>
                        <Link to='/'>
                            <img src={logo} height='45' alt='' loading='lazy' />
                        </Link>
                    </MDBNavbarBrand>
                </MDBContainer>
                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNav(!showNav)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNav}>
                    <MDBNavbarNav>
                        <MDBNavbarItem className='m-2'>
                            <Link
                                className='active'
                                aria-current='page'
                                to='/'
                                onClick={() => {
                                    if (window.innerWidth <= 992) setShowNav(!showNav);
                                }}
                            >
                                <MDBBtn color={!button ? "dark" : "light"}>Home</MDBBtn>
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='m-2'>
                            <Link
                                to='/projects'
                                onClick={() => {
                                    if (window.innerWidth <= 992) setShowNav(!showNav);
                                }}
                            >
                                <MDBBtn color={!button ? "dark" : "light"}>Projects</MDBBtn>
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='m-2'>
                            <Link
                                to='/services'
                                onClick={() => {
                                    if (window.innerWidth <= 992) setShowNav(!showNav);
                                }}
                            >
                                <MDBBtn color={!button ? "dark" : "light"}>Services</MDBBtn>
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='m-2'>
                            <Link
                                to='/about'
                                onClick={() => {
                                    if (window.innerWidth <= 992) setShowNav(!showNav);
                                }}
                            >
                                <MDBBtn color={!button ? "dark" : "light"}>About</MDBBtn>
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='m-2'>
                            <Link
                                to='/contact'
                                onClick={() => {
                                    if (window.innerWidth <= 992) setShowNav(!showNav);
                                }}
                            >
                                <MDBBtn color={!button ? "dark" : "light"}>Contact</MDBBtn>
                            </Link>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default Navbar;
