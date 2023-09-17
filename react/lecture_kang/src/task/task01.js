import React, { useState } from 'react';

function Box({bgColor,fgColor}){
  return <div style={{
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    backgroundColor : bgColor ? bgColor : 'pink',
    color: fgColor ? fgColor : "red"
  }}>Styled Box</div>
}

export default function Task() {
  const [color, setColor] = useState('');

  return (
    <>
      <input type='text' placeholder='색상 정보를 입력하세요' onChange={e => setColor(e.target.value)}/>
      <Box bgColor={color}/>
      <Box fgColor={color}/>
    </>
  );
}