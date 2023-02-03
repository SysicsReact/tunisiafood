import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import authSlice from './redux/slice/authSlice';


const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);


reportWebVitals();
