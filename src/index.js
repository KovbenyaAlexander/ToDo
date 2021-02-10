import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { Provider, connect } from 'react-redux';

const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDom.render(app, document.querySelector('#root'))
