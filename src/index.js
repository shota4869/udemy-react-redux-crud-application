import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux' //storeの内容をアプリケーションの全コンポーネントに渡す機能
import thunk from 'redux-thunk'

import './index.css';
import reducer from './reducers'

import EventsIndex from './components/events_index';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
