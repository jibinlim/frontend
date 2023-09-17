import React from 'react';

const Hello = (props) => {
    return ( <div style ={{color : props.color}}>안녕하세여 {props.name} </div> );
}
 
export default Hello;