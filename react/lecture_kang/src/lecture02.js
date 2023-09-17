import React,{useState} from 'react';
export default function App() {
    const [number, setNumber]= useState(0);

    function Up(){
        setNumber(number + 1);
    }
    function Down(){
        setNumber(number - 1);
    }
    return (<>
    <h1>{number}</h1>
    <button onClick = {Up}>+
    </button>
    <button onClick = {Down}>-
    </button>
    </>)
};