import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import TaskBoard from '../../containers/TaskBoard';
import DashBoard from '../../features/dashboard';
import ProductFeatures from '../../features/product';
import ListTypeProductFeatures from '../../features/typeproduct'
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
                {/* <TaskBoard /> */}
                <Switch>
                    <Route path='/admin/dashboard'>
                        <DashBoard />
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/admin/products'>
                        <ProductFeatures />
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/admin/typeProduct'>
                        <ListTypeProductFeatures />
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
};

export default AdminLayout;