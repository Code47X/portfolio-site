import React from 'react';
import styled from 'styled-components';

const CornerRibbon = () => {
  return <Ribbon>Work in Progress</Ribbon>
};

export default CornerRibbon;

const Ribbon = styled.div`
  width: 230px;
  background: ${props => props.theme.ribbonColors.ribbonBg};
  box-shadow: 0 0 3px rgba(0,0,0,.3);

  position: fixed;
  top: 40px;
  right: -50px;
  z-index: 5;

  text-align: center;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: bold;
  line-height: 50px;
  color: ${props => props.theme.ribbonColors.textColor};

  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`

