import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'styles/reset.scss';
import 'locales/i18n';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
