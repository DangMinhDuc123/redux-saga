import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashBoard from '../../../features/Admin/dashboard';
import ProductFeatures from '../../../features/Admin/product';
import ListTypeProductFeatures from '../../../features/Admin/typeproduct';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: '240px 1fr',
        gridTemplateAreas: `"header header" "sidebar main"`,
        minHeight: '100vh'
    },
    header: {
        gridArea: 'header',
    },
    sidebar: {
        gridArea: 'sidebar',
        borderRight: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper
    },
    main: {
        gridArea: 'main',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4)
    },
}))


const AdminLayout = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                <Header />
            </Box>
            <Box className={classes.sidebar}>
                <Sidebar />
            </Box>

            <Box className={classes.main}>
                <Switch>
                    <Route path='/admin/dashboard'>
                        <DashBoard />
                    </Route>
                    <Route path='/admin/products'>
                        <ProductFeatures />
                    </Route>

                    <Route path='/admin/typeProduct'>
                        <ListTypeProductFeatures />
                    </Route>
                </Switch>
            </Box>
        </Box>

    );
};

export default AdminLayout;