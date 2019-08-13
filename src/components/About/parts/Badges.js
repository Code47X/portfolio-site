import React from 'react';
import * as useStyles from './BadgesStyles';

const Badges = () => {

  const {
    BadgesContainer,
    FlexRow,
    Badge,
    Icon,
    Background,
    FastIcon,
    MinimalIcon,
    ResponsiveIcon,
    CodeIcon,
    Title,
    Text
  } = useStyles;

  return (
    <BadgesContainer>
      <FlexRow>
        <Badge>
          <Title>Blazing Fast</Title>
          <Icon>
            <Background />
            <FastIcon />
          </Icon>
          <Text>
            Loading times? No thanks.
          </Text>
        </Badge>
        <Badge>
          <Title>Responsive</Title>
          <Icon>
            <Background />
            <ResponsiveIcon />
          </Icon>
          <Text>
            Any device. Any time.
          </Text>
        </Badge>
      </FlexRow>
      <FlexRow>
        <Badge>
          <Title>Minimalist</Title>
          <Icon>
            <Background />
            <MinimalIcon />
          </Icon>
          <Text>
            Sometimes less is more.
          </Text>
        </Badge>
        <Badge>
          <Title>Clean Code</Title>
          <Icon>
            <Background />
            <CodeIcon />
          </Icon>
          <Text>
            Practice makes perfect.
          </Text>
        </Badge>
      </FlexRow>
    </BadgesContainer>
  );

};

export default Badges;
