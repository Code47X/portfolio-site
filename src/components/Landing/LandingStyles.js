import styled from 'styled-components';
import { animated } from 'react-spring';
import { device } from '../../utility/breakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: -1;

  > video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  };
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: ${props => {
    if (props.type === 'color')
      return '#333333db';
    if (props.type === 'pattern')
      return 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQYV2NkYGD4z8DAwMgABXAGNgGwSgwVAFbmAgXQdISfAAAAAElFTkSuQmCC)';
  }};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 15vh;
`;

export const Intro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IntroWord = styled(animated.div)`
  font-family: 'Electrolize', sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  padding: 0px 6px;
  color: ${props => props.highlight ? '#00ffff' : 'white'};

  @media ${device.tablet} {
    font-size: 3rem;
  };

  @media ${device.laptop} {
    font-size: 3.5rem;
  };

  @media ${device.desktop} {
    font-size: 3.7rem;
  };
`;

export const Subtitle = styled(animated.div)`
  font-family: 'Electrolize', sans-serif;
  color: white;
  font-size: 1rem;
  margin-top: 15px;

  @media ${device.tablet} {
    font-size: 1.2rem;
  };

  @media ${device.laptop} {
    font-size: 1.3rem;
  };

  @media ${device.desktop} {
    font-size: 1.4rem;
  };
`;
