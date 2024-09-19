import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import ErrorBoundary from './Util/ErrorBoundary';
import store from './Store';
import { Provider } from 'react-redux';

store.subscribe(()=>console.log(store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ErrorBoundary error="There is error">
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
  //</ErrorBoundary> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
