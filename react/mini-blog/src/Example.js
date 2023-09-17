import { useState } from "react";

const Example = () => {
    const [count, setCount] = useState(0);
    const IncrementNumber = () =>{
        setCount(count + 1);
    }
    const [inputValue , setInputValue] = useState('Enter anything');
    let changeContent = (event)=>{
       let newValue =event.target.value ;
       setInputValue(newValue)
    }
    return (
        <div>
            <input onChange={changeContent} />{ inputValue}
        {/* <div>{count}</div> 
        <button onClick ={IncrementNumber}> 증가하기 </button> */}
        </div>
     );
}
 
export default Example;