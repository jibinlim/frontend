import React, { useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Task() {
  const [images, setImages] =  useState([])

  return (
    <>
      <input type="button" value="이미지 가져오기" onClick={async() => {
        const response = await axios.get(`https://dog.ceo/api/breeds/image/random/10`)
        setImages(response.data.message);
        }}/>
        <br/>
        {images && <Carousel className="w-100">
            {images.map((item,index) => {return  <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[index]}
          alt="강아지"
        />
        <Carousel.Caption>
          <h3>강아지 {`${index + 1}`}</h3>
        </Carousel.Caption>
      </Carousel.Item>})}
    </Carousel>
}
    </>
  );
}