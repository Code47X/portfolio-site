import styled from 'styled-components';

export const Chart = styled.div`
`;

export const Title = styled.h4`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: normal;
  text-align: center;
  color: white;
  margin: 25px 0px;
`;

export const Bar = styled.div`
  display: flex;
  height: 25px;
  margin: 10px 0px;
`;

export const BarLabel = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.barChartColors.labelBg};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1rem;
  color: white;
`;

export const BarBackground = styled.div`
  flex: 1;
  height: 100%;
  background-color: ${props => props.theme.barChartColors.barBg};
`;

export const BarForeground = styled.div`
  height: 100%;
  width: ${props => props.amount};
  background-color: ${props => props.theme.barChartColors.barFg};
`;
