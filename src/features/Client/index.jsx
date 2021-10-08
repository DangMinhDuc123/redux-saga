import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router';
import ListPages from './Pages/ListPages';

const ClientProduct = () => {
    return (
            <Switch>
                <Route path="/home" exact component={ListPages} />
            </Switch>
    );
};

export default ClientProduct;