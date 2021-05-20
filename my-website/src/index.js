import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'react-jss';

import App from './components/App';
import './index.css';

const theme = {
  page: {
    backgroundColor: '#bfcbd1',
  },
  palette: {
    primary: '#456234',
    secondary: '#A58B54',
    accent: '',
    highlight: '',
  },
  navBarText: {
    color: '#000',
    font: '1.4em montserrat',
  },
  mainText: {
    color: '#000',
    font: '1em openSans',
  },
  heading: {
    color: '',
    font: '2em montserrat',
  },
  name: {
    color: '',
    font: '',
  },
  sectionBox: {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#888',
    borderRadius: '10px',
    boxShadow: '3px 3px 11px #888',
  },
};

render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

