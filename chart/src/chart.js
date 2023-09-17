import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js/auto';
import { w3cwebsocket } from 'websocket';

const WebSocketComponent = () => {
  const [car, setCar] = useState(0);
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const client = new w3cwebsocket('ws://192.168.0.35:1880/chart');

    client.onopen = () => {
      console.log('WebSocket 연결 성공');
    };
    client.onmessage = (message) => {
      console.log(message.data);
      const receivedData = message.data; // 이미 JSON 형식이므로 파싱할 필요 없음
      setCar(receivedData);
    };

    client.onclose = () => {
      console.log('WebSocket 연결 종료');
    };

    return () => {
      client.close();
    };
  }, []);

  useEffect(() => {
    const full = 45 - car;
    const data = {
      labels: ['입차'],
      datasets: [
        {
          label: '주차장 자리 현황',
          data: [car, full],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
    };

    const config = {
      type: 'pie',
      data: data,
    };

    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      chartInstanceRef.current = new Chart(chartRef.current, config);
    }
  }, [car]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px',
      }}
    >
      <canvas ref={chartRef} id="myChart" />{' '}
      <a href="/">
        <button>입차</button>
      </a>
    </div>
  );
};

export default WebSocketComponent;
