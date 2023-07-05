import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//import store from './redux/store';
//import { Provider } from 'react-redux'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <BrowserRouter>
        <App />
      </BrowserRouter>
   
  </React.StrictMode>,
)