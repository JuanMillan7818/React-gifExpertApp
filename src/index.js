import React from 'react';
import ReactDOM from 'react-dom';
import GifApp from './components/gifApp';
import './styles/style.css';
import './styles/responsive.css';

ReactDOM.render(
  <React.StrictMode>    
    <GifApp />
  </React.StrictMode>,
  document.getElementById('root')
);
