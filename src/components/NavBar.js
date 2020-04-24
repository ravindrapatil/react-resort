import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';

import AppBarCollapse from '../components/AppBarCollapse';
import logo from '../images/logo.png';
// import logo from '../images/disneyland.png';

const useStyles = makeStyles((theme) => ({
    root: {
        // boxShadow: "none",
        backgroundColor: "#fff"
    },
    logo: {
        height: '45px'
    },
    header: {
        boxShadow: 'none'
    },
    topHeader: {
        background: '#272727',
        color: '#939393',
        borderBottom: '2px solid #1dc1f8'
    },
    iconButton: {
        fontSize: '11px',
        color: '#939393',
        padding: '4px 7px'
    }
}))


function NavBar() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.topHeader}>
                <Container>
                    <Grid container>
                        <Grid item lg={6} xs={12} sm={6} md={6}>
                            <IconButton className={classes.iconButton}>
                                <PhoneIcon /> &nbsp; 080-89765452
                            </IconButton> &nbsp; | &nbsp;
                            <IconButton className={classes.iconButton}>
                                <MailOutlineIcon /> &nbsp; mail@starhotel.com
                            </IconButton>
                        </Grid>
                        <Grid item lg={6} xs={12} sm={6} md={6} className="socialIcons">
                            <IconButton className={classes.iconButton}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton className={classes.iconButton}>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton className={`${classes.iconButton} pr-0`}>
                                <YouTubeIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <AppBar position="sticky" className={classes.root}>
                <Container>
                    <Toolbar disableGutters={true}>
                        <Link to="/"><img className={classes.logo} src={logo} alt="Beach Resort" /></Link>
                        <AppBarCollapse />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default NavBar
