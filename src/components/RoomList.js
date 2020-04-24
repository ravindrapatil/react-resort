import React from 'react'
import Grid from '@material-ui/core/Grid';
import Room from '../components/Room';

function RoomList({rooms}) {
    // console.log("RoomList Data " + rooms);
    
    const template = <Grid container spacing={5} className="mb-30">
    {
        rooms.map((room, index) => {
            return <Grid key={room.id} item lg={4} xs={12} sm={4} md={4}>
                <Room room={room} />
            </Grid>
        })
    }
</Grid>

    const msgTemplate = <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
    </div>
    return (
        <>
            {
                rooms && rooms.length ? template : msgTemplate
            }
        </>
    )
}

export default RoomList
