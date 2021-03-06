import styled from 'styled-components';
import { ReactComponent as BackgroundSvg } from 'svg/swirl.svg';
import { ReactComponent as FastSvg } from 'svg/fast.svg';
import { ReactComponent as MinimalSvg } from 'svg/minimal.svg';
import { ReactComponent as ResponsiveSvg } from 'svg/responsive.svg';
import { ReactComponent as CodeSvg } from 'svg/code.svg';
import { device } from 'utility/breakpoints';

export const BadgesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 1600px;
  margin: auto;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 385px;

  @media ${device.mobile} {
    flex-direction: row;
    justify-content: space-around;
    height: auto;
    width: 50%;
  };
`;

export const Badge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled(BackgroundSvg)`
  width: 100px;

  @media ${device.laptop} {
    width: 130px;
  };
`;

const IconCenter = styled.div`
  fill: white;
  position: absolute;
  width: 45px;
  height: 45px;

  @media ${device.laptop} {
    width: 55px;
    height: 55px;
  };
`;

export const FastIcon = IconCenter.withComponent(FastSvg);
export const MinimalIcon = IconCenter.withComponent(MinimalSvg);
export const ResponsiveIcon = IconCenter.withComponent(ResponsiveSvg);
export const CodeIcon = IconCenter.withComponent(CodeSvg);

export const Title = styled.h4`
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: bold;
  color: white;
  margin: 10px 0px;

  @media ${device.laptop} {
    font-size: 1.3rem;
  };
`;

export const Text = styled.p`
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: normal;
  font-size: 0.8rem;
  color: white;
  text-align: center;
  margin: 0px;
  width: 150px;

  @media ${device.mobile} {
    width: auto;
  };

  @media ${device.laptop} {
    font-size: 1.1rem;
  }
`;
