import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'react-jss';

import App from './components/App';
import './index.css';

const theme = {
  page: {
    backgroundColor: 'rgb(96,125,139,0.4)',
  },
  palette: {
    primary: '',
    secondary: '',
    accent: '',
    highlight: '',
  },
  navBarText: {
    color: '',
    font: '1.4em montserrat',
  },
  mainText: {
    color: '',
    font: '1em openSans',
  },
  heading: {
    color: '',
    font: '',
  },
  name: {
    color: '',
    font: '',
  }
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

