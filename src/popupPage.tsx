import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './components/Popup';

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById('popup-root') // Updated to match the div id in popup.html
);
