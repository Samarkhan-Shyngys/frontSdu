import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

export const Context = createContext(null)

ReactDOM.render(

  <BrowserRouter>
  
      <App />,
    
    </BrowserRouter>,
  document.getElementById('root')
);
