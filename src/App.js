import { Switch, Route } from 'react-router-dom';
import React from 'react';
import AdminLayout from './components/Admins/Layout/AdminLayout';
import './index.css'

// import LoginPage from './features/auth/LogIn/Login';
// import Register from './features/auth/Register/index';

// import ClientLayout from './components/Clients/Layout/ClientLayout';
import ClientProduct from './features/Client';

function App() {
  return (
    <Switch>
      <Route path="/home" exact component={ClientProduct} />
      <Route path='/admin' component={AdminLayout} />
    </Switch>
  );
}

export default App;
