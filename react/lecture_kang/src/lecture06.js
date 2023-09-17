import React from 'react';
import styled, { keyframes } from 'styled-components';

const boxFade = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
`

const AnimatedBox = styled.div`
  width: 300px;
  height: 300px;
  background: purple;
  animation: ${boxFade} 2s 500ms infinite linear alternate;
`;

export default function App() {
  return (
    <>
      <AnimatedBox />
    </>
  );
}