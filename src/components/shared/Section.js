import React from 'react';
import * as styledComponents from 'styles/shared/Section';

const Section = (props) => {

  const {
    Container,
    TitleBar,
    TitleTab,
    Title,
    Content
  } = styledComponents;

  const { title, bgColor, children } = props;

  return (
    <Container>
      <TitleBar>
        <TitleTab fill={bgColor} preserveAspectRatio="none" />
        <Title>{title}</Title>
      </TitleBar>
      <Content bgColor={bgColor}>
        {children}
      </Content>
    </Container>
  );

};

export default Section;
