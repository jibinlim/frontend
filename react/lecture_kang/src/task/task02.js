import React from 'react';
import styled from 'styled-components';

const BorderedBox = styled.div`
background-image : url(${props => props.image});
background-size : ${props => props.size};
width: ${props => props.width};
height: ${props => props.height};
border-radius: ${props => props.circle};
color: ${props => props.color};
border-width : ${props => props.border};
border-style : ${props =>
props.styles}
`;

export default function Task() {

  return (
    <>
      <BorderedBox image = './choco2.jpeg' size='cover' width = '250px' height = '250px'
      circle = '50%' color = 'black' border ='5px ' styles = 'solid'/>
    </>
  );
}