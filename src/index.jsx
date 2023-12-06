import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/home/home';

import "./global.css";
import { DadosComponent } from './context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DadosComponent>  
        <Home />   
    </DadosComponent>
  </React.StrictMode>
);

