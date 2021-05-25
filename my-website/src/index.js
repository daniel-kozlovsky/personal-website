import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'react-jss';

import App from './components/App';
import './index.css';
//#bfcbd1 <- my fav 
const theme = {
  page: {
    backgroundColor: '#bfcbd1',
  },
  palette: {
    primary: '#586F7C',
    secondary: '#506C64',
    accent: '#735D78',
    highlight: '#735D78',
    select: '#c3bdc2'//'#7F534B',
  },
  navBarText: {
    color: '#000',
    font: '2.3em quicksand',
  },
  mainText: {
    color: '#000',
    font: '1em openSans',
  },
  heading: {
    color: '#000',
    font: '1.9em montserrat',
  },
  name: {
    color: '#000',
    font: '4em quicksand',
  },
  get sectionBox() {
    return ({
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: this.palette.accent,
    borderRadius: '10px',
    boxShadow: '3px 3px 11px #888',
    });
  },
  get buttonStyle() {
    return ({
    borderStyle: 'none',
    textAlign: 'center',
    backgroundColor: 'initial',
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
    boxSizing: 'border-box',
    font: this.mainText.font,
    color: this.mainText.color,
    padding: '0.3em 0.6em',
    borderRadius: '20px',
    cursor: 'pointer',
      '&:hover': {
          backgroundColor: this.palette.select,
      },
    });
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

