import React,{useState,useEffect} from "react";
import axios from 'axios'

export default function Poket(){
    const [image, setImage] =  useState(undefined)
    const [count, setCount] = useState(1);
    const [name, setName] = useState(undefined);

    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${count}`).then(result => {setImage(result.data.sprites.front_default);
    setName(result.data.name)})
      .catch(error => console.log(error))
    }, [])
  
    return (
      <>
        <button onClick={() => {
            {setCount(count + 1)};
          axios.get(`https://pokeapi.co/api/v2/pokemon/${count}`).then(result => {setImage(result.data.sprites.front_default)
          setName(result.data.name);})
          .catch(error => console.log(error))
        }}>변경</button> <br />
  
        {/* <button onClick={async () => {
          try{
            const response = await axios.get("https://dog.ceo/api/breeds/image/random")
            setImage(response.data.message)
          }catch(error){
            console.log(error)
          }
        }}>강아지 사진 변경하기</button> <br /> */}
        
        <img src={image} alt="푸킷몬" width="640" />
        <h1>{name}</h1>
      </>
    );
  }