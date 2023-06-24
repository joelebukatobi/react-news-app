import React from 'react';
import ReactDOM from 'react-dom/client';
// App
import App from '@/App.jsx';
// Alpine
import '@/assets/javascript/alpine.js';
// Styling
import '@/assets/styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
