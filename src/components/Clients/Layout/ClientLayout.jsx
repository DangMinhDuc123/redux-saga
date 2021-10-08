import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import HeaderClient from '../common';

const useStyles = makeStyles((theme) => ({
    root: {}
}))


const ClientLayout = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                <HeaderClient />
            </Box>
        </Box>
    );
};

export default ClientLayout;