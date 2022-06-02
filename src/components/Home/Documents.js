import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

import documentsRequired from "../../images/documentsRequired/documentsRequired.png";
import Calculator from "./Calculator/Calculator";

export const Documents = () => {
    return (
        <MDBContainer className='d-md-flex m-0 p-2 flex-row'>
            <MDBContainer className='mt-3 me-1 p-1 shadow-3-strong'>
                <h3>Documents Required</h3>
                <img
                    src={documentsRequired}
                    className='img-fluid rounded  m-0'
                    style={{ width: "100%", maxHeight: "20rem" }}
                    alt='Sample'
                />

                <a href={documentsRequired} download='DocumentsSunauloGhar'>
                    <MDBBtn type='submit' className='mt-2'>
                        Download
                    </MDBBtn>
                </a>
            </MDBContainer>
            <MDBContainer className='mt-3 ms-1 shadow-3-strong'>
                <h3>Unit Converter</h3>
                <Calculator />
            </MDBContainer>
        </MDBContainer>
    );
};
