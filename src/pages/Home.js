import React from 'react';
import Container from '@material-ui/core/Container';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import Slides from '../components/Slides';

function Home() {
    return (
        <>
            <Slides />
            {/* <Heros>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" variant="body2" className="btn-primary">our rooms</Link>
                </Banner>
            </Heros> */}
            <div style={{ backgroundColor: '#fff' }} id="section1">
                <Container>
                    <FeaturedRooms />
                </Container>
            </div>
            <div className="serviceContent">
                <Container>
                    <Services />
                </Container>
            </div>
        </>
    )
}

export default Home
