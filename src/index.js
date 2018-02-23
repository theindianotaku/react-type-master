import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import './styles/styles.css';

import configureStore from './store/configureStore';

import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const App = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
