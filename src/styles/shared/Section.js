import styled from 'styled-components';
import { ReactComponent as TabSvg } from 'svg/tab.svg';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const TitleBar = styled.div`
  width: 100%;
  position: absolute;
  top: -35px;
  display: flex;
  justify-content: center;
`;

export const TitleTab = styled(TabSvg)`
  position: relative;
  bottom: -1px;
  height: 35px;
  width: 100%;
  max-width: 300px;
  stroke-opacity: 0;
`;

export const Title = styled.h3`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 2.5rem;
  font-weight: normal;
  color: black;
  margin: 0;
  position: absolute;
  top: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
`;

export const Content = styled.div`
  width: 100%;
  padding: 100px 0px 160px;
  background-color: ${props => props.bgColor};
`;
