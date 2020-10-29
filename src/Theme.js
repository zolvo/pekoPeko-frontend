import { isMuiElement } from '@material-ui/core'
import React from 'react';
import { ThemeProvider, createNullTheme } from '@material-ui/core';

const theme = createNullTheme({
  fontFamily: 'Montserrat',
  palette: {
    primary: {
      main: '#292721'
    },
    secondary: {
      main: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: 'Montserrat'
  }
});

const Theme = props => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
};

export default Theme;
