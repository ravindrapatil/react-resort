import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AlbumIcon from '@material-ui/icons/Album';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import Typography from '@material-ui/core/Typography';

import Title from '../components/Title';

const serviceList = [
    {
        icon: <Brightness7Icon />,
        title: "free cocktails",
        info: "Just because a cocktail is alcohol-free doesn't mean it can't be fun and delicious. These tasty alcohol-free mocktails bring all of the fun without the booze; they taste great."
    },
    {
        icon: <AccountBalanceIcon />,
        title: "Endless Hiking",
        info: "Endless Hikes documents some of the adventures to be had on these treks and provides some tips on how best to travel safely through these remote wilderness regions."
    },
    {
        icon: <AlbumIcon />,
        title: "Free shuttle",
        info: "Employees who want to use this service must show their employee ID before boarding and alighting the bus. This service will be integrated with our citizen app"
    },
    {
        icon: <BlurCircularIcon />,
        title: "Free beer",
        info: "A beer called Snake Venom (dreamed up, perhaps in a nightmare) by the U.K. brewing company Brewmeister, is now apparently the world's strongest beer."
    }
]

function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(serviceList);
    }, []);

    return (
        <div className="services">
            <Title title="Services" />
            <Grid container spacing={3}>
                {
                    services && services.map((item, index) => {
                        return <Grid item lg={3} xs={12} sm={6} md={3} key={index}  className="services-center">
                            <span>{item.icon}</span>
                            <Typography variant="h5" gutterBottom>{item.title}</Typography>
                            <Typography variant="subtitle1" gutterBottom>{item.info}</Typography>
                        </Grid>
                    })
                }
            </Grid>
        </div>
    )
}

export default Services
