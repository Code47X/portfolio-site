import styled from 'styled-components';
import { ReactComponent as BackgroundSvg } from '../../../img/swirl.svg';
import { ReactComponent as FastSvg } from '../../../img/fast.svg';
import { ReactComponent as MinimalSvg } from '../../../img/minimal.svg';
import { ReactComponent as ResponsiveSvg } from '../../../img/responsive.svg';
import { ReactComponent as CodeSvg } from '../../../img/code.svg';
import { device } from '../../../utility/breakpoints';

export const BadgesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 390px;

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
`;

const IconCenter = styled.div`
  fill: white;
  position: absolute;
  width: 45px;
  height: 45px;
`;

export const FastIcon = IconCenter.withComponent(FastSvg);
export const MinimalIcon = IconCenter.withComponent(MinimalSvg);
export const ResponsiveIcon = IconCenter.withComponent(ResponsiveSvg);
export const CodeIcon = IconCenter.withComponent(CodeSvg);

export const Title = styled.h4`
  font-family: 'Electrolize', sans-serif;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 7px;
`;

export const Text = styled.p`
  font-family: 'Electrolize', sans-serif;
  font-weight: normal;
  font-size: 0.8rem;
  text-align: center;
  margin: 0px;
  margin-top: 15px;
  width: 100px;

  @media ${device.tablet} {
    width: auto;
  };
`;
