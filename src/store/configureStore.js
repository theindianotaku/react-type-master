import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { targetReducer } from '../reducers/targetReducer';
import { progressReducer } from '../reducers/progressReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      target: targetReducer,
      progress: progressReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
