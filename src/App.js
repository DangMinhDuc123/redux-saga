import { Switch, Route } from 'react-router-dom';
import React from 'react';
import AdminLayout from './components/Admins/Layout/AdminLayout'

  // import LoginPage from './features/auth/LogIn/Login';
  // import Register from './features/auth/Register/index';

  ;

function App() {
  return (
    <Switch>
      <Route path="/" exact >
        a
      </Route>
      <Route path='/admin' component={AdminLayout} />
    </Switch>
  );
}

export default App;
