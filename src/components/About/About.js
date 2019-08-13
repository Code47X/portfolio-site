import React from 'react';
import Badges from './parts/Badges';
import Description from './parts/Description';
import * as useStyles from './AboutStyles';

const About = () => {

  const {
    Container,
    TitleBar,
    TabImg,
    TitleText,
    Content
  } = useStyles;

  return (
    <Container>
      <TitleBar>
        <TabImg preserveAspectRatio="none" />
        <TitleText>About</TitleText>
      </TitleBar>
      <Content>
        <Description />
        <Badges />
      </Content>
    </Container>
  );

}

export default About;
