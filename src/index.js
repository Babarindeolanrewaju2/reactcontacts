import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import contactReducer from "./redux/contactReducer";
import contactActions from "./redux/actions";
import thunk from "redux-thunk"
import {createStore, compose, applyMiddleware} from 'redux';
import 'antd/dist/antd.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  contactReducer,
  composeEnhancer(applyMiddleware(thunk))
)

// store.dispatch(contactActions.deleteContact(17385));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
