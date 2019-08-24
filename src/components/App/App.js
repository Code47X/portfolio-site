import React, { Fragment } from 'react';
import CornerRibbon from '../shared/CornerRibbon';
import Landing from '../Landing/Landing';
import About from '../About/About';
import Skills from '../Skills/Skills';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <CornerRibbon />
        <Landing />
        <About />
        <Skills />
      </Fragment>
    </ThemeProvider>
  );
};

export default App;
