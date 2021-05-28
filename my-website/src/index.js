import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'react-jss';

import App from './components/App';
import './index.css';
//blue/yellow
//DFE7F6
//FFFD98
//blue/tumbleweed
//DFE7F6
//E9A782
//earthy
  // palette: {
  //   primary: '#557a95',
  //   secondary: '#b1a296',
  //   accent: '#5d5c61',
  //   highlight: '#938e93',
  //   select: '#7395ae',
  // },
const theme = {
  page: {
    backgroundColor: '#DFE7F6',
  },
  //Convert all to RGB for ie11?
  palette: {
    primary: '#91ACE0',
    secondary: '#ABC0E7',
    accent: '#BB3D41',
    highlight: '#C95A5E',
    select: 'rgb(228, 172, 174)',
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
    backgroundColor: 'transparent',
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

