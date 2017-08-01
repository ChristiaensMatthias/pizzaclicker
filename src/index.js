import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import App from './App';
import reducers from './redux/reducers';

const composeStoreWithMiddleware = applyMiddleware(
    promiseMiddleware(),
    thunk,
)(createStore);

ReactDOM.render(
  <Provider store={composeStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <App />
  </Provider>,
    document.getElementById('root'),
);
