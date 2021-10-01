import { Switch, Route } from 'react-router-dom';
import React from 'react';
import AdminLayout from './components/Layout/Admin';
import PrivateRoute from './components/common/PrivateRoute';
import NotFound from './components/common/NotFound';
import LoginPage from './features/auth/LogIn/Login';
import Register from './features/auth/Register/index';

;

function App() {
  return (
    <Switch>
      <PrivateRoute path="/admin">
        <AdminLayout />
      </PrivateRoute>

      <Route path="/login">
        <LoginPage />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
