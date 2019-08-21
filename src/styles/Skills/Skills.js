import styled from 'styled-components';
import { device } from 'utility/breakpoints';

export const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1500px;
`;

export const FlexItem = styled.div`
  flex-basis: 85%;
  margin-bottom: 20px;

  @media ${device.tablet} {
    flex-basis: 45%;
  };
`;
