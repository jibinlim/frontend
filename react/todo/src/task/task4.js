import React, { useState } from 'react';
import axios from 'axios'

/*
  아래 주소에 get 요청을 보내면 강아지 이미지 소스의 배열을 얻을 수 있습니다.
  이때 정수 값만큼 배열 요소 수가 정해집니다.

  https://dog.ceo/api/breeds/image/random/정수
*/

export default function Task() {

  const [imageCnt, setImageCnt] =  useState(0)
  const [images, setImages] =  useState([])

  return (
    <>
      <input type="number" value={imageCnt} onChange={e => setImageCnt(e.target.value)}/>
      <input type="button" value="이미지 가져오기" onClick={async () => {
      const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${imageCnt}`)
      setImages(response.data.message);
    }}/>
      <br />
      {images.map((item, index) => <img src={item} width="360" height="360" />)}

    </>
  );
}