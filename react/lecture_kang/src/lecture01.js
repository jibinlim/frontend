import React from "react";

function Box({fgColor,bgColor}){
    return <div style={{
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        width : 200,
        height: 200,
        color: fgColor ? fgColor : "#FFFFFF",
        backgroundColor : bgColor ? bgColor : '#FF0000'
    }}>상자</div>
}

 
export default function App(){
    return (<>
    <Box />
    <Box fgColor = 'blue' bgColor='tomato' />
    <Box fgColor='orange' bgColor='purple'/>
    <Box fgColor= 'red' bgColor = 'violet' />
    </>)
};