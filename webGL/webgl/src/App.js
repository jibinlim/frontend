import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import WebGL from './Webgl';
import MQTTComponent from './mqtt';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to={'/'}>Home</Link>
          <Link to={'/webgl'}>WebGL</Link>
        </header>
        <div className="content">
          <MQTTComponent />
          <Routes>
            <Route path="/webgl" element={<WebGL />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
