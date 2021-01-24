import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App.jsx'
import { createMuiTheme,  ThemeProvider as MuiThemeProvider} from '@material-ui/core';
import { ThemeProvider} from 'styled-components'
import { StylesProvider } from '@material-ui/core/styles';
import FilesContext from './Context/FilesContext.jsx'
import {GlobalStyles} from './styles/GlobalStyles.jsx'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    darker: '#212936',
    darkText: '#56657F'
  },
});
darkTheme.palette.background.paper = '#2B3648'
darkTheme.palette.divider = '#29303b'

function render() {
  ReactDOM.render(
      <>
      <FilesContext.Provider>
      <MuiThemeProvider theme={darkTheme}>
        <ThemeProvider theme={darkTheme}>
          <StylesProvider injectFirst>
            <GlobalStyles/>
            <App/>
          </StylesProvider>
        </ThemeProvider>
        </MuiThemeProvider>
        </FilesContext.Provider>
      </>
    , document.querySelector('#root'));
}

render();