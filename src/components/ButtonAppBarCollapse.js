import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
    buttonCollapse: {
        [theme.breakpoints.up("sm")]: {
            display: "none"
        },
        boxShadow: "none"
    },
    menus: {
        color: 'red'
    }
}))

function ButtonAppBarCollapse(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const wrapperRef = useRef(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div className={classes.buttonCollapse}>
            <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                ref={wrapperRef}
                className={classes.menus}
            >
                {props.children}
            </Menu>
        </div>
    )
}

export default ButtonAppBarCollapse
