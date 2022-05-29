import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import React from "react";

import "./styles.css";

function CardGrid(props) {
    let { image, post, name } = props;
    return (
        <>
            <MDBCard className='shadow-5-strong ' style={{ width: "11rem" }}>
                <MDBCardImage style={{ height: "10rem" }} src={image} position='top' alt='...' />
                <MDBCardBody className='m-0 mt-2 p-0'>
                    <h6>{name}</h6>
                    <p>{post}</p>
                </MDBCardBody>
            </MDBCard>
        </>
    );
}

export default CardGrid;
