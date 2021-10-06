import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import HeaderClient from '../common';
import MainClient from '../common/mainClient';



const useStyles = makeStyles((theme) => ({

}))


const ClientLayout = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                <HeaderClient />
            </Box>
            <Box className={classes.main}>
                <MainClient />
            </Box>
        </Box>

    );
};

export default ClientLayout;