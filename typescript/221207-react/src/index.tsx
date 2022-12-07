import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import App from './App';
import Practice from './Practice';

type Action = {
  type : string,
  balance : string
}

function bankReducer(state:number=0, action:Action) {
  if (action.type === 'DEPOSIT'){
    // return {balance : state.balance + Number(action.balance)};
    return state + Number(action.balance);
  } else if (action.type === 'WITHDRAW'){
    // return {balance : state.balance - Number(action.balance)};
    return state - Number(action.balance);
  }
  return state;
}

const store = createStore(bankReducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Practice/>
    </Provider>
    {/* <App name="이름"/> */}
  </React.StrictMode>
);

