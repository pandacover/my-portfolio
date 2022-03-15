import { StrictMode } from 'react';
import { render } from 'react-dom';
import './styles/globals.css';
import App from './App';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

