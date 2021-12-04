import styled, { keyframes } from 'styled-components';

import { Colors } from '../../styles/colors';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${Colors.BACKDROP};
`;

export const ComponentSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  margin: auto;
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${Colors.PRIMARY};
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;
