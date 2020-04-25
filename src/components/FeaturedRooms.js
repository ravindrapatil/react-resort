import React, { useContext } from 'react';
import Title from '../components/Title';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

import Room from '../components/Room';
import { RoomContext } from '../context';

function FeaturedRooms() {
    const usersContext = useContext(RoomContext);
    let { featuredRooms, loading, featureSectionRef } = usersContext;

    const rooms = <><Grid container spacing={3}>
        {
            featuredRooms.map((room, index) => {
                return <Grid key={room.id} item lg={4} xs={12} sm={4} md={4}>
                    <Room room={room} />
                </Grid>
            })
        }
    </Grid>
        <div style={{ margin: '40px 0', textAlign: 'center' }}>
            <Link className="btn-secondary" to="/rooms">View more list</Link>
        </div>
    </>

    return (
        <div ref={featureSectionRef}>
            <Title title="Features" />
            {loading ? <Loading /> : rooms}
        </div>
    )
}

export default FeaturedRooms
