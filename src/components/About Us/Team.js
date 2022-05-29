import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import React from "react";
import CardGrid from "./CardGrid";

import "./styles.css";
import {
    team1,
    team2,
    team3,
    team4,
    team5,
    team6,
    team7,
    team8,
    team9,
    team10,
    team11,
    team12,
    team13,
    team14,
    team15,
} from "../../images/allImages";
import "aos/dist/aos.css";

const Team = () => {
    return (
        <MDBContainer className='mt-6 align-items-center mb-4 p-0 '>
            <MDBContainer data-aos='flip-right' className='p-3'>
                <h2>Our Amazing Team</h2>
                <hr />
                <MDBRow className='m-2'>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team1} name='Er. Rajan Pandey' post='Chairman' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center '>
                        <CardGrid image={team2} name='Er. Biraj Pandey' post='Managing Director' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team3} name='Er. Bikash Panthi' post='Director' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team4} name='Er. Ramesh Panthi' post='Director' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team5} name='Mr. Jeevan Neupane ' post='Manager' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-2'>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team6} name='Er. Deepak Kumar Singh' post='Civil Engineer' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center '>
                        <CardGrid image={team7} name='Jr. Er. Mamata Panthi' post='Civil Engineer' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team8} name='Jr. Er. Akhlesh Baniya' post='Civil Engineer' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team9} name='Jr. Er. Pawan Panthi' post='Civil Engineer' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team10} name='Mr. Rajesh Acharya' post='Site Supervisor' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-2'>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team11} name='Ar. Shankar Chapagain' post='AR Officer' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center '>
                        <CardGrid image={team12} name='Ar. Sawana Ghimire' post='AR Officer' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team13} name='Jr. Ar. Soyab Khan' post='AR Officer' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team14} name='Ms. Shrijana Panthi' post='Account Officer' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team15} name='Mrs. Aasha Paudel' post='Front Desk Officer' />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBContainer>
    );
};

export default Team;
