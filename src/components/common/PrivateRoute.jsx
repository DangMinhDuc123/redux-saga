import React from 'react';
import { Redirect, Route, } from 'react-router';

const PrivateRoute = (routeProps) => {

    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
        <Redirect />
    }
    return (
        <Route {...routeProps} />
    );
};

export default PrivateRoute;