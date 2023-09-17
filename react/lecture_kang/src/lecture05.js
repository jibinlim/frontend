import React from "react";
import styled from "styled-components";

//템플릿 리터럴 함수에 붙여서 인수 전달에 쓴다? tagged tamplate literal
const Box = styled.div`
width : 250px;
height : 250px;
background-color : ${props => props.bgColor};
`
const Circle = styled.div`
    width: 250px;
  height: 250px;
  background-image: url(./choco.jpeg);
  background-size: contain;
  border-radius: 50%;
`;

export default function App() {
    return <>
    <Circle/>
    <Box bgColor= "teal"/>
    <Box bgColor= "chocolate"/>
    <Box bgColor="blue"/>
    <Box bgColor="red"/>
    <Box bgColor="green"/>
    <Box bgColor="yellow"/>
    </>
}