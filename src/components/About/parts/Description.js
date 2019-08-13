import React from 'react'
import * as useStyles from './DescriptionStyles';

const Description = () => {

  const {
    Container,
    TextHead,
    TextBody
  } = useStyles;

  return (
    <Container>
      <TextHead>
        My name is Tanner Hartwig.
      </TextHead>
      <TextBody>
        I'm a full-stack web developer and hobbyist VR developer from Austin, TX.
        I started out working primarly with Ruby on Rails, but over time have shifted
        more into the JavaScript ecosystem. I believe programming is as much an art as
        it is a science, and always strive to write the best code possible.
      </TextBody>
    </Container>
  );

}

export default Description;
