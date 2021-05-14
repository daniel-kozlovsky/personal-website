import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'react-jss';

import App from './components/App';

const theme = {
  page: {
    backgroundColor: '#f0f0f0',
  },
  palette: {
    primary: '',
    secondary: '',
    accent: '',
    highlight: '',
  },
  mainText: {
    color: '',
    fontStyle: '',
    fontWeight: '',
    fontSize: '',
    fontVariant: '',
    fontFamily: '',
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

