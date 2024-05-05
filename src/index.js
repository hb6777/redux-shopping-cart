import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';  
import { Provider } from 'react-redux';
import Store from './store'


const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(   
    <Provider store={Store}>
      <HashRouter>
        <React.StrictMode>  
          <App /> 
        </React.StrictMode> 
      </HashRouter> 
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
