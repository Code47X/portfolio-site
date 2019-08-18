import React, { useContext } from 'react';
import Section from '../shared/Section';
import { ThemeContext } from 'styled-components';

const Skills = () => {

  const theme = useContext(ThemeContext);

  return (
    <Section title="Skills" bgColor={theme.sectionColors.skills}>
      <div>Placeholder</div>
    </Section>
  );

};

export default Skills;
