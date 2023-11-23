import React from 'react';
import ReactDOM from 'react-dom';
import Options from './components/Options'; // Importing the existing Options component

ReactDOM.render(
  <React.StrictMode>
    <Options /> // Render the Options component directly
  </React.StrictMode>,
  document.getElementById('options-root') // Ensure this matches the id in your options.html
);
