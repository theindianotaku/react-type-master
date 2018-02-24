import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from '../components/App';
import Header from '../components/Common/Header';

export const history = createHistory();

const RouteNotFound = () => <Redirect to="/" />;

const AppRouter = () => (
  <Router history={history} >
    <div>
      <Header />
      <main className='main-container ui container'>
        <Switch>
          <Route path="/" component={App} exact={true} />
          <RouteNotFound />
        </Switch>
      </main>
    </div>
  </Router>
);

export default AppRouter;
