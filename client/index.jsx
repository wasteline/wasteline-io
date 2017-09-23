import React, {Component} from 'react';
import {render} from 'react-dom';
import App from '../components/App.jsx';
import configureStore from '../redux/store.js';
import {Provider} from 'react-redux';

let initialState = {
  data: []
};

let store = configureStore(initialState);
render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('app'));
