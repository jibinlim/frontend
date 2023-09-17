import React from "react";

function Box({fgColor,bgColor}){
    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems : 'center',
        width: 200,
        height: 200,
        color: fgColor ? fgColor : 'white',
        backgroundColor: bgColor ? bgColor : 'red'
    }}>Styled Box</div>
}

export default function App() {
    return <>
    <Box/>
    <Box fgColor='blue' bgColor= 'yellow'/>
    </>
}