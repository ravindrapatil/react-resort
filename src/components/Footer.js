import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#272727',
        // marginTop: '50px',
        color: '#c1c1c1'
    }
}))

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <div style={{ padding: '20px 0' }}>
                    © 2020 Starhotel All Rights Reserved
                </div>
            </Container>
        </div>
    )
}

export default Footer
