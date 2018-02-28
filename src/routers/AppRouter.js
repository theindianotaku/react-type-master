import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import LandingPage from '../components/LandingPage';
import ResultsPage from '../components/ResultsPage';
import App from '../components/App';

export const history = createHistory();

const RouteNotFound = () => <Redirect to="/" />;

const AppRouter = () => (
  <Router history={history} >
    <Switch>
      <Route path="/" component={LandingPage} exact={true} />
      <Route path="/test" component={App} />
      <Route path="/results" component={ResultsPage} />
      <RouteNotFound />
    </Switch>
  </Router>
);

export default AppRouter;
