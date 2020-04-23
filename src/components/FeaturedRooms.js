import React, { useContext } from 'react';
import Title from '../components/Title';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import Room from '../components/Room';

import { RoomContext } from '../context';

function FeaturedRooms() {
    const usersContext = useContext(RoomContext);
    let { featuredRooms, loading } = usersContext;

    const rooms = <Grid container spacing={3}>
        {
            featuredRooms.map((room, index) => {
                return <Grid key={room.id} item lg={4} xs={12} sm={4} md={4}>
                    <Room room={room} />
                </Grid>
            })
        }
    </Grid>

    return (
        <>
            <Title title="Features" />
            { loading ? <Loading /> : rooms }
        </>
    )
}

export default FeaturedRooms
