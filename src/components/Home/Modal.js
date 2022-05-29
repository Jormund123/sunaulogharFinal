import React, { useState } from "react";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from "mdb-react-ui-kit";

import "./Contact/styles.css";
import { documentsRequired } from "../../images/allImages";

export default function Modal() {
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    return (
        <>
            <MDBBtn className='mb-4' onClick={toggleShow}>
                Documents Required
            </MDBBtn>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog className='modal-lg'>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle className='text-dark'>Documents Required</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <img src={documentsRequired} style={{ width: "100%" }} alt='' />
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn style={{ backgroundColor: "#cfab67" }} onClick={toggleShow}>
                                Close
                            </MDBBtn>
                            <a href={documentsRequired} download={documentsRequired}>
                                <MDBBtn>Download</MDBBtn>
                            </a>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
