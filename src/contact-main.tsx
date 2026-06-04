import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContactApp } from './ContactApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContactApp />
  </React.StrictMode>
);
