import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import React from "react";

import "./styles.css";

function CardGrid(props) {
    let { image, post1, post2, name } = props;
    return (
        <>
            <MDBCard className='shadow-5-strong ' style={{ width: "11rem" }}>
                <MDBCardImage style={{ height: "10rem" }} src={image} position='top' alt='...' />
                <MDBCardBody className='m-0 mt-2 p-0'>
                    <h6>{name}</h6>
                    <p className='mb-0'>{post1}</p>
                    <p className='p-2'>{post2}</p>
                </MDBCardBody>
            </MDBCard>
        </>
    );
}

export default CardGrid;
