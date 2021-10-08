import { Switch, Route } from 'react-router-dom';
import React from 'react';
import AdminLayout from './components/Admins/Layout/AdminLayout';
import LoginPage from './features/Admin/auth/LogIn/Login';
import Register from './/features/Admin/auth/Register';
import ClientProduct from './features/Client';

function App() {
  return (
    <Switch>
      <Route path="/home" exact component={ClientProduct} />
      <Route path='/admin' component={AdminLayout} />
      <Route path='/login' component={LoginPage}/>
      <Route path='/register' component={Register}/>
    </Switch>
  );
}

export default App;
