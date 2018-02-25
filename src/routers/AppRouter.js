import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import LandingPage from '../components/LandingPage';
import ResultsPage from '../components/ResultsPage';
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
          <Route path="/" component={LandingPage} exact={true} />
          <Route path="/test" component={App} />
          <Route path="/results" component={ResultsPage} />
          <RouteNotFound />
        </Switch>
      </main>
    </div>
  </Router>
);

export default AppRouter;
