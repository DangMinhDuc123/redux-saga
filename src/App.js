import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Admin from './features/Admin';


// import LoginPage from './features/auth/LogIn/Login';
// import Register from './features/auth/Register/index';

;

function App() {
  return (
    <Switch>
      <Route path="/" exact >
        a
      </Route>
      <Route path="/admin" exact component={Admin}>
        <Admin />
      </Route>
    </Switch>
  );
}

export default App;
