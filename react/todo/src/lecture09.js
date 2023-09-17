import React,{useState} from "react";
import axios from "axios";

//요청 주소: https://dog.ceo/api/breeds/image/random

//요청 주소: https://dog.ceo/api/breed/Dachshund/images/random
export default function App(){
    const [dogImg,setDogImg] = useState(undefined);

    return <>
    <button onClick={async() => {
        const response = await axios.get("https://dog.ceo/api/breeds/image/random/3");
        setDogImg(response.data.message);
    }}>강아지 사진</button>
    <img src={dogImg[0]} alt = "랜덤 강아지 이미지" width="640"/>
    <img src={dogImg[1]} alt = "랜덤 강아지 이미지1" width="640"/>
    </>    
}
