import React from "react";
import { Link } from "react-router-dom";
import { MDBFooter } from "mdb-react-ui-kit";
import "./styles.css";

export default function Footer() {
    return (
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
            <section className='d-flex flex-column justify-content-center justify-content-lg p-4 border-bottom'>
                <div className='contact-footer'>
                    <div className='social-links'>
                        <a
                            aria-label='facebook'
                            target='blank'
                            href='https://www.facebook.com/sunauloghar'
                            className='fab fa-facebook-f'
                        ></a>
                        <a
                            aria-label='instagran'
                            target='blank'
                            href='https://www.instagram.com/sunaulogharofficial/'
                            className='fab fa-instagram'
                        ></a>
                        <a
                            aria-label='tiktok'
                            target='blank'
                            href='https://www.tiktok.com/@sunauloghar.com'
                            className='fab fa-tiktok'
                        ></a>
                        <a
                            aria-label='youtube'
                            target='blank'
                            href='https://www.youtube.com/c/sunauloghar'
                            className='fab fa-youtube'
                        ></a>
                    </div>
                </div>

                <div className='text-center text-light fw-light p-4'>
                    © 2021 Copyright:&nbsp;
                    <Link className='text-light fw-light' to='SunauloGhar.com'>
                        SunauloGhar.com
                    </Link>
                </div>
            </section>
        </MDBFooter>
    );
}
