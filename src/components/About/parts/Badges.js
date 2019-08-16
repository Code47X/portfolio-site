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
          <Icon>
            <Background />
            <FastIcon />
          </Icon>
          <Title>Blazing Fast</Title>
          <Text>
            Loading times? No thanks.
          </Text>
        </Badge>
        <Badge>
          <Icon>
            <Background />
            <ResponsiveIcon />
          </Icon>
          <Title>Responsive</Title>
          <Text>
            Any device. Any time.
          </Text>
        </Badge>
      </FlexRow>
      <FlexRow>
        <Badge>
          <Icon>
            <Background />
            <MinimalIcon />
          </Icon>
          <Title>Minimalist</Title>
          <Text>
            Sometimes less is more.
          </Text>
        </Badge>
        <Badge>
          <Icon>
            <Background />
            <CodeIcon />
          </Icon>
          <Title>Clean Code</Title>
          <Text>
            Practice makes perfect.
          </Text>
        </Badge>
      </FlexRow>
    </BadgesContainer>
  );

};

export default Badges;
