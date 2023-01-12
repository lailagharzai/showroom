import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Showroom from './components/organism/showroom/Showroom';


const root = ReactDOM.createRoot(
  document.getElementById('entrypoint') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Showroom />
  </React.StrictMode>
);
