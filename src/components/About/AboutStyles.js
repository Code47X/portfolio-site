import styled from 'styled-components';
import { ReactComponent as TabSvg } from '../../img/tab.svg';

export const Container = styled.div`
  width: 100%;
`;

export const TitleBar = styled.div`
  position: relative;
  bottom: -1px;
  display: flex;
  justify-content: center;
`
export const TabImg = styled(TabSvg)`
  height: 35px;
  width: 100%;
  max-width: 300px;
  fill: ${props => props.theme.colors.aboutBg};
  stroke-opacity: 0;
`

export const TitleText = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 2.5rem;
  color: white;
  position: absolute;
  top: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid white;
`;

export const Content = styled.div`
  background-color: ${props => props.theme.colors.aboutBg};

  /* TODO: Just for scroll testing */
  height: 10000px;
`
