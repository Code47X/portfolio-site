import React, { useContext } from 'react';
import Section from '../shared/Section';
import BarChart from './parts/BarChart';
import { ThemeContext } from 'styled-components';
import * as styledComponents from 'styles/Skills/Skills';

const Skills = () => {

  const theme = useContext(ThemeContext);

  const skillSets = {
    backend: [
      { label: 'Rails', amount: '90%' },
      { label: 'SQL', amount: '80%' },
      { label: 'REST', amount: '75%' },
      { label: 'Node.js', amount: '60%' },
      { label: 'MongoDB', amount: '50%' },
      { label: 'GraphQL', amount: '45%' },
    ],
    frontend: [
      { label: 'React', amount: '90%' },
      { label: 'JavaScript', amount: '80%' },
      { label: 'CSS', amount: '75%' },
      { label: 'Angular', amount: '70%' },
      { label: 'Webpack', amount: '65%' },
      { label: 'D3.js', amount: '60%' }
    ],
    vr: [
      { label: 'Unity', amount: '80%' },
      { label: 'C#', amount: '75%' },
      { label: 'VRTK', amount: '70%' },
      { label: 'A-Frame', amount: '50%' },
      { label: 'three.js', amount: '40%' },
      { label: 'Unreal', amount: '20%' },
    ]
  };

  const {
    ChartsContainer,
    FlexItem,
  } = styledComponents;

  return (
    <Section title="Skills" bgColor={theme.sectionColors.skills}>
      <ChartsContainer>
        <FlexItem>
          <BarChart title="Backend" data={skillSets.backend} />
        </FlexItem>
        <FlexItem>
          <BarChart title="Frontend" data={skillSets.frontend} />
        </FlexItem>
        <FlexItem>
          <BarChart title="Virtual Reality" data={skillSets.vr} />
        </FlexItem>
      </ChartsContainer>
    </Section>
  );

};

export default Skills;
