import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { reducer } from './reducers/reducers'
import { createStore, applyMiddleware } from 'redux'
import { ComposeWithDevTools, composeWithDevTools } from 'redux-devtools-extension'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const middleWare = applyMiddleware(thunk, logger)
const DevTools = composeWithDevTools(middleWare)
const store = createStore(reducer, DevTools)

ReactDOM.render(
<Provider store={store}>
 <Router>
  <App />
 </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
