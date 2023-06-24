import React from 'react';
import ReactDOM from 'react-dom/client';
// App
import Index from '@/components/pages/Index.jsx';
// Alpine
import '@/assets/javascript/alpine.js';
// Styling
import '@/assets/styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
