import React, { useContext } from 'react';
import Section from '../shared/Section';
import Badges from './parts/Badges';
import Description from './parts/Description';
import { ThemeContext } from 'styled-components';

const About = (props) => {

  const theme = useContext(ThemeContext);

  return (
    <Section title="About" bgColor={theme.sectionColors.about}>
      <Description />
      <Badges />
    </Section>
  );

}

export default About;
