import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import storeCreator from './store';
import './i18n';
import {
  /* PAGES */
  HomePage,
} from './pages';

function App() {
  const { store } = storeCreator();

  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* ROUTES */}
      </Router>
    </Provider>
  );
}

export default App;
