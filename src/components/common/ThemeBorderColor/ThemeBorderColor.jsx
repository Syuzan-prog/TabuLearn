import React from 'react';
import {
    ThemeProvider,
    createMuiTheme,
  } from '@material-ui/core/styles';
  
  import lightBlue from '@material-ui/core/colors/lightBlue';

const theme = createMuiTheme(
    {
      palette: {
        primary: lightBlue,
        secondary: {
          main: '#2196F3',
        },
      },
    }
  );

const ThemeBorderColor =({children})=>{
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default  ThemeBorderColor;