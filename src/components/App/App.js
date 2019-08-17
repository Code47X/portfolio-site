import React, { Fragment } from 'react';
import Landing from '../Landing/Landing';
import About from '../About/About';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Landing />
        <About />
      </Fragment>
    </ThemeProvider>
  );
};

export default App;
