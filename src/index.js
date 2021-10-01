import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { CssBaseline } from '@material-ui/core';
import { history } from './utils'
import { ConnectedRouter } from 'connected-react-router'
import './i18n/i18n'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <CssBaseline />
          <App />
        </ConnectedRouter>
      </Provider>
    </Suspense>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
