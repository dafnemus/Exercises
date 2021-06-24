import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { APPLICATION_NAME } from './constants';
import reducer from './models';
import reduxDevTools from './lib/reduxDevTools';

const middlewares = [thunkMiddleware];

const store = createStore(
  reducer,
  reduxDevTools({ name: APPLICATION_NAME, serialize: true })(applyMiddleware(...middlewares)),
);

export default store;
