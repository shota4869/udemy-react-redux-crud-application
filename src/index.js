import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux' //storeの内容をアプリケーションの全コンポーネントに渡す機能
import thunk from 'redux-thunk'
import { BrowserRouter , Route , Routes } from 'react-router-dom'

import './index.css';
import reducer from './reducers'

import EventsIndex from './components/events_index';
import EventsNew from './components/events_new'
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/events/new" element={<EventsNew/>}/>
        {/* react-router-domV6ではコンポーネント属性がelement属性になっている */}
        <Route exact path="" element={<EventsIndex/>} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
