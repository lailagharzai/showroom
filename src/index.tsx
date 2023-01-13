import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CarsForSale from './components/pages/CarsForSale/CarsForSale';


const root = ReactDOM.createRoot(
  document.getElementById('entrypoint') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CarsForSale/>
  </React.StrictMode>
);
