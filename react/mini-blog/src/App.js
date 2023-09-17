import './App.css';
import  Navbar from './NavBar'
import Home from './Home'
import Create from './Create';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar />
        </div>
        <div className="content">
        </div>
    </BrowserRouter>
  );
}
export default App;