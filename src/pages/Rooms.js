import React from 'react';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import Heros from '../components/Heros';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer';

function Rooms() {
    return (
        <>
            <Heros hero="roomsHero">
                <Banner title="our rooms">
                    <Link to="/" variant="body2" className="btn-primary">return home</Link>
                </Banner>
            </Heros>
            <Container>
                <RoomsContainer />
            </Container>

        </>
    )
}

export default Rooms
