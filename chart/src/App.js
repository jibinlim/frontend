import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sensor from './sensor';
import Mychart from './chart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sensor />} />
        <Route path="/chart" element={<Mychart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
