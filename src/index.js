import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaltState = {
  cash: 0,
}
const reducer =  (state = defaltState, action) => {
  switch (action.type) {
    case "ADD_COUNT":
      return {...state, cash: state.cash + action.payload}
    
    case "DEC_COUNT":
      return {...state, cash: state.cash - action.payload}

    case "RESET":
      return {...state, cash: 0}
  
    default:
      return state;
  }
}
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
