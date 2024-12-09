import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import "./styles/index.css";
import MainPage from './components/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
  <MainPage/>
  </React.StrictMode>
);
