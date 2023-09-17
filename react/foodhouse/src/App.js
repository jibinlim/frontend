import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
import Direction from './pages/Direction';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route  path="/" element={ <Home />} />
        <Route  path="/menu" element={ <Menu />} />
        <Route  path="/contact" element={ <Contact />} />
        <Route  path="/about" element={ <About />} />
        <Route  path="/direction" element={ <Direction />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
