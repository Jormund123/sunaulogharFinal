import React, { useState } from "react";
import { MDBContainer } from "mdb-react-ui-kit";

import "./styles.css";

export default function Calculator() {
    const re = /^[0-9\b]+$/; //for checking if the input is a number

    const [ropani, setRopani] = useState();
    const [aana, setAana] = useState();
    const [paisa, setPaisa] = useState();
    const [daam, setDaam] = useState();
    const [bigaha, setBigaha] = useState();
    const [kattha, setKattha] = useState();
    const [dhur, setDhur] = useState();
    const [squareft, setSquareft] = useState();
    const [squareMt, setSquareMt] = useState();

    function Ropani(meterSquare) {
        setAana(meterSquare / 32);
        setPaisa(meterSquare / 8);
        setDaam(meterSquare / 2);
        setBigaha(meterSquare / 6772.73);
        setKattha(meterSquare / 338);
        setDhur(meterSquare / 17);
        setSquareft(meterSquare * 0.093);
    }
    function Aana(meterSquare) {
        setRopani(meterSquare / 508.72);
        setPaisa(meterSquare / 8);
        setDaam(meterSquare / 2);
        setBigaha(meterSquare / 6772.73);
        setKattha(meterSquare / 338);
        setDhur(meterSquare / 17);
        setSquareft(meterSquare * 0.093);
    }
    function Paisa(meterSquare) {
        setRopani(meterSquare / 508.72);
        setAana(meterSquare / 32);
        setDaam(meterSquare / 2);
        setBigaha(meterSquare / 6772.73);
        setKattha(meterSquare / 338);
        setDhur(meterSquare / 17);
        setSquareft(meterSquare * 0.093);
    }
    function Daam(meterSquare) {
        setRopani(meterSquare / 508.72);
        setAana(meterSquare / 32);
        setPaisa(meterSquare / 8);
        setBigaha(meterSquare / 6772.73);
        setKattha(meterSquare / 338);
        setDhur(meterSquare / 17);
        setSquareft(meterSquare * 0.093);
    }
    function Bigaha(meterSquare) {
        setRopani(meterSquare / 508.72);
        setAana(meterSquare / 32);
        setPaisa(meterSquare / 8);
        setDaam(meterSquare / 2);
        setKattha(meterSquare / 338);
        setDhur(meterSquare / 17);
        setSquareft(meterSquare * 0.093);
    }
    function Kattha(meterSquare) {
        setRopani(meterSquare / 508.72);
        setAana(meterSquare / 32);
        setPaisa(meterSquare / 8);
        setDaam(meterSquare / 2);
        setBigaha(meterSquare / 6772.73);
        setDhur(meterSquare / 17);
        setSquareft(meterSquare * 0.093);
    }
    function Dhur(meterSquare) {
        setRopani(meterSquare / 508.72);
        setAana(meterSquare / 32);
        setPaisa(meterSquare / 8);
        setDaam(meterSquare / 2);
        setBigaha(meterSquare / 6772.73);
        setKattha(meterSquare / 338);
        setSquareft(meterSquare * 0.093);
    }
    function Squareft(meterSquare) {
        setRopani(meterSquare / 508.72);
        setAana(meterSquare / 32);
        setPaisa(meterSquare / 8);
        setDaam(meterSquare / 2);
        setBigaha(meterSquare / 6772.73);
        setKattha(meterSquare / 338);
        setDhur(meterSquare / 17);
    }
    function SquareMt(meterSquare) {
        setRopani(meterSquare / 508.72);
        setAana(meterSquare / 32);
        setPaisa(meterSquare / 8);
        setDaam(meterSquare / 2);
        setBigaha(meterSquare / 6772.73);
        setKattha(meterSquare / 338);
        setDhur(meterSquare / 17);
        setSquareft(meterSquare * 0.093);
    }

    const handleOnChangeRopani = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setRopani(input);
            let meterSquare = input * 508.72;
            setSquareMt(meterSquare);
            Ropani(meterSquare);
        }
    };

    const handleOnChangeAana = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setAana(input);
            let meterSquare = input * 32;
            setSquareMt(meterSquare);
            Aana(meterSquare);
        }
    };
    const handleOnChangePaisa = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setPaisa(input);
            let meterSquare = input * 8;
            setSquareMt(meterSquare);
            Paisa(meterSquare);
        }
    };
    const handleOnChangeDaam = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setDaam(input);
            let meterSquare = input * 2;
            setSquareMt(meterSquare);
            Daam(meterSquare);
        }
    };
    const handleOnChangeBigaha = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setBigaha(input);
            let meterSquare = input * 6772.73;
            setSquareMt(meterSquare);
            Bigaha(meterSquare);
        }
    };
    const handleOnChangeKattha = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setKattha(input);
            let meterSquare = input * 338;
            setSquareMt(meterSquare);
            Kattha(meterSquare);
        }
    };
    const handleOnChangeDhur = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setDhur(input);
            let meterSquare = input * 17;
            setSquareMt(meterSquare);
            Dhur(meterSquare);
        }
    };
    const handleOnChangeSquareFeet = (event) => {
        event.preventDefault();
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setSquareft(input);
            let meterSquare = input * 0.093;
            setSquareMt(meterSquare);
            Squareft(meterSquare);
        }
    };
    const handleOnChangeSquareMeter = (event) => {
        let input = event.target.value;
        if (input === "" || re.test(input)) {
            setSquareMt(input);
            SquareMt(input);
        }
    };

    return (
        <>
            <form>
                <MDBContainer className='mb-4 d-md-flex flex-row'>
                    <MDBContainer>
                        <div class='input-group mb-3'>
                            <span class='input-group-text' id='inputGroup-sizing-default'>
                                Ropani
                            </span>
                            <input
                                type='text'
                                class='form-control'
                                onChange={handleOnChangeRopani}
                                value={ropani}
                                aria-label='Sizing example input'
                                aria-describedby='inputGroup-sizing-default'
                            />
                        </div>
                    </MDBContainer>
                    <MDBContainer>
                        <div class='input-group mb-3'>
                            <span class='input-group-text' id='inputGroup-sizing-default'>
                                Aana
                            </span>
                            <input
                                type='text'
                                class='form-control'
                                onChange={handleOnChangeAana}
                                value={aana}
                                aria-label='Sizing example input'
                                aria-describedby='inputGroup-sizing-default'
                            />
                        </div>
                    </MDBContainer>
                    <MDBContainer>
                        <div class='input-group mb-3'>
                            <span class='input-group-text' id='inputGroup-sizing-default'>
                                Paisa
                            </span>
                            <input
                                type='text'
                                class='form-control'
                                onChange={handleOnChangePaisa}
                                value={paisa}
                                aria-label='Sizing example input'
                                aria-describedby='inputGroup-sizing-default'
                            />
                        </div>
                    </MDBContainer>
                </MDBContainer>
                <MDBContainer className='mb-4 d-md-flex flex-row'>
                    <MDBContainer>
                        <div class='input-group mb-3'>
                            <span class='input-group-text' id='inputGroup-sizing-default'>
                                Daam
                            </span>
                            <input
                                type='text'
                                class='form-control'
                                onChange={handleOnChangeDaam}
                                value={daam}
                                aria-label='Sizing example input'
                                aria-describedby='inputGroup-sizing-default'
                            />
                        </div>
                    </MDBContainer>
                    <MDBContainer>
                        <div class='input-group mb-3'>
                            <span class='input-group-text' id='inputGroup-sizing-default'>
                                Bigaha
                            </span>
                            <input
                                type='text'
                                class='form-control'
                                onChange={handleOnChangeBigaha}
                                value={bigaha}
                                aria-label='Sizing example input'
                                aria-describedby='inputGroup-sizing-default'
                            />
                        </div>
                    </MDBContainer>
                    <MDBContainer>
                        <div class='input-group mb-3'>
                            <span class='input-group-text' id='inputGroup-sizing-default'>
                                Kattha
                            </span>
                            <input
                                type='text'
                                class='form-control'
                                onChange={handleOnChangeKattha}
                                value={kattha}
                                aria-label='Sizing example input'
                                aria-describedby='inputGroup-sizing-default'
                            />
                        </div>
                    </MDBContainer>
                </MDBContainer>
                <MDBContainer className='mb-4 d-md-flex flex-row d-md-flex flex-row'>
                    <MDBContainer>
                        <div class='input-group mb-3'>
                            <span class='input-group-text' id='inputGroup-sizing-default'>
                                Dhur
                            </span>
                            <input
                                type='text'
                                class='form-control'
                                onChange={handleOnChangeDhur}
                                value={dhur}
                                aria-label='Sizing example input'
                                aria-describedby='inputGroup-sizing-default'
                            />
                        </div>
                    </MDBContainer>
                    <MDBContainer>
                        <div class='input-group mb-3'>
                            <span class='input-group-text' id='inputGroup-sizing-default'>
                                Square Ft.
                            </span>
                            <input
                                type='text'
                                class='form-control'
                                onChange={handleOnChangeSquareFeet}
                                value={squareft}
                                aria-label='Sizing example input'
                                aria-describedby='inputGroup-sizing-default'
                            />
                        </div>
                    </MDBContainer>
                    <MDBContainer>
                        <div class='input-group mb-3'>
                            <span class='input-group-text' id='inputGroup-sizing-default'>
                                Square Mt.
                            </span>
                            <input
                                type='text'
                                class='form-control'
                                onChange={handleOnChangeSquareMeter}
                                value={squareMt}
                                aria-label='Sizing example input'
                                aria-describedby='inputGroup-sizing-default'
                            />
                        </div>
                    </MDBContainer>
                </MDBContainer>
            </form>
        </>
    );
}
