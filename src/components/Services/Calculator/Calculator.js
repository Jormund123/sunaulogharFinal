import React, { useState } from "react";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBRow,
    MDBCol,
} from "mdb-react-ui-kit";

export default function Calculator() {
    const re = /^[0-9\b]+$/; //for checking if the input is a number

    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    const [ropani, setRopani] = useState("");
    const [aana, setAana] = useState("");
    const [paisa, setPaisa] = useState("");
    const [daam, setDaam] = useState("");
    const [bigaha, setBigaha] = useState("");
    const [kattha, setKattha] = useState("");
    const [dhur, setDhur] = useState("");
    const [squareft, setSquareft] = useState("");
    const [squareMt, setSquareMt] = useState("");

    function meterToEverything(meterSquare) {
        setRopani(meterSquare / 508);
        setAana(meterSquare / 32);
        setPaisa(meterSquare / 8);
        setDaam(meterSquare / 2);
        setBigaha(meterSquare / 6772);
        setKattha(meterSquare / 338);
        setDhur(meterSquare / 17);
        setSquareft(meterSquare / 0.093);
    }

    const handleOnChangeRopani = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            let meterSquare = input * 508;
            setSquareMt(meterSquare);
            meterToEverything(meterSquare);
        }
    };

    const handleOnChangeAana = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            let meterSquare = input * 32;
            setSquareMt(meterSquare);
            meterToEverything(meterSquare);
        }
    };
    const handleOnChangePaisa = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            let meterSquare = input * 8;
            setSquareMt(meterSquare);
            meterToEverything(meterSquare);
        }
    };
    const handleOnChangeDaam = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            let meterSquare = input * 2;
            setSquareMt(meterSquare);
            meterToEverything(meterSquare);
        }
    };
    const handleOnChangeBigaha = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            let meterSquare = input * 6772;
            setSquareMt(meterSquare);
            meterToEverything(meterSquare);
        }
    };
    const handleOnChangeKattha = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            let meterSquare = input * 338;
            setSquareMt(meterSquare);
            meterToEverything(meterSquare);
        }
    };
    const handleOnChangeDhur = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            let meterSquare = input * 17;
            setSquareMt(meterSquare);
            meterToEverything(meterSquare);
        }
    };
    const handleOnChangeSquareFeet = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            let meterSquare = input * 0.093;
            setSquareMt(meterSquare);
            meterToEverything(meterSquare);
        }
    };
    const handleOnChangeSquareMeter = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setSquareMt(input);
            meterToEverything(input);
        }
    };

    return (
        <>
            <MDBBtn className='mt-4 w-10 ' onClick={toggleShow}>
                Unit Converter
            </MDBBtn>
            <hr />
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog className='modal-lg'>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle className='text-dark'>Calculator</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBRow>
                                <MDBCol>
                                    <div className='form-floating mb-3'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='floatingInput'
                                            value={ropani}
                                            onChange={handleOnChangeRopani}
                                        />
                                        <label style={{ color: "black" }} htmlFor='floatingInput'>
                                            Ropani (रोपनी)
                                        </label>
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <div className='form-floating mb-3'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='floatingInput'
                                            value={aana}
                                            onChange={handleOnChangeAana}
                                        />
                                        <label style={{ color: "black" }} htmlFor='floatingInput'>
                                            Aana (आना)
                                        </label>
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <div className='form-floating mb-3'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='floatingInput'
                                            value={paisa}
                                            onChange={handleOnChangePaisa}
                                        />
                                        <label style={{ color: "black" }} htmlFor='floatingInput'>
                                            Paisa (पैसा)
                                        </label>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <div className='form-floating mb-3'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='floatingInput'
                                            value={daam}
                                            onChange={handleOnChangeDaam}
                                        />
                                        <label style={{ color: "black" }} htmlFor='floatingInput'>
                                            Daam (दाम)
                                        </label>
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <div className='form-floating mb-3'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='floatingInput'
                                            value={bigaha}
                                            onChange={handleOnChangeBigaha}
                                        />
                                        <label style={{ color: "black" }} htmlFor='floatingInput'>
                                            Bigaha (बिघा)
                                        </label>
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <div className='form-floating mb-3'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='floatingInput'
                                            value={kattha}
                                            onChange={handleOnChangeKattha}
                                        />
                                        <label style={{ color: "black" }} htmlFor='floatingInput'>
                                            Kattha (कठ्ठा)
                                        </label>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <div className='form-floating mb-3'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='floatingInput'
                                            value={dhur}
                                            onChange={handleOnChangeDhur}
                                        />
                                        <label style={{ color: "black" }} htmlFor='floatingInput'>
                                            Dhur (धुर)
                                        </label>
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <div className='form-floating mb-3'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='floatingInput'
                                            value={squareft}
                                            onChange={handleOnChangeSquareFeet}
                                        />
                                        <label style={{ color: "black" }} htmlFor='floatingInput'>
                                            Square Feet
                                        </label>
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <div className='form-floating mb-3'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='floatingInput'
                                            value={squareMt}
                                            onChange={handleOnChangeSquareMeter}
                                        />
                                        <label style={{ color: "black" }} htmlFor='floatingInput'>
                                            Square Meter
                                        </label>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
