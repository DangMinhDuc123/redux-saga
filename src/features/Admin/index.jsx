import { Switch, Route, } from 'react-router';
import React from 'react';
import NotFound from '../../components/Admins/common/NotFound';
// import LoginPage from './features/auth/LogIn/Login';
// import Register from './features/auth/Register/index';
import AdminLayout from '../../components/Admins/Layout/Admin';

function Admin() {
    // const match = useRouteMatch();
    return (
        <>
            <Switch>
                <Route path='/admin' exact component={AdminLayout} />
                {/* <Route path="/login">
                <LoginPage />
            </Route>

            <Route path="/register">
                <Register />
            </Route> */}

                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </>
    );
}

export default Admin;
