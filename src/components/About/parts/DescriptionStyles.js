import styled from 'styled-components';
import { device } from '../../../utility/breakpoints';

export const Container = styled.div`
  padding: 130px 0px 115px;
  color: black;
`;

export const TextHead = styled.h3`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 1.3rem;
  text-align: center;
  margin: 0px 0px 15px;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const TextBody = styled.p`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  width: 90%;
  max-width: 430px;
  margin: 0px auto;

  @media ${device.tablet} {
    max-width: 550px;
    font-size: 1.3rem;
    font-weight: lighter;
  };
`;
