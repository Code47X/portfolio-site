import styled from 'styled-components';
import { device } from 'utility/breakpoints';

export const Chart = styled.div`
`;

export const Title = styled.h4`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: normal;
  text-align: center;
  color: white;
  margin: 15px 0px;

  @media ${device.laptop} {
    font-size: 1.5rem;
  };
`;

export const Bar = styled.div`
  display: flex;
  height: 18px;
  margin: 10px 0px;

  @media ${device.tablet} {
    height: 20px;
  };

  @media ${device.laptop} {
    height: 25px;
    margin: 15px 0px;
  }
`;

export const BarLabel = styled.div`
  width: 85px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.barChartColors.labelBg};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1rem;
  color: white;

  @media ${device.tablet} {
    width: 100px;
  };
`;

export const BarBackground = styled.div`
  flex: 1;
  height: 100%;
  background-color: ${props => props.theme.barChartColors.barBg};
  border-radius: 7px;
`;

export const BarForeground = styled.div`
  height: 100%;
  width: ${props => props.amount};
  background-color: ${props => props.theme.barChartColors.barFg};
  border-radius: 0px 7px 7px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.8rem;
  padding-right: 7px;

  @media ${device.laptop} {
    font-size: 1rem;
  }
`;
