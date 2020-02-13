import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  /* IMPORT_REDUCERS */
} from '../redux/reducers';

const combined = combineReducers({
  /* COMBINE_REDUCERS */
});
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(combined, composeEnhancers(applyMiddleware(thunk)));

export default () => {
  return {
    store,
  };
};
