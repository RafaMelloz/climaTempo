import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/home/home';

import "./global.css";
import { DadosComponent } from './context';
import { ErrorBoundary } from './components/catchError';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DadosComponent>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
      
    </DadosComponent>
  </React.StrictMode>
);

