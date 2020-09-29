import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  Typography: {
    fontFamily: [
      '"Helvetica Neue"',
      'sans-serif',
      '-apple-system',
      'Arial',
      
    ],
    fontWeightLight: "100"
  },
});

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
    
   
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
