import React, { useEffect, useState } from 'react';
import { w3cwebsocket } from 'websocket';

const WebSocketComponent = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  useEffect(() => {
    const client = new w3cwebsocket('ws://192.168.0.35:1880/sensor');

    client.onopen = () => {
      console.log('WebSocket 연결 성공');
    };
    client.onmessage = (message) => {
      console.log(message.data);
      const receivedData = JSON.parse(message.data); // 이미 JSON 형식이므로 파싱할 필요 없음
      console.log(receivedData);
      const dateData = receivedData.date; // "temp" 값을 가진 데이터 찾기
      const timeData = receivedData.time;
      if (dateData && timeData) {
        setDate(dateData);
        setTime(timeData);
      }
    };

    client.onclose = () => {
      console.log('WebSocket 연결 종료');
    };

    return () => {
      client.close();
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h1>주차 시간</h1>
      <img src="http://192.168.0.35:5000/image" />
      <p>입차 날짜: {date}</p>
      <p>입차 시간: {time}</p>
      <a href="/chart">
        <button>차트</button>
      </a>
    </div>
  );
};

export default WebSocketComponent;
