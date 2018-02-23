import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from '../components/App';
import Header from '../components/Header';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history} >
    <div>
      <Header />
      <main className='main-container ui container'>
        <Switch>
          <Route path="/" component={App} exact={true} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default AppRouter;
