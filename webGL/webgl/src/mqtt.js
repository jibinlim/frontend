import React, { useEffect, useState } from 'react';
import * as mqtt from 'mqtt';

export default function Mqtt() {
  const [receivedMessage, setReceivedMessage] = useState('');
  const topic = 'edukit';

  useEffect(() => {
    const brokerUrl = 'mqtt://192.168.0.128:1883';
    const client = mqtt.connect(brokerUrl);

    const handleTopicMessage = (topic, message) => {
      // 메시지를 받았을 때 처리 로직
      setReceivedMessage(message.toString());
    };

    client.on('connect', () => {
      console.log('Connected to MQTT broker');
      client.subscribe(topic);
    });

    client.on('message', handleTopicMessage);

    return () => {
      client.end();
    };
  }, []);

  return (
    <div>
      <h2>{`Topic: ${topic}`}</h2>
      {receivedMessage && <p>{`Message: ${receivedMessage}`}</p>}
    </div>
  );
}
