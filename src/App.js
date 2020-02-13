import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import storeCreator from './store';
import './i18n';
import {
  /* PAGES */
	Contact,
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
				<Route exact path="/contact">
					<Contact />
				</Route>
      </Router>
    </Provider>
  );
}

export default App;
