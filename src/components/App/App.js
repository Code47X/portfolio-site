import React, { Fragment } from 'react';
import Landing from '../Landing/Landing';
import About from '../About/About';
import Skills from '../Skills/Skills';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Landing />
        <About />
        <Skills />
      </Fragment>
    </ThemeProvider>
  );
};

export default App;
