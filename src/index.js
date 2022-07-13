import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createStore, applyMiddleware} from 'redux'

import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import { rootReducer } from './store';
import App from './App';


const store = createStore(rootReducer,applyMiddleware(thunk));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store  = {store}>
    <App />
  </Provider>
    
 
);


