import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import App from './App';
import PracticeDefault from './PracticeDefault';
import bankReducer from './bankReducer';

const store = createStore(bankReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <App /> */}
    <PracticeDefault />
  </Provider>
);
