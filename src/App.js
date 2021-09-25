import { Switch, Route } from 'react-router-dom';
import React from 'react';
import LoginPage from './features/auth/pages/Login';
import AdminLayout from './components/Layout/Admin';
import NotFound from './components/common/NotFound';
import PrivateRoute from './components/common/PrivateRoute';


function App() {

  return (

    <Switch>

      <Route path="/login">
        <LoginPage />
      </Route>

      <PrivateRoute path="/admin">
        <AdminLayout />
      </PrivateRoute>

      <Route >
        <NotFound />
      </Route>
    </Switch>

  );
}

export default App;
