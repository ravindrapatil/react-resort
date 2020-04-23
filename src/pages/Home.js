import React from 'react';
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';

import Heros from '../components/Heros';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

function Home() {
    return (
        <>
            <Heros>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" variant="body2" className="btn-primary">our rooms</Link>
                </Banner>
            </Heros>
            <div style={{ backgroundColor: '#cfcfcf' }}>
                <Container>
                    <Services />
                </Container>
            </div>
            <div style={{ backgroundColor: '#fff' }}>
                <Container>
                    <FeaturedRooms />
                </Container>
            </div>

        </>
    )
}

export default Home
