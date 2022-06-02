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
                        <CardGrid image={team1} name='Er. Rajan Pandey' post1='Chairman' post2='(Civil)' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center '>
                        <CardGrid image={team2} name='Er. Biraj Bista' post1='Managing Director' post2='(Civil/M.Tech)' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team4} name='Er. Ramesh Panthi' post1='Director' post2='(Civil/M.Tech)' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team3} name='Er. Bikash Panthi' post1='Director' post2='(Civil)' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team5} name='Mr. Jeevan Neupane ' post1='Manager' post2='' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-2'>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team11} name='Ar. Shankar Chapagain' post1='(B.Arch)' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center '>
                        <CardGrid image={team12} name='Ar. Sawana Ghimire' post1='(B.Arch)' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team6} name='Er. Deepak Kumar Singh' post1='(Civil)' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team13} name='Jr. Er. Soyab Khan' post1='(Civil)' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center '>
                        <CardGrid image={team7} name='Jr. Er. Mamata Panthi' post1='(Civil)' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='m-2'>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team8} name='Jr. Sub. Er. Akhlesh Baniya' post1='(Civil)' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team9} name='Jr. Sub. Er. Pawan Panthi' post1='(Civil)' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team10} name='Mr. Rajesh Acharya' post1='Site Supervisor' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team14} name='Ms. Shrijana Panthi' post1='Account Officer' />
                    </MDBCol>
                    <MDBCol size='md m-2' className='col-example d-flex align-items-center justify-content-center'>
                        <CardGrid image={team15} name='Mrs. Aasha Paudel' post1='Front Desk Officer' />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBContainer>
    );
};

export default Team;
