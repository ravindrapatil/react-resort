import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import ButtonAppBarCollapse from '../components/ButtonAppBarCollapse';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        right: 0
    },
    linkSpacing: {
        marginLeft: theme.spacing(3),
        color: '#fff',
        textDecoration: 'none'
    },
    buttonBar: {
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    linkSpacingSmallDevices: {
        display: 'block',
        padding: '10px 20px 10px 20px',
        textDecoration: 'none'
    }
}))

function AppBarCollapse() {
    const classes = useStyles();
    const wrapperRef = useRef(null);
    return (
        <div className={classes.root} ref={wrapperRef}>
            <ButtonAppBarCollapse>
                <li><Link className={classes.linkSpacingSmallDevices} to="/">home</Link></li>
                <li><Link className={classes.linkSpacingSmallDevices} to="/rooms">Rooms</Link></li>
            </ButtonAppBarCollapse>
            <div className={classes.buttonBar} id="appbar-collapse">
                <Link className={classes.linkSpacing} to="/">Home</Link>
                <Link className={classes.linkSpacing} to="/rooms">Rooms</Link>
            </div>
        </div>
    )
}

export default AppBarCollapse
