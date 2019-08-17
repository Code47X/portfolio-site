import React from 'react';
import { useSpring, useSprings, config } from 'react-spring';
import * as styledComponents from 'styles/Landing/Landing';

const Landing = () => {

  const [introSprings, setIntroSprings] = useSprings(3, index => ({
    from: { opacity: 0, transform: 'translateY(50%)' },
    config: config.wobbly
  }));

  const [subtitleSpring, setSubtitleSpring] = useSpring(() => ({
    from: { opacity: 0 },
    config: { duration: 1200 }
  }));

  const startSprings = () => {
    setIntroSprings(index => ({
      opacity: 1,
      transform: 'translateY(0%)',
      delay: index * 500
    }));
    setSubtitleSpring({
      opacity: 1,
      delay: 2000
    });
  };

  const {
    Container,
    VideoBackground,
    Overlay,
    Content,
    Intro,
    IntroWord,
    Subtitle
  } = styledComponents;

  return (
    <Container>
      <VideoBackground>
        <video src="/video/grid.mp4" type="video/mp4" autoPlay loop muted
          onCanPlayThrough={startSprings}
        />
        <Overlay type="color" />
        <Overlay type="pattern" />
      </VideoBackground>
      <Content>
        <Intro>
          <IntroWord style={introSprings[0]}>
            Hey,
          </IntroWord>
          <IntroWord style={introSprings[1]}>
            I&apos;m
          </IntroWord>
          <IntroWord style={introSprings[2]} highlight="true">
            Tanner
          </IntroWord>
        </Intro>
        <Subtitle style={subtitleSpring}>
          Web Developer &#183; VR Developer
        </Subtitle>

        {/* TODO: Down Arrow SVG + Animation */}
      </Content>
    </Container>
  );

};

export default Landing;
