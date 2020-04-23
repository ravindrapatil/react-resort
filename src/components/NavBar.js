import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';

import AppBarCollapse from '../components/AppBarCollapse';
import logo from '../images/logo.svg';
// import logo from '../images/disneyland.png';

const useStyles = makeStyles((theme) => ({
    logo: {
        width: '248px',
        height: '35px'
    },
    header: {
        boxShadow: 'none'
    }
}))


function NavBar() {
    const classes = useStyles();
    return (
        <div style={{ backgroundColor: '#3f51b5' }}>
            <Container>
                <AppBar position="relative" className={classes.header}>
                    <Toolbar disableGutters={true}>
                        <Avatar variant="square" className={classes.logo}>
                            <Link to="/"><img src={logo} alt="Beach Resort" /></Link>
                        </Avatar>
                        <AppBarCollapse />
                    </Toolbar>
                </AppBar>
            </Container>
        </div>
    )
}

export default NavBar
