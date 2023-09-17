import React,{useState,useEffect} from "react";

export default function App() {
    const [text,setText] = useState('');
    const [number,setNumber] = useState(0);

    const onIncrease = () =>{
        setNumber(number + 1);
    }
    const onDecrease = () => {
        setNumber(number - 1);
    }
    const handleChange = (param) =>{
        setText(param);
    }

    //[] 비어있으면 최초 1회 랜더링 시 호출!
    useEffect(() => {console.log('useEffect 사용했다')},[]);

    //text,number 바뀔 때마다 호출
    useEffect(() => {console.log('text나 number 바뀜')},[text,number]);

    //의존성이 배열 없으면 리렌더링 될때마다 무조건 호출
    useEffect(()=> {console.log('그냥')});
    return (
        <>
          <input type='text' placeholder='아무 내용이나 써보기' onChange={e => handleChange(e.target.value)}/>
          <p>{text}</p>
          <h1>{number}</h1>
          <button onClick={onIncrease}>+</button>
          <button onClick={onDecrease}>-</button>
        </>
      );
}