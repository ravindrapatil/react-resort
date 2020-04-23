import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { RoomContext } from '../context';
import defaultBg from '../images/room-1.jpeg';
import Heros from '../components/Heros';
import Banner from '../components/Banner';

function SingleRoom(props) {
    const usersContext = useContext(RoomContext);
    const initialState = {
        defaultBg,
        slug: props.match.params.slug
    }
    const [state, setstate] = useState(initialState);
    const { getRoom } = usersContext;
    const room = getRoom(state.slug);
    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
    const [mainImg, ...defaultImgs] = images;

    const dynamicImg = {
        background: `url("${mainImg || defaultBg}") center/cover no-repeat`
    }

    const errorMsg = <div className="error">
        <h3>no such room could found...</h3>
        <Link to="/rooms" className="btn-primary">back to rooms</Link>
    </div>

    const template = <div>
        <Heros hero="roomsHero" customBg={dynamicImg}>
            <Banner title={`${name} room`}>
                <Link to={`/rooms`} className="btn-primary">back to rooms</Link>
            </Banner>
        </Heros>
        <Container style={{ marginTop: '40px' }}>
            <Grid container spacing={5}>
                {
                    defaultImgs.map((item, index) => {
                        return <Grid key={index} item lg={4} xs={12} sm={4} md={4}>
                            <img src={item} alt={name} style={{ width: '100%', height: '12rem', objectFit: 'cover' }} />
                        </Grid>
                    })
                }
            </Grid>
            <Grid container spacing={5}>
                <Grid item lg={8} xs={12} sm={8} md={8}>
                    <Typography variant="h4" gutterBottom>Details</Typography>
                    <Typography variant="body2" gutterBottom>{description}</Typography>
                </Grid>
                <Grid item lg={4} xs={12} sm={4} md={4}>
                    <Typography variant="h4" gutterBottom>Info</Typography>
                    <Typography variant="body2" gutterBottom>Price: ${price}</Typography>
                    <Typography variant="body2" gutterBottom>Max capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}</Typography>
                    <Typography variant="body2" gutterBottom>Size: {size} SQFT</Typography>
                    <Typography variant="body2" gutterBottom>{pets ? 'Pets allowed' : 'No pets allowed'}</Typography>
                    <Typography variant="body2" gutterBottom>{breakfast ? 'Breakfast allowed' : 'No breakfast allowed'}</Typography>
                </Grid>
            </Grid>
            <div>
                <Typography variant="h4" gutterBottom>Extras</Typography>
                {
                    <Grid container spacing={1}>
                        {
                            extras.map((item, index) => {
                                return <Grid item key={index} lg={4} xs={12} sm={4} md={4} style={{fontSize: '14px'}}>
                                    - {item}
                                </Grid>
                            })
                        }
                    </Grid>
                }
            </div>
        </Container>
    </div>

    return (
        <>
            {
                room ? template : errorMsg
            }
        </>
    )
}

export default SingleRoom
